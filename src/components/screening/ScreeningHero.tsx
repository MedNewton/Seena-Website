"use client";

import type { FC } from "react";
import { Box, Typography } from "@mui/material";
import Image, { type StaticImageData } from "next/image";

export interface ScreeningHeroProps {
  title: string;
  subtitle: string;
  image: StaticImageData;
}

const ScreeningHero: FC<ScreeningHeroProps> = ({ title, subtitle, image }) => {
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
        // higher hero
        minHeight: { xs: 240, md: 320, lg: 440 },
        backgroundImage:
          'url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%224000%22 height=%222000%22%3E%3Cg filter=%22url(%23a)%22%3E%3Cpath fill=%22%231F1306%22 d=%22M-2000-1000h8000v4000h-8000z%22%2F%3E%3Cpath d=%22m-1646.324-1364.676-159 290 1631 2045 1004-854%22 fill=%22%23D77A1E%22%2F%3E%3Cpath d=%22M2813-323 620 554l487 1628L3392 488%22 fill=%22%231F1306%22%2F%3E%3Cpath d=%22m1941 720-307 2732 2206 573 850-971%22 fill=%22%231F1306%22%2F%3E%3Cpath d=%22m1741.662 2388.155-2837 1510 1149 1707 1877-1766%22 fill=%22%23ffe8b2%22%2F%3E%3Cpath d=%22M2335 1351 633 2326l731 2083 2048-1166%22 fill=%22%231F1306%22%2F%3E%3Cpath d=%22m4458.648 1026.38-1023 587 1727 2054 740-2210%22 fill=%22%23D77A1E%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3Cfilter id=%22a%22 x=%22-400%22 y=%22-400%22 width=%224800%22 height=%222800%22 filterUnits=%22userSpaceOnUse%22 color-interpolation-filters=%22sRGB%22%3E%3CfeFlood flood-opacity=%220%22 result=%22BackgroundImageFix%22%2F%3E%3CfeBlend in=%22SourceGraphic%22 in2=%22BackgroundImageFix%22 result=%22shape%22%2F%3E%3CfeGaussianBlur stdDeviation=%22400%22 result=%22effect1_foregroundBlur_1_2%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3C%2Fsvg%3E")',
        backgroundSize: "100% 100%",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        pointerEvents: "none",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.45) 100%)",
        }}
      />

      {/* Centered text */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 3, md: 6 },
          textAlign: "center",
        }}
      >
        <Typography
          component="h1"
          sx={{
            fontFamily: "var(--font-bricolage)",
            fontSize: { xs: 32, md: 46 },
            fontWeight: 400,
            letterSpacing: 0.4,
            color: "#FFFFFF",
          }}
        >
          {title}
        </Typography>
        <Typography
          component="h2"
          sx={{
            fontFamily: "var(--font-bricolage)",
            fontSize: { xs: 16, md: 20 },
            fontWeight: 400,
            letterSpacing: 0.4,
            color: "#FFFFFF",
          }}
        >
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default ScreeningHero;
