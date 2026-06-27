// src/components/home/ModernOverdriveSection.tsx
"use client";

import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

import silhouette from "@/assets/newImages/silouhette.webp";

const GOLD = "#D8A24B";
const GOLD_GRADIENT =
  "linear-gradient(135deg, #F5E0A3 0%, #D8A24B 40%, #F8E6B8 100%)";

// same gradient as the header CTA button, clipped to text
const ctaGradientTextStyle = {
  backgroundImage: "linear-gradient(90deg, #ffe8b2 0%, #d77a1e 60%, #1f1306 115%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
  WebkitTextFillColor: "transparent",
} as const;

const problems = [
  {
    key: "disconnected",
    title: "Disconnected tools",
    description: "Every tool lives in its own world. None of them talk to each other.",
  },
  {
    key: "ignore-state",
    title: "Ignore your actual state",
    description: "Same advice whether you're sharp or running on empty.",
  },
  {
    key: "collapse",
    title: "Collapse under pressure",
    description: "Works until the week gets real. Then it's the first thing that goes.",
  },
  {
    key: "full-capacity",
    title: "Needs you at full capacity",
    description: "Asks the most from you when you have the least left to give.",
  },
] as const;

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);

const subtitleVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.8, 0.25, 1],
      when: "beforeChildren",
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
} as const;

const goldWordVariants = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.19, 1, 0.22, 1],
    },
  },
} as const;

// --- Marquee config ---

const MARQUEE_ROW_1_WORDS: string[] = [
  "Poor sleep",
  "Carrying tension",
  "Screen fatigue",
  "Waking up drained",
  "Running on empty",
  "Weekend exhaustion",
  "Never fully recovered",
];

const MARQUEE_ROW_2_WORDS: string[] = [
  "Overthinking",
  "Passive scrolling",
  "Constant pressure",
  "Scattered focus",
  "Feeling behind",
  "No off switch",
  "Never fully present",
];

// repeat the word lists so the looping track is long enough to fill the row
const MARQUEE_ROW_1_ITEMS: string[] = Array.from(
  { length: 5 },
  () => MARQUEE_ROW_1_WORDS
).flat();

const MARQUEE_ROW_2_ITEMS: string[] = Array.from(
  { length: 5 },
  () => MARQUEE_ROW_2_WORDS
).flat();


type MarqueeDirection = "left" | "right";

type MarqueeRowProps = {
  items: string[];
  direction: MarqueeDirection;
};

const MarqueeRow: React.FC<MarqueeRowProps> = ({ items, direction }) => {
  const content = items.join("   •   ");

  return (
    <Box
      sx={(theme) => ({
        position: "relative",
        width: "100%",
        overflow: "hidden",
        borderRadius: 999,
        backgroundColor: "transparent",
        border: "none",
        px: { xs: 0, md: 0 },
        py: { xs: 0.75, md: 1 },

        // Left fade / shadow
        "&::before": {
          content: '""',
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: { xs: 32, md: 64 },
          pointerEvents: "none",
          background: `linear-gradient(to right, ${theme.palette.background.default}, rgba(15,23,42,0))`,
        },

        // Right fade / shadow
        "&::after": {
          content: '""',
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: { xs: 32, md: 64 },
          pointerEvents: "none",
          background: `linear-gradient(to left, ${theme.palette.background.default}, rgba(15,23,42,0))`,
        },
      })}
    >
      <motion.div
        style={{
          display: "inline-flex",
          whiteSpace: "nowrap",
        }}
        animate={{
          x:
            direction === "left"
              ? ["0%", "-50%"] // right → left
              : ["-50%", "0%"], // left → right
        }}
        transition={{
          duration: 160,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <Typography
          sx={{
            fontFamily: "var(--font-josefin)",
            fontSize: { xs: 12, md: 14 },
            letterSpacing: 1.6,
            fontWeight: 500,
            textTransform: "uppercase",
            color: "rgba(248,250,252,0.85)",
          }}
        >
          {content}
        </Typography>
      </motion.div>
    </Box>
  );
};

// --- Problem cards ---

type Problem = (typeof problems)[number];


type ProblemCardProps = {
  problem: Problem;
  delay: number;
};

const ProblemCard: React.FC<ProblemCardProps> = ({ problem, delay }) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        textAlign: "left",
        px: { xs: 3, md: 3 },
        py: { xs: 3, md: 4 },
        minHeight: { xs: "auto", md: 280 },
        borderRadius: "22px",
        border: "none",
        background: "linear-gradient(135deg, #c98a3e 0%, #834314 48%, #130b03 100%)",
        boxShadow: "0 18px 40px rgba(0,0,0,0.35)",
      }}
    >
      <Typography
        sx={{
          fontFamily: "var(--font-montserrat)",
          fontWeight: 700,
          fontSize: { xs: 20, md: 22 },
          lineHeight: 1.2,
          color: "#ffffff",
          mb: 1.5,
        }}
      >
        {problem.title}
      </Typography>

      <Typography
        sx={{
          fontFamily: "var(--font-inter)",
          fontWeight: 400,
          fontSize: 15,
          lineHeight: 1.6,
          color: "rgba(255,255,255,0.7)",
        }}
      >
        {problem.description}
      </Typography>
    </MotionBox>
  );
};

const ModernOverdriveSection: React.FC = () => {
  const baseDelay = 0.9;
  const step = 0.16;

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        bgcolor: "#000000",
        pt: { xs: 8, md: 10 },
        pb: { xs: 4, md: 10 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: { xs: "auto", md: "80vh" },
      }}
    >
      {/* Inverted city silhouette, low opacity, behind the content */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: { xs: 180, md: 380 },
          zIndex: 0,
          pointerEvents: "none",
          opacity: 0.14,
        }}
      >
        <Image
          src={silhouette}
          alt=""
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center center",
            transform: "scaleY(-1)",
          }}
        />
      </Box>

      <Container
        maxWidth={false}
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1440,
          mx: "auto",
          px: { xs: 2, md: 0 },
        }}
      >
        <Stack
          spacing={{ xs: 4, md: 7 }}
          alignItems="center"
          textAlign="center"
        >
          {/* 1. Main title */}
          <MotionTypography
            variant="h2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1,
            }}
            sx={{
              fontFamily: "var(--font-montserrat)",
              fontWeight: 800,
              fontSize: { xs: 34, md: 68 },
              lineHeight: 1.05,
              textTransform: "uppercase",
              color: (theme) => theme.palette.text.primary,
            }}
          >
            <Box component="span" sx={{ display: "block" }}>
              Modern Life
            </Box>
            <Box component="span" sx={{ display: "block" }}>
              Rewards Overdrive
            </Box>
          </MotionTypography>

          {/* 2. Marquees */}
          <Stack
            spacing={1.5}
            sx={{
              width: "100%",
              px: { xs: 0, md: 2 },
            }}
          >
            <MarqueeRow
              items={MARQUEE_ROW_1_ITEMS}
              direction="left"
            />
            <MarqueeRow
              items={MARQUEE_ROW_2_ITEMS}
              direction="right"
            />
          </Stack>

          {/* 3. Subtitle with animated gold words */}
          <MotionTypography
            variant="h6"
            variants={subtitleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            sx={{
              fontFamily: "var(--font-inter)",
              fontWeight: 400,
              fontSize: { xs: 18, md: 30 },
              lineHeight: 1.1,
              color: (theme) => theme.palette.text.primary,
            }}
          >
            <Box component="span" sx={{ display: "block" }}>
              Our body calls it{" "}
              <Box
                component="span"
                sx={{
                  position: "relative",
                  display: "inline-flex",
                  overflow: "hidden",
                }}
              >
                <motion.span
                  variants={goldWordVariants}
                  style={{
                    display: "inline-block",
                    ...ctaGradientTextStyle,
                  }}
                >
                  inflammation
                </motion.span>
              </Box>
            </Box>

            <Box component="span" sx={{ display: "block", mt: 0.5 }}>
              Our mind calls it{" "}
              <Box
                component="span"
                sx={{
                  position: "relative",
                  display: "inline-flex",
                  overflow: "hidden",
                }}
              >
                <motion.span
                  variants={goldWordVariants}
                  style={{
                    display: "inline-block",
                    ...ctaGradientTextStyle,
                  }}
                >
                  burnout
                </motion.span>
              </Box>
            </Box>
          </MotionTypography>

          {/* 5. High performers lines */}
          <MotionTypography
            variant="h6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.6,
            }}
            sx={{
              fontFamily: "var(--font-inter)",
              fontWeight: 500,
              fontStyle: "italic",
              fontSize: { xs: 16, md: 24 },
              lineHeight: 1.4,
              color: (theme) => theme.palette.text.primary,
              maxWidth: 1100,
            }}
          >
            <Box component="span" sx={{ display: "block" }}>
              And for high performers, it becomes normal.
            </Box>
            <Box component="span" sx={{ display: "block", mt: 1 }}>
              We learn to push through, to function while depleted, and to
              live in reaction instead of action.
            </Box>
          </MotionTypography>

          {/* Connecting vertical line */}
          <MotionBox
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.4,
            }}
            sx={{
              width: 3,
              height: { xs: 90, md: 120 },
              borderRadius: 999,
              backgroundImage: GOLD_GRADIENT,
              mt: { xs: 1, md: 1.5 },
              mb: { xs: 1, md: 1.75 },
              transformOrigin: "top",
            }}
          />

          {/* 6. Solution title */}
          <MotionTypography
            variant="h4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.9,
            }}
            sx={{
              fontFamily: "var(--font-montserrat)",
              fontWeight: 800,
              fontSize: { xs: 34, md: 68 },
              lineHeight: 1.05,
              textTransform: "uppercase",
              color: (theme) => theme.palette.text.primary,
            }}
          >
            So we tried everything...
            <br />
            Nothing sticks!
          </MotionTypography>

          {/* 7. Problem cards */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
              },
              gap: 2.5,
              width: "100%",
              maxWidth: { md: 1040 },
              mx: "auto",
              mt: { xs: 0, md: 4 },
            }}
          >
            {problems.map((problem, index) => (
              <ProblemCard
                key={problem.key}
                problem={problem}
                delay={baseDelay + index * step}
              />
            ))}
          </Box>

          {/* 8. Closing line */}
          <MotionTypography
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: baseDelay + problems.length * step,
            }}
            sx={{
              fontFamily: "var(--font-inter)",
              fontWeight: 400,
              fontSize: { xs: 18, md: 28 },
              lineHeight: 1.4,
              color: (theme) => theme.palette.text.primary,
              maxWidth: 1440,
            }}
          >
            Every solution we try works until it eventually breaks. None of
            them are built for the long game - real life.
          </MotionTypography>
        </Stack>
      </Container>
    </Box>
  );
};

export default ModernOverdriveSection;
