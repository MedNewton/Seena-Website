// src/components/screening/ScreeningSlider.tsx
"use client";

import type { FC } from "react";
import { useRef } from "react";
import { Box, Stack, Typography, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import ScreeningActivityCard from "./ScreeningActivityCard";

export type ScreeningActivity = {
  id: string;
  title: string;
  description: string;
  durationMinutes: number;
  questionsCount: number;
};

export type ScreeningSectionConfig = {
  id: string;
  title: string;
  activities: ScreeningActivity[];
};

export interface ScreeningSectionSliderProps {
  config: ScreeningSectionConfig;
}

const MotionBox = motion.create(Box);

const ScreeningSectionSlider: FC<ScreeningSectionSliderProps> = ({
  config,
}) => {
  const { title, activities } = config;
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (direction: "left" | "right") => () => {
    const node = scrollRef.current;
    if (!node) return;

    const scrollAmount = node.clientWidth * 0.75;
    node.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <Stack spacing={2.5}>
      {/* Section header + arrows (like screenshot) */}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ gap: 2 }}
      >
        <Typography
          sx={{
            fontFamily: "var(--font-bricolage)",
            fontSize: { xs: 18, md: 20 },
            fontWeight: 500,
            color: "#111827",
          }}
        >
          {title}
        </Typography>

        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          sx={{ display: { xs: "none", sm: "flex" } }}
        >
          <IconButton
            aria-label="Scroll left"
            onClick={handleScroll("left")}
            size="small"
            sx={{
              width: 32,
              height: 32,
              borderRadius: "999px",
              backgroundColor: "#FFFFFF",
              border: "1px solid #E5E7EB",
              boxShadow: "0 1px 3px rgba(15,23,42,0.12)",
              color: "#111827",
              "&:hover": {
                backgroundColor: "#F3F4F6",
              },
            }}
          >
            <ChevronLeftRoundedIcon sx={{ fontSize: 18 }} />
          </IconButton>
          <IconButton
            aria-label="Scroll right"
            onClick={handleScroll("right")}
            size="small"
            sx={{
              width: 32,
              height: 32,
              borderRadius: "999px",
              backgroundColor: "#FFFFFF",
              border: "1px solid #E5E7EB",
              boxShadow: "0 1px 3px rgba(15,23,42,0.12)",
              color: "#111827",
              "&:hover": {
                backgroundColor: "#F3F4F6",
              },
            }}
          >
            <ChevronRightRoundedIcon sx={{ fontSize: 18 }} />
          </IconButton>
        </Stack>
      </Stack>

      {/* Slider with horizontal scroll (4 cards visible on desktop) */}
      <MotionBox
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        sx={{
          position: "relative",
          width: "100%",
        }}
      >
        <Box
          ref={scrollRef}
          sx={{
            width: "100%",
            overflowX: "auto",
            overflowY: "hidden",
            py: 1,
            "&::-webkit-scrollbar": {
              height: 0,
            },
            scrollBehavior: "smooth",
          }}
        >
          <Stack
            direction="row"
            spacing={2}
            sx={{
              minWidth: "100%",
            }}
          >
            {activities.map((activity, index) => (
              <ScreeningActivityCard
                key={activity.id}
                activity={activity}
                isHighlighted={index === 0}
              />
            ))}
          </Stack>
        </Box>
      </MotionBox>
    </Stack>
  );
};

export default ScreeningSectionSlider;
