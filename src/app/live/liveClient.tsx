"use client";

import type { FC } from "react";
import { Box } from "@mui/material";

import LiveHero from "@/components/live/LiveHero";
import LiveInsideSection from "@/components/live/LiveInsideSection";
import LiveUnlocksSection from "@/components/live/LiveUnlocksSection";
import LiveBuiltSection from "@/components/live/LiveBuiltSection";
import ExploreMoreSection from "@/components/home/ExploreMoreSection";
import Footer from "@/components/layout/footer";

const LivePageClient: FC = () => {
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
      <LiveHero />
      <LiveInsideSection />
      <LiveBuiltSection />
      <ExploreMoreSection excludeId="live" dark />
      <Footer meshColors={["#2c61b5", "#2c61b5", "#ffd166", "#121e2f"]} />
    </Box>
  );
};

export default LivePageClient;
