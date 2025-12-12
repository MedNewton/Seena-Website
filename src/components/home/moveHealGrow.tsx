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
        maxWidth: 1280,
        mx: "auto",
        pb: { xs: 6, md: 0 },
        px: { xs: 2, md: 0 },
        textAlign: "center",
        backgroundColor: "transparent",
      }}
    >
      {/* Small label above image */}
      <Typography
        sx={{
          mb: { xs: 1, md: 2 },
          fontSize: { xs: 12, md: 13 },
          letterSpacing: 2,
          textTransform: "uppercase",
          fontWeight: 400,
          color: "#FFFFFF",
        }}
      >
        Coming in January 2026
      </Typography>

      <Typography
        component="h2"
        sx={{
          fontSize: { xs: 24, md: 48 },
          fontWeight: 500,
          mb: { xs: 1.5, md: 6 },
          color: "#FFFFFF",
        }}
      >
        Reset, Rise & Connect with Seena
      </Typography>

      {/* Collage image */}
      <Box
        sx={{
          maxWidth: 1280,
          mx: "auto",
          mb: { xs: 4, md: 5 },
        }}
      >
        <Image
          src={reviewsCollage}
          alt="Seena community collage"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            borderRadius: 32,
          }}
          priority={false}
        />
      </Box>

      {/* Text + form, pulled up over the image */}
      <Stack
      id="join"
        direction="column"
        spacing={2.5}
        alignItems="center"
        sx={{
          transform: { xs: "none", md: "translateY(-20vh)" },
        }}
      >
        <Typography
          sx={{
            maxWidth: 560,
            mx: "auto",
            fontSize: { xs: 14, md: 16 },
            lineHeight: 1.7,
            fontWeight: 300,
            color: "#FFFFFF",
          }}
        >
          Don&apos;t take our word for it. See why Seena is trusted and loved by
          people around the world who want to feel better, live longer, and
          train smarter.
        </Typography>

        {/* Waitlist form */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            mt: 1.5,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
          }}
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
              maxWidth: 420,
              "& .MuiOutlinedInput-root": {
                borderRadius: 999,
                paddingY: 0.75,
                color: "#FFFFFF",
                backgroundColor: "transparent",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#FFFFFF",
                  borderWidth: 2,
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#FFFFFF",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#FFFFFF",
                },
                "& input": {
                  paddingY: 1.5,
                  textAlign: "center",
                },
                "& input::placeholder": {
                  textTransform: "uppercase",
                  letterSpacing: 1.6,
                  fontSize: 13,
                  color: "#FFFFFF",
                  opacity: 1,
                },
              },
            }}
          />

          <Button
            type="submit"
            disabled={submitting}
            sx={{
              mt: 1,
              width: "100%",
              maxWidth: 420,
              borderRadius: 999,
              py: 1.2,
              fontSize: 14,
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: 1.4,
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
              : "Join waitlist"}
          </Button>

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
    </Box>
  );
};

export default MoveHealGrow;
