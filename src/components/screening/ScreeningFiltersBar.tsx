// src/components/screening/ScreeningFiltersBar.tsx
"use client";

import type { FC } from "react";
import {
  Box,
  Stack,
  TextField,
  InputAdornment,
  Typography,
  Chip,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";

const TAGS = [
  "For you",
  "Psychological & emotional",
  "Physical health",
  "Cognitive & behavioral",
  "Social & relational",
  "Work & purpose",
  "Lifestyle & environment",
  "Life meaning & growth",
];

const ScreeningFiltersBar: FC = () => {
  return (
    <Stack spacing={2.5}>
      {/* Search row */}
      <TextField
        fullWidth
        variant="outlined"
        placeholder="SEARCH SCREENING TOOLS"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ fontSize: 22, color: "#9CA3AF" }} />
            </InputAdornment>
          ),
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: 999,
            backgroundColor: "#FFFFFF",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#E5E7EB",
              borderWidth: 1,
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#CBD5E1",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#0F172A",
            },
          },
          "& .MuiInputBase-input": {
            paddingY: 1.8,
            fontSize: 15,
            color: "#111827",
          },
          "& .MuiInputBase-input::placeholder": {
            textTransform: "uppercase",
            letterSpacing: 1.6,
            fontSize: 13,
            color: "#9CA3AF",
            opacity: 1,
          },
        }}
      />

      {/* Tags + Sort row */}
      <Stack
        direction="row"
        alignItems="start"
        spacing={1.5}
        sx={{
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        {/* Tags */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            flex: 1,
            pr: 2,
          }}
        >
          {TAGS.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              clickable
              sx={{
                borderRadius: 999,
                backgroundColor: "#FFFFFF",
                border: "1px solid #E5E7EB",
                boxShadow: "0 1px 3px rgba(15,23,42,0.04)",
                color: "#111827",
                "& .MuiChip-label": {
                  px: 2.4,
                  py: 1,
                  fontSize: 13,
                  fontWeight: 500,
                },
                "&:hover": {
                  borderColor: "#0F172A",
                  backgroundColor: "#F9FAFB",
                },
              }}
            />
          ))}
        </Box>

        {/* Sort */}
        <Stack
          direction="row"
          spacing={0.75}
          alignItems="center"
          sx={{
            ml: "auto",
            flexShrink: 0,
          }}
        >
          <Typography
            sx={{
              fontSize: 14,
              color: "#111827",
            }}
          >
            Sort
          </Typography>
          <IconButton
            size="small"
            sx={{
              borderRadius: 999,
              border: "1px solid #E5E7EB",
              backgroundColor: "#FFFFFF",
              boxShadow: "0 1px 2px rgba(15,23,42,0.06)",
              "&:hover": {
                backgroundColor: "#F3F4F6",
              },
            }}
          >
            <TuneOutlinedIcon sx={{ fontSize: 20, color: "#111827" }} />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ScreeningFiltersBar;
