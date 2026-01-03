// src/components/home/AboutMissionSection.tsx
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
              What We&apos;re Building
            </MotionTypography>
          </Box>

          {/* Content with staggered reveals */}
          <Stack spacing={2.4}>
            {/* 1. Intro paragraph */}
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
                  color: "rgba(248,250,252,0.9)",
                }}
              >
                The health and wellness space is louder than ever. Some solutions
                offer trendy escapes that feel good briefly but fade as soon as
                real life resumes. Others deliver deeper health metrics without
                helping people translate insight into action. High performers
                know neither solves chronic stress.
              </MotionTypography>
            </Box>

            {/* 2. Seena is built line */}
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
                  fontWeight: 500,
                }}
              >
                Seena is built to do something different:
              </MotionTypography>
            </Box>

            {/* 3. First bullet group */}
            <Stack spacing={1.2} sx={{ mt: 0.5 }}>
              {[
                "Help people restore inner balance, energy, and the mind body connection without stepping away from their responsibilities",
                "Cut through noise and turn awareness into practical actions that fit into real days, real schedules, real pressure",
                "Create an environment people do not have to fight against",
              ].map((item, index) => (
                <Box
                  key={`b1-${index}`}
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
                      delay: 0.16 + 0.06 * index,
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
                        mt: 0.65,
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

            {/* 4. Stress today paragraph */}
            <Box sx={{ overflow: "hidden" }}>
              <MotionTypography
                initial={{ y: "10%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.55,
                  delay: 0.36,
                }}
                sx={{
                  fontFamily: "var(--font-inter)",
                  fontSize: { xs: 15.5, md: 17 },
                  lineHeight: 1.85,
                  color: "rgba(248,250,252,0.9)",
                }}
              >
                Stress today is not just internal. It is shaped by food options,
                social settings, work culture, and a growing sense of isolation.
                Many people are doing everything alone, even when they are
                surrounded by others.
              </MotionTypography>
            </Box>

            {/* 5. Seena is not only an app */}
            <Box sx={{ overflow: "hidden" }}>
              <MotionTypography
                initial={{ y: "10%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.55,
                  delay: 0.44,
                }}
                sx={{
                  fontFamily: "var(--font-inter)",
                  fontSize: { xs: 15.5, md: 17 },
                  lineHeight: 1.85,
                  color: "rgba(248,250,252,0.9)",
                }}
              >
                That is why Seena is not only an app. It is a community.
              </MotionTypography>
            </Box>

            {/* 6. We support our users line */}
            <Box sx={{ overflow: "hidden" }}>
              <MotionTypography
                initial={{ y: "10%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.55,
                  delay: 0.52,
                }}
                sx={{
                  fontFamily: "var(--font-inter)",
                  fontSize: { xs: 15.5, md: 17 },
                  lineHeight: 1.85,
                  color: "rgba(248,250,252,0.9)",
                }}
              >
                We support our users on screen and beyond the screen through:
              </MotionTypography>
            </Box>

            {/* 7. Second bullet group */}
            <Stack spacing={1.2} sx={{ mt: 0.5 }}>
              {[
                "Shared experiences that make wellness feel normal, not niche",
                "Access to real world gatherings, classes, and spaces",
                "A sense of connection that counters the loneliness built into modern routines",
              ].map((item, index) => (
                <Box
                  key={`b2-${index}`}
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
                      delay: 0.6 + 0.06 * index,
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
                        mt: 0.65,
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

            {/* 8. The outcome we care about */}
            <Box sx={{ overflow: "hidden" }}>
              <MotionTypography
                initial={{ y: "10%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.55,
                  delay: 0.82,
                }}
                sx={{
                  fontFamily: "var(--font-inter)",
                  fontSize: { xs: 15.5, md: 17 },
                  lineHeight: 1.85,
                  color: "rgba(248,250,252,0.9)",
                  fontWeight: 500,
                }}
              >
                The outcome we care about:
              </MotionTypography>
            </Box>

            {/* 9. Outcome paragraph */}
            <Box sx={{ overflow: "hidden" }}>
              <MotionTypography
                initial={{ y: "10%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.55,
                  delay: 0.9,
                }}
                sx={{
                  fontFamily: "var(--font-inter)",
                  fontSize: { xs: 15.5, md: 17 },
                  lineHeight: 1.85,
                  color: "rgba(248,250,252,0.9)",
                }}
              >
                People feel steady in their body, clear in their mind, and
                reconnected to a deeper sense of meaning and purpose, supported
                enough to handle pressure without constantly feeling depleted.
              </MotionTypography>
            </Box>

            {/* 10. Closing line */}
            <Box sx={{ overflow: "hidden" }}>
              <MotionTypography
                initial={{ y: "10%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.55,
                  delay: 0.98,
                }}
                sx={{
                  fontFamily: "var(--font-inter)",
                  fontSize: { xs: 15.5, md: 17 },
                  lineHeight: 1.85,
                  color: "rgba(248,250,252,0.9)",
                  fontWeight: 500,
                }}
              >
                That is how performance becomes sustainable.
              </MotionTypography>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default AboutMissionSection;
