"use client";

import type { FC } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionTypography = motion.create(Typography);

const AboutMissionSection: FC = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 2 },
        bgcolor: (theme) => theme.palette.background.default,
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: 1440,
          mx: "auto",
        }}
      >
        <Stack spacing={3}>
          {/* Title with reveal */}
          <Box
            sx={{
              overflow: "hidden",
              display: "inline-block",
            }}
          >
            <MotionTypography
              initial={{ y: "10%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{
                duration: 0.6,
              }}
              sx={{
                fontFamily: "var(--font-bricolage)",
                fontSize: { xs: 30, md: 36 },
                fontWeight: 500,
                color: "rgba(248,250,252,0.96)",
              }}
            >
              Our Mission
            </MotionTypography>
          </Box>

          {/* Paragraphs with staggered reveal */}
          <Stack spacing={2.4}>
            <Box sx={{ overflow: "hidden" }}>
              <MotionTypography
                initial={{ y: "10%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.55,
                  delay: 0,
                }}
                sx={{
                  fontFamily: "var(--font-inter)",
                  fontSize: { xs: 15.5, md: 17 },
                  lineHeight: 1.85,
                  fontWeight: 500,
                  color: "rgba(248,250,252,0.9)",
                }}
              >
                To help every human become their own source of balance.
              </MotionTypography>
            </Box>

            <Box sx={{ overflow: "hidden" }}>
              <MotionTypography
                initial={{ y: "10%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.55,
                  delay: 0.08,
                }}
                sx={{
                  fontFamily: "var(--font-inter)",
                  fontSize: { xs: 15.5, md: 17 },
                  lineHeight: 1.85,
                  color: "rgba(248,250,252,0.9)",
                }}
              >
                We&apos;re creating a new paradigm of wellness — one that
                combines AI intelligence with human intuition, science with
                spirituality, data with daily practice.
              </MotionTypography>
            </Box>

            <Box sx={{ overflow: "hidden" }}>
              <MotionTypography
                initial={{ y: "10%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.55,
                  delay: 0.16,
                }}
                sx={{
                  fontFamily: "var(--font-inter)",
                  fontSize: { xs: 15.5, md: 17 },
                  lineHeight: 1.85,
                  color: "rgba(248,250,252,0.9)",
                }}
              >
                Seena helps you know your state, restore your energy, and build
                rituals that heal. It&apos;s your coach, your companion, and
                your system for sustainable transformation.
              </MotionTypography>
            </Box>

            <Box sx={{ overflow: "hidden" }}>
              <MotionTypography
                initial={{ y: "10%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.55,
                  delay: 0.24,
                }}
                sx={{
                  fontFamily: "var(--font-inter)",
                  fontSize: { xs: 15.5, md: 17 },
                  lineHeight: 1.85,
                  color: "rgba(248,250,252,0.9)",
                }}
              >
                Because we don&apos;t just want you to feel better — we want you
                to live awake, to perform without depletion, to connect without
                losing yourself, to rise without burning out.
              </MotionTypography>
            </Box>

            <Box sx={{ overflow: "hidden" }}>
              <MotionTypography
                initial={{ y: "10%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.55,
                  delay: 0.32,
                }}
                sx={{
                  fontFamily: "var(--font-inter)",
                  fontSize: { xs: 15.5, md: 17 },
                  lineHeight: 1.85,
                  color: "rgba(248,250,252,0.9)",
                }}
              >
                The mission is simple:
                <br />
                Reclaim control from chaos.
                <br />
                Find your balance within.
              </MotionTypography>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default AboutMissionSection;
