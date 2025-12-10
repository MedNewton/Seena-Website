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

const MoveHealGrow: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // TODO: hook up to your waitlist API
  };

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
          mb: { xs: 1.5, md: 6 },
          fontSize: { xs: 12, md: 13 },
          letterSpacing: 2,
          textTransform: "uppercase",
          fontWeight: 400,
          color: "#FFFFFF",
        }}
      >
        Coming in January 2026
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
        direction="column"
        spacing={2.5}
        alignItems="center"
        sx={{
          transform: "translateY(-20vh)",
        }}
      >
        <Typography
          component="h2"
          sx={{
            fontSize: { xs: 24, md: 37 },
            fontWeight: 500,
            mb: 0.5,
            color: "#FFFFFF",
          }}
        >
          Resert, Rise & Connect with Seena
        </Typography>

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
            type="email"
            placeholder="YOUR EMAIL"
            required
            fullWidth
            variant="outlined"
            sx={{
              maxWidth: 420, // narrower
              "& .MuiOutlinedInput-root": {
                borderRadius: 999,
                paddingY: 0.75, // less tall
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
                  paddingY: 1.5, // tighten inner input padding
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
            sx={{
              mt: 1,
              width: "100%",
              maxWidth: 420, // same width as TextField
              borderRadius: 999,
              py: 1.2, // similar height
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
            Join waitlist
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default MoveHealGrow;
