// src/app/blog/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

import { getPostBySlug, getPostSlugs } from "@/lib/blog/api";
import Footer from "@/components/layout/footer";

type PageProps = {
  params: Promise<{ slug: string }>;
};

// Generate static params for all posts
export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata for single post
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug, { revalidateSeconds: 3600 });

  if (!post) {
    return {
      title: "Post Not Found | Seena",
      description: "The requested blog post could not be found.",
    };
  }

  const title = post.metaTitle ?? post.title;
  const description = post.metaDescription ?? post.excerpt ?? "";
  const ogImageUrl = post.ogImage?.url ?? post.coverImage?.url;

  return {
    title: `${title} | Seena Blog`,
    description,
    keywords: post.focusKeywords?.length ? post.focusKeywords : undefined,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.publishedAtDate ?? undefined,
      images: ogImageUrl ? [{ url: ogImageUrl }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImageUrl ? [ogImageUrl] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug, { revalidateSeconds: 60 });

  if (!post) {
    notFound();
  }

  const formattedDate = post.publishedAtDate
    ? new Date(post.publishedAtDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        bgcolor: "#F9FAFB",
        overflowX: "hidden",
      }}
    >
      {/* Hero Section */}
      {post.coverImage?.url && (
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: 300, md: 400, lg: 500 },
            overflow: "hidden",
          }}
        >
          <Image
            src={post.coverImage.url}
            alt={post.title}
            fill
            priority
            style={{ objectFit: "cover" }}
            sizes="100vw"
          />
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.5) 100%)",
            }}
          />
        </Box>
      )}

      {/* Content */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 800,
          mx: "auto",
          px: { xs: 2, md: 3 },
          py: { xs: 4, md: 6 },
          boxSizing: "border-box",
        }}
      >
        <Stack spacing={3}>
          {/* Category */}
          {post.category && (
            <Typography
              sx={{
                fontSize: 12,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: 1.2,
                color: "#6B7280",
              }}
            >
              {post.category}
            </Typography>
          )}

          {/* Title */}
          <Typography
            component="h1"
            sx={{
              fontFamily: "var(--font-bricolage)",
              fontSize: { xs: 28, md: 40 },
              fontWeight: 500,
              color: "#111827",
              lineHeight: 1.2,
            }}
          >
            {post.title}
          </Typography>

          {/* Date */}
          {formattedDate && (
            <Typography
              sx={{
                fontSize: 14,
                color: "#6B7280",
              }}
            >
              {formattedDate}
            </Typography>
          )}

          {/* Excerpt */}
          {post.excerpt && (
            <Typography
              sx={{
                fontSize: 18,
                fontStyle: "italic",
                color: "#4B5563",
                lineHeight: 1.6,
                borderLeft: "3px solid #E5E7EB",
                pl: 3,
                py: 1,
              }}
            >
              {post.excerpt}
            </Typography>
          )}

          {/* Content */}
          {post.content?.html && (
            <Box
              sx={{
                "& h1, & h2, & h3, & h4, & h5, & h6": {
                  fontFamily: "var(--font-bricolage)",
                  color: "#111827",
                  mt: 4,
                  mb: 2,
                },
                "& h2": { fontSize: { xs: 22, md: 28 } },
                "& h3": { fontSize: { xs: 18, md: 22 } },
                "& p": {
                  fontSize: { xs: 16, md: 17 },
                  lineHeight: 1.8,
                  color: "#374151",
                  mb: 2,
                },
                "& a": {
                  color: "#2563EB",
                  textDecoration: "underline",
                },
                "& ul, & ol": {
                  pl: 3,
                  mb: 2,
                },
                "& li": {
                  fontSize: { xs: 16, md: 17 },
                  lineHeight: 1.8,
                  color: "#374151",
                  mb: 1,
                },
                "& img": {
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: 2,
                  my: 3,
                },
                "& blockquote": {
                  borderLeft: "4px solid #E5E7EB",
                  pl: 3,
                  py: 1,
                  my: 3,
                  fontStyle: "italic",
                  color: "#6B7280",
                },
                "& code": {
                  bgcolor: "#F3F4F6",
                  px: 1,
                  py: 0.5,
                  borderRadius: 1,
                  fontSize: "0.9em",
                },
                "& pre": {
                  bgcolor: "#1F2937",
                  color: "#F9FAFB",
                  p: 2,
                  borderRadius: 2,
                  overflowX: "auto",
                  my: 3,
                },
              }}
              dangerouslySetInnerHTML={{ __html: post.content.html }}
            />
          )}
        </Stack>
      </Box>

      <Footer transparentFooter={false} />
    </Box>
  );
}
