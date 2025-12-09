// src/components/home/phoneScroll.tsx (same as your code, with one change)
"use client";

import React, { useRef } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

import phoneImage from "@/assets/images/phone1.webp";

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
        width: 56,
        height: 56,
        borderRadius: "50%",
        border: "2px solid rgba(255,255,255,0.95)",
      }}
    />
    <Typography
      sx={{
        fontSize: 16,
        fontWeight: 400,
      }}
    >
      {title}
    </Typography>
    <Typography
      sx={{
        fontSize: 13,
        fontWeight: 300,
        lineHeight: 1.6,
        maxWidth: 190,
        color: "rgba(249,250,251,0.9)",
      }}
    >
      {description}
    </Typography>
  </Stack>
);

const featureDescription =
  "Discover your unique energy signature and baseline patterns";

const PhoneScroll: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end 1.1"],
  });

  // Each feature uses a slightly later window of progress
  const f1Opacity = useTransform(scrollYProgress, [0.05, 0.2], [0, 1]);
  const f1Y = useTransform(scrollYProgress, [0.05, 0.2], [40, 0]);

  const f2Opacity = useTransform(scrollYProgress, [0.25, 0.4], [0, 1]);
  const f2Y = useTransform(scrollYProgress, [0.25, 0.4], [40, 0]);

  const f3Opacity = useTransform(scrollYProgress, [0.45, 0.6], [0, 1]);
  const f3Y = useTransform(scrollYProgress, [0.45, 0.6], [40, 0]);

  const f4Opacity = useTransform(scrollYProgress, [0.65, 0.8], [0, 1]);
  const f4Y = useTransform(scrollYProgress, [0.65, 0.8], [40, 0]);

  return (
    <Box
      id="app"
      ref={sectionRef}
      component="section"
      sx={{
        width: "100%",
        // taller than viewport so the sticky part has room to play
        minHeight: { xs: "220vh", md: "260vh" },
        pt: { xs: 8, md: 10 },
        scrollMarginTop: "120px",
      }}
    >
      {/* Sticky container (heading + card) */}
      <Box
        sx={{
          position: "sticky",
          top: 0,
          height: "100vh",                 // <- key: pinned scene
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          pb: { xs: 4, md: 6 },
        }}
      >
        {/* Top heading */}
        <Typography
          sx={{
            textAlign: "center",
            color: "#FFFFFF",
            fontSize: { xs: 24, md: 32 },
            fontWeight: 300,
            mb: { xs: 4, md: 6 },
          }}
        >
          Think better, move better, and live better.
        </Typography>

        {/* Card with mesh gradient background */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: 1280,
            mx: "auto",
            borderRadius: 6,
            overflow: "hidden",
            minHeight: { xs: 420, md: 520 },
            boxShadow: {
              xs: "0px 18px 45px rgba(15,23,42,0.35)",
              md: "0px 30px 80px rgba(15,23,42,0.5)",
            },
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "repeat",
            backgroundImage:
              'url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%223000%22 height=%221500%22%3E%3Cg filter=%22url(%23a)%22%3E%3Cpath fill=%22%230F2027%22 d=%22M-1500-750h6000v3000h-6000z%22%2F%3E%3Cpath d=%22M-549.75-531.75-793.5 1185l253.5 656.25L1499.25 799.5%22 fill=%22%230F2027%22%2F%3E%3Cpath d=%22m524.25-438.75-331.5 864 777 1086.75 1392-1239.75%22 fill=%22%233f4d62%22%2F%3E%3Cpath d=%22M3039.75 429 1242 2151.75l93.75 520.5 2292.75-1866%22 fill=%22%235c6f89%22%2F%3E%3Cpath d=%22m1130.25 535.5-1506 733.5L795 1976.25l468-1066.5%22 fill=%22%230F2027%22%2F%3E%3Cpath d=%22M1771.5 1405.5 567 2607l543 858.75 1426.5-511.5%22 fill=%22%2309172B%22%2F%3E%3Cpath d=%22m1822.5 1393.5-524.25 1446L2232 3315l1050-1263%22 fill=%22%230F2027%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3Cfilter id=%22a%22 x=%22-300%22 y=%22-300%22 width=%223600%22 height=%222100%22 filterUnits=%22userSpaceOnUse%22 color-interpolation-filters=%22sRGB%22%3E%3CfeFlood flood-opacity=%220%22 result=%22BackgroundImageFix%22%2F%3E%3CfeBlend in=%22SourceGraphic%22 in2=%22BackgroundImageFix%22 result=%22shape%22%2F%3E%3CfeGaussianBlur stdDeviation=%22300%22 result=%22effect1_foregroundBlur_1_2%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3C%2Fsvg%3E")',
          }}
        >
          {/* Content */}
          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              height: "100%",
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "1fr auto 1fr",
              },
              alignItems: "center",
              gap: { xs: 4, md: 6 },
              px: { xs: 4, md: 8 },
              py: { xs: 5, md: 7 },
            }}
          >
            {/* Left column */}
            <Stack
              spacing={{ xs: 4, md: 6 }}
              alignItems="center"
              justifyContent="center"
            >
              <motion.div style={{ opacity: f1Opacity, y: f1Y }}>
                <FeatureItem title="Self-Awareness" description={"Reveals your energy signature and needs using daily checks and biometric data."} />
              </motion.div>
              <motion.div style={{ opacity: f2Opacity, y: f2Y }}>
                <FeatureItem title="AI Coach" description={"Personalized routines for breathwork, movement, and inner equilibrium."} />
              </motion.div>
            </Stack>

            {/* Phone in the center */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src={phoneImage}
                alt="Seena app on phone"
                style={{
                  maxHeight: 450,
                  width: "auto",
                }}
                priority
              />
            </Box>

            {/* Right column */}
            <Stack
              spacing={{ xs: 4, md: 6 }}
              alignItems="center"
              justifyContent="center"
            >
              <motion.div style={{ opacity: f3Opacity, y: f3Y }}>
                <FeatureItem title="System Reset" description={"Guided practices to reset your stress response and stabilize your nervous system."} />
              </motion.div>
              <motion.div style={{ opacity: f4Opacity, y: f4Y }}>
                <FeatureItem title="Progress Map" description={"Dynamic dashboard tracking your progress across Mind, Body, and Soul for peak flow."} />
              </motion.div>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PhoneScroll;
