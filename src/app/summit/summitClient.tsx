"use client";

import type { FC } from "react";
import { Box } from "@mui/material";

import SummitHero from "@/components/summit/SummitHero";
import SummitEventSection from "@/components/summit/SummitEventSection";
import ExploreMoreSection from "@/components/home/ExploreMoreSection";
import Footer from "@/components/layout/footer";

const SummitPageClient: FC = () => {
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
      <SummitHero />
      <SummitEventSection />
      <ExploreMoreSection
        excludeId="summits"
        accentGradient="linear-gradient(150deg, #0f52ba 0%, #6a8ff0 50%, #b388eb 100%)"
      />
      <Footer meshColors={["#0f52ba", "#6a8ff0", "#b388eb", "#0f52ba"]} />
    </Box>
  );
};

export default SummitPageClient;
