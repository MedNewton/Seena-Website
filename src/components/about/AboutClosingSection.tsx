"use client";

import type { FC } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionTypography = motion.create(Typography);

const AboutClosingSection: FC = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 4 },
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
        <Stack spacing={2} alignItems="center" textAlign="center">
          <Box sx={{ overflow: "hidden" }}>
            <MotionTypography
              initial={{ y: "10%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.55,
              }}
              sx={{
                fontFamily: "var(--font-inter)",
                fontSize: { xs: 14.5, md: 16 },
                lineHeight: 1.8,
                color: "rgba(248,250,252,0.9)",
              }}
            >
              Seena is not just restoring wellness — it&apos;s restoring the
              human system.
            </MotionTypography>
          </Box>

          <Box sx={{ overflow: "hidden" }}>
            <MotionTypography
              initial={{ y: "10%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.55,
                delay: 0.08,
              }}
              sx={{
                fontFamily: "var(--font-inter)",
                fontSize: { xs: 14.5, md: 16 },
                lineHeight: 1.8,
                color: "rgba(248,250,252,0.9)",
              }}
            >
              From overdrive to alignment. From burnout to balance.
            </MotionTypography>
          </Box>

          <Box sx={{ overflow: "hidden" }}>
            <MotionTypography
              initial={{ y: "10%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.55,
                delay: 0.16,
              }}
              sx={{
                fontFamily: "var(--font-inter)",
                fontSize: { xs: 14.5, md: 16 },
                lineHeight: 1.8,
                color: "rgba(248,250,252,0.9)",
              }}
            >
              This is your rise. From the inside out.
            </MotionTypography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default AboutClosingSection;
