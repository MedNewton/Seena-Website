// src/components/home/Hero.tsx
"use client";

import React, { useEffect, useState } from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import NewButton from "@/components/ui/newButton";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
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
            spacing={{ xs: 2.5, md: 18 }}
            alignItems="center"
            justifyContent="center"
            sx={{
              transform: "translateY(8rem)",
            }}
          >
            {/* DIGITAL – primary */}
            <MotionButton
            onClick={() => router.push("/experiences")}
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
                backgroundColor: "#996B41",
                backgroundImage:
                  "url('data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%222000%22 height=%221000%22%3E%3Cg filter=%22url(%23a)%22%3E%3Cpath fill=%22%235A3520%22 d=%22M-1000-500h4000v2000h-4000z%22%2F%3E%3Cpath d=%22m136-197-437 426 65 700L867 105%22 fill=%22%23E1C074%22%2F%3E%3Cpath d=%22m278-71-82 1083 1354 368 17-1255%22 fill=%22%23E1C074%22%2F%3E%3Cpath d=%22M1919 304 807 1000l881 357 285-883%22 fill=%22%2370432A%22%2F%3E%3Cpath d=%22m7 227-502 869 528 430 754-746%22 fill=%22%23895333%22%2F%3E%3Cpath d=%22m787 822-480 538 1055 741 76-583%22 fill=%22%2370432A%22%2F%3E%3Cpath d=%22M1214 806 970 1955l447 305 1050-411%22 fill=%22%23A06637%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3Cfilter id=%22a%22 x=%22-200%22 y=%22-200%22 width=%222400%22 height=%221400%22 filterUnits=%22userSpaceOnUse%22 color-interpolation-filters=%22sRGB%22%3E%3CfeFlood flood-opacity=%220%22 result=%22BackgroundImageFix%22%2F%3E%3CfeBlend in=%22SourceGraphic%22 in2=%22BackgroundImageFix%22 result=%22shape%22%2F%3E%3CfeGaussianBlur stdDeviation=%22200%22 result=%22effect1_foregroundBlur_1_2%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3C%2Fsvg%3E')",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
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
            onClick={() => router.push("/app")}
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
                backgroundColor: "#996B41",
                backgroundImage:
                  "url('data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%222000%22 height=%221000%22%3E%3Cg filter=%22url(%23a)%22%3E%3Cpath fill=%22%235A3520%22 d=%22M-1000-500h4000v2000h-4000z%22%2F%3E%3Cpath d=%22m136-197-437 426 65 700L867 105%22 fill=%22%23E1C074%22%2F%3E%3Cpath d=%22m278-71-82 1083 1354 368 17-1255%22 fill=%22%23E1C074%22%2F%3E%3Cpath d=%22M1919 304 807 1000l881 357 285-883%22 fill=%22%2370432A%22%2F%3E%3Cpath d=%22m7 227-502 869 528 430 754-746%22 fill=%22%23895333%22%2F%3E%3Cpath d=%22m787 822-480 538 1055 741 76-583%22 fill=%22%2370432A%22%2F%3E%3Cpath d=%22M1214 806 970 1955l447 305 1050-411%22 fill=%22%23A06637%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3Cfilter id=%22a%22 x=%22-200%22 y=%22-200%22 width=%222400%22 height=%221400%22 filterUnits=%22userSpaceOnUse%22 color-interpolation-filters=%22sRGB%22%3E%3CfeFlood flood-opacity=%220%22 result=%22BackgroundImageFix%22%2F%3E%3CfeBlend in=%22SourceGraphic%22 in2=%22BackgroundImageFix%22 result=%22shape%22%2F%3E%3CfeGaussianBlur stdDeviation=%22200%22 result=%22effect1_foregroundBlur_1_2%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3C%2Fsvg%3E')",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                color: "#111827",
                boxShadow: "0 22px 55px rgba(0,0,0,0.45)",
                border: "none",
                "&:hover": {
                  backgroundColor: GOLD,
                  boxShadow: "0 26px 70px rgba(0,0,0,0.55)",
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
