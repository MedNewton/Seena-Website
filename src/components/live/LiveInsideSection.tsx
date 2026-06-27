// src/components/live/LiveInsideSection.tsx
"use client";

import type { FC } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

// navy / blue / gold card gradient (live palette)
const CARD_GRADIENT =
  "linear-gradient(150deg, #142235 0%, #2c61b5 55%, #ffce5a 100%)";

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
    key: "real-world",
    eyebrow: "Real-World Experiences",
    title: "Step away from the screen and into life",
    description:
      "Discover events, classes, retreats, and experiences designed to help you recharge, learn, and connect in the real world.",
  },
  {
    key: "guided",
    eyebrow: "Guided Experiences",
    title: "Practice wellbeing with intention",
    description:
      "Join expert-led experiences that support physical recovery, emotional balance, and mental clarity through structured guidance and shared participation.",
  },
  {
    key: "seena-events",
    eyebrow: "Seena Events",
    title: "Be part of something bigger",
    description:
      "Attend signature Seena gatherings that bring together members across cities and countries around a shared culture of sustainable performance.",
  },
];

const LiveInsideSection: FC = () => {
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
              letterSpacing: 1.2,
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            Inside Live
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
              fontSize: { xs: 32, md: 60 },
              fontWeight: 800,
              lineHeight: 1.1,
              color: "#ffffff",
              maxWidth: 1000,
            }}
          >
            The kind of support that actually holds weight.
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
                minHeight: { xs: "auto", md: 300 },
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

export default LiveInsideSection;
