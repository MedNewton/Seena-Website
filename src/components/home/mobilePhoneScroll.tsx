// src/components/home/mobilePhoneScroll.tsx
"use client";

import React, { useRef, useState } from "react";
import { Box, Stack, Typography, IconButton } from "@mui/material";
import Image from "next/image";
import { motion } from "motion/react";

import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

import phoneImage from "@/assets/images/phone1.webp";

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
        <motion.div
          style={{
            position: "absolute",
            inset: "-20%",
            backgroundImage:
              'url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%224000%22 height=%222000%22%3E%3Cg filter=%22url(%23a)%22%3E%3Cpath fill=%22%2309172B%22 d=%22M-2000-1000h8000v4000h-8000z%22%2F%3E%3Cpath d=%22m-119.743-404.772-527 242 1720 2068 492-1110%22 fill=%22%230F2027%22%2F%3E%3Cpath d=%22m344.665-298.479-820 972 1794 1652 730-2175%22 fill=%22%230F2027%22%2F%3E%3Cpath d=%22m3864.689 1610.976-1805 855 283 984 1864-247%22 fill=%22%23256D85%22%2F%3E%3Cpath d=%22m-228.947-1426.92-1617 1864 2246 644 73-765%22 fill=%22%23256d85%22%2F%3E%3Cpath d=%22m3984.701 800.995-1313 911 889 1989 2051-786%22 fill=%22%23256D85%22%2F%3E%3Cpath d=%22m2208.599 1082.575-354 2438 2373 276 156-1836%22 fill=%22%2309172B%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3Cfilter id=%22a%22 x=%22-400%22 y=%22-400%22 width=%224800%22 height=%222800%22 filterUnits=%22userSpaceOnUse%22 color-interpolation-filters=%22sRGB%22%3E%3CfeFlood flood-opacity=%220%22 result=%22BackgroundImageFix%22%2F%3E%3CfeBlend in=%22SourceGraphic%22 in2=%22BackgroundImageFix%22 result=%22shape%22%2F%3E%3CfeGaussianBlur stdDeviation=%22400%22 result=%22effect1_foregroundBlur_1_2%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3C%2Fsvg%3E")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(0px)",
            pointerEvents: "none",
          }}
          animate={{
            scale: [1, 1.8, 1],
            x: ["-4%", "4%", "-4%"],
            y: ["-3%", "3%", "-3%"],
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
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