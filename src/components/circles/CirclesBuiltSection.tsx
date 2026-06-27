// src/components/circles/CirclesBuiltSection.tsx
"use client";

import type { FC } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

// warm gradient: dark top-left -> amber bottom-right (brand palette)
const CARD_GRADIENT =
  "linear-gradient(135deg, #1a0f04 0%, #7a430f 55%, #c98a3e 100%)";

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);

type BuiltCard = {
  key: string;
  title: string;
  description: string;
};

const CARDS: BuiltCard[] = [
  {
    key: "social-environment",
    title: "A stronger social environment",
    description:
      "Surround yourself with people who reinforce the way you actually want to live.",
  },
  {
    key: "less-isolation",
    title: "Less isolation at high level",
    description:
      "Ambition feels lighter when you are not carrying everything alone.",
  },
  {
    key: "follow-through",
    title: "More follow-through",
    description:
      "What is hard alone becomes more natural when it is shared.",
  },
  {
    key: "cultural-belonging",
    title: "Cultural belonging",
    description:
      "Feel part of something bigger than an app: a new way to define high performance.",
  },
];

const CirclesBuiltSection: FC = () => {
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
              maxWidth: 760,
            }}
          >
            Built for the long
            <br />
            arc of performance.
          </MotionTypography>
        </Stack>

        {/* Accordion cards: hovering one grows it while the others shrink */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          sx={{
            width: "100%",
            "&:hover .built-card": {
              flexGrow: { md: 0.85 },
            },
            "& .built-card:hover": {
              flexGrow: { md: 2 },
            },
          }}
        >
          {CARDS.map((card, index) => (
            <MotionBox
              key={card.key}
              className="built-card"
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
                boxShadow: "0 18px 40px rgba(0,0,0,0.25)",
                px: { xs: 3, md: 3.5 },
                py: { xs: 3, md: 4 },
                // accordion sizing (md and up)
                flexGrow: { md: 1 },
                flexBasis: { md: 0 },
                transition: "flex-grow 600ms cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              {/* content fills the card width so text wraps inside, never overflows */}
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
                    color: "rgba(255,255,255,0.82)",
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

export default CirclesBuiltSection;
