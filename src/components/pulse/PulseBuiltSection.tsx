// src/components/pulse/PulseBuiltSection.tsx
"use client";

import type { FC } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

const CARD_GRADIENT =
  "linear-gradient(150deg, #2d2a7e 0%, #277f9b 55%, #2cdacd 100%)";

const highlightSx = {
  backgroundImage: "linear-gradient(90deg, #2cdacd 0%, #9fd9e8 100%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
  WebkitTextFillColor: "transparent",
} as const;

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);

type BuiltCard = {
  key: string;
  title: string;
  description: string;
};

const CARDS: BuiltCard[] = [
  {
    key: "catch-dip",
    title: "Catch the dip earlier",
    description: "Spot the signs before a bad day becomes a bad week.",
  },
  {
    key: "protect-hours",
    title: "Protect your best hours",
    description:
      "Stay sharper by knowing when to push, when to pause, and when to reset.",
  },
  {
    key: "recover",
    title: "Recover with intention",
    description:
      "Get support that fits the kind of depletion you're actually dealing with.",
  },
  {
    key: "stay-consistent",
    title: "Stay consistent under pressure",
    description:
      "Stay sharper by knowing when to push, when to pause, and when to reset.",
  },
];

const PulseBuiltSection: FC = () => {
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
            Built for the long
            <br />
            arc of{" "}
            <Box component="span" sx={highlightSx}>
              performance
            </Box>
            .
          </MotionTypography>
        </Stack>

        {/* Accordion cards: hovering one grows it while the others shrink */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          sx={{
            width: "100%",
            "&:hover .pulse-built-card": {
              flexGrow: { md: 0.85 },
            },
            "& .pulse-built-card:hover": {
              flexGrow: { md: 2 },
            },
          }}
        >
          {CARDS.map((card, index) => (
            <MotionBox
              key={card.key}
              className="pulse-built-card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.15 + index * 0.1,
              }}
              sx={{
                position: "relative",
                overflow: "hidden",
                display: "flex",
                alignItems: "flex-start",
                minWidth: 0,
                minHeight: { xs: "auto", md: 320 },
                borderRadius: "22px",
                border: "none",
                background: CARD_GRADIENT,
                boxShadow: "0 18px 40px rgba(0,0,0,0.35)",
                px: { xs: 3, md: 3.5 },
                py: { xs: 3, md: 4 },
                flexGrow: { md: 1 },
                flexBasis: { md: 0 },
                transition: "flex-grow 600ms cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  minWidth: 0,
                  textAlign: "left",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "var(--font-montserrat)",
                    fontSize: { xs: 20, md: 22 },
                    fontWeight: 700,
                    lineHeight: 1.2,
                    color: "#ffffff",
                    mb: 1.5,
                    overflowWrap: "break-word",
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
                    overflowWrap: "break-word",
                  }}
                >
                  {card.description}
                </Typography>
              </Box>
            </MotionBox>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default PulseBuiltSection;
