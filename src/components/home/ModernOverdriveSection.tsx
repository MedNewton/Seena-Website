// src/components/home/ModernOverdriveSection.tsx
"use client";

import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

const GOLD = "#D8A24B";

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

const ModernOverdriveSection: React.FC = () => {
  const baseDelay = 0.9;
  const step = 0.16;

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        bgcolor: (theme) => theme.palette.background.default,
        py: { xs: 10, md: 16 },
      }}
    >
      <Container maxWidth="lg">
        <Stack
          spacing={{ xs: 4, md: 7 }} // less vertical spacing overall
          alignItems="center"
          textAlign="center"
        >
          {/* 1. Main title */}
          <MotionTypography
            variant="h3"
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
              fontWeight: 400,
              fontSize: { xs: 28, md: 40 },
              lineHeight: 1.4,
              color: (theme) => theme.palette.text.primary,
            }}
          >
            Modern Life Rewards Overdrive
          </MotionTypography>

          {/* 1.5 Intro paragraph */}
          <MotionTypography
            variant="body1"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.55,
              ease: [0.25, 0.8, 0.25, 1],
              delay: 0.25,
            }}
            sx={{
              maxWidth: 640,
              fontFamily: "var(--font-inter)",
              fontWeight: 300,
              fontSize: { xs: 14, md: 16 },
              lineHeight: 1.7,
              color: "rgba(248,250,252,0.8)",
            }}
          >
            Hyper-connection, constant performance pressure and an always-on
            nervous system have become the default. We push harder, sleep
            less, and call it ambition – while our bodies quietly interpret
            it as a long, slow emergency.
          </MotionTypography>

          {/* 2. Subtitle */}
          <MotionTypography
            variant="h6"
            variants={subtitleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            sx={{
              fontFamily: "var(--font-inter)",
              fontWeight: 400,
              fontSize: { xs: 17, md: 22 },
              lineHeight: 1.6,
              color: (theme) => theme.palette.text.primary,
            }}
          >
            <Box component="span" sx={{ color: "inherit" }}>
              Our body calls it{" "}
            </Box>

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
                inflation
              </motion.span>
            </Box>

            <Box component="span" sx={{ color: "inherit" }}>
              , our mind calls it{" "}
            </Box>

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
          </MotionTypography>

          {/* 3. Middle title */}
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
              fontWeight: 400,
              fontSize: { xs: 26, md: 36 },
              lineHeight: 1.4,
              color: (theme) => theme.palette.text.primary,
              mt: { xs: 1.5, md: 3 }, // smaller top margin
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

          {/* 4. Four pillars + connectors */}
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 5, md: 0 }}
            sx={{ width: "100%", mt: { xs: 3, md: 4 } }} // a bit closer to titles
            justifyContent="center"
            alignItems={{ xs: "stretch", md: "center" }}
          >
            {pillars.map((pillar, index) => {
              const pillarDelay = baseDelay + index * step;
              const connectorDelay = baseDelay + (index + 0.4) * step;

              return (
                <React.Fragment key={pillar.title}>
                  {/* Pillar */}
                  <MotionBox
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.55,
                      ease: [0.22, 1, 0.36, 1],
                      delay: pillarDelay,
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
                    <Box
                      sx={{
                        width: 52,
                        height: 52,
                        borderRadius: "50%",
                        border: "1px solid rgba(255,255,255,0.6)",
                        mb: 2.5,
                      }}
                    />

                    <Typography
                      sx={{
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

                  {/* Connector – desktop only */}
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
                        display: { xs: "none", md: "block" },
                        alignSelf: "center",
                        transformOrigin: "left",
                        height: 2,
                        width: 112,
                        mx: 1,
                        borderRadius: 999,
                        backgroundColor: "rgba(255,255,255,0.7)",
                      }}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default ModernOverdriveSection;
