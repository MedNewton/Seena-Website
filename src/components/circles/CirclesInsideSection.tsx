// src/components/circles/CirclesInsideSection.tsx
"use client";

import type { FC } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

// same gradient as the ModernOverdrive problem cards
const CARD_GRADIENT =
  "linear-gradient(135deg, #c98a3e 0%, #834314 48%, #130b03 100%)";

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);

type InsideCard = {
  key: string;
  eyebrow: string;
  title: string;
  description: string;
};

const CARDS: InsideCard[] = [
  {
    key: "interest-city",
    eyebrow: "Interest & City",
    title: "Find your people, wherever they are",
    description:
      "Connect through shared interests and local communities. Whether you're in NYC or anywhere else, Circles puts you in the room with the right people.",
  },
  {
    key: "curated-connections",
    eyebrow: "Curated Connections",
    title: "Meet people who match where you're headed",
    description:
      "Join communities designed around lifestyle, ambition, and stage of life — from founders and professionals to women-only, men-only, and private member groups.",
  },
  {
    key: "shared-experiences",
    eyebrow: "Shared Experiences",
    title: "Move from introductions to real connections",
    description:
      "Turn conversations into experiences through meetups, activities, discussions, and challenges that make connections happen naturally.",
  },
];

const CirclesInsideSection: FC = () => {
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
        sx={{ maxWidth: 1240, mx: "auto" }}
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
            Inside Circles
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
              fontSize: { xs: 30, md: 60 },
              fontWeight: 800,
              lineHeight: 1.1,
              color: "#0a0a0a",
              maxWidth: 1000,
            }}
          >
            You&apos;re surrounded by people.
            <br />
            Finding yours is different.
          </MotionTypography>
        </Stack>

        {/* Cards */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: { xs: 3, md: 3.5 },
            width: "100%",
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
                delay: 0.15 + index * 0.12,
              }}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                textAlign: "left",
                px: { xs: 3, md: 3 },
                py: { xs: 3, md: 4 },
                minHeight: { xs: "auto", md: 340 },
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
                  color: "rgba(255,255,255,0.8)",
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

export default CirclesInsideSection;
