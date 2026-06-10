// src/old/footer/LovedEverywhereSection.tsx
"use client";

import React from "react";
import {
  Box,
  Stack,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import Image from "next/image";

import reviewsCollage from "@/assets/images/healgrow.webp";
import { useWaitlist } from "@/hooks/useWaitlist";

const MoveHealGrow: React.FC = () => {
  const { submitting, submitted, error, handleSubmit } = useWaitlist();

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        maxWidth: { xs: "100%", md: 1280 },
        mx: "auto",
        pb: { xs: 2, md: 0 },
        px: { xs: 0, md: 0 },
        textAlign: "center",
      }}
    >
      {/* Small label above title */}
      <Typography
        sx={{
          mb: { xs: 1.5, md: 2.5 },
          fontSize: { xs: 14, md: 17 },
          fontWeight: 400,
          color: "#FFFFFF",
        }}
      >
        Help build a better way to perform and live
      </Typography>

      <Typography
        component="h2"
        sx={{
          fontSize: { xs: 28, md: 60 },
          fontWeight: 500,
          lineHeight: 1.15,
          mb: { xs: 2, md: 3 },
          px: { xs: 3, md: 0 },
          color: "#FFFFFF",
          maxWidth: 1100,
          mx: "auto",
        }}
      >
        Join the movement for high performance without self-destruction
      </Typography>

      {/* Text + form */}
      <Stack
        id="join"
        direction="column"
        spacing={2.5}
        alignItems="center"
        sx={{
          px: { xs: 3, md: 0 },
        }}
      >
        <Typography
          sx={{
            maxWidth: 860,
            mx: "auto",
            fontSize: { xs: 15, md: 21 },
            lineHeight: 1.6,
            fontWeight: 300,
            color: "rgba(255,255,255,0.88)",
          }}
        >
          Get early access to Seena and be part of a new culture built for
          high performers
          <br />
          who want to stay sharp, supported, and sustain their edge under
          real life.
        </Typography>

        {/* Waitlist form – email + button side by side */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            mt: { xs: 2, md: 4 },
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1.5, sm: 2.5 }}
            alignItems="center"
            justifyContent="center"
            sx={{ width: "100%" }}
          >
            <TextField
              name="email"
              type="email"
              placeholder="YOUR EMAIL"
              required
              fullWidth
              variant="outlined"
              disabled={submitting || submitted}
              sx={{
                maxWidth: { xs: 420, sm: 350 },
                "& .MuiOutlinedInput-root": {
                  borderRadius: 999,
                  color: "#FFFFFF",
                  backgroundColor: "transparent",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(255,255,255,0.85)",
                    borderWidth: 1.5,
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#FFFFFF",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#FFFFFF",
                  },
                  "& input": {
                    paddingY: 1.75,
                    paddingX: 3,
                    textAlign: "left",
                  },
                  "& input::placeholder": {
                    textTransform: "uppercase",
                    letterSpacing: 1.6,
                    fontSize: 13,
                    color: "rgba(255,255,255,0.75)",
                    opacity: 1,
                  },
                },
              }}
            />

            <Button
              type="submit"
              disabled={submitting}
              sx={{
                width: { xs: "100%", sm: "auto" },
                maxWidth: { xs: 420, sm: "none" },
                flexShrink: 0,
                borderRadius: 999,
                px: 4.5,
                py: 1.75,
                fontSize: 15,
                fontWeight: 500,
                textTransform: "none",
                whiteSpace: "nowrap",
                backgroundColor: "#FFFFFF",
                color: "#000000",
                boxShadow: "0 10px 30px rgba(15,23,42,0.35)",
                "&:hover": {
                  backgroundColor: "#F9FAFB",
                  boxShadow: "0 10px 30px rgba(15,23,42,0.4)",
                },
              }}
            >
              {submitting
                ? "Joining..."
                : submitted
                ? "Thanks for joining !"
                : "Get Early Access"}
            </Button>
          </Stack>

          {error && (
            <Typography
              sx={{
                mt: 1,
                fontSize: 12,
                color: "#FCA5A5",
              }}
            >
              {error}
            </Typography>
          )}
        </Box>
      </Stack>

      {/* Collage image */}
      <Box
        sx={{
          maxWidth: 1280,
          mx: "auto",
          mb: { xs: 4, md: 5 },
          mt: { xs: 4, md: 5 },
          px: { xs: 2, md: 0 },
        }}
      >
        <Image
          src={reviewsCollage}
          alt="Seena community collage"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
          priority={false}
        />
      </Box>

      
    </Box>
  );
};

export default MoveHealGrow;
