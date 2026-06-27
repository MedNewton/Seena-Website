// src/components/circles/CirclesHero.tsx
"use client";

import type { FC } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import Image from "next/image";
import { MeshGradient } from "@mesh-gradient/react";
import { type MeshGradientOptions } from "@mesh-gradient/core";

import circlesCard from "@/assets/newImages/circles_card.webp";

export interface CirclesHeroProps {
  title: string; // e.g. "Circles"
}

// same palette / config as the footer mesh gradient
const meshOptions: MeshGradientOptions = {
  colors: ["#dbc081", "#D77A1E", "#D77A1E", "#2b1a07"],
  seed: 5,
  animationSpeed: 0.9,
  frequency: 0.00013,
};

const CirclesHero: FC<CirclesHeroProps> = ({ title }) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        // page background shows through below the gradient layer
        backgroundColor: "transparent",
      }}
    >
      {/* Mesh gradient background layer — fixed height so the card below
          straddles its bottom edge */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: { xs: 560, md: 700 },
          overflow: "hidden",
          backgroundColor: "#1F1306",
          zIndex: 0,
        }}
      >
        <MeshGradient
          options={meshOptions}
          style={{
            position: "absolute",
            inset: "-20%",
            width: "140%",
            height: "140%",
            pointerEvents: "none",
          }}
        />
      </Box>

      {/* Content (normal flow, above the gradient layer) */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 12, md: 14 },
          pb: { xs: 6, md: 8 },
          px: { xs: 2, md: 4 },
        }}
      >
        {/* Heading content */}
        <Stack
          spacing={{ xs: 2.5, md: 3 }}
          sx={{
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
            {title}
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
            Get into circles that challenge you to elevate
          </Typography>

          {/* Subtitle */}
          <Typography
            sx={{
              fontFamily: "var(--font-inter)",
              fontSize: { xs: 15, md: 20 },
              fontWeight: 400,
              lineHeight: 1.5,
              color: "rgba(249,250,251,0.92)",
              maxWidth: 720,
            }}
          >
            The people you meet in circles don&apos;t just share your interests.
            They raise the bar for what you expect from yourself.
          </Typography>
        </Stack>

        {/* Founding-cohort image card — straddles the gradient bottom edge */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: 1140,
            mt: { xs: 4, md: 6 },
            borderRadius: "16px",
            overflow: "hidden",
            minHeight: { xs: 280, md: 300 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            textAlign: "center",
            px: { xs: 3, md: 5 },
            py: { xs: 4, md: 5 },
            boxShadow: "0 24px 60px rgba(0,0,0,0.35)",
          }}
        >
          {/* Card background image */}
          <Image
            src={circlesCard}
            alt=""
            fill
            sizes="(max-width: 1200px) 100vw, 1140px"
            style={{ objectFit: "cover" }}
          />

          {/* Readability overlay */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.25) 100%)",
              pointerEvents: "none",
            }}
          />

          {/* Card content */}
          <Typography
            sx={{
              position: "relative",
              zIndex: 1,
              fontFamily: "var(--font-montserrat)",
              fontSize: { xs: 20, md: 26 },
              fontWeight: 700,
              color: "#FFFFFF",
            }}
          >
            The first circle. the founding cohort
          </Typography>

          <Button
            sx={{
              position: "relative",
              zIndex: 1,
              my: { xs: 2, md: 0 },
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
            Join now
          </Button>

          <Typography
            sx={{
              position: "relative",
              zIndex: 1,
              fontFamily: "var(--font-inter)",
              fontSize: { xs: 13, md: 14 },
              color: "rgba(249,250,251,0.9)",
            }}
          >
            Access is by application. Space is limited to 20 guests.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CirclesHero;
