"use client";

import type { FC } from "react";
import { Box } from "@mui/material";

import CirclesHero from "@/components/circles/CirclesHero";
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
      <Footer />
    </Box>
  );
};

export default CirclesPageClient;
