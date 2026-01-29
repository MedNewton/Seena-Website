// src/components/circles/CirclesBackgroundLayer.tsx
"use client";

import type { FC } from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import {
  MeshGradient,
} from "@mesh-gradient/react";
import { type MeshGradientOptions } from "@mesh-gradient/core"

const AppBackgroundLayer: FC = () => {
  const meshOptions: MeshGradientOptions = {
      colors: ["#FFD166", "#2C61B5", "#121E2F", "#2C61B5"],
      seed: 5,
      animationSpeed: 0.9,
      frequency: 0.00013
      // let the library handle motion; defaults are fine for a subtle animated mesh
    };
  return (
    <Box
      aria-hidden="true"
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
        height: "100dvh",
      }}
    >
      {/* Animated mesh gradient */}
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

export default AppBackgroundLayer;
