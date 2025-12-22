// src/components/blog/BlogCategoryRowSlider.tsx
"use client";

import type { FC, MouseEvent } from "react";
import { useRef } from "react";
import {
  Box,
  Stack,
  Typography,
  IconButton,
} from "@mui/material";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import Image from "next/image";
import NextLink from "next/link";

export type BlogPostCard = {
  id: string;
  slug: string;
  title: string;
  excerpt?: string | null;
  coverImage?: { url: string } | null;
};

type BlogCategoryRowSliderProps = {
  label: string;
  posts: BlogPostCard[];
};

const BlogSmallCard: FC<{ post: BlogPostCard }> = ({ post }) => {
  const coverUrl = post.coverImage?.url ?? null;

  return (
    <Box
      component={NextLink}
      href={`/blog/${post.slug}`}
      sx={{
        width: 260,
        borderRadius: 3,
        overflow: "hidden",
        bgcolor: "#FFFFFF",
        textDecoration: "none",
        color: "inherit",
        flexShrink: 0,
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: 170,
        }}
      >
        {coverUrl && (
          <Image
            src={coverUrl}
            alt={post.title}
            fill
            sizes="260px"
            style={{ objectFit: "cover" }}
          />
        )}
      </Box>

      <Box sx={{ px: 2.25, py: 2 }}>
        <Typography
          sx={{
            fontFamily: "var(--font-inter)",
            fontSize: 13,
            fontWeight: 500,
            letterSpacing: 0.4,
            textTransform: "none",
            mb: 0.75,
            color: "#111827",
          }}
        >
          {post.title}
        </Typography>

        {post.excerpt && (
          <Typography
            sx={{
              fontFamily: "var(--font-inter)",
              fontSize: 11.5,
              lineHeight: 1.5,
              color: "#6B7280",
              mb: 1.5,
            }}
          >
            {post.excerpt}
          </Typography>
        )}

        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            px: 2,
            py: 0.7,
            borderRadius: 999,
            bgcolor: "#000000",
            color: "#FFFFFF",
            fontSize: 10.5,
            fontWeight: 500,
            letterSpacing: 1.1,
            textTransform: "uppercase",
          }}
        >
          Read more
        </Box>
      </Box>
    </Box>
  );
};

const BlogCategoryRowSlider: FC<BlogCategoryRowSliderProps> = ({
  label,
  posts,
}) => {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const handleScroll =
    (direction: "left" | "right") =>
    (_e: MouseEvent<HTMLButtonElement>): void => {
      const container = trackRef.current;
      if (!container) return;

      const delta = direction === "left" ? -260 * 2 : 260 * 2;

      const node = container as unknown as {
        scrollBy?: (options: ScrollToOptions) => void;
        scrollLeft: number;
      };

      if (node.scrollBy) {
        node.scrollBy({ left: delta, behavior: "smooth" });
      } else {
        container.scrollLeft += delta;
      }
    };

  return (
    <Stack spacing={1.5} sx={{ mt: 6 }}>
      {/* Header row */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 1 }}
      >
        <Typography
          sx={{
            fontFamily: "var(--font-bricolage)",
            fontSize: 18,
            fontWeight: 500,
            color: "#111827",
          }}
        >
          {label}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          <IconButton
            size="small"
            sx={{
              width: 28,
              height: 28,
              borderRadius: "999px",
              border: "1px solid #D1D5DB",
            }}
            onClick={handleScroll("left")}
          >
            <ChevronLeftRoundedIcon sx={{ fontSize: 18 }} />
          </IconButton>
          <IconButton
            size="small"
            sx={{
              width: 28,
              height: 28,
              borderRadius: "999px",
              border: "1px solid #D1D5DB",
            }}
            onClick={handleScroll("right")}
          >
            <ChevronRightRoundedIcon sx={{ fontSize: 18 }} />
          </IconButton>
        </Box>
      </Stack>

      {/* Cards track (can be empty) */}
      <Box
        ref={trackRef}
        sx={{
          position: "relative",
          width: "100%",
          overflowX: "auto",
          overflowY: "hidden",
          pb: 1,
          "&::-webkit-scrollbar": {
            height: 0,
          },
        }}
      >
        <Stack direction="row" spacing={2}>
          {posts.map((post) => (
            <BlogSmallCard key={post.id} post={post} />
          ))}
        </Stack>
      </Box>
    </Stack>
  );
};

export default BlogCategoryRowSlider;
