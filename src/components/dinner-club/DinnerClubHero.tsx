"use client";

import type { FC } from "react";
import { Box, Typography } from "@mui/material";
import Image, { type StaticImageData } from "next/image";

export interface DinnerClubHeroProps {
  title: string;
  image: StaticImageData;
}

const DinnerClubHero: FC<DinnerClubHeroProps> = ({ title, image }) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        borderRadius: 6,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // higher hero
        minHeight: { xs: 240, md: 320, lg: 460 },
        boxShadow: "0px 24px 60px rgba(15,23,42,0.55)",
      }}
    >
      <Image
        src={image}
        alt={title}
        fill
        priority
        style={{
          objectFit: "cover",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.45) 100%)",
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
    </Box>
  );
};

export default DinnerClubHero;
