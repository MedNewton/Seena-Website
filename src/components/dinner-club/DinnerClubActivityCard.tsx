// src/components/experiences/ExperiencesActivityCard.tsx
"use client";

import type { FC } from "react";
import { Box, Typography } from "@mui/material";
import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";
import type { DinnerClubActivity } from "./DinnerClubSlider";

type DinnerClubActivityCardProps = {
  activity: DinnerClubActivity;
  isHighlighted?: boolean;
};

const MotionBox = motion.create(Box);

const DinnerClubActivityCard: FC<DinnerClubActivityCardProps> = ({
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
        borderRadius: 2,
        overflow: "hidden",
        cursor: "pointer",
        flexShrink: 0,
        // Responsive card sizes - smaller on mobile
        width: { xs: 160, sm: 200, md: 260, lg: 280 },
        height: { xs: 140, sm: 180, md: 260, lg: 260 },
        backgroundColor: "#020617",
      }}
    >
      {/* Background image */}
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 600px) 160px, (max-width: 960px) 200px, 280px"
        style={{ objectFit: "cover" }}
        priority={false}
      />

      {/* Dark gradient overlay */}


      {/* Bottom text */}
      <Box
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          flexDirection: "column",
          gap: 0.5,
          background: "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
          padding: 2
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: 12, sm: 14, md: 16 },
            fontWeight: 600,
            letterSpacing: 0.3,
            textTransform: "uppercase",
            color: "rgba(249,250,251,0.85)",
            lineHeight: 1.3,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {title}
        </Typography>
      </Box>
    </MotionBox>
  );
};

export default DinnerClubActivityCard;
