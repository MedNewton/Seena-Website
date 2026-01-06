// src/components/home/phoneScroll.tsx
"use client";

import React, { useRef } from "react";
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

import phoneImage from "@/assets/images/Seena.webp";
import MobilePhoneScroll from "@/components/home/mobilePhoneScroll";
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

type FeatureProps = {
  title: string;
  description: string;
};

const FeatureItem: React.FC<FeatureProps> = ({ title, description }) => (
  <Stack
    spacing={1}
    alignItems="center"
    sx={{
      textAlign: "center",
      color: "#FFFFFF",
      width: "100%",
    }}
  >
    <Box
      sx={{
        width: 64,
        height: 64,
        borderRadius: "50%",
        background:
          "linear-gradient(135deg, #F5E0A3 0%, #D8A24B 40%, #F8E6B8 100%)",
      }}
    />
    <Typography
      sx={{
        fontSize: { xs: 28, md: 20 },
        fontWeight: 600,
        color: "#D8A24B",
      }}
    >
      {title}
    </Typography>
    <Typography
      sx={{
        fontSize: 16,
        fontWeight: 300,
        lineHeight: 1.6,
        maxWidth: 360,
        color: "rgba(249,250,251,0.9)",
      }}
    >
      {description}
    </Typography>
  </Stack>
);

const MotionBackgroundBox = motion.create(Box);

/**
 * Desktop-only implementation: sticky section + scroll-linked feature reveal
 */
const DesktopPhoneScroll: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end 1.1"],
  });

  const f1Opacity = useTransform(scrollYProgress, [0.05, 0.2], [0, 1]);
  const f1Y = useTransform(scrollYProgress, [0.05, 0.2], [40, 0]);

  const f2Opacity = useTransform(scrollYProgress, [0.25, 0.4], [0, 1]);
  const f2Y = useTransform(scrollYProgress, [0.25, 0.4], [40, 0]);

  const f3Opacity = useTransform(scrollYProgress, [0.45, 0.6], [0, 1]);
  const f3Y = useTransform(scrollYProgress, [0.45, 0.6], [40, 0]);

  const f4Opacity = useTransform(scrollYProgress, [0.65, 0.8], [0, 1]);
  const f4Y = useTransform(scrollYProgress, [0.65, 0.8], [40, 0]);

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
      ref={sectionRef}
      component="section"
      sx={{
        width: "100%",
        minHeight: "260vh",
        pt: 4,
        scrollMarginTop: "120px",
        maxWidth: 1440,
        mx: "auto",
      }}
    >
      {/* Sticky viewport area */}
      <Box
        sx={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          pb: 4,
          px: 0,
          maxWidth: 1440,
          mx: "auto",
        }}
      >
        {/* Title */}
        <Typography
          sx={{
            textAlign: "center",
            color: "#FFFFFF",
            fontSize: 64,
            fontWeight: 600,
            mb: 6,
            px: 4,
            pt: 2,
            lineHeight: 1.1,
          }}
        >
          So your <span style={{ color: "#D8A24B" }}>health</span> doesn&apos;t
          feel like <span style={{ color: "#D8A24B" }}>another thing</span> to
          manage
        </Typography>

        {/* Card with animated mesh gradient */}
        <MotionBackgroundBox
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: 1440,
            mx: "auto",
            borderRadius: 6,
            overflow: "hidden",
            minHeight: 580,
            backgroundColor: "#020617",
          }}
        >
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

          {/* CONTENT LAYER */}
          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              height: "100%",
              display: "grid",
              gridTemplateColumns: "1fr auto 1fr",
              alignItems: "center",
              justifyContent: "center",
              gap: 0,
              px: 0,
              pt: 6,
              pb: 8,
            }}
          >
            {/* LEFT COLUMN */}
            <Stack
              spacing={6}
              alignItems="center"
              justifyContent="center"
            >
              <motion.div style={{ opacity: f1Opacity, y: f1Y, width: "100%" }}>
                <FeatureItem
                  title={FEATURES[0]?.title ?? ""}
                  description={FEATURES[0]?.description ?? ""}
                />
              </motion.div>
              <motion.div style={{ opacity: f2Opacity, y: f2Y, width: "100%" }}>
                <FeatureItem
                  title={FEATURES[1]?.title ?? ""}
                  description={FEATURES[1]?.description ?? ""}
                />
              </motion.div>
            </Stack>

            {/* PHONE */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "& img": {
                  maxHeight: 480,
                  width: "auto",
                  transform: "scale(1.15)",
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

            {/* RIGHT COLUMN */}
            <Stack
              spacing={6}
              alignItems="center"
              justifyContent="center"
            >
              <motion.div style={{ opacity: f3Opacity, y: f3Y, width: "100%" }}>
                <FeatureItem
                  title={FEATURES[2]?.title ?? ""}
                  description={FEATURES[2]?.description ?? ""}
                />
              </motion.div>
              <motion.div style={{ opacity: f4Opacity, y: f4Y, width: "100%" }}>
                <FeatureItem
                  title={FEATURES[3]?.title ?? ""}
                  description={FEATURES[3]?.description ?? ""}
                />
              </motion.div>
            </Stack>
          </Box>
        </MotionBackgroundBox>
      </Box>
    </Box>
  );
};

/**
 * Wrapper: picks desktop vs mobile implementation
 */
const PhoneScroll: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  if (isMobile) {
    return <MobilePhoneScroll />;
  }

  return <DesktopPhoneScroll />;
};

export default PhoneScroll;
