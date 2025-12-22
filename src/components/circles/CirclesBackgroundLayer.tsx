// src/components/circles/CirclesBackgroundLayer.tsx
"use client";

import type { FC } from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

const CirclesBackgroundLayer: FC = () => {
  return (
    <Box
      aria-hidden="true"
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
        height: "100vh",
      }}
    >
      {/* Animated mesh gradient */}
      <motion.div
        style={{
          position: "absolute",
          inset: "-5%",
          backgroundImage:
            'url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%224000%22 height=%222000%22%3E%3Cg filter=%22url(%23a)%22%3E%3Cpath fill=%22%231F1306%22 d=%22M-2000-1000h8000v4000h-8000z%22%2F%3E%3Cpath d=%22m-1987.383-2044.96-571 2136 2221 886 775-781%22 fill=%22%23D77A1E%22%2F%3E%3Cpath d=%22m3926.304-1198.475-142 1184 1984 1133 100-1415%22 fill=%22%23FFE8B2%22%2F%3E%3Cpath d=%22M4156 291 2135 1487l1989 1104 128-393%22 fill=%22%231f1306%22%2F%3E%3Cpath d=%22m1270 885-2290 1560 2449 1673 664-3009%22 fill=%22%231F1306%22%2F%3E%3Cpath d=%22M3497 1433 832 1885l2004 2294 713-619%22 fill=%22%231F1306%22%2F%3E%3Cpath d=%22m4994.13 1496.304-2178 640 415 1694 1925-815%22 fill=%22%23FFE8B2%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3Cfilter id=%22a%22 x=%22-400%22 y=%22-400%22 width=%224800%22 height=%222800%22 filterUnits=%22userSpaceOnUse%22 color-interpolation-filters=%22sRGB%22%3E%3CfeFlood flood-opacity=%220%22 result=%22BackgroundImageFix%22%2F%3E%3CfeBlend in=%22SourceGraphic%22 in2=%22BackgroundImageFix%22 result=%22shape%22%2F%3E%3CfeGaussianBlur stdDeviation=%22400%22 result=%22effect1_foregroundBlur_1_2%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3C%2Fsvg%3E")',
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "repeat",
          pointerEvents: "none",
        }}
        animate={{
          scale: [1, 1.6, 1],
          x: ["-4%", "4%", "-4%"],
          y: ["-3%", "3%", "-3%"],
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      {/* Slight darkening so UI stays readable on top */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at top, rgba(15,23,42,0.15) 0%, rgba(15,23,42,0.55) 55%, rgba(15,23,42,0.8) 100%)",
          mixBlendMode: "soft-light",
          opacity: 0.6,
        }}
      />
    </Box>
  );
};

export default CirclesBackgroundLayer;
