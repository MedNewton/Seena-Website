// src/components/circles/CirclesBackgroundLayer.tsx
"use client";

import type { FC } from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import {
  MeshGradient,
} from "@mesh-gradient/react";
import { type MeshGradientOptions } from "@mesh-gradient/core"

const AboutBackgroundLayer: FC = () => {
  const meshOptions: MeshGradientOptions = {
      colors: ["#3C5BB0", "#9B70E2", "#416BDE", "#624C96"],
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
        height: "100vh",
        backgroundColor: "#FFFFFF"
      }}
    >
    </Box>
  );
};

export default AboutBackgroundLayer;
