// src/components/screening/ScreeningActivityCard.tsx
"use client";

import type { FC } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import { motion } from "framer-motion";
import type { ScreeningActivity } from "./ScreeningSlider";

type ScreeningActivityCardProps = {
  activity: ScreeningActivity;
  isHighlighted?: boolean;
};

const MotionBox = motion.create(Box);

const ScreeningActivityCard: FC<ScreeningActivityCardProps> = ({
  activity,
  isHighlighted = false,
}) => {
  const { title, description, durationMinutes, questionsCount } = activity;

  return (
    <MotionBox
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      sx={{
        position: "relative",
        borderRadius: 3,
        overflow: "hidden",
        cursor: "pointer",
        flexShrink: 0,
        width: { xs: 260, md: 280 },
        minHeight: 220,
        backgroundColor: "#FFFFFF",
        border: "1px solid #E5E7EB",
        display: "flex",
        flexDirection: "column",
        px: 2.5,
        pt: 2.25,
        pb: 2.1,
      }}
    >
      {/* Title + description */}
      <Box sx={{ mb: 2.5 }}>
        <Typography
          sx={{
            fontSize: 15,
            fontWeight: 600,
            color: "#111827",
            mb: 0.75,
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: 12,
            lineHeight: 1.5,
            color: "#6B7280",
          }}
        >
          {description}
        </Typography>
      </Box>

      {/* Meta row */}
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        sx={{ mb: 2.25, color: "#4B5563" }}
      >
        <Stack direction="row" spacing={0.75} alignItems="center">
          <AccessTimeOutlinedIcon sx={{ fontSize: 16 }} />
          <Typography sx={{ fontSize: 11.5 }}>
            {durationMinutes} min
          </Typography>
        </Stack>
        <Stack direction="row" spacing={0.75} alignItems="center">
          <DescriptionOutlinedIcon sx={{ fontSize: 16 }} />
          <Typography sx={{ fontSize: 11.5 }}>
            {questionsCount} questions
          </Typography>
        </Stack>
      </Stack>

      {/* CTA button pinned to bottom */}
      <Box sx={{ mt: "auto" }}>
        <Button
          fullWidth
          variant="contained"
          sx={{
            borderRadius: 999,
            textTransform: "uppercase",
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: 1,
            py: 1.1,
            backgroundColor: "#000000",
            color: "#FFFFFF",
            "&:hover": {
              backgroundColor: "#111827",
            },
          }}
        >
          Start screening
        </Button>
      </Box>
    </MotionBox>
  );
};

export default ScreeningActivityCard;
