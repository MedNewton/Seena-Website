"use client";

import type { FC } from "react";
import { Box, Typography } from "@mui/material";
import type { StaticImageData } from "next/image";
import { motion } from "framer-motion";

export interface AboutHeroProps {
  title: string;
  image: StaticImageData; // kept for compatibility, not used
}

const MotionWrapper = motion.create(Box);
const MotionBg = motion.create(Box);

const AboutHero: FC<AboutHeroProps> = ({ title }) => {
  return (
    <MotionWrapper
      // Fade-in only, no vertical shift so the hero doesn't "go up"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: 1440,
        mx: "auto",
        mt: { xs: 4, md: 2 },
        borderRadius: 6,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: { xs: 220, md: 300, lg: 340 },
      }}
    >
      {/* Animated mesh gradient background */}
      <MotionBg
        aria-hidden="true"
        initial={{ scale: 1.08, rotate: -3, x: "-4%", y: "-2%" }}
        animate={{ scale: 1.22, rotate: 5, x: "4%", y: "2%" }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        sx={{
          position: "absolute",
          inset: "-6%",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "repeat",
          backgroundImage:
            'url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%221000%22 height=%22500%22%3E%3Cg filter=%22url(%23a)%22%3E%3Cpath fill=%22%23D77A1E%22 d=%22M-500-250h2000V750H-500z%22%2F%3E%3Cpath d=%22m-96.617-169.79-237 428 577 214 42-81%22 fill=%22%23FFE8B2%22%2F%3E%3Cpath d=%22m260.988-265.186-435 508 467 75 119-200%22 fill=%22%23ffe8b2%22%2F%3E%3Cpath d=%22m961.647 201.479-353 322 162 263 412-289%22 fill=%22%231F1306%22%2F%3E%3Cpath d=%22m131 155-306 132 387 401 155-337%22 fill=%22%23D77A1E%22%2F%3E%3Cpath d=%22M577 410 195 620l661 535 130-188%22 fill=%22%231F1306%22%2F%3E%3Cpath d=%22M1049 390 494 620l393 320 162-199%22 fill=%22%23D77A1E%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3Cfilter id=%22a%22 x=%22-91%22 y=%22-91%22 width=%221182%22 height=%22682%22 filterUnits=%22userSpaceOnUse%22 color-interpolation-filters=%22sRGB%22%3E%3CfeFlood flood-opacity=%220%22 result=%22BackgroundImageFix%22%2F%3E%3CfeBlend in=%22SourceGraphic%22 in2=%22BackgroundImageFix%22 result=%22shape%22%2F%3E%3CfeGaussianBlur stdDeviation=%2291%22 result=%22effect1_foregroundBlur_1_2%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3C%2Fsvg%3E")',
          willChange: "transform",
        }}
      />

      {/* Dark overlay for readability */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      {/* Centered text */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 3, md: 6 },
          textAlign: "center",
        }}
      >
        <Typography
          component="h1"
          sx={{
            fontFamily: "var(--font-bricolage)",
            fontSize: { xs: 32, md: 46 },
            fontWeight: 400,
            letterSpacing: 0.4,
            color: "#FFFFFF",
          }}
        >
          {title}
        </Typography>
      </Box>
    </MotionWrapper>
  );
};

export default AboutHero;
