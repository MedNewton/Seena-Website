// src/components/live/LiveHero.tsx
"use client";

import type { FC } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { MeshGradient } from "@mesh-gradient/react";
import { type MeshGradientOptions } from "@mesh-gradient/core";

// navy / blue / gold mesh gradient — weighted toward the lighter colours
const meshOptions: MeshGradientOptions = {
  colors: ["#2c61b5", "#2c61b5", "#ffd166", "#121e2f"],
  seed: 5,
  animationSpeed: 0.9,
  frequency: 0.00011,
};

const LiveHero: FC = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: { xs: 560, md: 760 },
        pt: { xs: 14, md: 18 },
        pb: { xs: 10, md: 14 },
        px: { xs: 3, md: 6 },
        backgroundColor: "#121e2f",
      }}
    >
      {/* Animated mesh gradient background */}
      <MeshGradient
        options={meshOptions}
        style={{
          position: "absolute",
          inset: "-20%",
          width: "140%",
          height: "140%",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Content */}
      <Stack
        spacing={{ xs: 3, md: 4 }}
        sx={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: 1000,
          alignItems: "center",
          textAlign: "center",
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
          Live
        </Typography>

        {/* Main title */}
        <Typography
          component="h1"
          sx={{
            fontFamily: "var(--font-montserrat)",
            fontSize: { xs: 40, md: 72 },
            fontWeight: 800,
            lineHeight: 1.1,
            color: "#FFFFFF",
            maxWidth: 920,
          }}
        >
          Shift your state through live experiences.
        </Typography>

        {/* Subtitle */}
        <Typography
          sx={{
            fontFamily: "var(--font-inter)",
            fontSize: { xs: 15, md: 20 },
            fontWeight: 400,
            lineHeight: 1.5,
            color: "rgba(255,255,255,0.92)",
            maxWidth: 760,
          }}
        >
          Live brings you into guided sessions, classes, and real-time
          experiences designed to move your body, clear your head, and change
          how you feel now — not later.
        </Typography>

        {/* CTA button */}
        <Box sx={{ pt: { xs: 1, md: 2 } }}>
          <Button
            sx={{
              minWidth: 240,
              borderRadius: "14px",
              px: { xs: 4, md: 6 },
              py: { xs: 1.4, md: 1.6 },
              fontFamily: "var(--font-raleway)",
              fontSize: { xs: 14, md: 15 },
              fontWeight: 700,
              letterSpacing: 1,
              textTransform: "uppercase",
              color: "#FFFFFF",
              border: "1.5px solid rgba(255,255,255,0.9)",
              backgroundColor: "transparent",
              transition: "background-color 250ms ease-out",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.12)",
              },
            }}
          >
            Digital
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default LiveHero;
