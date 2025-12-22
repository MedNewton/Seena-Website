// src/components/screening/ScreeningBackgroundLayer.tsx
"use client";

import type { FC } from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

const ScreeningBackgroundLayer: FC = () => {
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
        backgroundColor: "#FFFFFF",
      }}
    >
      
    </Box>
  );
};

export default ScreeningBackgroundLayer;
