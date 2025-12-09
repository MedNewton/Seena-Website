// src/components/app/AppBreathingExerciseSection.tsx
"use client";

import type { FC } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

const CircleRoot = styled(Box)(({ theme }) => ({
  position: "relative",
  borderRadius: "50%",
  width: 260,
  height: 260,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background:
    "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.12), rgba(11,15,35,0.95))",
  boxShadow: "0 40px 80px rgba(0,0,0,0.55)",
  [theme.breakpoints.down("sm")]: {
    width: 220,
    height: 220,
  },
}));

const InnerDisc = styled(Box)(({ theme }) => ({
  position: "relative",
  borderRadius: "50%",
  width: "78%",
  height: "78%",
  background:
    "radial-gradient(circle at 30% 10%, rgba(255,255,255,0.18), rgba(15,23,42,0.9))",
  boxShadow: "inset 0 0 18px rgba(15,23,42,0.85)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    width: "80%",
    height: "80%",
  },
}));

const StaticRing = styled(Box)(() => ({
  position: "absolute",
  inset: 10,
  borderRadius: "50%",
  border: "2px solid rgba(226,232,240,0.22)",
}));

const MotionCircle = motion.circle;

const AppBreathingExerciseSection: FC = () => {
  const radius = 112; // matches viewBox below

  return (
    <Stack
      spacing={5}
      alignItems="center"
      justifyContent="center"
      sx={{
        py: { xs: 8, md: 10 },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: 16, md: 18 },
          textAlign: "center",
          color: "rgba(226,232,240,0.92)",
          maxWidth: 560,
          fontWeight: 300,
        }}
      >
        Try a quick breathing exercise to ease your stress.
      </Typography>

      <CircleRoot>
        {/* Static inner ring */}
        <StaticRing />

        {/* Animated stroke ring */}
        <Box
          component="svg"
          viewBox="0 0 280 280"
          sx={{
            position: "absolute",
            inset: 0,
            transform: "rotate(-90deg)", // start at top
          }}
        >
          {/* faint base ring */}
          <circle
            cx="140"
            cy="140"
            r={radius}
            fill="none"
            stroke="rgba(148,163,184,0.35)"
            strokeWidth={6}
          />

          {/* animated arc – from 20% to 100% of the circle */}
          <MotionCircle
            cx="140"
            cy="140"
            r={radius}
            fill="none"
            stroke="rgba(248,250,252,0.96)"
            strokeWidth={6}
            strokeLinecap="round"
            initial={{ pathLength: 0.2 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 4,
              ease: [0.22, 1, 0.36, 1],
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </Box>

        {/* Center label */}
        <InnerDisc>
          <Typography
            sx={{
              fontSize: { xs: 22, md: 24 },
              fontWeight: 400,
              color: "rgba(255,255,255,0.75)",
            }}
          >
            Hold
          </Typography>
        </InnerDisc>
      </CircleRoot>
    </Stack>
  );
};

export default AppBreathingExerciseSection;
