// src/components/home/AboutStorySection.tsx
"use client";

import type { FC } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionTypography = motion.create(Typography);

const STORY_PARAGRAPHS: readonly string[] = [
  "Always on. Always pushing. Always expected to perform without missing a beat.",
  "Most people we know are doing everything right on paper, but chronic stress adds up. It shows up in last minute meetings, late nights, early mornings, and the constant mismatch between the energy you have and the energy life demands. You feel it when work follows you home, when your body lags behind your ambition, and when rest never quite feels restorative.",
  "Chronic stress is often the common thread behind many physical and mental issues, quietly impacting everything from digestion and sleep to mood, focus, and resilience.",
  "We live in a world class medical system that excels at diagnosis and crisis care. But when it comes to chronic stress and long term wear on the body, the focus is often on managing symptoms rather than restoring balance.",
];

const GAP_BULLETS: readonly string[] = [
  "High functioning people pushing through exhaustion as if it’s normal",
  "Symptoms that don’t feel severe enough for intervention, but never fully go away",
  "No clear playbook for fixing the problem without stepping away from life",
];

const AboutStorySection: FC = () => {
  return (
    <Box
      component="section"
      sx={{
        pt: { xs: 8, md: 4 },
        pb: { xs: 8, md: 2 },
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
          {/* Title with mask reveal */}
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
              The Gap We Saw
            </MotionTypography>
          </Box>

          {/* Paragraphs + bullets with individual mask reveals */}
          <Stack spacing={2.4}>
            {STORY_PARAGRAPHS.map((text, index) => (
              <Box
                key={`p-${index}`}
                sx={{
                  overflow: "hidden",
                }}
              >
                <MotionTypography
                  initial={{ y: "10%", opacity: 0 }}
                  whileInView={{ y: "0%", opacity: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.55,
                    delay: 0.08 * index,
                  }}
                  sx={{
                    fontFamily: "var(--font-inter)",
                    fontSize: { xs: 15.5, md: 17 },
                    lineHeight: 1.85,
                    color: "rgba(248,250,252,0.9)",
                  }}
                >
                  {text}
                </MotionTypography>
              </Box>
            ))}

            {/* "We kept seeing the same gap:" */}
            <Box
              sx={{
                overflow: "hidden",
              }}
            >
              <MotionTypography
                initial={{ y: "10%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.55,
                  delay: 0.08 * STORY_PARAGRAPHS.length,
                }}
                sx={{
                  fontFamily: "var(--font-inter)",
                  fontSize: { xs: 15.5, md: 17 },
                  lineHeight: 1.85,
                  color: "rgba(248,250,252,0.9)",
                  fontWeight: 500,
                }}
              >
                We kept seeing the same gap:
              </MotionTypography>
            </Box>

            {/* Bullet list */}
            <Stack spacing={1.2} sx={{ mt: 0.5 }}>
              {GAP_BULLETS.map((item, index) => (
                <Box
                  key={`b-${index}`}
                  sx={{
                    overflow: "hidden",
                  }}
                >
                  <MotionTypography
                    initial={{ y: "10%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                      duration: 0.55,
                      delay:
                        0.08 * STORY_PARAGRAPHS.length +
                        0.08 * (index + 1),
                    }}
                    sx={{
                      fontFamily: "var(--font-inter)",
                      fontSize: { xs: 15.5, md: 17 },
                      lineHeight: 1.8,
                      color: "rgba(248,250,252,0.9)",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 1.5,
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        mt: 0.6,
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        bgcolor: "rgba(248,250,252,0.9)",
                        flexShrink: 0,
                      }}
                    />
                    <Box component="span">{item}</Box>
                  </MotionTypography>
                </Box>
              ))}
            </Stack>

            {/* Closing sentence: "Seena started there." */}
            <Box
              sx={{
                overflow: "hidden",
              }}
            >
              <MotionTypography
                initial={{ y: "10%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.55,
                  delay:
                    0.08 * STORY_PARAGRAPHS.length +
                    0.08 * (GAP_BULLETS.length + 1),
                }}
                sx={{
                  fontFamily: "var(--font-inter)",
                  fontSize: { xs: 15.5, md: 17 },
                  lineHeight: 1.85,
                  color: "rgba(248,250,252,0.9)",
                  fontWeight: 500,
                }}
              >
                Seena started there.
              </MotionTypography>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default AboutStorySection;
