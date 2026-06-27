// src/components/home/ExploreMoreSection.tsx
"use client";

import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

import {
  EXPLORE_CARDS,
  ExploreCard,
} from "@/components/home/explore";

const GOLD = "#D8A24B";

const MotionTypography = motion.create(Typography);

type ExploreMoreSectionProps = {
  excludeId: string;
  dark?: boolean;
  /**
   * Gradient applied to the highlighted words in the heading so the section
   * matches the host page's palette. Falls back to solid gold when omitted.
   */
  accentGradient?: string;
};

const ExploreMoreSection: React.FC<ExploreMoreSectionProps> = ({
  excludeId,
  dark = false,
  accentGradient,
}) => {
  const cards = EXPLORE_CARDS.filter((card) => card.id !== excludeId);
  const topTwo = cards.slice(0, 2);
  const last = cards[2];

  const headingColor = dark ? "#ffffff" : "#0a0a0a";

  const accentSx = accentGradient
    ? {
        backgroundImage: accentGradient,
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        color: "transparent",
      }
    : { color: GOLD };

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 0 },
      }}
    >
      {/* Heading */}
      <MotionTypography
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
        sx={{
          textAlign: "center",
          fontFamily: "var(--font-montserrat)",
          fontWeight: 800,
          fontSize: { xs: 34, md: 68 },
          lineHeight: 1.05,
          textTransform: "uppercase",
          color: headingColor,
          maxWidth: "100%",
          mx: "auto",
          mb: { xs: 4, md: 6 },
          px: { xs: 2, md: 0 },
        }}
      >
        Shaping an <Box component="span" sx={accentSx}>environment</Box>
        <br />
        You don&apos;t have to{" "}
        <Box component="span" sx={accentSx}>fight</Box> against.
      </MotionTypography>

      {/* Cards: 2 on top (accordion), 1 large beneath */}
      <Stack
        spacing={3}
        sx={{
          width: "100%",
          maxWidth: 1440,
          px: { xs: 2, md: 0 },
          mx: "auto",
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          sx={{
            width: "100%",
            "&:hover .explore-card": {
              flexGrow: { md: 0.9 },
            },
            "& .explore-card:hover": {
              flexGrow: { md: 1.35 },
            },
          }}
        >
          {topTwo.map((card, index) => (
            <ExploreCard
              key={card.id}
              card={card}
              delay={0.15 + index * 0.12}
            />
          ))}
        </Stack>

        {last && (
          <Stack direction="row" sx={{ width: "100%" }}>
            <ExploreCard card={last} delay={0.4} />
          </Stack>
        )}
      </Stack>
    </Box>
  );
};

export default ExploreMoreSection;
