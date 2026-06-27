"use client";

import type { FC } from "react";
import { Box } from "@mui/material";

import SummitHero from "@/components/summit/SummitHero";
import SummitEventSection from "@/components/summit/SummitEventSection";
import SummitInsideSection from "@/components/summit/SummitInsideSection";
import SummitUnlocksSection from "@/components/summit/SummitUnlocksSection";
import SummitBuiltSection from "@/components/summit/SummitBuiltSection";
import ExploreMoreSection from "@/components/home/ExploreMoreSection";
import Footer from "@/components/layout/footer";

const SummitPageClient: FC = () => {
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
      <SummitHero />
      <SummitEventSection />
      <SummitInsideSection />
      <SummitUnlocksSection />
      <SummitBuiltSection />
      <ExploreMoreSection excludeId="summits" dark />
      <Footer meshColors={["#0f52ba", "#6a8ff0", "#b388eb", "#0f52ba"]} />
    </Box>
  );
};

export default SummitPageClient;
