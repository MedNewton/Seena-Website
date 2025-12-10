"use client";

import type { FC } from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

type ValueItem = {
  title: string;
  subtitle: string;
  body: string;
};

const values: ValueItem[] = [
  {
    title: "Wholeness over Hustle",
    subtitle: "",
    body:
      "We don't glorify being busy. We honor being balanced.\n" +
      "Progress means integration — not fragmentation.",
  },
  {
    title: "Inner Science",
    subtitle: "",
    body:
      "Your body and mind are data-rich systems.\n" +
      "We help you listen, measure, and transform from within.",
  },
  {
    title: "Active Spirit",
    subtitle: "",
    body:
      "Movement is medicine. Stillness is strength.\n" +
      "Seena lives where action meets awareness.",
  },
  {
    title: "Real Connection",
    subtitle: "",
    body:
      "Community is not a trend — it's a biological need.\n" +
      "Healing happens faster together.",
  },
  {
    title: "Self-Mastery",
    subtitle: "",
    body:
      "We believe in evolution, not escape.\n" +
      "Every challenge is fuel. Every breath, a return to power.",
  },
];

const MotionTypography = motion.create(Typography);
const MotionBox = motion.create(Box);

const AboutValuesSection: FC = () => {
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
        <Stack spacing={4}>
          {/* Title with same mask-style reveal */}
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
                fontSize: { xs: 28, md: 34 },
                fontWeight: 500,
                color: "rgba(248,250,252,0.96)",
              }}
            >
              Our Values
            </MotionTypography>
          </Box>

          <Grid
            container
            spacing={3}
            sx={{
              "& > .MuiGrid-item:nth-of-type(1), & > .MuiGrid-item:nth-of-type(2), & > .MuiGrid-item:nth-of-type(3)": {
                width: { md: "33.3333%" },
              },
              "& > .MuiGrid-item:nth-of-type(4), & > .MuiGrid-item:nth-of-type(5)": {
                width: { md: "33.3333%" },
              },
            }}
          >
            {values.map((value, index) => (
              <Grid key={value.title} size={{ xs: 12, md: 4 }}>
                <MotionBox
                  initial={{ y: "10%", opacity: 0 }}
                  whileInView={{ y: "0%", opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.55,
                    delay: 0.08 * index,
                  }}
                  sx={{
                    borderRadius: 3,
                    bgcolor: "rgba(249,250,251,0.9)",
                    border: "1px solid rgba(209,213,219,0.8)",
                    px: 3,
                    py: 3,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "var(--font-inter)",
                      fontSize: { xs: 14.5, md: 15 },
                      fontWeight: 600,
                      color: "#111827",
                      mb: 1,
                    }}
                  >
                    {index + 1}. {value.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: "var(--font-inter)",
                      whiteSpace: "pre-line",
                      fontSize: { xs: 13.5, md: 14.5 },
                      lineHeight: 1.7,
                      color: "#4B5563",
                    }}
                  >
                    {value.body}
                  </Typography>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default AboutValuesSection;
