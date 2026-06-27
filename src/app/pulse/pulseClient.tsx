"use client";

import type { FC } from "react";
import { Box } from "@mui/material";

import PulseHero from "@/components/pulse/PulseHero";
import PulseInsideSection from "@/components/pulse/PulseInsideSection";
import PulseUnlocksSection from "@/components/pulse/PulseUnlocksSection";
import PulseBuiltSection from "@/components/pulse/PulseBuiltSection";
import ExploreMoreSection from "@/components/home/ExploreMoreSection";
import Footer from "@/components/layout/footer";

const PulsePageClient: FC = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        bgcolor: "#000000",
        overflowX: "hidden",
      }}
    >
      <PulseHero />
      <PulseInsideSection />
      <PulseBuiltSection />
      <ExploreMoreSection excludeId="pulse" dark />
      <Footer meshColors={["#2cdacd", "#2cdacd", "#2cdacd", "#2d2a7e"]} />
    </Box>
  );
};

export default PulsePageClient;
