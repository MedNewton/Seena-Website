"use client";

import type { FC } from "react";
import { Box, Stack } from "@mui/material";

import AppBackgroundLayer from "@/components/app/AppBackgroundLayer";
import AppHero from "@/components/app/AppHero";
import AppBreathingExerciseSection from "@/components/app/AppBreathingExerciseSection";
import AppFiltersBar from "@/components/app/AppFiltersBar";
import AppSectionSlider, {
  type AppSectionConfig,
} from "@/components/app/AppSectionSlider";
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

const APP_SECTIONS: AppSectionConfig[] = [
  {
    id: "for-you",
    title: "For you",
    activities: [
      { id: "fy-1", title: "Breathwork for calm", image: cardImg1 },
      { id: "fy-2", title: "Guided meditation", image: cardImg2 },
      { id: "fy-3", title: "Gratitude journaling", image: cardImg3 },
      { id: "fy-4", title: "Mini work rest", image: cardImg4 },
      { id: "fy-5", title: "Evening wind-down", image: cardImg5 },
      { id: "fy-6", title: "Focus block", image: cardImg6 },
      { id: "fy-7", title: "Micro reset alert", image: cardImg7 },
      { id: "fy-8", title: "Daily check-in", image: cardImg8 },
      { id: "fy-9", title: "Sound healing", image: cardImg9 },
      { id: "fy-10", title: "Digital detox block", image: cardImg10 },
      { id: "fy-11", title: "Sleep hydene routine", image: cardImg10 },
    ],
  },
  {
    id: "breathwork-and-regulation",
    title: "Breathwork & Regulation",
    activities: [
      { id: "ws-1", title: "Cyclic Sighing Breathing", image: cardImg1 },
      { id: "ws-2", title: "Box breathing", image: cardImg2 },
      { id: "ws-3", title: "Resonance breathing", image: cardImg3 },
      { id: "ws-4", title: "4-7-8 breathing", image: cardImg4 },
      { id: "ws-5", title: "Breath awarness meditation", image: cardImg5 },
      { id: "ws-6", title: "Gentle breathing under trees", image: cardImg6 },
      { id: "ws-7", title: "Breathwork for calm (Box breathing)", image: cardImg7 },
    ],
  },
  {
    id: "meditation-and-mindfulness",
    title: "Meditation & Mindfulness",
    activities: [
      { id: "re-1", title: "Guided mediation (body scan)", image: cardImg1 },
      { id: "re-2", title: "Guided mediation (Focused attention)", image: cardImg2 },
      { id: "re-3", title: "Guided mediation (body scan)", image: cardImg3 },
      { id: "re-4", title: "Open awarness", image: cardImg4 },
      { id: "re-5", title: "Visualization/Guided imagery", image: cardImg5 },
      { id: "re-6", title: "Compassion mediation (Loving kindness)", image: cardImg6 },
      { id: "re-7", title: "Mediation + Visualzation mornings", image: cardImg7 },
      { id: "re-8", title: "Mini mediation for work reset", image: cardImg8 },
      { id: "re-9", title: "Meditation practice", image: cardImg9 },
      { id: "re-10", title: "Evening widn-down", image: cardImg10 },
      { id: "re-11", title: "Guided relaxation", image: cardImg10 },
      { id: "re-12", title: "Sound healing (singing bowls, Frequencies)", image: cardImg10 },
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
      {/* Background glow layer – absolutely positioned behind content */}
      <AppBackgroundLayer />

      {/* Main content */}
      <Stack
        sx={{
          position: "relative",
          zIndex: 1,
          mx: "auto",
        }}
      >
        <AppHero
          title="Digital Guidance"
          image={heroImg}
        />
        <Stack sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1440,
          mx: "auto",
          px: { xs: 2, md: 3 },
          gap: { xs: 4, md: 6 },
        }}>
        <AppBreathingExerciseSection />
        <AppFiltersBar />

        {APP_SECTIONS.map((section) => (
          <AppSectionSlider
            key={section.id}
            config={section}
          />
        ))}
        </Stack>
      </Stack>
      <Footer transparentFooter={true} />
    </Box>
  );
};

export default ExperiencesPage;
