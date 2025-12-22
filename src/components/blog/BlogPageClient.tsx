// src/components/blog/BlogPageClient.tsx
"use client";

import { useMemo, useState, type FC } from "react";
import Image from "next/image";
import NextLink from "next/link";
import {
  Box,
  Chip,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";

import BlogCategoryRowSlider, {
  type BlogPostCard,
} from "@/components/blog/BlogCategoryRowSlider";

/**
 * Local post shape used on the client
 */
export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt?: string | null;
  coverImage?: { url: string } | null;
  category?: string | null;
  author?: string | null;
  publishedAt?: string | null;
  publishedAtDate?: string | null;
  date?: string | null;
};

/**
 * Map Hygraph enum values to human-readable labels
 * (raw values are "forYou", "wellness", "mindfullness", "community", "experiences")
 */
const CATEGORY_LABELS: Record<string, string> = {
  forYou: "For you",
  wellness: "Wellness",
  mindfullness: "Mindfulness",
  community: "Community",
  experiences: "Experiences",
};

/**
 * Display order of sections (labels, i.e. what we actually render)
 */
const CATEGORY_ORDER_LABELS: string[] = [
  "For you",
  "Mindfulness",
  "Wellness",
  "Community",
  "Experiences",
  "Other",
];

function formatCategory(raw?: string | null): string {
  if (!raw) return "Other";
  const mapped = CATEGORY_LABELS[raw];
  return mapped ?? "Other";
}

type GroupedPosts = Record<string, BlogPost[]>;

function groupPostsByCategory(posts: ReadonlyArray<BlogPost>): GroupedPosts {
  const grouped: GroupedPosts = {};

  posts.forEach((post) => {
    const label = formatCategory(post.category); // e.g. "For you", "Wellness", "Other"
    grouped[label] ??= [];
    grouped[label].push(post);
  });

  return grouped;
}

function truncateExcerpt(excerpt?: string | null, max = 150): string | null {
  if (!excerpt) return null;
  if (excerpt.length <= max) return excerpt;
  return excerpt.slice(0, max).trimEnd() + "…";
}

/**
 * Hero card for the two big posts
 */
const BlogHeroCard: FC<{ post: BlogPost }> = ({ post }) => {
  const coverUrl = post.coverImage?.url ?? null;
  const heroExcerpt = truncateExcerpt(post.excerpt, 150);

  return (
    <Box
      component={NextLink}
      href={`/blog/${post.slug}`}
      sx={{
        display: "flex",
        flexDirection: "column",
        textDecoration: "none",
        color: "inherit",
        borderRadius: 3,
        overflow: "hidden",
        bgcolor: "#FFFFFF",
        boxShadow: "0 12px 40px rgba(15,23,42,0.10)",
        minHeight: 260,
        flex: 1,
      }}
    >
      {/* Image */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: 220,
          overflow: "hidden",
        }}
      >
        {coverUrl && (
          <Image
            src={coverUrl}
            alt={post.title}
            fill
            sizes="(min-width: 900px) 50vw, 100vw"
            style={{ objectFit: "cover" }}
          />
        )}
      </Box>

      {/* Text */}
      <Box sx={{ px: 3, py: 2.5 }}>
        <Typography
          sx={{
            fontFamily: "var(--font-inter)",
            fontSize: 13,
            fontWeight: 500,
            letterSpacing: 1,
            textTransform: "uppercase",
            color: "rgba(107,114,128,0.95)",
            mb: 0.75,
          }}
        >
          {formatCategory(post.category)}
        </Typography>

        <Typography
          sx={{
            fontFamily: "var(--font-bricolage)",
            fontSize: 20,
            fontWeight: 500,
            mb: 1,
            color: "#111827",
          }}
        >
          {post.title}
        </Typography>

        {heroExcerpt && (
          <Typography
            sx={{
              fontFamily: "var(--font-inter)",
              fontSize: 13,
              color: "#4B5563",
              lineHeight: 1.5,
              mb: 2,
            }}
          >
            {heroExcerpt}
          </Typography>
        )}

        {/* Black button with white text */}
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            px: 2.5,
            py: 1,
            borderRadius: 999,
            bgcolor: "#000000",
            color: "#FFFFFF",
            fontSize: 11,
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: 1.2,
          }}
        >
          Read more
        </Box>
      </Box>
    </Box>
  );
};

type BlogPageClientProps = {
  posts: ReadonlyArray<BlogPost>;
};

const BlogPageClient: FC<BlogPageClientProps> = ({ posts }) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredPosts = useMemo(() => {
    const q = searchValue.trim().toLowerCase();

    return posts.filter((post) => {
      const matchesCategory =
        !activeCategory ||
        formatCategory(post.category) === activeCategory;

      if (!matchesCategory) return false;

      if (!q) return true;

      const text = `${post.title ?? ""} ${post.excerpt ?? ""}`.toLowerCase();
      return text.includes(q);
    });
  }, [posts, searchValue, activeCategory]);

  // Use first two filtered posts for hero, rest for sliders
  const [heroPrimary, heroSecondary, ...restForSliders] = filteredPosts;

  const postsForSliders =
    restForSliders.length > 0 ? restForSliders : filteredPosts;

  const grouped = useMemo(
    () => groupPostsByCategory(postsForSliders),
    [postsForSliders]
  );

  return (
    <Box
      sx={{
        maxWidth: 1280,
        mx: "auto",
        pt: 8,
        px: { xs: 2, md: 3 },
        pb: 8,
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Top search / filters row */}
      <Stack spacing={3}>
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          sx={{ width: "100%" }}
        >
          <TextField
            fullWidth
            placeholder="Search by topic"
            variant="outlined"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            InputProps={{
              startAdornment: (
                <SearchIcon sx={{ mr: 1, fontSize: 18, color: "#9CA3AF" }} />
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 999,
                backgroundColor: "#FFFFFF",
                fontSize: 14,
                color: "#111827",
                "& fieldset": {
                  borderColor: "#E5E7EB",
                },
                "&:hover fieldset": {
                  borderColor: "#D1D5DB",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#111827",
                },
              },
              "& .MuiInputBase-input": {
                py: 1.3,
              },
            }}
          />

          <Stack
            direction="row"
            spacing={0.75}
            alignItems="center"
            sx={{ flexShrink: 0 }}
          >
            <Typography
              sx={{
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: 0.7,
                color: "#4B5563",
              }}
            >
              Sort
            </Typography>
            <IconButton
              size="small"
              sx={{
                borderRadius: 999,
                border: "1px solid #E5E7EB",
                bgcolor: "#FFFFFF",
              }}
            >
              <TuneOutlinedIcon sx={{ fontSize: 18, color: "#111827" }} />
            </IconButton>
          </Stack>
        </Stack>

        {/* Category pills (filter by category) */}
        <Stack direction="row" spacing={1} flexWrap="wrap">
          {CATEGORY_ORDER_LABELS.map((label) => {
            const isActive = activeCategory === label;

            return (
              <Chip
                key={label}
                label={label}
                clickable
                onClick={() =>
                  setActiveCategory((prev) =>
                    prev === label ? null : label
                  )
                }
                sx={{
                  borderRadius: 999,
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: 0.8,
                  bgcolor: isActive ? "#111827" : "#FFFFFF",
                  border: "1px solid #E5E7EB",
                  "& .MuiChip-label": {
                    px: 1.8,
                    py: 0.6,
                    color: isActive ? "#FFFFFF" : "#111827",
                  },
                }}
              />
            );
          })}
        </Stack>
      </Stack>

      {/* Hero row (two main cards, 50/50) */}
      {heroPrimary && heroSecondary && (
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2.5}
          sx={{ mt: 4 }}
        >
          <BlogHeroCard post={heroPrimary} />
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <BlogHeroCard post={heroSecondary} />
          </Box>
        </Stack>
      )}

      {/* Category sliders: one row per known label, even if empty */}
      <Box sx={{ mt: 6 }}>
        {CATEGORY_ORDER_LABELS.map((label) => {
          const postsForLabel = grouped[label] ?? [];
          const cards: BlogPostCard[] = postsForLabel.map((p) => ({
            id: p.id,
            slug: p.slug,
            title: p.title,
            excerpt: p.excerpt,
            coverImage: p.coverImage ?? null,
          }));

          return (
            <BlogCategoryRowSlider
              key={label}
              label={label}
              posts={cards}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default BlogPageClient;
