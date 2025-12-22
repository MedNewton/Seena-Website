// src/app/blog/page.tsx

import type { ReactElement } from "react";
import { Box } from "@mui/material";

import { getPosts } from "@/lib/blog/api";
import Footer from "@/components/layout/footer";
import BlogHero from "@/components/blog/BlogHero";
import BlogBackgroundLayer from "@/components/blog/BlogBackgroundLayer";
import BlogPageClient, {
  type BlogPost,
} from "@/components/blog/BlogPageClient";

export default async function BlogPage(): Promise<ReactElement> {
  const rawPosts = await getPosts();
  const posts: BlogPost[] = (rawPosts ?? []) as BlogPost[];

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        bgcolor: "#F9FAFB",
      }}
    >
      <BlogBackgroundLayer />
      <BlogHero title="Blog" subtitle="Read our latest blog posts" />

      {/* Client-side listing with search + pills + sliders */}
      <BlogPageClient posts={posts} />

      <Footer transparentFooter={false} />
    </Box>
  );
}
