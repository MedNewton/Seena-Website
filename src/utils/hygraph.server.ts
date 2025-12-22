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

async function hygraphFetch<T>(
  query: string,
  variables?: Record<string, unknown>,
  options?: { revalidateSeconds?: number }
): Promise<T> {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify({ query, variables }),
    // Next.js caching
    next: { revalidate: options?.revalidateSeconds ?? 60 },
  });

  if (!res.ok) {
    throw new Error(`Hygraph error: ${res.status} ${res.statusText}`);
  }

  const json = (await res.json()) as { data?: T; errors?: unknown };
  if (!json.data) {
    throw new Error("Hygraph response missing data");
  }
  return json.data;
}

export { hygraphFetch };
