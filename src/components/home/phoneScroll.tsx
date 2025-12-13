// src/components/home/phoneScroll.tsx
"use client";

import React, { useRef, useState } from "react";
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "motion/react";

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
        fontSize: {xs:24, md: 20},
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
        maxWidth: 300,
        color: "rgba(249,250,251,0.9)",
      }}
    >
      {description}
    </Typography>
  </Stack>
);

const PhoneScroll: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end 1.1"],
  });

  // DESKTOP feature animations (unchanged)
  const f1Opacity = useTransform(scrollYProgress, [0.05, 0.2], [0, 1]);
  const f1Y = useTransform(scrollYProgress, [0.05, 0.2], [40, 0]);

  const f2Opacity = useTransform(scrollYProgress, [0.25, 0.4], [0, 1]);
  const f2Y = useTransform(scrollYProgress, [0.25, 0.4], [40, 0]);

  const f3Opacity = useTransform(scrollYProgress, [0.45, 0.6], [0, 1]);
  const f3Y = useTransform(scrollYProgress, [0.45, 0.6], [40, 0]);

  const f4Opacity = useTransform(scrollYProgress, [0.65, 0.8], [0, 1]);
  const f4Y = useTransform(scrollYProgress, [0.65, 0.8], [40, 0]);

  // MOBILE: active feature index (0–3), changing more slowly as user scrolls
  const [activeFeatureIndex, setActiveFeatureIndex] = useState<number>(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!isMobile) return;

    // Chunk scroll into slower ranges so fast scroll doesn't flick through features
    let nextIndex = 0;

    if (latest < 0.22) {
      nextIndex = 0;
    } else if (latest < 0.48) {
      nextIndex = 1;
    } else if (latest < 0.74) {
      nextIndex = 2;
    } else {
      nextIndex = 3;
    }

    setActiveFeatureIndex((prev) => (prev === nextIndex ? prev : nextIndex));
  });

  const activeFeature: FeatureConfig =
    FEATURES[activeFeatureIndex] ?? { title: "", description: "" };

  return (
    <Box
      id="app"
      ref={sectionRef}
      component="section"
      sx={{
        width: "100%",
        // a bit taller on mobile to give each step more breathing room
        minHeight: { xs: "260vh", md: "260vh" },
        pt: { xs: 8, md: 10 },
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
          pb: { xs: 2, md: 4 },
          px: { xs: 2, md: 0 },
          maxWidth: 1440,
          mx: "auto",
        }}
      >
        {/* Title */}
        <Typography
          sx={{
            textAlign: "center",
            color: "#FFFFFF",
            fontSize: { xs: 32, md: 64 },
            fontWeight: 600,
            mb: { xs: 4, md: 6 },
            px: {xs: 2, md: 4},
            pt: 2,
          }}
        >
          So your <span style={{ color: "#D8A24B" }}>health</span> doesn&apos;t feel like <span style={{ color: "#D8A24B" }}>another thing</span> to manage
        </Typography>

        {/* Card with mesh gradient */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: 1440,
            mx: "auto",
            borderRadius: 6,
            overflow: "hidden",
            minHeight: { xs: 420, md: 520 },
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "repeat",
            backgroundImage:
              'url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%222000%22 height=%221000%22%3E%3Cg filter=%22url(%23a)%22%3E%3Cpath fill=%22%2311233d%22 d=%22M-1000-500h4000v2000h-4000z%22%2F%3E%3Cpath d=%22m1716.928 545.21-616 409 353 762 838-859%22 fill=%22%23256d85%22%2F%3E%3Cpath d=%22m1829.24 4.365-101 448 575 510 429-349%22 fill=%22%23256d85%22%2F%3E%3Cpath d=%22m396.575-424.497-269 258 1073 937 211-909%22 fill=%22%2311233d%22%2F%3E%3Cpath d=%22m1596.251 654.479-659 893 702 90 432-752%22 fill=%22%23256d85%22%2F%3E%3Cpath d=%22m1205.719 384.838-1194 1088 190 61 1105-347%22 fill=%22%2311233d%22%2F%3E%3Cpath d=%22m1084 830-39 162 1169 1292 318-1361%22 fill=%22%230f2027%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3Cfilter id=%22a%22 x=%22-200%22 y=%22-200%22 width=%222400%22 height=%221400%22 filterUnits=%22userSpaceOnUse%22 color-interpolation-filters=%22sRGB%22%3E%3CfeFlood flood-opacity=%220%22 result=%22BackgroundImageFix%22%2F%3E%3CfeBlend in=%22SourceGraphic%22 in2=%22BackgroundImageFix%22 result=%22shape%22%2F%3E%3CfeGaussianBlur stdDeviation=%22200%22 result=%22effect1_foregroundBlur_1_2%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3C%2Fsvg%3E")',
          }}
        >
          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              height: "100%",
              display: {
                xs: "flex",
                md: "grid",
              },
              flexDirection: {
                xs: "column",
                md: "unset",
              },
              gridTemplateColumns: {
                md: "1fr auto 1fr",
              },
              alignItems: "center",
              justifyContent: "center",
              gap: { xs: 4, md: 6 },
              px: { xs: 4, md: 8 },
              pt: { xs: 5, md: 4 },
              pb: { xs: 5, md: 8 },
            }}
          >
            {/* LEFT COLUMN – desktop only */}
            <Stack
              spacing={{ xs: 4, md: 6 }}
              alignItems="center"
              justifyContent="center"
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <motion.div style={{ opacity: f1Opacity, y: f1Y }}>
                <FeatureItem
                  title={FEATURES[0]?.title ?? ""}
                  description={FEATURES[0]?.description ?? ""}
                />
              </motion.div>
              <motion.div style={{ opacity: f2Opacity, y: f2Y }}>
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
                order: { xs: 1, md: "unset" },
                // make phone slightly smaller on mobile
                "& img": {
                  maxHeight: { xs: 360, md: 480 },
                  width: "auto",
                  transform: {
                    xs: "scale(1.05)",
                    md: "scale(1.25)",
                  },
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

            {/* RIGHT COLUMN – desktop only */}
            <Stack
              spacing={{ xs: 4, md: 6 }}
              alignItems="center"
              justifyContent="center"
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <motion.div style={{ opacity: f3Opacity, y: f3Y }}>
                <FeatureItem
                  title={FEATURES[2]?.title ?? ""}
                  description={FEATURES[2]?.description ?? ""}
                />
              </motion.div>
              <motion.div style={{ opacity: f4Opacity, y: f4Y }}>
                <FeatureItem
                  title={FEATURES[3]?.title ?? ""}
                  description={FEATURES[3]?.description ?? ""}
                />
              </motion.div>
            </Stack>

            {/* MOBILE FEATURE – below phone, one at a time, more emphasis on text */}
            <Stack
              spacing={1.75}
              alignItems="center"
              justifyContent="center"
              sx={{
                display: { xs: "flex", md: "none" },
                order: 2,
                mt: 2,
                textAlign: "center",
                color: "#FFFFFF",
              }}
            >
              <Typography
                sx={{
                  fontSize: 21,
                  fontWeight: 500,
                  color: "#D8A24B",
                }}
              >
                {activeFeature.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: 16.5,
                  fontWeight: 300,
                  lineHeight: 1.7,
                  maxWidth: 340,
                  color: "rgba(249,250,251,0.9)",
                }}
              >
                {activeFeature.description}
              </Typography>
              <Typography
                sx={{
                  mt: 1,
                  fontSize: 11,
                  letterSpacing: 1.4,
                  textTransform: "uppercase",
                  color: "rgba(249,250,251,0.6)",
                }}
              >
                {activeFeatureIndex + 1} / {FEATURES.length}
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PhoneScroll;
