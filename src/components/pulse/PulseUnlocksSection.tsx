// src/components/pulse/PulseUnlocksSection.tsx
"use client";

import type { FC } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

const CARD_GRADIENT =
  "linear-gradient(150deg, #2d2a7e 0%, #277f9b 55%, #2cdacd 100%)";

// light teal gradient applied to highlighted words
const highlightSx = {
  backgroundImage: "linear-gradient(90deg, #2cdacd 0%, #9fd9e8 100%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
  WebkitTextFillColor: "transparent",
} as const;

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
    key: "clarity",
    eyebrow: "Clarity",
    title: "Stop guessing what you need",
    description:
      "Recognize the patterns affecting your energy, focus, and wellbeing before they become bigger problems.",
  },
  {
    key: "consistency",
    eyebrow: "Consistency",
    title: "Stay on track through life's ups and downs",
    description:
      "Maintain progress even during stressful periods without relying on motivation alone.",
  },
  {
    key: "confidence",
    eyebrow: "Confidence",
    title: "Make decisions with greater awareness",
    description:
      "Respond to your actual state instead of reacting to pressure, fatigue, or overwhelm.",
  },
  {
    key: "long-term-performance",
    eyebrow: "Long-term Performance",
    title: "Grow without burning yourself out",
    description:
      "Build a healthier relationship with ambition, recovery, and sustainable success.",
  },
];

const PulseUnlocksSection: FC = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        backgroundColor: "#000000",
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
              color: "rgba(255,255,255,0.7)",
            }}
          >
            What Pulse unlocks
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
              color: "#ffffff",
              maxWidth: 800,
            }}
          >
            Built around how
            <br />
            you actually{" "}
            <Box component="span" sx={highlightSx}>
              feel
            </Box>
            .
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
                boxShadow: "0 18px 40px rgba(0,0,0,0.35)",
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
                  color: "rgba(255,255,255,0.85)",
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

export default PulseUnlocksSection;
