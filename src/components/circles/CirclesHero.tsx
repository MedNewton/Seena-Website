// src/components/circles/CirclesHero.tsx
"use client";

import type { FC } from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import Image, { type StaticImageData } from "next/image";

export interface CirclesHeroProps {
  title: string;              // e.g. "SEENA Collective"
  image: StaticImageData;
}

const CirclesHero: FC<CirclesHeroProps> = ({ title, image }) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        borderRadius: 6,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: { xs: 320, md: 420, lg: 460 },
        boxShadow: "0px 24px 60px rgba(15,23,42,0.55)",
      }}
    >
      {/* Background image */}
      <Image
        src={image}
        alt={title}
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
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.2) 0, transparent 40%), radial-gradient(circle at 80% 60%, rgba(255,153,51,0.35) 0, transparent 45%), radial-gradient(circle at 50% 50%, rgba(0,0,0,0.75) 0, rgba(0,0,0,0.92) 65%)",
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          px: { xs: 3, md: 6 },
          py: { xs: 6, md: 10 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Stack
          spacing={3}
          sx={{
            maxWidth: 900,
            alignItems: "center",
          }}
        >
          {/* Small label */}
          <Typography
            sx={{
              fontFamily: "var(--font-montserrat)",
              fontSize: 12,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "rgba(248,250,252,0.8)",
            }}
          >
            START HERE
          </Typography>

          {/* Main title */}
          <Typography
            component="h1"
            sx={{
              fontFamily: "var(--font-bricolage)",
              fontSize: { xs: 32, md: 52 },
              fontWeight: 500,
              letterSpacing: 0.4,
              color: "#FFFFFF",
            }}
          >
            {title}
          </Typography>

          {/* Subtitle */}
          <Typography
            sx={{
              fontFamily: "var(--font-bricolage)",
              fontSize: { xs: 18, md: 26 },
              fontWeight: 400,
              color: "#F9FAFB",
            }}
          >
            The heart of the SEENA community
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              mt: 1,
              fontFamily: "var(--font-inter)",
              fontSize: { xs: 14, md: 18 },
              lineHeight: 1.7,
              color: "rgba(249,250,251,0.92)",
              maxWidth: 780,
            }}
          >
            Connect with members worldwide, share experiences across wellness
            dimensions, join local conversations, and help shape the next SEENA
            Circles.
          </Typography>

          {/* CTA button */}
          <Box sx={{ mt: { xs: 2, md: 3 } }}>
            <Button
              sx={{
                minWidth: 260,
                borderRadius: 999,
                px: { xs: 4, md: 6 },
                py: { xs: 1.6, md: 1.8 },
                fontFamily: "var(--font-montserrat)",
                fontSize: { xs: 14, md: 15 },
                fontWeight: 600,
                letterSpacing: 1.5,
                textTransform: "none",
                backgroundColor: "#FFFFFF",
                color: "#000000",
                boxShadow: "0 14px 40px rgba(0,0,0,0.35)",
                "&:hover": {
                  backgroundColor: "#F9FAFB",
                  boxShadow: "0 16px 46px rgba(0,0,0,0.45)",
                },
              }}
            >
              Enter SEENA Collective
            </Button>
          </Box>

          {/* Small note under button */}
          <Typography
            sx={{
              mt: 1,
              fontFamily: "var(--font-inter)",
              fontSize: 13,
              color: "rgba(209,213,219,0.95)",
            }}
          >
            All members are automatically part of this circle.
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default CirclesHero;
