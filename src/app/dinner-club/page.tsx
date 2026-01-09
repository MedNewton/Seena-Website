"use client";

import type { FC } from "react";
import { Box, Stack } from "@mui/material";

import DinnerClubBackgroundLayer from "@/components/dinner-club/DinnerClubBackgroundLayer";
import DinnerClubHero from "@/components/dinner-club/DinnerClubHero";
import DinnerClubFeaturedEvent from "@/components/dinner-club/DinnerClubFeaturedEvent";
import DinnerClubFiltersBar from "@/components/dinner-club/DinnerClubFiltersBar";
import DinnerClubSectionSlider, {
  type DinnerClubSectionConfig,
} from "@/components/dinner-club/DinnerClubSlider";
import Footer from "@/components/layout/footer";

import heroImg from "@/assets/images/dinner3.webp"; // adjust path
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

const DINNER_CLUB_SECTIONS: DinnerClubSectionConfig[] = [
  {
    id: "breathwork-and-regulation",
    title: "Breathwork & Regulation",
    activities: [
      { id: "br-1", title: "Cyclic Sighing Breathing", image: cardImg1 },
      { id: "br-2", title: "Box Breathing", image: cardImg2 },
      { id: "br-3", title: "Resonance Breathing", image: cardImg3 },
      { id: "br-4", title: "4-7-8 Breathing", image: cardImg4 },
      { id: "br-5", title: "Breath Awareness Meditation", image: cardImg5 },
      {
        id: "br-6",
        title: "Gentle Breathing under Trees (adapted digitally as a visualization)",
        image: cardImg6,
      },
      {
        id: "br-7",
        title: "Breathwork for Calm (Box Breathing)",
        image: cardImg7,
      },
    ],
  },
  {
    id: "meditation-and-mindfulness",
    title: "Meditation & Mindfulness",
    activities: [
      { id: "mm-1", title: "Guided Meditation (Body Scan)", image: cardImg1 },
      {
        id: "mm-2",
        title: "Guided Meditation (Focused Attention)",
        image: cardImg2,
      },
      { id: "mm-3", title: "Guided Meditation (Open Awareness)", image: cardImg3 },
      { id: "mm-4", title: "Visualization / Guided Imagery", image: cardImg4 },
      {
        id: "mm-5",
        title: "Compassion Meditation (Loving-Kindness)",
        image: cardImg5,
      },
      {
        id: "mm-6",
        title: "Meditation + Visualization Morning Practice",
        image: cardImg6,
      },
      { id: "mm-7", title: "Mini Meditation for Work Reset", image: cardImg7 },
      {
        id: "mm-8",
        title: "Meditation Practice (Guided or Silent)",
        image: cardImg8,
      },
      {
        id: "mm-9",
        title: "Evening Wind-Down (Breathing for Rest)",
        image: cardImg9,
      },
      { id: "mm-10", title: "Guided Relaxation Meditation", image: cardImg10 },
      {
        id: "mm-11",
        title: "Sound Healing (Singing Bowls, Frequencies) (as immersive audio)",
        image: cardImg1,
      },
    ],
  },
  {
    id: "journaling-and-self-reflection",
    title: "Journaling & Self-Reflection",
    activities: [
      { id: "jr-1", title: "Mindful Journaling", image: cardImg1 },
      {
        id: "jr-2",
        title: "Gratitude Journaling / Reflection",
        image: cardImg2,
      },
      {
        id: "jr-3",
        title: 'Journaling Emotions (“How I Feel Now”)',
        image: cardImg3,
      },
      {
        id: "jr-4",
        title: "Reflective Journaling (Patterns, Triggers)",
        image: cardImg4,
      },
      {
        id: "jr-5",
        title: "Creative Journaling (Writing, Poetry)",
        image: cardImg5,
      },
      { id: "jr-6", title: "Purpose Journaling Prompt", image: cardImg6 },
      {
        id: "jr-7",
        title: "Gratitude & Intention Journaling",
        image: cardImg7,
      },
      {
        id: "jr-8",
        title:
          "Gratitude Journal / Letter / Box / Jar / Worksheet / Post-it / Tree / Prompts / Collage",
        image: cardImg8,
      },
      {
        id: "jr-9",
        title: "“How did I feel today?” / “What drained or fueled me?”",
        image: cardImg9,
      },
      {
        id: "jr-10",
        title: "Work Journaling (Wins & Reflections)",
        image: cardImg10,
      },
    ],
  },
  {
    id: "emotional-regulation-and-cognitive-support",
    title: "Emotional Regulation & Cognitive Support",
    activities: [
      { id: "er-1", title: "Emotional Labeling Exercise", image: cardImg1 },
      {
        id: "er-2",
        title: "Cognitive Reframing Micro-Exercise",
        image: cardImg2,
      },
      {
        id: "er-3",
        title: "Compassionate Self-Talk Practice",
        image: cardImg3,
      },
      {
        id: "er-4",
        title: "Self-Compassion Mirror Affirmations",
        image: cardImg4,
      },
      {
        id: "er-5",
        title: "Self-Check-In (Mood & Energy Survey)",
        image: cardImg5,
      },
      {
        id: "er-6",
        title: "Micro-ACT Exercise (Values Reflection)",
        image: cardImg6,
      },
      {
        id: "er-7",
        title: 'Micro-Reset “Pause & Breathe” Alert',
        image: cardImg7,
      },
      {
        id: "er-8",
        title: "Daily Check-In Visualization (AI-Guided)",
        image: cardImg8,
      },
      { id: "er-9", title: "Practicing Forgiveness Exercises", image: cardImg9 },
      {
        id: "er-10",
        title: "Digital CBT for Anxiety & Stress",
        image: cardImg10,
      },
      { id: "er-11", title: "CBT-I for Sleep Regulation", image: cardImg1 },
      {
        id: "er-12",
        title: "Interactive Coping Skills Builder",
        image: cardImg2,
      },
      {
        id: "er-13",
        title:
          "Stress Relief Routines (e.g., Calm Under Pressure, Flow Kickstart)",
        image: cardImg3,
      },
    ],
  },
  {
    id: "sleep-and-recovery",
    title: "Sleep & Recovery",
    activities: [
      { id: "sr-1", title: "Sleep Hygiene Routine", image: cardImg1 },
      { id: "sr-2", title: "Blue-Light Detox Practice", image: cardImg2 },
      {
        id: "sr-3",
        title: "Evening Wind-Down (Mind Release & Gratitude Journal)",
        image: cardImg3,
      },
      {
        id: "sr-4",
        title:
          "Reading Before Sleep (integrated through prompts or audiobook suggestions)",
        image: cardImg4,
      },
    ],
  },
  {
    id: "creativity-and-expression",
    title: "Creativity & Expression",
    activities: [
      { id: "ce-1", title: "Art Expression Exercise", image: cardImg1 },
      { id: "ce-2", title: "Music Listening / Sound Bath", image: cardImg2 },
      { id: "ce-3", title: "Listening to Calming Music", image: cardImg3 },
      {
        id: "ce-4",
        title: "Aromatherapy (Visualization / Guidance)",
        image: cardImg4,
      },
      {
        id: "ce-5",
        title: "Creating Vision Board (digital visualization board)",
        image: cardImg5,
      },
      { id: "ce-6", title: "Listening to Music Mindfully", image: cardImg6 },
    ],
  },
  {
    id: "learning-and-cognitive-growth",
    title: "Learning & Cognitive Growth",
    activities: [
      { id: "lc-1", title: "Reading Daily / Audiobooks", image: cardImg1 },
      {
        id: "lc-2",
        title: "Listening to Educational Podcasts",
        image: cardImg2,
      },
      { id: "lc-3", title: "Brain Games & Puzzles", image: cardImg3 },
      { id: "lc-4", title: "Watching TED Talks / Documentaries", image: cardImg4 },
      { id: "lc-5", title: "Language Learning (Digital Prompts)", image: cardImg5 },
      { id: "lc-6", title: "Creative Writing Prompts", image: cardImg6 },
      { id: "lc-7", title: "Critical Thinking Exercises", image: cardImg7 },
    ],
  },
  {
    id: "productivity-and-focus",
    title: "Productivity & Focus",
    activities: [
      {
        id: "pf-1",
        title: "Focus Block (Pomodoro / Deep Work Sprint)",
        image: cardImg1,
      },
      { id: "pf-2", title: "Time-Blocking Work Sessions", image: cardImg2 },
      {
        id: "pf-3",
        title: "Lunch Away from Screen (Mindfulness Prompt)",
        image: cardImg3,
      },
      { id: "pf-4", title: "Digital Detox Block (Tech-Free Hour)", image: cardImg4 },
      { id: "pf-5", title: "Balanced Diet Planning (Digital Tracker)", image: cardImg5 },
      { id: "pf-6", title: "Journaling Success & Challenges", image: cardImg6 },
      { id: "pf-7", title: "Practicing Gratitude Nightly", image: cardImg7 },
      {
        id: "pf-8",
        title: "Shift-Aware Alerts for Real-Time Regulation",
        image: cardImg8,
      },
    ],
  },
];

const DinnerClubPage: FC = () => {
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
      <DinnerClubBackgroundLayer />

      {/* Main content */}
      <Stack
        sx={{
          position: "relative",
          zIndex: 1,
          mx: "auto",
          gap: { xs: 4, md: 6 },
        }}
      >
        <DinnerClubHero
          title="Dinner Club"
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
          <DinnerClubFeaturedEvent />

          <DinnerClubFiltersBar />

          {DINNER_CLUB_SECTIONS.map((section) => (
            <DinnerClubSectionSlider
              key={section.id}
              config={section}
            />
          ))}
        </Stack>
      </Stack>
      <Footer />
    </Box>
  );
};

export default DinnerClubPage;
