"use client";

import type { FC } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionTypography = motion.create(Typography);

const STORY_PARAGRAPHS: readonly string[] = [
  "Modern life runs on overdrive. We glorify productivity, chase momentum, and call exhaustion “normal.”",
  "But somewhere along the way, the mind disconnected from the body — and the body stopped listening to the soul.",
  "Every day, millions wake up tired, anxious, and overstimulated. They try meditation apps, gym memberships, cold plunges, and green juices. They scroll through wellness tips that promise relief but deliver more noise. They optimize everything — except the one thing that truly matters: their inner state.",
  "Behind the fatigue, inflammation, and distraction lies a silent epidemic — chronic stress. It’s the invisible root behind most of today’s suffering: cardiovascular and metabolic diseases, mental and neurological imbalances, digestive issues, immune dysfunction, behavioral changes, and even the way we age. It shapes how we look, feel, think, and connect — yet remains the most underestimated force of modern life.",
  "At Seena, we believe burnout isn’t just a lack of rest. It’s a loss of alignment. Your system has forgotten how to regulate itself — and no quick fix can teach it balance again.",
  "We built Seena to help people remember their natural rhythm. Not through escape, but through mastery. Not through control, but through understanding. Not through perfection, but through presence.",
  "Seena isn’t just an app. It’s your mirror, your mentor, and your movement — a journey back to yourself.",
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
              Our Story
            </MotionTypography>
          </Box>

          {/* Paragraphs with individual mask reveals */}
          <Stack spacing={2.4}>
            {STORY_PARAGRAPHS.map((text, index) => (
              <Box
                key={index}
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
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default AboutStorySection;
