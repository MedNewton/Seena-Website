// src/components/home/Hero.tsx
"use client";

import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import bg from "@/assets/newImages/newHeroBG.webp";
import NewButton from "@/components/ui/newButton";

const GOLD = "rgb(216, 162, 75)";

const HEADER_OFFSET = 96;

// warm gold gradient applied to the "PEAK" word
const goldGradientTextSx = {
  background: "linear-gradient(90deg, #ffe8b2 0%, #d8a24b 45%, #a85f1a 100%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
  WebkitTextFillColor: "transparent",
} as const;

const MotionTypography = motion(Typography);
const MotionButton = motion(Button);
const MotionBox = motion(Box);

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
              lineHeight: 1,
              fontWeight: 900,
              fontFamily: "var(--font-montserrat)",
              textTransform: "uppercase",
              color: "#ffffff",
              textAlign: "center",
            }}
          >
            {/* normal centered lines: line 1 big, line 2 bigger, line 3 smaller */}
            <Box
              component="span"
              sx={{
                display: "block",
                fontSize: { xs: 50, sm: 70, md: 100, lg: 120 },
              }}
            >
              Perform at
            </Box>
            <Box
              component="span"
              sx={{
                display: "block",
                fontSize: { xs: 62, sm: 88, md: 125, lg: 150 },
              }}
            >
              Your{" "}
              <Box component="span" sx={goldGradientTextSx}>
                peak
              </Box>
            </Box>
            <Box
              component="span"
              sx={{
                display: "block",
                fontSize: { xs: 28, sm: 38, md: 52, lg: 62 },
              }}
            >
              Without burning out
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
              maxWidth: 760,
              fontSize: { xs: 18, sm: 22, md: 28, lg: 30 },
              lineHeight: 1.5,
              fontWeight: 400,
              fontStyle: "italic",
              fontFamily: "var(--font-josefin)",
              color: "#ffffff",
              textAlign: "center",
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
                labelFontFamily="var(--font-raleway)"
                labelWeight={700}
                uppercase
                labelColor="#ffffff"
                onClick={() => router.push("/#early-access")}
              />

              {/* Secondary – gradient border, transparent background */}
              <MotionButton
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection("app")}
                sx={{
                  borderRadius: "12px",
                  px: 5.5,
                  py: 0,
                  // match NewButton: 14px padding + 16px line + 1px border = 46px
                  height: 46,
                  fontSize: 16,
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  lineHeight: 1,
                  textTransform: "uppercase",
                  fontFamily: "var(--font-raleway)",
                  color: "#ffffff",
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
