"use client";

import type { FC } from "react";
import { useRef } from "react";
import { Box, Stack, Typography, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import type { StaticImageData } from "next/image";
import ScreeningActivityCard from "./ScreeningActivityCard";

export type ScreeningActivity = {
  id: string;
  title: string;
  image: StaticImageData;
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
    <Stack spacing={1.5}>
      {/* Section header */}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography
          sx={{
            fontFamily: "var(--font-bricolage)",
            fontSize: { xs: 16, md: 18 },
            fontWeight: 400,
            color: "#E5E7EB",
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontSize: 11,
            textTransform: "uppercase",
            letterSpacing: 0.8,
            color: "rgba(156,163,175,0.9)",
          }}
        >
          View all &gt;
        </Typography>
      </Stack>

      {/* Slider with overlay arrows */}
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
        {/* Scrollable track */}
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

        {/* Left arrow */}
        <IconButton
          aria-label="Scroll left"
          onClick={handleScroll("left")}
          sx={{
            position: "absolute",
            top: "50%",
            left: { xs: 4, md: 8 },
            transform: "translateY(-50%)",
            width: 44,
            height: 44,
            borderRadius: "999px",
            backgroundColor: "rgba(0,0,0,0.7)",
            border: "1px solid rgba(148,163,184,0.85)",
            boxShadow: "0 18px 40px rgba(15,23,42,0.85)",
            color: "rgba(249,250,251,0.96)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            display: { xs: "none", sm: "flex" },
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.8)",
            },
          }}
        >
          <ChevronLeftRoundedIcon sx={{ fontSize: 24 }} />
        </IconButton>

        {/* Right arrow */}
        <IconButton
          aria-label="Scroll right"
          onClick={handleScroll("right")}
          sx={{
            position: "absolute",
            top: "50%",
            right: { xs: 4, md: 8 },
            transform: "translateY(-50%)",
            width: 44,
            height: 44,
            borderRadius: "999px",
            backgroundColor: "rgba(0,0,0,0.7)",
            border: "1px solid rgba(148,163,184,0.85)",
            boxShadow: "0 18px 40px rgba(15,23,42,0.85)",
            color: "rgba(249,250,251,0.96)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            display: { xs: "none", sm: "flex" },
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.8)",
            },
          }}
        >
          <ChevronRightRoundedIcon sx={{ fontSize: 24 }} />
        </IconButton>
      </MotionBox>
    </Stack>
  );
};

export default ScreeningSectionSlider;
