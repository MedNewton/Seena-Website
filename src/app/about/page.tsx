"use client";

import type { FC } from "react";
import { Box, Stack } from "@mui/material";
import heroImg from "@/assets/images/training1.webp"; // adjust path
import Footer from "@/components/layout/footer";
import AboutHero from "@/components/about/AboutHero";
import AboutStorySection from "@/components/about/AboutStorySection";
import AboutMissionSection from "@/components/about/AboutMissionSection";
import AboutValuesSection from "@/components/about/AboutValuesSection";
import AboutClosingSection from "@/components/about/AboutClosingSection";


const ExperiencesPage: FC = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        bgcolor: (theme) => theme.palette.background.default,
        pb: { xs: 10, md: 0 },
      }}
    >
      {/* Main content */}
      <Stack
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1440,
          mx: "auto",
          pt: { xs: 10, md: 14 },
          px: { xs: 2, md: 0 },
          gap: { xs: 4, md: 6 },
        }}
      >
        <AboutHero
          title="About Seena"
          image={heroImg}
        />

        <AboutStorySection />
        <AboutMissionSection />
        <AboutValuesSection />
        <AboutClosingSection />
      </Stack>
      <Footer />
    </Box>
  );
};

export default ExperiencesPage;
