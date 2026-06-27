// src/components/summit/SummitHero.tsx
"use client";

import type { FC } from "react";
import { Box, Stack, Typography, ButtonBase } from "@mui/material";
import Image from "next/image";
import { LuCalendar, LuClock, LuMapPin } from "react-icons/lu";

import bg from "@/assets/newImages/summitHeroBG1.webp";

const SummitHero: FC = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: { xs: "92vh", md: "100vh" },
      }}
    >
      {/* Background image */}
      <Image
        src={bg}
        alt="Summit background"
        fill
        priority
        style={{ objectFit: "cover" }}
      />

      {/* Dark overlay for readability */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.5) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          px: { xs: 3, md: 6 },
          py: { xs: 10, md: 12 },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Stack
          spacing={{ xs: 3, md: 4 }}
          sx={{
            maxWidth: 1000,
            alignItems: "center",
            textAlign: "center",
            color: "#ffffff",
          }}
        >
          {/* Eyebrow */}
          <Typography
            sx={{
              fontFamily: "var(--font-montserrat)",
              fontSize: { xs: 16, md: 20 },
              fontWeight: 700,
              color: "#FFFFFF",
            }}
          >
            Summit
          </Typography>

          {/* Main title */}
          <Typography
            component="h1"
            sx={{
              fontFamily: "var(--font-montserrat)",
              fontSize: { xs: 38, md: 76 },
              fontWeight: 800,
              lineHeight: 1.08,
              color: "#FFFFFF",
              maxWidth: 980,
            }}
          >
            Seena Founders Roundtable #001
          </Typography>

          {/* Subtitle */}
          <Typography
            sx={{
              fontFamily: "var(--font-inter)",
              fontSize: { xs: 15, md: 20 },
              fontWeight: 400,
              lineHeight: 1.5,
              color: "rgba(255,255,255,0.92)",
              maxWidth: 820,
            }}
          >
            A closed-room gathering of founders, experts, operators, and
            ambitious minds exploring chronic stress, burnout, and what&apos;s
            actually missing to perform at a higher level without losing
            yourself in the process.
          </Typography>

          {/* CTA */}
          <ButtonBase
            sx={{
              mt: { xs: 1, md: 2 },
              border: "2px solid rgba(255,255,255,0.9)",
              borderRadius: "16px",
              px: { xs: 4, md: 6 },
              py: { xs: 1.5, md: 1.75 },
              fontFamily: "var(--font-montserrat)",
              fontSize: { xs: 14, md: 16 },
              fontWeight: 700,
              letterSpacing: 0.8,
              textTransform: "uppercase",
              color: "#ffffff",
              backgroundColor: "transparent",
              transition:
                "background-color 200ms ease, transform 200ms ease",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.12)",
                transform: "translateY(-1px)",
              },
            }}
          >
            Apply to Attend
          </ButtonBase>

          {/* Booking info */}
          <Stack spacing={1} sx={{ alignItems: "center", mt: { xs: 1, md: 1.5 } }}>
            <Typography
              sx={{
                fontFamily: "var(--font-inter)",
                fontSize: { xs: 13, md: 14 },
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
                fontSize: { xs: 13, md: 14 },
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
        </Stack>
      </Box>
    </Box>
  );
};

export default SummitHero;
