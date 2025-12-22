// src/components/experiences/ExperiencesBackgroundLayer.tsx
"use client";

import type { FC } from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

const ExperiencesBackgroundLayer: FC = () => {
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
            'url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%224000%22 height=%222000%22%3E%3Cg filter=%22url(%23a)%22%3E%3Cpath fill=%22%232C61B5%22 d=%22M-2000-1000h8000v4000h-8000z%22%2F%3E%3Cpath d=%22M760-583-710 1025l2112 1143 372-1626%22 fill=%22%23121E2F%22%2F%3E%3Cpath d=%22m-1599.698-2457.357-620 1198 1591 2078 1529-911%22 fill=%22%23ffd166%22%2F%3E%3Cpath d=%22m3937.634 1009.789-1013 706 961 2220 1688-1745%22 fill=%22%23121E2F%22%2F%3E%3Cpath d=%22M1650 392-498 1894l87 774 2453-58%22 fill=%22%232C61B5%22%2F%3E%3Cpath d=%22M1348 1299 218 3236l1409 71 828-136%22 fill=%22%23121E2F%22%2F%3E%3Cpath d=%22m3501 1349-1910 541 1441 1279 576-102%22 fill=%22%23121E2F%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3Cfilter id=%22a%22 x=%22-400%22 y=%22-400%22 width=%224800%22 height=%222800%22 filterUnits=%22userSpaceOnUse%22 color-interpolation-filters=%22sRGB%22%3E%3CfeFlood flood-opacity=%220%22 result=%22BackgroundImageFix%22%2F%3E%3CfeBlend in=%22SourceGraphic%22 in2=%22BackgroundImageFix%22 result=%22shape%22%2F%3E%3CfeGaussianBlur stdDeviation=%22400%22 result=%22effect1_foregroundBlur_1_2%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3C%2Fsvg%3E")',
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

export default ExperiencesBackgroundLayer;
