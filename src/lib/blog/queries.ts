// src/lib/blog/queries.ts
export type PostListItem = {
    id: string;
    title: string;
    slug: string;
    excerpt: string | null;
    coverImage?: {
      url: string;
    } | null;
    publishedAtDate: string | null;
  };
  
  export type PostFull = PostListItem & {
    content: {
      html: string; // we'll ask Hygraph to return HTML for now
    } | null;
  };
  
  export const POSTS_LIST = /* GraphQL */ `
    query PostsList {
      posts(orderBy: publishedAtDate_DESC, stage: PUBLISHED) {
        id
        title
        slug
        excerpt
        publishedAtDate
        category
        coverImage {
          url
        }
      }
    }
  `;
  
  export const POST_BY_SLUG = /* GraphQL */ `
    query PostBySlug($slug: String!) {
      post(where: { slug: $slug }, stage: PUBLISHED) {
        id
        title
        slug
        excerpt
        publishedAtDate
        category
        coverImage {
          url
        }
        content {
          html
        }
      }
    }
  `;
  