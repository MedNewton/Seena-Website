// src/components/pulse/PulseHero.tsx
"use client";

import type { FC } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { MeshGradient } from "@mesh-gradient/react";
import { type MeshGradientOptions } from "@mesh-gradient/core";

// teal-dominant mesh gradient (lighter colour repeated for dominance,
// low frequency for a smoother blend)
const meshOptions: MeshGradientOptions = {
  colors: ["#2cdacd", "#2cdacd", "#2cdacd", "#2d2a7e"],
  seed: 5,
  animationSpeed: 0.7,
  frequency: 0.00009,
};

const PulseHero: FC = () => {
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
        backgroundColor: "#2d2a7e",
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
          Pulse
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
          Guidance built for today&apos;s version of you.
        </Typography>

        {/* Subtitle */}
        <Typography
          sx={{
            fontFamily: "var(--font-inter)",
            fontSize: { xs: 15, md: 20 },
            fontWeight: 400,
            lineHeight: 1.5,
            color: "rgba(255,255,255,0.92)",
            maxWidth: 720,
          }}
        >
          Pulse begins where cookie-cutter solutions end. What you need today
          is not what you needed yesterday.
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
            Join Early Access
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default PulseHero;
