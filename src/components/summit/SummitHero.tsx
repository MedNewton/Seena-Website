// src/components/summit/SummitHero.tsx
"use client";

import type { FC } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

import bg from "@/assets/newImages/summitHeroBG.webp";

const SummitHero: FC = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: { xs: "88vh", md: "100vh" },
      }}
    >
      {/* Background image */}
      <Image
        src={bg}
        alt="Summit background"
        fill
        priority
        style={{ objectFit: "cover" }}
      />

      {/* Dark overlay for readability */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.5) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          px: { xs: 3, md: 6 },
          py: { xs: 10, md: 12 },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Stack
          spacing={{ xs: 2.5, md: 3 }}
          sx={{
            maxWidth: 1000,
            alignItems: "center",
            textAlign: "center",
            color: "#ffffff",
          }}
        >
          {/* Eyebrow */}
          <Typography
            sx={{
              fontFamily: "var(--font-montserrat)",
              fontSize: { xs: 16, md: 20 },
              fontWeight: 700,
              color: "#FFFFFF",
            }}
          >
            Summit
          </Typography>

          {/* Main title */}
          <Typography
            component="h1"
            sx={{
              fontFamily: "var(--font-montserrat)",
              fontSize: { xs: 40, md: 76 },
              fontWeight: 800,
              lineHeight: 1.08,
              color: "#FFFFFF",
              maxWidth: 940,
            }}
          >
            Step into rooms that
            <br />
            Raise your standard.
          </Typography>

          {/* Subtitle */}
          <Typography
            sx={{
              fontFamily: "var(--font-inter)",
              fontSize: { xs: 15, md: 20 },
              fontWeight: 400,
              lineHeight: 1.5,
              color: "rgba(255,255,255,0.92)",
              maxWidth: 820,
            }}
          >
            Live brings you into guided sessions, classes, and real-time
            experiences designed to move your body, clear your head, and change
            how you feel now — not later.
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default SummitHero;
