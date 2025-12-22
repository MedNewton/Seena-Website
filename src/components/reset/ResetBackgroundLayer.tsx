// src/components/reset/ResetBackgroundLayer.tsx
"use client";

import type { FC } from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

const ResetBackgroundLayer: FC = () => {
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
          backgroundSize: "cover",
          backgroundPosition: "center center", 
          backgroundRepeat: "repeat",
          backgroundImage:
            'url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%221000%22 height=%222000%22%3E%3Cg filter=%22url(%23a)%22%3E%3Cpath fill=%22%23256D85%22 d=%22M-500-1000h2000v4000H-500z%22%2F%3E%3Cpath d=%22m1064.714 583.619-575 231 1054 853 55-377%22 fill=%22%23B3880F%22%2F%3E%3Cpath d=%22m121.896 835.048-680 1048 395 62 676-1081%22 fill=%22%23ffe8b2%22%2F%3E%3Cpath d=%22m898 493-326 27 833 1290 427-394%22 fill=%22%23256D85%22%2F%3E%3Cpath d=%22m281 666-480 1030 211 332 997-874%22 fill=%22%23256D85%22%2F%3E%3Cpath d=%22M1185 1515 39 2836l1130 260 300-104%22 fill=%22%23FFE8B2%22%2F%3E%3Cpath d=%22M1640 1591 467 2118l847 889 533-1373%22 fill=%22%23FFE8B2%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3Cfilter id=%22a%22 x=%22-91%22 y=%22-91%22 width=%221182%22 height=%222182%22 filterUnits=%22userSpaceOnUse%22 color-interpolation-filters=%22sRGB%22%3E%3CfeFlood flood-opacity=%220%22 result=%22BackgroundImageFix%22%2F%3E%3CfeBlend in=%22SourceGraphic%22 in2=%22BackgroundImageFix%22 result=%22shape%22%2F%3E%3CfeGaussianBlur stdDeviation=%2291%22 result=%22effect1_foregroundBlur_1_2%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3C%2Fsvg%3E")',
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

export default ResetBackgroundLayer;
