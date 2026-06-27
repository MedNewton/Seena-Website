// src/components/summit/SummitEventSection.tsx
"use client";

import type { FC } from "react";
import { Box, Stack, Typography, Button, ButtonBase } from "@mui/material";
import { LuCalendar, LuClock, LuMapPin, LuArrowRight } from "react-icons/lu";

const BAND_GRADIENT =
  "linear-gradient(120deg, #1f5fc7 0%, #6a8ff0 55%, #b388eb 100%)";

const SummitEventSection: FC = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        backgroundColor: "#000000",
        px: { xs: 2, md: 4 },
        pb: { xs: 8, md: 12 },
      }}
    >
      {/* Card pulled up so its top overlaps the bottom of the hero */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1040,
          mx: "auto",
          mt: { xs: -8, md: -80 },
          borderRadius: "20px",
          overflow: "hidden",
          background: BAND_GRADIENT,
          boxShadow: "0 30px 80px rgba(0,0,0,0.55)",
        }}
      >
        {/* 1. Gradient header */}
        <Stack
          spacing={{ xs: 2, md: 2.5 }}
          alignItems="center"
          sx={{
            background: BAND_GRADIENT,
            textAlign: "center",
            color: "#ffffff",
            px: { xs: 3, md: 6 },
            py: { xs: 4, md: 6 },
          }}
        >
          <Typography
            sx={{
              fontFamily: "var(--font-montserrat)",
              fontSize: { xs: 16, md: 18 },
              fontWeight: 700,
            }}
          >
            Next Event
          </Typography>

          <Typography
            sx={{
              fontFamily: "var(--font-montserrat)",
              fontSize: { xs: 26, md: 38 },
              fontWeight: 800,
              lineHeight: 1.1,
            }}
          >
            Seena Founders Roundtable #001
          </Typography>

          <Typography
            sx={{
              fontFamily: "var(--font-inter)",
              fontSize: { xs: 14, md: 16 },
              fontWeight: 400,
              lineHeight: 1.55,
              color: "rgba(255,255,255,0.92)",
              maxWidth: 720,
            }}
          >
            A closed-room gathering of founders, experts, operators, and
            ambitious minds exploring chronic stress, burnout, and what&apos;s
            actually missing to perform at a higher level without losing
            yourself in the process.
          </Typography>

          <Button
            sx={{
              mt: 1,
              borderRadius: "14px",
              px: { xs: 4, md: 5 },
              py: 1.5,
              fontFamily: "var(--font-montserrat)",
              fontSize: { xs: 14, md: 15 },
              fontWeight: 700,
              letterSpacing: 0.6,
              textTransform: "uppercase",
              backgroundColor: "#FFFFFF",
              color: "#0a0a0a",
              boxShadow: "0 12px 30px rgba(0,0,0,0.3)",
              "&:hover": { backgroundColor: "#F2F4F8" },
            }}
          >
            Apply to Attend
          </Button>

          <Typography
            sx={{
              fontFamily: "var(--font-inter)",
              fontSize: { xs: 12, md: 13 },
              fontWeight: 600,
              color: "rgba(255,255,255,0.95)",
            }}
          >
            Attendance is by application. Space is limited to 20 guests.
          </Typography>

          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
            sx={{
              gap: { xs: 1, md: 2 },
              fontFamily: "var(--font-inter)",
              fontSize: { xs: 12, md: 13 },
              fontWeight: 600,
              color: "rgba(255,255,255,0.95)",
            }}
          >
            <Box sx={{ display: "inline-flex", alignItems: "center", gap: 0.6 }}>
              <LuCalendar /> August 11, 2026
            </Box>
            <Box sx={{ display: "inline-flex", alignItems: "center", gap: 0.6 }}>
              <LuClock /> 6:00 PM – 9:00 PM
            </Box>
            <Box sx={{ display: "inline-flex", alignItems: "center", gap: 0.6 }}>
              <LuMapPin /> Hudson Yards, New York City
            </Box>
          </Stack>
        </Stack>

        {/* 2. Event details (dark body) */}
        <Stack
          spacing={{ xs: 2.5, md: 3 }}
          alignItems="center"
          sx={{
            width: "95%",
            mx: "auto",
            backgroundColor: "#000000",
            borderRadius: "20px",
            textAlign: "center",
            color: "#ffffff",
            px: { xs: 3, md: 6 },
            py: { xs: 5, md: 7 },
          }}
        >
          <Typography
            sx={{
              fontFamily: "var(--font-inter)",
              fontSize: { xs: 14, md: 16 },
              color: "rgba(255,255,255,0.7)",
            }}
          >
            Event details
          </Typography>

          <Typography
            sx={{
              fontFamily: "var(--font-montserrat)",
              fontSize: { xs: 30, md: 46 },
              fontWeight: 800,
              lineHeight: 1.1,
            }}
          >
            The Roundtable
          </Typography>

          <Stack spacing={{ xs: 2.5, md: 3 }} sx={{ maxWidth: 900 }}>
            <Typography
              sx={{
                fontFamily: "var(--font-inter)",
                fontSize: { xs: 15, md: 17 },
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.88)",
              }}
            >
              The world is producing more stress than people have infrastructure
              to handle. Medication gets prescribed. Productivity advice gets
              recycled. And the people who need support the most keep falling
              through the gaps.
            </Typography>

            <Typography
              sx={{
                fontFamily: "var(--font-inter)",
                fontSize: { xs: 15, md: 17 },
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.88)",
              }}
            >
              Seena is bringing together doctors, neuroscientists, wellness
              practitioners, and community leaders for an honest conversation
              about what&apos;s really happening — and what real solutions look
              like.
              <br />
              No keynotes. No panels. A room of 20 people who work closest to
              this problem, talking openly about what they&apos;re seeing,
              what&apos;s failing, and where things need to go.
            </Typography>

            <Typography
              sx={{
                fontFamily: "var(--font-inter)",
                fontSize: { xs: 15, md: 17 },
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.88)",
              }}
            >
              This is Session One. We&apos;re keeping it small on purpose.
            </Typography>
          </Stack>
        </Stack>

        {/* 3. Register bar */}
        <Box
          sx={{
            background: BAND_GRADIENT,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: { xs: 3, md: 6 },
            py: { xs: 3, md: 4 },
          }}
        >
          <Typography
            sx={{
              fontFamily: "var(--font-montserrat)",
              fontSize: { xs: 32, md: 48 },
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1,
            }}
          >
            Register
          </Typography>

          <ButtonBase
            aria-label="Register"
            sx={{
              flexShrink: 0,
              width: { xs: 48, md: 56 },
              height: { xs: 48, md: 56 },
              borderRadius: "50%",
              backgroundColor: "#ffffff",
              color: "#1f5fc7",
              fontSize: { xs: 20, md: 24 },
              boxShadow: "0 10px 24px rgba(0,0,0,0.3)",
              transition: "transform 200ms ease-out",
              "&:hover": { transform: "scale(1.06)" },
            }}
          >
            <LuArrowRight />
          </ButtonBase>
        </Box>
      </Box>
    </Box>
  );
};

export default SummitEventSection;
