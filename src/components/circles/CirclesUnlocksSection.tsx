// src/components/circles/CirclesUnlocksSection.tsx
"use client";

import type { FC } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

// warm gradient: dark top -> amber bottom (brand palette)
const CARD_GRADIENT =
  "linear-gradient(180deg, #130b03 0%, #7a430f 52%, #c98a3e 100%)";

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);

type UnlockCard = {
  key: string;
  eyebrow: string;
  title: string;
  description: string;
};

const CARDS: UnlockCard[] = [
  {
    key: "belonging",
    eyebrow: "Belonging",
    title: "Feel part of something meaningful",
    description:
      "Surround yourself with people who understand your interests, challenges, and ambitions.",
  },
  {
    key: "accountability",
    eyebrow: "Accountability",
    title: "Keep showing up together",
    description:
      "Shared activities and consistent interaction make positive habits easier to maintain.",
  },
  {
    key: "opportunity",
    eyebrow: "Opportunity",
    title: "Expand your personal and professional world",
    description:
      "Meet people who introduce fresh perspectives, ideas, friendships, and possibilities.",
  },
  {
    key: "connection",
    eyebrow: "Connection",
    title: "Build relationships beyond the screen",
    description:
      "Move naturally from conversations to real experiences and genuine friendships.",
  },
];

const CirclesUnlocksSection: FC = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        backgroundColor: "#ffffff",
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 4 },
      }}
    >
      <Stack
        spacing={{ xs: 5, md: 7 }}
        alignItems="center"
        textAlign="center"
        sx={{ maxWidth: 1040, mx: "auto" }}
      >
        {/* Heading */}
        <Stack spacing={{ xs: 1.5, md: 2 }} alignItems="center">
          <MotionTypography
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            sx={{
              fontFamily: "var(--font-montserrat)",
              fontSize: { xs: 15, md: 18 },
              fontWeight: 600,
              color: "rgba(15,15,15,0.65)",
            }}
          >
            What Circles unlocks
          </MotionTypography>

          <MotionTypography
            variant="h2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1,
            }}
            sx={{
              fontFamily: "var(--font-montserrat)",
              fontSize: { xs: 30, md: 56 },
              fontWeight: 800,
              lineHeight: 1.1,
              color: "#0a0a0a",
              maxWidth: 800,
            }}
          >
            The right people
            <br />
            change everything.
          </MotionTypography>
        </Stack>

        {/* Cards (2 x 2) */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
            gap: { xs: 3, md: 3.5 },
            width: "100%",
            maxWidth: 820,
            mx: "auto",
          }}
        >
          {CARDS.map((card, index) => (
            <MotionBox
              key={card.key}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.15 + index * 0.1,
              }}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                textAlign: "left",
                px: { xs: 3, md: 3.5 },
                py: { xs: 3, md: 4 },
                minHeight: { xs: "auto", md: 360 },
                borderRadius: "22px",
                border: "none",
                background: CARD_GRADIENT,
                boxShadow: "0 18px 40px rgba(0,0,0,0.25)",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "var(--font-montserrat)",
                  fontSize: { xs: 13, md: 14 },
                  fontWeight: 600,
                  letterSpacing: 1.4,
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.85)",
                  mb: 2,
                }}
              >
                {card.eyebrow}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "var(--font-montserrat)",
                  fontSize: { xs: 20, md: 23 },
                  fontWeight: 700,
                  lineHeight: 1.2,
                  color: "#ffffff",
                  mb: 1.5,
                }}
              >
                {card.title}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 15,
                  fontWeight: 400,
                  lineHeight: 1.6,
                  color: "rgba(255,255,255,0.82)",
                }}
              >
                {card.description}
              </Typography>
            </MotionBox>
          ))}
        </Box>
      </Stack>
    </Box>
  );
};

export default CirclesUnlocksSection;
