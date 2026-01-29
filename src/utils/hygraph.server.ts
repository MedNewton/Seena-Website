// src/utils/hygraph.server.ts
import "server-only";

type Env = {
  NEXT_PUBLIC_HYGRAPH_ENDPOINT?: string;
  HYGRAPH_CONTENT_API_TOKEN?: string;
};

const { NEXT_PUBLIC_HYGRAPH_ENDPOINT, HYGRAPH_CONTENT_API_TOKEN } =
  process.env as Env;

if (!NEXT_PUBLIC_HYGRAPH_ENDPOINT) {
  throw new Error("Missing env: NEXT_PUBLIC_HYGRAPH_ENDPOINT");
}

const endpoint = NEXT_PUBLIC_HYGRAPH_ENDPOINT;
const token = HYGRAPH_CONTENT_API_TOKEN;

// In-memory cache for build-time deduplication
const requestCache = new Map<string, Promise<unknown>>();
// In-memory response cache to avoid repeated reads during build
const responseCache = new Map<string, { value: unknown; expiresAt: number }>();

// Helper to create cache key
function getCacheKey(query: string, variables?: Record<string, unknown>): string {
  return `${query}:${JSON.stringify(variables ?? {})}`;
}

// Sleep helper for retry logic
function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function hygraphFetchWithRetry<T>(
  query: string,
  variables?: Record<string, unknown>,
  options?: { revalidateSeconds?: number },
  retries = 3,
  delay = 1000
): Promise<T> {
  const cacheKey = getCacheKey(query, variables);
  const ttlMs = (options?.revalidateSeconds ?? 3600) * 1000;
  const shouldCacheResponse = ttlMs > 0;

  if (shouldCacheResponse) {
    const cachedResponse = responseCache.get(cacheKey);
    if (cachedResponse) {
      if (cachedResponse.expiresAt > Date.now()) {
        return cachedResponse.value as T;
      }
      responseCache.delete(cacheKey);
    }
  }

  // Check if we already have a pending request for this query
  const cachedPromise = requestCache.get(cacheKey);
  if (cachedPromise) {
    return cachedPromise as Promise<T>;
  }

  // Create the fetch promise with retry logic
  const fetchPromise = (async (): Promise<T> => {
    let lastError: Error | null = null;

    for (let attempt = 0; attempt < retries; attempt++) {
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
          body: JSON.stringify({ query, variables }),
          next: { revalidate: options?.revalidateSeconds ?? 3600 },
        });

        const json = (await res.json()) as { data?: T; errors?: unknown[] };

        // Check for rate limiting
        if (res.status === 429) {
          const retryAfter = attempt + 1;
          console.warn(`Hygraph rate limited, retrying in ${retryAfter * delay}ms...`);
          await sleep(retryAfter * delay);
          continue;
        }

        // Log GraphQL errors
        if (json.errors) {
          const isRateLimited = json.errors.some(
            (e: unknown) =>
              typeof e === "object" &&
              e !== null &&
              "message" in e &&
              String((e as { message: string }).message).includes("Too Many Requests")
          );

          if (isRateLimited && attempt < retries - 1) {
            const retryAfter = attempt + 1;
            console.warn(`Hygraph rate limited, retrying in ${retryAfter * delay}ms...`);
            await sleep(retryAfter * delay);
            continue;
          }

          console.error("Hygraph GraphQL errors:", JSON.stringify(json.errors, null, 2));
        }

        if (!res.ok) {
          throw new Error(`Hygraph error: ${res.status} - ${JSON.stringify(json.errors)}`);
        }

        if (!json.data) {
          throw new Error("Hygraph response missing data");
        }

        if (shouldCacheResponse) {
          responseCache.set(cacheKey, {
            value: json.data,
            expiresAt: Date.now() + ttlMs,
          });
        }

        return json.data;
      } catch (error) {
        lastError = error instanceof Error ? error : new Error(String(error));

        if (attempt < retries - 1) {
          const retryAfter = (attempt + 1) * delay;
          console.warn(`Hygraph request failed, retrying in ${retryAfter}ms...`, lastError.message);
          await sleep(retryAfter);
        }
      }
    }

    throw lastError ?? new Error("Hygraph fetch failed after retries");
  })();

  // Cache the promise for deduplication
  requestCache.set(cacheKey, fetchPromise);

  // Clean up cache after promise resolves
  fetchPromise.finally(() => {
    // Keep in cache for a short time to handle parallel requests
    setTimeout(() => requestCache.delete(cacheKey), 5000);
  });

  return fetchPromise;
}

// Export with the same name for backwards compatibility
async function hygraphFetch<T>(
  query: string,
  variables?: Record<string, unknown>,
  options?: { revalidateSeconds?: number }
): Promise<T> {
  return hygraphFetchWithRetry<T>(query, variables, options);
}

export { hygraphFetch };
