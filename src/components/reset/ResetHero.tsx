"use client";

import type { FC } from "react";
import { Box, Typography } from "@mui/material";
import Image, { type StaticImageData } from "next/image";

export interface ResetHeroProps {
  title: string;
  image: StaticImageData;
}

const ResetHero: FC<ResetHeroProps> = ({ title, image }) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // higher hero
        minHeight: { xs: 240, md: 320, lg: 460 },
        boxShadow: "0px 24px 60px rgba(15,23,42,0.55)",
        backgroundSize: "cover",
          backgroundPosition: "center center", 
          backgroundRepeat: "repeat",
          backgroundImage:
            'url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%224000%22 height=%222000%22%3E%3Cg filter=%22url(%23a)%22%3E%3Cpath fill=%22%230F2027%22 d=%22M-2000-1000h8000v4000h-8000z%22%2F%3E%3Cpath d=%22m659-546-1770 1940 1395 250L1357 285%22 fill=%22%230F2027%22%2F%3E%3Cpath d=%22M1605-152 833 193l2165 2533 917-1567%22 fill=%22%230F2027%22%2F%3E%3Cpath d=%22m2753 768-728 1525 709 340 1309-29M-144 728l-668 841 2458 1901 482-978%22 fill=%22%230F2027%22%2F%3E%3Cpath d=%22m1017.127 1434.831-1479 2097 1840 153 485-2124%22 fill=%22%23256d85%22%2F%3E%3Cpath d=%22m2674.24 1376.831-1383 1032 1340 1564 1084-1714%22 fill=%22%23256D85%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3Cfilter id=%22a%22 x=%22-400%22 y=%22-400%22 width=%224800%22 height=%222800%22 filterUnits=%22userSpaceOnUse%22 color-interpolation-filters=%22sRGB%22%3E%3CfeFlood flood-opacity=%220%22 result=%22BackgroundImageFix%22%2F%3E%3CfeBlend in=%22SourceGraphic%22 in2=%22BackgroundImageFix%22 result=%22shape%22%2F%3E%3CfeGaussianBlur stdDeviation=%22400%22 result=%22effect1_foregroundBlur_1_2%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3C%2Fsvg%3E")',
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
      </Box>
    </Box>
  );
};

export default ResetHero;
