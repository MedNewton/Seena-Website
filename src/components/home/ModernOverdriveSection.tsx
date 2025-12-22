// src/components/home/ModernOverdriveSection.tsx
"use client";

import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

const GOLD = "#D8A24B";
const GOLD_GRADIENT =
  "linear-gradient(135deg, #F5E0A3 0%, #D8A24B 40%, #F8E6B8 100%)";

const pillars = [
  {
    title: "Assess",
    description:
      "Understand your state, energy, stress patterns, and where your system needs support.",
  },
  {
    title: "Retrain",
    description:
      "Retrain your nervous system. Release patterns that drain you, and restore internal balance.",
  },
  {
    title: "Sustain",
    description:
      "Maintain habits that support steady energy, balanced stress, and a healthier mind & body.",
  },
  {
    title: "Evolve",
    description:
      "Move forward and perform at your highest level, driven by power, purpose and momentum.",
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

const MARQUEE_ROW_1_ITEMS: string[] = [
  "Migraines",
  "Tension Headaches",
  "TMJ / Jaw pain",
  "Back pain",
  "Neck pain",
  "Fibromyalgia",
  "Joint pain",
  "Muscle Tension",
  "Migraines",
  "Tension Headaches",
  "TMJ / Jaw pain",
  "Back pain",
  "Neck pain",
  "Fibromyalgia",
  "Joint pain",
  "Muscle Tension",
  "Migraines",
  "Tension Headaches",
  "TMJ / Jaw pain",
  "Back pain",
  "Neck pain",
  "Fibromyalgia",
  "Joint pain",
  "Muscle Tension",
  "Migraines",
  "Tension Headaches",
  "TMJ / Jaw pain",
  "Back pain",
  "Neck pain",
  "Fibromyalgia",
  "Joint pain",
  "Muscle Tension",
  "Migraines",
  "Tension Headaches",
  "TMJ / Jaw pain",
  "Back pain",
  "Neck pain",
  "Fibromyalgia",
  "Joint pain",
  "Muscle Tension",
];

const MARQUEE_ROW_2_ITEMS: string[] = [
  "Chronic Fatigue Syndrome",
  "IBS",
  "Bloating",
  "Tinnitus",
  "Insomnia",
  "Brain fog",
  "Anxiety",
  "Depression",
  "Chronic Fatigue Syndrome",
  "Chronic Fatigue Syndrome",
  "IBS",
  "Bloating",
  "Tinnitus",
  "Insomnia",
  "Brain fog",
  "Anxiety",
  "Depression",
  "Chronic Fatigue Syndrome",
  "Chronic Fatigue Syndrome",
  "IBS",
  "Bloating",
  "Tinnitus",
  "Insomnia",
  "Brain fog",
  "Anxiety",
  "Depression",
  "Chronic Fatigue Syndrome",
  "Chronic Fatigue Syndrome",
  "IBS",
  "Bloating",
  "Tinnitus",
  "Insomnia",
  "Brain fog",
  "Anxiety",
  "Depression",
  "Chronic Fatigue Syndrome",
  "Chronic Fatigue Syndrome",
  "IBS",
  "Bloating",
  "Tinnitus",
  "Insomnia",
  "Brain fog",
  "Anxiety",
  "Depression",
  "Chronic Fatigue Syndrome",
];

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
          duration: 72,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <Typography
          sx={{
            fontFamily: "var(--font-inter)",
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

// --- Pillars ---

type Pillar = (typeof pillars)[number];

type PillarCardProps = {
  pillar: Pillar;
  delay: number;
};

const PillarCard: React.FC<PillarCardProps> = ({ pillar, delay }) => {
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
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        px: { xs: 1.5, md: 2 },
      }}
    >
      {/* Golden gradient circle */}
      <motion.div
        style={{
          width: 64,
          height: 64,
          borderRadius: "50%",
          backgroundImage: GOLD_GRADIENT,
          boxShadow: "0 0 0 1px rgba(248,250,252,0.45)",
          transformStyle: "preserve-3d",
        }}
        initial={{ rotateY: 0 }}
        animate={{ rotateY: 0 }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <Typography
        sx={{
          mt: 2.5,
          fontFamily: "var(--font-montserrat)",
          fontWeight: 500,
          fontSize: 16,
          letterSpacing: 0.5,
          textTransform: "none",
          color: (theme) => theme.palette.text.primary,
          mb: 1,
        }}
      >
        {pillar.title}
      </Typography>

      <Typography
        sx={{
          fontFamily: "var(--font-inter)",
          fontWeight: 300,
          fontSize: 13,
          lineHeight: 1.7,
          color: "rgba(255,255,255,0.72)",
        }}
      >
        {pillar.description}
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
        width: "100%",
        bgcolor: (theme) => theme.palette.background.default,
        pt: { xs: 10, md: 10 },
        pb: { xs: 10, md: 10 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: { xs: "auto", md: "80vh" },
      }}
    >
      <Container
        maxWidth={false}
        sx={{
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
              fontFamily: "var(--font-bricolage)",
              fontWeight: 600,
              fontSize: { xs: 32, md: 64 },
              lineHeight: 1.25,
              color: (theme) => theme.palette.text.primary,
            }}
          >
            Modern Life Rewards Overdrive
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
                    color: GOLD,
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
                    color: GOLD,
                  }}
                >
                  burnout
                </motion.span>
              </Box>
            </Box>
          </MotionTypography>

          {/* 4. Connecting vertical line */}
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

          {/* 5. Solution title */}
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
              fontFamily: "var(--font-bricolage)",
              fontWeight: 600,
              fontSize: { xs: 32, md: 64 },
              lineHeight: 1.1,
              color: (theme) => theme.palette.text.primary,
            }}
          >
            Seena restores your{" "}
            <Box component="span" sx={{ color: GOLD }}>
              balance
            </Box>
            <br />
            from the{" "}
            <Box component="span" sx={{ color: GOLD }}>
              inside out
            </Box>
          </MotionTypography>

          {/* 6A. Desktop layout – 4 in a row with 3 connectors */}
          <Stack
            direction="row"
            spacing={0}
            sx={{
              width: "100%",
              mt: { xs: 0, md: 4 },
              justifyContent: "center",
              alignItems: "center",
              display: { xs: "none", md: "flex" },
            }}
          >
            {pillars.map((pillar, index) => {
              const pillarDelay = baseDelay + index * step;
              const connectorDelay = baseDelay + (index + 0.4) * step;

              return (
                <React.Fragment key={pillar.title}>
                  <PillarCard pillar={pillar} delay={pillarDelay} />

                  {index < pillars.length - 1 && (
                    <MotionBox
                      initial={{ scaleX: 0, opacity: 0 }}
                      whileInView={{ scaleX: 1, opacity: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                        delay: connectorDelay,
                      }}
                      sx={{
                        alignSelf: "center",
                        transformOrigin: "left",
                        height: 3,
                        width: 112,
                        mx: 1,
                        borderRadius: 999,
                        backgroundImage: GOLD_GRADIENT,
                      }}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </Stack>

          {/* 6B. Mobile layout – 2×2 grid, connectors between 1–2 and 3–4 */}
          <Stack
            spacing={4}
            sx={{
              width: "100%",
              mt: 3,
              display: { xs: "flex", md: "none" },
            }}
          >
            {Array.from({ length: Math.ceil(pillars.length / 2) }).map(
              (_, rowIndex) => {
                const leftIndex = rowIndex * 2;
                const rightIndex = leftIndex + 1;
                const leftPillar = pillars[leftIndex];
                const rightPillar = pillars[rightIndex];

                const leftDelay = baseDelay + leftIndex * step;
                const rightDelay = baseDelay + rightIndex * step;
                const connectorDelay =
                  baseDelay + (leftIndex + 0.4) * step;

                return (
                  <Stack
                    key={rowIndex}
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                  >
                    {leftPillar && (
                      <PillarCard pillar={leftPillar} delay={leftDelay} />
                    )}

                    {rightPillar && (
                      <>
                        <MotionBox
                          initial={{ scaleX: 0, opacity: 0 }}
                          whileInView={{ scaleX: 1, opacity: 1 }}
                          viewport={{ once: true, amount: 0.3 }}
                          transition={{
                            duration: 0.5,
                            ease: [0.22, 1, 0.36, 1],
                            delay: connectorDelay,
                          }}
                          sx={{
                            height: 3,
                            width: 40,
                            borderRadius: 999,
                            backgroundImage: GOLD_GRADIENT,
                            flexShrink: 0,
                          }}
                        />
                        <PillarCard
                          pillar={rightPillar}
                          delay={rightDelay}
                        />
                      </>
                    )}
                  </Stack>
                );
              }
            )}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default ModernOverdriveSection;
