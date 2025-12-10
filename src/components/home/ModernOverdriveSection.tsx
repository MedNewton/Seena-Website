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
          spacing={{ xs: 4, md: 7 }}
          alignItems="center"
          textAlign="center"
        >
          {/* 1. Main title – bigger */}
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
              fontWeight: 500,
              fontSize: { xs: 32, md: 64 },
              lineHeight: 1.25,
              color: (theme) => theme.palette.text.primary,
            }}
          >
            Modern Life Rewards Overdrive
          </MotionTypography>

          {/* 2. Subtitle – two lines, animated gold words */}
          <MotionTypography
            variant="h6"
            variants={subtitleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            sx={{
              fontFamily: "var(--font-inter)",
              fontWeight: 400,
              fontSize: { xs: 18, md: 28 },
              lineHeight: 1.6,
              color: (theme) => theme.palette.text.primary,
            }}
          >
            {/* Line 1 */}
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
                  inflation
                </motion.span>
              </Box>
            </Box>

            {/* Line 2 */}
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

          {/* 3. Connecting golden line (problem -> solution) */}
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
              height: { xs: 90, md: 120 }, // longer line
              borderRadius: 999,
              backgroundImage: GOLD_GRADIENT,
              mt: { xs: 1, md: 1.5 }, // slightly less spacing
              mb: { xs: 1, md: 1.75 }, // slightly less spacing
              transformOrigin: "top",
            }}
          />

          {/* 4. Solution title */}
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
              fontSize: { xs: 32, md: 64 },
              lineHeight: 1.4,
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

          {/* 5. Four pillars with golden 3D-ish flipping circles + gradient connectors */}
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 5, md: 0 }}
            sx={{ width: "100%", mt: { xs: 3, md: 4 } }}
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
                    {/* Golden gradient coin-flip circle */}
                    <motion.div
                      style={{
                        width: 64,
                        height: 64,
                        borderRadius: "50%",
                        backgroundImage: GOLD_GRADIENT,
                        boxShadow: "0 0 0 1px rgba(248,250,252,0.45)", // neutral outline, no blue
                        transformStyle: "preserve-3d",
                      }}
                      initial={{ rotateY: 0 }}
                      animate={{ rotateY: 0 }}
                      transition={{
                        duration: 4,
                        repeat: 1,
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

                  {/* Connector – desktop only, golden gradient */}
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
        </Stack>
      </Container>
    </Box>
  );
};

export default ModernOverdriveSection;
