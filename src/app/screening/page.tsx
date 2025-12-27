// src/app/screening/page.tsx (or wherever this file lives)
"use client";

import type { FC } from "react";
import { Box, Stack } from "@mui/material";

import ScreeningBackgroundLayer from "@/components/screening/ScreeningBackgroundLayer";
import ScreeningHero from "@/components/screening/ScreeningHero";
import FullSeenaAssessmentSection from "@/components/screening/FullSeenaAssessmentSection";
import ScreeningFiltersBar from "@/components/screening/ScreeningFiltersBar";
import ScreeningSectionSlider, {
  type ScreeningSectionConfig,
} from "@/components/screening/ScreeningSlider";
import Footer from "@/components/layout/footer";

import heroImg from "@/assets/images/training1.webp";

const SCREENING_SECTIONS: ScreeningSectionConfig[] = [
  {
    id: "for-you",
    title: "For you",
    activities: [
      {
        id: "fy-1",
        title: "Wellness Snapshot",
        description:
          "Quick overview of your current wellness state across all dimensions.",
        durationMinutes: 5,
        questionsCount: 15,
      },
      {
        id: "fy-2",
        title: "Daily Check-In",
        description:
          "Monitor your daily wellness patterns and track progress over time.",
        durationMinutes: 3,
        questionsCount: 10,
      },
      {
        id: "fy-3",
        title: "Personalized Wellness",
        description:
          "Discover your unique wellness profile and personalized recommendations.",
        durationMinutes: 10,
        questionsCount: 25,
      },
      {
        id: "fy-4",
        title: "Stress Level Assessment",
        description:
          "Evaluate your current stress levels and identify key triggers.",
        durationMinutes: 5,
        questionsCount: 12,
      },
      {
        id: "fy-5",
        title: "Energy Patterns",
        description:
          "Understand your energy fluctuations throughout the day.",
        durationMinutes: 7,
        questionsCount: 18,
      },
    ],
  },
  {
    id: "psychological-emotional",
    title: "Psychological & Emotional State",
    activities: [
      {
        id: "pe-1",
        title: "Depression Screening (PHQ-9)",
        description:
          "Standardized assessment for depressive symptoms and mood changes.",
        durationMinutes: 5,
        questionsCount: 9,
      },
      {
        id: "pe-2",
        title: "Anxiety Screening (GAD-7)",
        description:
          "Evaluate generalized anxiety disorder symptoms and intensity.",
        durationMinutes: 5,
        questionsCount: 7,
      },
      {
        id: "pe-3",
        title: "Stress Assessment",
        description:
          "Measure your perceived stress levels and coping mechanisms.",
        durationMinutes: 8,
        questionsCount: 20,
      },
      {
        id: "pe-4",
        title: "Emotional Regulation",
        description:
          "Assess your ability to manage and respond to emotions.",
        durationMinutes: 10,
        questionsCount: 22,
      },
      {
        id: "pe-5",
        title: "Mood Tracking",
        description:
          "Regular monitoring of mood patterns and emotional trends.",
        durationMinutes: 4,
        questionsCount: 12,
      },
    ],
  },
  {
    id: "physical-health",
    title: "Physical Health & Vitality",
    activities: [
      {
        id: "ph-1",
        title: "Sleep Quality Index",
        description:
          "Comprehensive evaluation of your sleep patterns and quality.",
        durationMinutes: 7,
        questionsCount: 15,
      },
      {
        id: "ph-2",
        title: "Physical Activity Level",
        description:
          "Assess your current exercise habits and movement patterns.",
        durationMinutes: 6,
        questionsCount: 14,
      },
      {
        id: "ph-3",
        title: "Nutrition Assessment",
        description:
          "Evaluate your dietary habits and nutritional awareness.",
        durationMinutes: 8,
        questionsCount: 18,
      },
      {
        id: "ph-4",
        title: "Energy & Vitality",
        description:
          "Measure your physical energy levels and vitality.",
        durationMinutes: 5,
        questionsCount: 12,
      },
      {
        id: "ph-5",
        title: "Body Awareness",
        description:
          "Assess your connection and awareness of physical sensations.",
        durationMinutes: 6,
        questionsCount: 16,
      },
    ],
  },
  {
    id: "cognitive-behavioral",
    title: "Cognitive & Behavioral Patterns",
    activities: [
      {
        id: "cb-1",
        title: "Focus & Concentration",
        description:
          "Evaluate your ability to maintain attention and focus.",
        durationMinutes: 7,
        questionsCount: 16,
      },
      {
        id: "cb-2",
        title: "Memory Assessment",
        description:
          "Quick screening for memory function and cognitive clarity.",
        durationMinutes: 8,
        questionsCount: 18,
      },
      {
        id: "cb-3",
        title: "Decision Making Patterns",
        description:
          "Understand your decision-making style and effectiveness.",
        durationMinutes: 9,
        questionsCount: 20,
      },
      {
        id: "cb-4",
        title: "Habit Formation",
        description:
          "Assess your ability to build and maintain healthy habits.",
        durationMinutes: 6,
        questionsCount: 14,
      },
      {
        id: "cb-5",
        title: "Mindfulness Capacity",
        description:
          "Measure your present-moment awareness and mindful attention.",
        durationMinutes: 7,
        questionsCount: 15,
      },
    ],
  },
  {
    id: "social-relational",
    title: "Social & Relational Context",
    activities: [
      {
        id: "sr-1",
        title: "Social Connection",
        description:
          "Evaluate the quality and depth of your social relationships.",
        durationMinutes: 8,
        questionsCount: 18,
      },
      {
        id: "sr-2",
        title: "Relationship Satisfaction",
        description:
          "Assess satisfaction across various relationships in your life.",
        durationMinutes: 10,
        questionsCount: 22,
      },
      {
        id: "sr-3",
        title: "Communication Style",
        description:
          "Understand your communication patterns and effectiveness.",
        durationMinutes: 7,
        questionsCount: 16,
      },
      {
        id: "sr-4",
        title: "Boundary Assessment",
        description:
          "Evaluate your ability to set and maintain healthy boundaries.",
        durationMinutes: 8,
        questionsCount: 19,
      },
      {
        id: "sr-5",
        title: "Conflict Resolution",
        description:
          "Identify your approach to resolving disagreements and conflicts.",
        durationMinutes: 9,
        questionsCount: 21,
      },
    ],
  },
  {
    id: "work-purpose",
    title: "Work & Purpose Dimension",
    activities: [
      {
        id: "wp-1",
        title: "Work-Life Balance",
        description:
          "Assess the balance between your professional and personal life.",
        durationMinutes: 8,
        questionsCount: 18,
      },
      {
        id: "wp-2",
        title: "Job Satisfaction",
        description:
          "Evaluate your satisfaction and engagement at work.",
        durationMinutes: 7,
        questionsCount: 16,
      },
      {
        id: "wp-3",
        title: "Purpose & Meaning",
        description:
          "Explore your sense of purpose and meaningful contribution.",
        durationMinutes: 10,
        questionsCount: 24,
      },
      {
        id: "wp-4",
        title: "Burnout Assessment",
        description:
          "Screen for signs of professional burnout and exhaustion.",
        durationMinutes: 9,
        questionsCount: 20,
      },
      {
        id: "wp-5",
        title: "Stress Management",
        description:
          "Identify coping mechanisms and strategies for stress relief.",
        durationMinutes: 8,
        questionsCount: 18,
      },
    ],
  },
  {
    id: "lifestyle-environment",
    title: "Lifestyle & Environment",
    activities: [
      {
        id: "le-1",
        title: "Time Management",
        description:
          "Assess how effectively you manage your time and priorities.",
        durationMinutes: 7,
        questionsCount: 16,
      },
      {
        id: "le-2",
        title: "Environmental Wellness",
        description:
          "Evaluate your living and working environment quality.",
        durationMinutes: 6,
        questionsCount: 14,
      },
      {
        id: "le-3",
        title: "Financial Wellbeing",
        description:
          "Assess financial stress and money management satisfaction.",
        durationMinutes: 8,
        questionsCount: 18,
      },
      {
        id: "le-4",
        title: "Digital Wellness",
        description:
          "Evaluate your relationship with technology and screen time.",
        durationMinutes: 6,
        questionsCount: 15,
      },
      {
        id: "le-5",
        title: "Leisure & Recreation",
        description:
          "Assess the quality and frequency of your leisure activities.",
        durationMinutes: 5,
        questionsCount: 12,
      },
    ],
  },
  {
    id: "life-meaning-values",
    title: "Life Meaning, Values & Growth",
    activities: [
      {
        id: "lv-1",
        title: "Personal Growth Mindset",
        description:
          "Evaluate your orientation toward learning and growth.",
        durationMinutes: 8,
        questionsCount: 18,
      },
      {
        id: "lv-2",
        title: "Life Satisfaction",
        description:
          "Comprehensive assessment of overall life satisfaction.",
        durationMinutes: 7,
        questionsCount: 16,
      },
      {
        id: "lv-3",
        title: "Values Alignment",
        description:
          "Assess how well your life aligns with your core values.",
        durationMinutes: 10,
        questionsCount: 22,
      },
      {
        id: "lv-4",
        title: "Resilience Assessment",
        description:
          "Measure your ability to bounce back from stress and challenges.",
        durationMinutes: 9,
        questionsCount: 20,
      },
      {
        id: "lv-5",
        title: "Spiritual Wellness",
        description:
          "Explore your spiritual practices and sense of connection.",
        durationMinutes: 8,
        questionsCount: 17,
      },
    ],
  },
];


const ScreeningPage: FC = () => {
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
      <ScreeningBackgroundLayer />

      <Stack
        sx={{
          position: "relative",
          zIndex: 1,
          mx: "auto",
          gap: { xs: 4, md: 6 },
        }}
      >
        <ScreeningHero
          title="Screening Tools"
          subtitle="Evidence-based assessments to understand your wellness journey"
          image={heroImg}
        />

        <Stack sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1280,
          mx: "auto",
          px: { xs: 2, md: 3 },
          gap: { xs: 4, md: 6 },
        }}>
          <FullSeenaAssessmentSection />

          <ScreeningFiltersBar />

          {SCREENING_SECTIONS.map((section) => (
            <ScreeningSectionSlider key={section.id} config={section} />
          ))}
        </Stack>
      </Stack>

      <Footer transparentFooter={false} />
    </Box>
  );
};

export default ScreeningPage;
