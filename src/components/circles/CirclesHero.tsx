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
        backgroundImage:
          'url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%224000%22 height=%222000%22%3E%3Cg filter=%22url(%23a)%22%3E%3Cpath fill=%22%231F1306%22 d=%22M-2000-1000h8000v4000h-8000z%22%2F%3E%3Cpath d=%22m4467.408-1609.408-1108 2954 1352 214 1593-1709%22 fill=%22%23D77A1E%22%2F%3E%3Cpath d=%22m859-364-62 2895 898 233 2175-1661%22 fill=%22%231F1306%22%2F%3E%3Cpath d=%22M4042 814 1805 1844l1821 1647 868-1869%22 fill=%22%231F1306%22%2F%3E%3Cpath d=%22m-722.366 1278.479-689 1918 1166 283 1261-759%22 fill=%22%23FFE8B2%22%2F%3E%3Cpath d=%22m1071.24 1654.113-1376 387 420 2164 1884-2063%22 fill=%22%23d77a1e%22%2F%3E%3Cpath d=%22m3588 1759-1974 572 105 1741 2119-1587%22 fill=%22%231F1306%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3Cfilter id=%22a%22 x=%22-400%22 y=%22-400%22 width=%224800%22 height=%222800%22 filterUnits=%22userSpaceOnUse%22 color-interpolation-filters=%22sRGB%22%3E%3CfeFlood flood-opacity=%220%22 result=%22BackgroundImageFix%22%2F%3E%3CfeBlend in=%22SourceGraphic%22 in2=%22BackgroundImageFix%22 result=%22shape%22%2F%3E%3CfeGaussianBlur stdDeviation=%22400%22 result=%22effect1_foregroundBlur_1_2%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3C%2Fsvg%3E")',
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "repeat",
        pointerEvents: "none",
      }}
    >
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
