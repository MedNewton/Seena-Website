// src/components/home/Circles.tsx
"use client";

import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import { motion } from "motion/react";
import circlesHero from "@/assets/images/circles1.webp";

type CirclesProps = {
  backgroundImageUrl?: string;
};

const GOLD = "#D8A24B";

const MotionBox = motion.create(Box);
const MotionStack = motion.create(Stack);
const MotionTypography = motion.create(Typography);
const MotionButton = motion.create(Button);

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.12,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
} as const;

const Circles: React.FC<CirclesProps> = ({
  backgroundImageUrl = circlesHero.src,
}) => {
  return (
    <Box
      id="circles"
      component="section"
      sx={{
        width: "100%",
        scrollMarginTop: "120px",
      }}
    >
      <MotionBox
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: 1440,
          mx: "auto",
          borderRadius: 6,
          overflow: "hidden",
          height: { xs: 460, md: "80vh" },
          minHeight: { md: 500 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#FFFFFF",
          textAlign: "center",
          boxShadow: {
            xs: "0px 18px 45px rgba(15,23,42,0.35)",
            md: "0px 30px 80px rgba(15,23,42,0.5)",
          },
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay so text stays readable */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.75) 100%)",
          }}
        />

        {/* Content */}
        <MotionStack
          variants={itemVariants}
          spacing={{ xs: 2.5, md: 3 }}
          alignItems="center"
          sx={{
            position: "relative",
            zIndex: 1,
            px: { xs: 3, md: 6 },
            maxWidth: 800,
          }}
        >
          <MotionTypography
            variants={itemVariants}
            sx={{
              fontSize: 14,
              letterSpacing: 2,
              textTransform: "uppercase",
              fontWeight: 400,
              fontFamily: "var(--font-montserrat)",
              color: "rgba(249,250,251,0.9)",
            }}
          >
            Seena Circles
          </MotionTypography>

          <MotionTypography
            variants={itemVariants}
            sx={{
              fontFamily: "var(--font-bricolage)",
              fontSize: { xs: 32, md: 64 },
              lineHeight: { xs: 1.15, md: 1.05 },
              fontWeight: 400,
            }}
          >
            From Burnout to
            <br />
            balance&nbsp;
            <Box component="span" sx={{ color: GOLD }}>
              together!
            </Box>
          </MotionTypography>

          <MotionTypography
            variants={itemVariants}
            sx={{
              fontFamily: "var(--font-inter)",
              fontSize: { xs: 14, md: 18 },
              lineHeight: 1.6,
              fontWeight: 300,
              color: "rgba(249,250,251,0.92)",
              maxWidth: 640,
            }}
          >
            A complete transformation system that guides you from exhaustion to
            energy, confusion to clarity, and survival to thriving.
          </MotionTypography>

          <MotionButton
            variants={itemVariants}
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.02 }}
            sx={{
              mt: { xs: 2, md: 3 },
              position: "relative",
              overflow: "hidden",
              borderRadius: 2,
              minWidth: { xs: 170, md: 190 },
              px: 0,
              py: 1.6,
              fontSize: 14,
              textTransform: "uppercase",
              letterSpacing: 1.4,
              fontWeight: 600,
              fontFamily: "var(--font-montserrat)",
              color: "rgba(249,250,251,0.96)",
              borderWidth: 1.5,
              borderStyle: "solid",
              borderColor: GOLD,
              backgroundColor: "transparent",
              boxShadow: "0 0 0 rgba(0,0,0,0)",
              zIndex: 0,
              "&::before": {
                content: '""',
                position: "absolute",
                inset: 0,
                backgroundColor: "#996B41",
                backgroundImage:
                  "url('data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%222000%22 height=%221000%22%3E%3Cg filter=%22url(%23a)%22%3E%3Cpath fill=%22%235A3520%22 d=%22M-1000-500h4000v2000h-4000z%22%2F%3E%3Cpath d=%22m136-197-437 426 65 700L867 105%22 fill=%22%23E1C074%22%2F%3E%3Cpath d=%22m278-71-82 1083 1354 368 17-1255%22 fill=%22%23E1C074%22%2F%3E%3Cpath d=%22M1919 304 807 1000l881 357 285-883%22 fill=%22%2370432A%22%2F%3E%3Cpath d=%22m7 227-502 869 528 430 754-746%22 fill=%22%23895333%22%2F%3E%3Cpath d=%22m787 822-480 538 1055 741 76-583%22 fill=%22%2370432A%22%2F%3E%3Cpath d=%22M1214 806 970 1955l447 305 1050-411%22 fill=%22%23A06637%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3Cfilter id=%22a%22 x=%22-200%22 y=%22-200%22 width=%222400%22 height=%221400%22 filterUnits=%22userSpaceOnUse%22 color-interpolation-filters=%22sRGB%22%3E%3CfeFlood flood-opacity=%220%22 result=%22BackgroundImageFix%22%2F%3E%3CfeBlend in=%22SourceGraphic%22 in2=%22BackgroundImageFix%22 result=%22shape%22%2F%3E%3CfeGaussianBlur stdDeviation=%22200%22 result=%22effect1_foregroundBlur_1_2%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3C%2Fsvg%3E')",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                color: "#111827",
                borderRadius: "inherit",
                transform: "translateY(100%)",
                transformOrigin: "bottom center",
                transition:
                  "transform 260ms cubic-bezier(0.22, 1, 0.36, 1), opacity 200ms ease-out",
                opacity: 0.95,
                zIndex: -1,
              },
              "&:hover::before": {
                transform: "translateY(0%)",
                opacity: 1,
              },
              "&:hover": {
                borderColor: "transparent",
                color: "#0B101B",
                boxShadow: "0 10px 28px rgba(0,0,0,0.4)",
              },
            }}
          >
            Explore
          </MotionButton>
        </MotionStack>
      </MotionBox>
    </Box>
  );
};

export default Circles;
