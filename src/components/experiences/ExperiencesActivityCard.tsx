// src/components/experiences/ExperiencesActivityCard.tsx
"use client";

import type { FC } from "react";
import { Box, Typography } from "@mui/material";
import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";
import type { ExperiencesActivity } from "./ExperiencesSectionSlider";

type ExperiencesActivityCardProps = {
  activity: ExperiencesActivity;
  isHighlighted?: boolean;
};

const MotionBox = motion.create(Box);

const ExperiencesActivityCard: FC<ExperiencesActivityCardProps> = ({
  activity,
  isHighlighted = false,
}) => {
  const { title, image } = activity as { title: string; image: StaticImageData };

  return (
    <MotionBox
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      sx={{
        position: "relative",
        borderRadius: 3,
        overflow: "hidden",
        cursor: "pointer",
        flexShrink: 0,
        // Bigger cards
        width: { xs: 220, md: 260, lg: 280 },
        height: { xs: 200, md: 260, lg: 260 },
        backgroundColor: "#020617",
      }}
    >
      {/* Background image */}
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 220px, 280px"
        style={{ objectFit: "cover" }}
      />

      {/* Dark gradient overlay */}


      {/* Bottom text */}
      <Box
        sx={{
          position: "absolute",
          left: 12,
          right: 12,
          bottom: 10,
          display: "flex",
          flexDirection: "column",
          gap: 0.5,
        }}
      >
        <Typography
          sx={{
            fontSize: 11,
            fontWeight: 400,
            letterSpacing: 0.3,
            textTransform: "uppercase",
            color: "rgba(249,250,251,0.85)",
          }}
        >
          {title}
        </Typography>
      </Box>
    </MotionBox>
  );
};

export default ExperiencesActivityCard;
