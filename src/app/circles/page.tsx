"use client";

import type { FC } from "react";
import { Box, Stack } from "@mui/material";

import CirclesBackgroundLayer from "@/components/circles/CirclesBackgroundLayer";
import CirclesHero from "@/components/circles/CirclesHero";
import CirclesFiltersBar from "@/components/circles/CirclesFiltersBar";
import CirclesSectionSlider, {
  type CirclesSectionConfig,
} from "@/components/circles/CirclesSlider";
import Footer from "@/components/layout/footer";

import heroImg from "@/assets/images/training1.webp"; // adjust path
import cardImg1 from "@/assets/images/retreat1.webp";
import cardImg2 from "@/assets/images/retreat1.webp";
import cardImg3 from "@/assets/images/retreat1.webp";
import cardImg4 from "@/assets/images/retreat1.webp";
import cardImg5 from "@/assets/images/retreat1.webp";
import cardImg6 from "@/assets/images/retreat1.webp";
import cardImg7 from "@/assets/images/retreat1.webp";
import cardImg8 from "@/assets/images/retreat1.webp";
import cardImg9 from "@/assets/images/retreat1.webp";
import cardImg10 from "@/assets/images/retreat1.webp";

const CIRCLES_SECTIONS: CirclesSectionConfig[] = [
  {
    id: "for-you",
    title: "For you",
    activities: [
      { id: "fy-1", title: "Activity 1", image: cardImg1 },
      { id: "fy-2", title: "Activity 2", image: cardImg2 },
      { id: "fy-3", title: "Activity 3", image: cardImg3 },
      { id: "fy-4", title: "Activity 4", image: cardImg4 },
      { id: "fy-5", title: "Activity 5", image: cardImg5 },
      { id: "fy-6", title: "Activity 6", image: cardImg6 },
      { id: "fy-7", title: "Activity 7", image: cardImg7 },
      { id: "fy-8", title: "Activity 8", image: cardImg8 },
      { id: "fy-9", title: "Activity 9", image: cardImg9 },
      { id: "fy-10", title: "Activity 10", image: cardImg10 },
    ],
  },
  {
    id: "wellness-studios",
    title: "Wellness Studios",
    activities: [
      { id: "ws-1", title: "Activity 1", image: cardImg1 },
      { id: "ws-2", title: "Activity 2", image: cardImg2 },
      { id: "ws-3", title: "Activity 3", image: cardImg3 },
      { id: "ws-4", title: "Activity 4", image: cardImg4 },
      { id: "ws-5", title: "Activity 5", image: cardImg5 },
      { id: "ws-6", title: "Activity 6", image: cardImg6 },
      { id: "ws-7", title: "Activity 7", image: cardImg7 },
      { id: "ws-8", title: "Activity 8", image: cardImg8 },
      { id: "ws-9", title: "Activity 9", image: cardImg9 },
      { id: "ws-10", title: "Activity 10", image: cardImg10 },
    ],
  },
  {
    id: "retreats",
    title: "Retreats",
    activities: [
      { id: "re-1", title: "Activity 1", image: cardImg1 },
      { id: "re-2", title: "Activity 2", image: cardImg2 },
      { id: "re-3", title: "Activity 3", image: cardImg3 },
      { id: "re-4", title: "Activity 4", image: cardImg4 },
      { id: "re-5", title: "Activity 5", image: cardImg5 },
      { id: "re-6", title: "Activity 6", image: cardImg6 },
      { id: "re-7", title: "Activity 7", image: cardImg7 },
      { id: "re-8", title: "Activity 8", image: cardImg8 },
      { id: "re-9", title: "Activity 9", image: cardImg9 },
      { id: "re-10", title: "Activity 10", image: cardImg10 },
    ],
  },
  {
    id: "community-challenges",
    title: "Community Challenges",
    activities: [
      { id: "cc-1", title: "Activity 1", image: cardImg1 },
      { id: "cc-2", title: "Activity 2", image: cardImg2 },
      { id: "cc-3", title: "Activity 3", image: cardImg3 },
      { id: "cc-4", title: "Activity 4", image: cardImg4 },
      { id: "cc-5", title: "Activity 5", image: cardImg5 },
      { id: "cc-6", title: "Activity 6", image: cardImg6 },
      { id: "cc-7", title: "Activity 7", image: cardImg7 },
      { id: "cc-8", title: "Activity 8", image: cardImg8 },
      { id: "cc-9", title: "Activity 9", image: cardImg9 },
      { id: "cc-10", title: "Activity 10", image: cardImg10 },
    ],
  },
  {
    id: "events",
    title: "Events",
    activities: [
      { id: "ev-1", title: "Activity 1", image: cardImg1 },
      { id: "ev-2", title: "Activity 2", image: cardImg2 },
      { id: "ev-3", title: "Activity 3", image: cardImg3 },
      { id: "ev-4", title: "Activity 4", image: cardImg4 },
      { id: "ev-5", title: "Activity 5", image: cardImg5 },
      { id: "ev-6", title: "Activity 6", image: cardImg6 },
      { id: "ev-7", title: "Activity 7", image: cardImg7 },
      { id: "ev-8", title: "Activity 8", image: cardImg8 },
      { id: "ev-9", title: "Activity 9", image: cardImg9 },
      { id: "ev-10", title: "Activity 10", image: cardImg10 },
    ],
  },
];

const CirclesPage: FC = () => {
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
      {/* Background glow layer – absolutely positioned behind content */}
      <CirclesBackgroundLayer />

      {/* Main content */}
      <Stack
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1280,
          mx: "auto",
          pt: { xs: 10, md: 14 },
          px: { xs: 2, md: 3 },
          gap: { xs: 4, md: 6 },
        }}
      >
        <CirclesHero
          title="Circles"
          image={heroImg}
        />

        <CirclesFiltersBar />

        {CIRCLES_SECTIONS.map((section) => (
          <CirclesSectionSlider
            key={section.id}
            config={section}
          />
        ))}
      </Stack>
      <Footer transparentFooter={true} />
    </Box>
  );
};

export default CirclesPage;
