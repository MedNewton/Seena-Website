// src/components/home/Hero.tsx
"use client";

import React, { useEffect, useState } from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import bg from "@/assets/images/bg1.webp";

const GOLD = "#D8A24B";

const WORDS = ["calm", "clarity", "control"] as const;
type ChangingWord = (typeof WORDS)[number];

const wordVariants = {
  enter: {
    opacity: 0,
    y: 0,
    filter: "blur(8px)",
  },
  center: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: 0,
    filter: "blur(10px)",
    transition: {
      duration: 0.6,
      ease: "easeIn",
    },
  },
} as const;

const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isMiddleActive, setIsMiddleActive] = useState<boolean>(false);

  useEffect(() => {
    const INTRO_DELAY_MS = 1200;
    let intervalId: number | null = null;

    const timeoutId: number = window.setTimeout(() => {
      setIsMiddleActive(true);

      intervalId = window.setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % WORDS.length);
      }, 4000);
    }, INTRO_DELAY_MS);

    return () => {
      window.clearTimeout(timeoutId);
      if (intervalId !== null) {
        window.clearInterval(intervalId);
      }
    };
  }, []);

  const currentWord: ChangingWord = WORDS[currentIndex]!;
  const capitalizedWord = `${currentWord.charAt(0).toUpperCase()}${currentWord.slice(
    1
  )}`;

  return (
    <Stack
      id="hero"
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        height: "100%",
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      <Image
        src={bg}
        alt="Hero background"
        fill
        priority
        style={{
          objectFit: "cover",
        }}
      />

      {/* Dark overlay for readability */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.6) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Centered content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 2, md: 6 },
        }}
      >
        <Stack
          spacing={{ xs: 4, md: 0 }}
          alignItems="center"
          sx={{ color: "#ffffff", textAlign: "center" }}
        >
          {/* Headline row */}
          <Stack
            direction="row"
            spacing={{ xs: 1.5, md: 4 }}
            alignItems="baseline"
            justifyContent="center"
          >
            {/* Left word */}
            <MotionTypography
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.3,
              }}
              sx={{
                fontSize: { xs: 36, md: 96 },
                lineHeight: 1,
                fontWeight: 300,
                fontFamily: "var(--font-bricolage)",
              }}
            >
              Find
            </MotionTypography>

            {/* Animated middle word */}
            <Box
              sx={{
                position: "relative",
                minWidth: { xs: 140, md: 460 },
                display: "flex",
                justifyContent: "center",
              }}
            >
              <AnimatePresence mode="wait">
                {isMiddleActive && (
                  <motion.span
                    key={currentWord}
                    variants={wordVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    style={{ display: "inline-block" }}
                  >
                    <Typography
                      component="span"
                      sx={{
                        fontSize: { xs: 40, md: 96 },
                        lineHeight: 1,
                        fontWeight: 400,
                        fontStyle: "italic",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-bricolage)",
                      }}
                    >
                      {capitalizedWord}
                    </Typography>
                  </motion.span>
                )}
              </AnimatePresence>
            </Box>

            {/* Right word */}
            <MotionTypography
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.4,
              }}
              sx={{
                fontSize: { xs: 36, md: 96 },
                lineHeight: 1,
                fontWeight: 300,
                fontFamily: "var(--font-bricolage)",
              }}
            >
              within
            </MotionTypography>
          </Stack>

          {/* CTA row – larger + more visible */}
          <Stack
            direction="row"
            spacing={{ xs: 2.5, md: 6 }}
            alignItems="center"
            justifyContent="center"
            sx={{
              transform: "translateY(8rem)",
            }}
          >
            {/* DIGITAL – primary */}
            <MotionButton
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.9,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              sx={{
                borderRadius: 999,
                minWidth: { xs: 190, md: 230 },
                px: { xs: 4, md: 5.5 },
                py: { xs: 1.6, md: 1.9 },
                fontSize: { xs: 13.5, md: 15 },
                letterSpacing: 2,
                textTransform: "uppercase",
                fontWeight: 700,
                fontFamily: "var(--font-montserrat)",
                backgroundColor: GOLD,
                color: "#111827",
                boxShadow: "0 22px 55px rgba(0,0,0,0.45)",
                border: "none",
                "&:hover": {
                  backgroundColor: GOLD,
                  boxShadow: "0 26px 70px rgba(0,0,0,0.55)",
                },
              }}
            >
              Digital
            </MotionButton>

            {/* PHYSICAL – secondary outline */}
            <MotionButton
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
                delay: 1.05,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              sx={{
                borderRadius: 999,
                minWidth: { xs: 190, md: 230 },
                px: { xs: 4, md: 5.5 },
                py: { xs: 1.6, md: 1.9 },
                fontSize: { xs: 13.5, md: 15 },
                letterSpacing: 2,
                textTransform: "uppercase",
                fontWeight: 700,
                fontFamily: "var(--font-montserrat)",
                backgroundColor: "rgba(0,0,0,0.25)",
                color: "#F9FAFB",
                borderWidth: 1.8,
                borderStyle: "solid",
                borderColor: GOLD,
                boxShadow: "0 12px 35px rgba(0,0,0,0.4)",
                "&:hover": {
                  backgroundColor: "rgba(0,0,0,0.4)",
                  boxShadow: "0 18px 48px rgba(0,0,0,0.55)",
                },
              }}
            >
              Physical
            </MotionButton>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Hero;
