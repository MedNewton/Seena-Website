"use client";

import type { FC } from "react";
import { Box } from "@mui/material";

import CirclesHero from "@/components/circles/CirclesHero";
import CirclesInsideSection from "@/components/circles/CirclesInsideSection";
import CirclesUnlocksSection from "@/components/circles/CirclesUnlocksSection";
import CirclesBuiltSection from "@/components/circles/CirclesBuiltSection";
import ExploreMoreSection from "@/components/home/ExploreMoreSection";
import Footer from "@/components/layout/footer";

const CirclesPageClient: FC = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        bgcolor: "#ffffff",
        overflowX: "hidden",
      }}
    >
      <CirclesHero title="Circles" />
      <CirclesInsideSection />
      <CirclesBuiltSection />
      <ExploreMoreSection excludeId="circles" />
      <Footer />
    </Box>
  );
};

export default CirclesPageClient;
