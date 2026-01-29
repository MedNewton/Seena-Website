// src/lib/blog/api.ts
import { hygraphFetch } from "@/utils/hygraph.server";
import {
  POSTS_LIST,
  POST_BY_SLUG,
  POST_SLUGS,
  type PostListItem,
  type PostFull,
} from "./queries";

export async function getPosts(options?: {
  revalidateSeconds?: number;
}): Promise<PostListItem[]> {
  const data = await hygraphFetch<{
    posts: PostListItem[];
  }>(POSTS_LIST, undefined, options);
  return data.posts;
}

export async function getPostBySlug(
  slug: string,
  options?: { revalidateSeconds?: number }
): Promise<PostFull | null> {
  if (!slug.trim()) return null;

  const data = await hygraphFetch<{
    post: PostFull | null;
  }>(POST_BY_SLUG, { slug }, options);

  return data.post;
}

export async function getPostSlugs(): Promise<string[]> {
  const data = await hygraphFetch<{
    posts: { slug: string }[];
  }>(POST_SLUGS, undefined, { revalidateSeconds: 3600 });

  return data.posts.map((p) => p.slug);
}
