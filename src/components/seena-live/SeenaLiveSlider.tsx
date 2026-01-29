"use client";

import type { FC } from "react";
import { useEffect, useRef, useState } from "react";
import { Box, Stack, Typography, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import type { StaticImageData } from "next/image";
import ExperiencesActivityCard from "./SeenaLiveActivityCard";

export type SeenaLiveActivity = {
  id: string;
  title: string;
  image: StaticImageData;
};

export type SeenaLiveSectionConfig = {
  id: string;
  title: string;
  activities: SeenaLiveActivity[];
};

export interface SeenaLiveSectionSliderProps {
  config: SeenaLiveSectionConfig;
}

const MotionBox = motion.create(Box);

const SeenaLiveSectionSlider: FC<SeenaLiveSectionSliderProps> = ({
  config,
}) => {
  const { title, activities } = config;
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  useEffect(() => {
    const node = scrollRef.current;
    if (!node) return;

    const updateEdges = () => {
      const maxScrollLeft = node.scrollWidth - node.clientWidth;
      const threshold = 4;

      if (maxScrollLeft <= threshold) {
        setIsAtStart(true);
        setIsAtEnd(true);
        return;
      }

      setIsAtStart(node.scrollLeft <= threshold);
      setIsAtEnd(node.scrollLeft >= maxScrollLeft - threshold);
    };

    updateEdges();

    node.addEventListener("scroll", updateEdges, { passive: true });
    window.addEventListener("resize", updateEdges);

    return () => {
      node.removeEventListener("scroll", updateEdges);
      window.removeEventListener("resize", updateEdges);
    };
  }, []);

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
        sx={(theme) => ({
          position: "relative",
          width: "100%",
          "--section-card-height": {
            xs: "140px",
            sm: "180px",
            md: "260px",
            lg: "260px",
          },
          "--section-track-padding-y": theme.spacing(1),
        })}
      >
        <Box sx={{ position: "relative" }}>
          {/* Scrollable track */}
          <Box
            ref={scrollRef}
            sx={{
              width: "100%",
              overflowX: "auto",
              overflowY: "visible",
              py: 1,
              "&::-webkit-scrollbar": {
                display: "none",
              },
              msOverflowStyle: "none",
              scrollbarWidth: "none",
              scrollBehavior: "smooth",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <Stack
              direction="row"
              spacing={{ xs: 1.5, md: 2 }}
              sx={{
                width: "max-content",
                minWidth: "100%",
                px: 0.5,
              }}
            >
              {activities.map((activity, index) => (
                <ExperiencesActivityCard
                  key={activity.id}
                  activity={activity}
                  isHighlighted={index === 0}
                />
              ))}
            </Stack>
          </Box>

          {/* Edge blur overlays (same height as cards) */}
          <Box
            aria-hidden
            sx={{
              position: "absolute",
              left: 0,
              right: 0,
              top: "var(--section-track-padding-y)",
              height: "var(--section-card-height)",
              pointerEvents: "none",
              zIndex: 1,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: { xs: 36, md: 56 },
                opacity: isAtStart ? 0 : 1,
                transition: "opacity 200ms ease",
                backgroundColor: "rgba(2,6,23,0.85)",
                maskImage:
                  "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
                WebkitMaskImage:
                  "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                height: "100%",
                width: { xs: 36, md: 56 },
                opacity: isAtEnd ? 0 : 1,
                transition: "opacity 200ms ease",
                backgroundColor: "rgba(2,6,23,0.85)",
                maskImage:
                  "linear-gradient(270deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
                WebkitMaskImage:
                  "linear-gradient(270deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
              }}
            />
          </Box>
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
            zIndex: 2,
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
            zIndex: 2,
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

export default SeenaLiveSectionSlider;
