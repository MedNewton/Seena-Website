// src/components/dinner-club/DinnerClubFeaturedEvent.tsx
"use client";

import type { FC, FormEvent } from "react";
import {
  Box,
  Stack,
  Typography,
  TextField,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";

import EventIcon from "@mui/icons-material/Event";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlaceIcon from "@mui/icons-material/Place";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

import heroEventImg from "@/assets/images/lunch.webp";
import { useWaitlist } from "@/hooks/useWaitlist";

const DinnerClubFeaturedEvent: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const { submitting, submitted, error, handleSubmit } = useWaitlist();

  // wrap to keep React's type happy (void return) but still call async handler
  const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
    void handleSubmit(event);
  };

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        mt: { xs: 1, md: 0 },
        mb: { xs: 4, md: 6 },
        backgroundColor: "transparent",
      }}
    >
      {/* Section heading */}
      <Stack spacing={0.5} mb={{ xs: 3, md: 4 }}>
        <Typography
          sx={{
            fontSize: { xs: 22, md: 30 },
            fontWeight: 600,
            fontFamily: "var(--font-bricolage, system-ui)",
          }}
        >
          Featured Upcoming Event
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: 14, md: 15 },
            fontWeight: 400,
            color: (theme) => theme.palette.text.secondary,
          }}
        >
          Don&apos;t miss our next gathering
        </Typography>
      </Stack>

      {/* Main card */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "minmax(0, 1.05fr) minmax(0, 1.1fr)",
          },
          borderRadius: 5,
          overflow: "hidden",
          boxShadow: "0 24px 70px rgba(15,23,42,0.35)",
          backgroundColor: "transparent",
        }}
      >
        {/* Left image */}
        <Box
          sx={{
            position: "relative",
            minHeight: { xs: 220, md: 360 },
          }}
        >
          <Image
            src={heroEventImg}
            alt="Seena Dinner Club table"
            fill
            style={{ objectFit: "cover" }}
            priority={false}
          />
        </Box>

        {/* Right panel */}
        <Box
          sx={{
            background:
              "linear-gradient(180deg, #F4F7FB 0%, #F9FAFB 100%)",
            color: "#0F172A",
            px: { xs: 3, md: 5 },
            py: { xs: 3, md: 4.5 },
            display: "flex",
            flexDirection: "column",
            gap: { xs: 2.5, md: 3 },
          }}
        >
          {/* Event title */}
          <Typography
            sx={{
              fontSize: { xs: 22, md: 26 },
              fontWeight: 600,
              fontFamily: "var(--font-bricolage, system-ui)",
              color: "#020617",
            }}
          >
            Seena Launch
          </Typography>

          {/* Meta rows */}
          <Stack spacing={1.25}>
            <Stack direction="row" spacing={1.5} alignItems="center">
              <EventIcon sx={{ fontSize: 20, color: "#64748B" }} />
              <Typography
                sx={{ fontSize: 14, color: "#1F2933", fontWeight: 400 }}
              >
                Saturday, February 7, 2026
              </Typography>
            </Stack>

            <Stack direction="row" spacing={1.5} alignItems="center">
              <AccessTimeIcon sx={{ fontSize: 20, color: "#64748B" }} />
              <Typography
                sx={{ fontSize: 14, color: "#1F2933", fontWeight: 400 }}
              >
                7:00 PM – 10:00 PM
              </Typography>
            </Stack>

            <Stack direction="row" spacing={1.5} alignItems="center">
              <PlaceIcon sx={{ fontSize: 20, color: "#64748B" }} />
              <Typography
                sx={{ fontSize: 14, color: "#1F2933", fontWeight: 400 }}
              >
                The Wellness Loft, Downtown
              </Typography>
            </Stack>

            <Stack direction="row" spacing={1.5} alignItems="center">
              <PeopleAltIcon sx={{ fontSize: 20, color: "#64748B" }} />
              <Typography
                sx={{ fontSize: 14, color: "#1F2933", fontWeight: 400 }}
              >
                Limited to 50 guests
              </Typography>
            </Stack>
          </Stack>

          {/* Description */}
          <Typography
            sx={{
              fontSize: { xs: 13, md: 14 },
              lineHeight: 1.7,
              color: "#4B5563",
              maxWidth: 520,
            }}
          >
            Join us for an evening of intentional connection through food.
            Experience a curated multi-course meal designed to foster meaningful
            conversation and mindful presence.
          </Typography>

          {/* Register form */}
          <Box sx={{ mt: { xs: 0.5, md: 1 } }}>
            <Typography
              sx={{
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: 1.2,
                textTransform: "uppercase",
                color: "#6B7280",
                mb: 1.5,
              }}
            >
              Register for this event
            </Typography>

            <Box
              component="form"
              onSubmit={onSubmit}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: { xs: "stretch", sm: "center" },
                gap: 1.5,
              }}
            >
              <TextField
                name="email"
                type="email"
                placeholder="YOUR EMAIL"
                required
                disabled={submitting || submitted}
                fullWidth
                variant="outlined"
                sx={{
                  maxWidth: { xs: "100%", sm: 340 },
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 9999,
                    backgroundColor: "#FFFFFF",
                    "& fieldset": {
                      borderColor: "#E5E7EB",
                    },
                    "&:hover fieldset": {
                      borderColor: "#CBD5F5",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#111827",
                    },
                    "& input": {
                      paddingY: isMobile ? 1.3 : 1.4,
                      paddingX: 2.4,
                      fontSize: 13,
                    },
                    "& input::placeholder": {
                      textTransform: "uppercase",
                      letterSpacing: 1.6,
                      color: "#9CA3AF",
                    },
                  },
                }}
              />

              <Button
                type="submit"
                disabled={submitting}
                sx={{
                  borderRadius: 9999,
                  px: { xs: 3.75, sm: 4.75 },
                  py: 1.4,
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: 1.6,
                  textTransform: "uppercase",
                  backgroundColor: "#020617",
                  color: "#F9FAFB",
                  whiteSpace: "nowrap",
                  "&:hover": {
                    backgroundColor: "#020617",
                    opacity: 0.9,
                  },
                }}
              >
                {submitting
                  ? "Registering..."
                  : submitted
                  ? "Thanks for joining!"
                  : "Register now"}
              </Button>
            </Box>

            <Stack spacing={0.5} mt={1.25}>
              <Typography
                sx={{
                  fontSize: 11,
                  color: "#9CA3AF",
                }}
              >
                Spaces filling fast • Early bird discount available
              </Typography>
              {error && (
                <Typography
                  sx={{
                    fontSize: 11,
                    color: "#DC2626",
                  }}
                >
                  {error}
                </Typography>
              )}
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DinnerClubFeaturedEvent;
