// src/components/home/mobilePhoneScroll.tsx
"use client";

import React, { useRef, useState } from "react";
import { Box, Stack, Typography, IconButton } from "@mui/material";
import Image from "next/image";
import { motion } from "motion/react";

import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

import phoneImage from "@/assets/images/phone1.webp";

import {
  MeshGradient,
} from "@mesh-gradient/react";
import { type MeshGradientOptions } from "@mesh-gradient/core"

type FeatureConfig = {
  title: string;
  description: string;
};

const FEATURES: FeatureConfig[] = [
  {
    title: "Self-Awareness",
    description:
      "Reveals your energy signature and needs using daily checks and biometric data.",
  },
  {
    title: "AI Coach",
    description:
      "Personalized routines for breathwork, movement, and inner equilibrium.",
  },
  {
    title: "System Reset",
    description:
      "Guided practices to reset your stress response and stabilize your nervous system.",
  },
  {
    title: "Progress Map",
    description:
      "Dynamic dashboard tracking your progress across Mind, Body, and Soul for peak flow.",
  },
];

const MotionBackgroundBox = motion.create(Box);

const MobilePhoneScroll: React.FC = () => {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState<number>(0);
  const touchStartXRef = useRef<number | null>(null);

  const goPrev = () => {
    setActiveFeatureIndex((prev) => Math.max(prev - 1, 0));
  };

  const goNext = () => {
    setActiveFeatureIndex((prev) =>
      Math.min(prev + 1, FEATURES.length - 1)
    );
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartXRef.current = e.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const startX = touchStartXRef.current;
    if (startX == null) return;

    const endX = e.changedTouches[0]?.clientX ?? startX;
    const deltaX = endX - startX;
    const SWIPE_THRESHOLD = 50; // px

    if (Math.abs(deltaX) > SWIPE_THRESHOLD) {
      if (deltaX < 0) {
        // swipe left → next
        goNext();
      } else {
        // swipe right → previous
        goPrev();
      }
    }

    touchStartXRef.current = null;
  };

   const meshOptions: MeshGradientOptions = {
    colors: ["#09172B", "#0F2027", "#256D85", "#09172B"],
    seed: 5,
    animationSpeed: 0.9,
    frequency: 0.00013
    // let the library handle motion; defaults are fine for a subtle animated mesh
  };

  return (
    <Box
      id="app"
      component="section"
      sx={{
        width: "100%",
        pt: 8,
        pb: 6,
        scrollMarginTop: "120px",
        maxWidth: 1440,
        mx: "auto",
        px: 2,
      }}
    >
      {/* Title */}
      <Typography
        sx={{
          textAlign: "center",
          color: "#FFFFFF",
          fontSize: 32,
          fontWeight: 600,
          mb: 4,
          px: 2,
          pt: 2,
          lineHeight: 1.1,
        }}
      >
        So your <span style={{ color: "#D8A24B" }}>health</span> doesn&apos;t
        feel like <span style={{ color: "#D8A24B" }}>another thing</span> to
        manage
      </Typography>

      {/* Gradient Card – FULLY swipeable area */}
      <MotionBackgroundBox
        sx={{
          position: "relative",
          width: "100%",
          borderRadius: 6,
          overflow: "hidden",
          minHeight: 420,
          backgroundColor: "#020617",
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* animated mesh layer */}
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

        {/* CHEVRONS OVERLAY */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 1,
            pointerEvents: "none", // let swipe work everywhere
          }}
        >
          <IconButton
            onClick={goPrev}
            disabled={activeFeatureIndex === 0}
            sx={{
              pointerEvents: "auto",
              color: "#F9FAFB",
              backgroundColor: "rgba(15,23,42,0.7)",
              border: "1px solid rgba(148,163,184,0.7)",
              "&:hover": {
                backgroundColor: "rgba(15,23,42,0.9)",
              },
              opacity: activeFeatureIndex === 0 ? 0 : 0.95,
              transition: "opacity 150ms ease-out, background-color 150ms ease-out",
            }}
            size="small"
          >
            <ChevronLeftRoundedIcon />
          </IconButton>

          <IconButton
            onClick={goNext}
            disabled={activeFeatureIndex === FEATURES.length - 1}
            sx={{
              pointerEvents: "auto",
              color: "#F9FAFB",
              backgroundColor: "rgba(15,23,42,0.7)",
              border: "1px solid rgba(148,163,184,0.7)",
              "&:hover": {
                backgroundColor: "rgba(15,23,42,0.9)",
              },
              opacity:
                activeFeatureIndex === FEATURES.length - 1 ? 0 : 0.95,
              transition: "opacity 150ms ease-out, background-color 150ms ease-out",
            }}
            size="small"
          >
            <ChevronRightRoundedIcon />
          </IconButton>
        </Box>

        {/* CONTENT LAYER */}
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 3,
            px: 4,
            pt: 5,
            pb: 5,
          }}
        >
          {/* Phone */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "& img": {
                maxHeight: 360,
                width: "auto",
                transform: "scale(1.12)", // slightly larger
                transformOrigin: "center center",
              },
            }}
          >
            <Image
              src={phoneImage}
              alt="Seena app on phone"
              style={{
                width: "auto",
                height: "auto",
              }}
              priority
            />
          </Box>

          {/* Horizontal slider for feature text */}
          <Box
            sx={{
              width: "100%",
              overflow: "hidden",
              mt: 2,
            }}
          >
            <motion.div
              style={{
                display: "flex",
                width: "100%",
              }}
              animate={{ x: `-${activeFeatureIndex * 100}%` }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 30,
              }}
            >
              {FEATURES.map((feature, index) => (
                <Box
                  key={feature.title}
                  sx={{
                    flex: "0 0 100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    color: "#FFFFFF",
                    px: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 20,
                      fontWeight: 600,
                      color: "#D8A24B",
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: 300,
                      lineHeight: 1.7,
                      maxWidth: 340,
                      color: "rgba(249,250,251,0.9)",
                      mt: 1,
                    }}
                  >
                    {feature.description}
                  </Typography>
                  <Typography
                    sx={{
                      mt: 1.5,
                      fontSize: 12,
                      letterSpacing: 1.4,
                      textTransform: "uppercase",
                      color: "rgba(249,250,251,0.6)",
                    }}
                  >
                    {index + 1} / {FEATURES.length}
                  </Typography>
                </Box>
              ))}
            </motion.div>
          </Box>
        </Box>
      </MotionBackgroundBox>
    </Box>
  );
};

export default MobilePhoneScroll;