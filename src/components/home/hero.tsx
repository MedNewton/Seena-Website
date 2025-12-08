// src/old/sections/Hero.tsx
"use client";

import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import bg from "@/assets/images/bg1.webp";

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

      {/* Centered text row */}
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
          direction="row"
          spacing={{ xs: 1.5, md: 4 }}
          alignItems="baseline"
          justifyContent="center"
          sx={{
            color: "#ffffff",
            textAlign: "center",
          }}
        >
          {/* Left word: reveal from bottom */}
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
            }}
          >
            Find
          </MotionTypography>

          {/* Animated middle word (starts after intro delay) */}
          <Box
            sx={{
              position: "relative",
              minWidth: { xs: 120, md: 440 },
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
                    }}
                  >
                    {capitalizedWord}
                  </Typography>
                </motion.span>
              )}
            </AnimatePresence>
          </Box>

          {/* Right word: reveal from bottom */}
          <MotionTypography
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.4, // slightly after "Find"
            }}
            sx={{
              fontSize: { xs: 36, md: 96 },
              lineHeight: 1,
              fontWeight: 300,
            }}
          >
            within
          </MotionTypography>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Hero;
