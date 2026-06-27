// src/components/home/BiggerThanProductSection.tsx
"use client";

import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

import carousel1 from "@/assets/newImages/carousel/1.webp";
import carousel2 from "@/assets/newImages/carousel/2.webp";
import carousel3 from "@/assets/newImages/carousel/3.webp";
import carousel4 from "@/assets/newImages/carousel/4.webp";
import carousel5 from "@/assets/newImages/carousel/5.webp";
import carousel6 from "@/assets/newImages/carousel/6.webp";

// gold gradient clipped to text (same as other section highlights)
const goldGradientTextSx = {
  backgroundImage:
    "linear-gradient(90deg, #ffe8b2 0%, #d77a1e 60%, #1f1306 115%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
  WebkitTextFillColor: "transparent",
} as const;

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);

const CAROUSEL_IMAGES = [
  carousel1,
  carousel2,
  carousel3,
  carousel4,
  carousel5,
  carousel6,
];

const BiggerThanProductSection: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        pt: { xs: 8, md: 14 },
        pb: { xs: 4, md: 6 },
      }}
    >
      <Stack
        spacing={{ xs: 2.5, md: 3 }}
        alignItems="center"
        textAlign="center"
        sx={{
          maxWidth: 1440,
          mx: "auto",
          px: { xs: 2, md: 0 },
        }}
      >
        {/* Eyebrow */}
        <MotionTypography
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          sx={{
            fontFamily: "var(--font-raleway)",
            fontWeight: 700,
            fontSize: { xs: 14, md: 18 },
            letterSpacing: 2,
            textTransform: "uppercase",
            ...goldGradientTextSx,
          }}
        >
          This is bigger than a product
        </MotionTypography>

        {/* Title */}
        <MotionTypography
          variant="h2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
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
            color: "#ffffff",
          }}
        >
          We&apos;re building a{" "}
          <Box component="span" sx={goldGradientTextSx}>
            better way
          </Box>
          <br />
          to live at a{" "}
          <Box component="span" sx={goldGradientTextSx}>
            high level
          </Box>
        </MotionTypography>

        {/* Subtitle */}
        <MotionTypography
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2,
          }}
          sx={{
            fontFamily: "var(--font-inter)",
            fontWeight: 400,
            fontStyle: "italic",
            fontSize: { xs: 16, md: 22 },
            lineHeight: 1.55,
            color: "rgba(255,255,255,0.9)",
            maxWidth: 1000,
          }}
        >
          Seena is for high achievers who want ambition without depletion and
          performance without self-destruction — because life is shaped less
          by one habit than by the environment around you.
        </MotionTypography>

        {/* Infinite autoplaying image carousel */}
        <MotionBox
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.3,
          }}
          sx={(theme) => ({
            position: "relative",
            width: "100%",
            mt: { xs: 3, md: 5 },
            overflow: "hidden",

            // Edge fades
            "&::before": {
              content: '""',
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: { xs: 32, md: 96 },
              zIndex: 1,
              pointerEvents: "none",
              background: `linear-gradient(to right, ${theme.palette.background.default}, rgba(15,23,42,0))`,
            },
            "&::after": {
              content: '""',
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: { xs: 32, md: 96 },
              zIndex: 1,
              pointerEvents: "none",
              background: `linear-gradient(to left, ${theme.palette.background.default}, rgba(15,23,42,0))`,
            },
          })}
        >
          <motion.div
            style={{ display: "flex", width: "max-content" }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 60, ease: "linear", repeat: Infinity }}
          >
            {/* two identical halves -> seamless -50% loop */}
            {[0, 1].map((copy) => (
              <Box
                key={copy}
                sx={{ display: "flex", gap: { xs: 2, md: 3 }, pr: { xs: 2, md: 3 } }}
              >
                {CAROUSEL_IMAGES.map((image, index) => (
                  <Box
                    key={index}
                    sx={{
                      position: "relative",
                      width: { xs: 220, md: 300 },
                      aspectRatio: "5 / 6",
                      flexShrink: 0,
                      borderRadius: "16px",
                      overflow: "hidden",
                      border: "1px solid rgba(214,145,52,0.12)",
                    }}
                  >
                    <Image
                      src={image}
                      alt=""
                      aria-hidden
                      fill
                      sizes="(max-width: 900px) 220px, 300px"
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                ))}
              </Box>
            ))}
          </motion.div>
        </MotionBox>

        {/* Closing line */}
        <MotionTypography
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.3,
          }}
          sx={{
            fontFamily: "var(--font-inter)",
            fontWeight: 300,
            fontSize: { xs: 16, md: 22 },
            lineHeight: 1.55,
            color: "rgba(255,255,255,0.85)",
            maxWidth: 1000,
            pt: { xs: 2, md: 3 },
          }}
        >
          Grounded in research and expert knowledge, and built by high
          performers who know the cost of overdrive, for high performers who
          want to perform at their best without running themselves into the
          ground.
        </MotionTypography>
      </Stack>
    </Box>
  );
};

export default BiggerThanProductSection;
