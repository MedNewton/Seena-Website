// src/components/home/Hero.tsx
"use client";

import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import bg from "@/assets/newImages/hero.webp";
import NewButton from "@/components/ui/newButton";

const GOLD = "rgb(216, 162, 75)";

const HEADER_OFFSET = 96;

const MotionTypography = motion(Typography);
const MotionButton = motion(Button);
const MotionBox = motion(Box);

const goldTextSx = {
  color: GOLD,
} as const;

const Hero: React.FC = () => {
  const router = useRouter();

  const scrollToSection = (targetId: string): void => {
    const element = document.getElementById(targetId);
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const elementTop = rect.top + window.scrollY;

    window.scrollTo({
      top: elementTop - HEADER_OFFSET,
      behavior: "smooth",
    });
  };

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
          spacing={{ xs: 3, md: 4 }}
          alignItems="center"
          sx={{ color: "#ffffff", textAlign: "center", maxWidth: 1100 }}
        >
          {/* Headline */}
          <MotionTypography
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.3,
            }}
            sx={{
              fontSize: { xs: 38, md: 84 },
              lineHeight: 1.1,
              fontWeight: 500,
              fontFamily: "var(--font-bricolage)",
            }}
          >
            <Box component="span" sx={goldTextSx}>
              Perform
            </Box>{" "}
            at your peak
            <br />
            without{" "}
            <Box component="span" sx={goldTextSx}>
              burning out
            </Box>
          </MotionTypography>

          {/* Subtitle */}
          <MotionTypography
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.45,
            }}
            sx={{
              fontSize: { xs: 16, md: 22 },
              lineHeight: 1.5,
              fontWeight: 300,
              fontFamily: "var(--font-bricolage)",
              color: "rgba(249,250,251,0.92)",
              maxWidth: 720,
            }}
          >
            Built to understand where you&apos;re at, connect you with people
            who push you, and drive you to take action
          </MotionTypography>

          {/* CTA row */}
          <MotionBox
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.6,
            }}
            sx={{ pt: { xs: 1, md: 2 } }}
          >
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 2, sm: 3 }}
              alignItems={{ xs: "stretch", sm: "center" }}
              justifyContent="center"
              sx={{
                width: { xs: "100%", sm: "auto" },
                maxWidth: { xs: 340, sm: "none" },
                mx: "auto",
              }}
            >
              {/* Primary – same golden gradient as the header CTA */}
              <NewButton
                label="Join Early Access"
                onClick={() => router.push("/#early-access")}
              />

              {/* Secondary – gradient border, transparent background */}
              <MotionButton
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection("app")}
                sx={{
                  borderRadius: 9999,
                  px: 5.5,
                  py: 0,
                  // match NewButton: 14px padding + 16px line + 1px border = 46px
                  height: 46,
                  fontSize: 16,
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                  lineHeight: 1,
                  textTransform: "none",
                  fontFamily: "var(--font-montserrat)",
                  color: "rgba(249,250,251,0.96)",
                  backgroundColor: "transparent",
                  boxShadow: "none",
                  border: `1px solid ${GOLD}`,
                  "&:hover": {
                    backgroundColor: "rgba(216,162,75,0.08)",
                  },
                }}
              >
                See How It Works
              </MotionButton>
            </Stack>
          </MotionBox>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Hero;
