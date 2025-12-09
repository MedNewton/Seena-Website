"use client";

import type { FC } from "react";
import {
  Box,
  Stack,
  TextField,
  InputAdornment,
  Typography,
  Button,
  Chip,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";

const TAGS = ["Stress", "Mindfulness", "Sleep", "Physical", "Community"];

const ResetFiltersBar: FC = () => {
  return (
    <Stack spacing={2.5}>
      {/* Search + controls row */}
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        sx={{
          width: "100%",
          flexWrap: { xs: "wrap", md: "nowrap" },
        }}
      >
        {/* Search */}
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search by activity"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon
                  sx={{ fontSize: 20, color: "rgba(248,250,252,0.9)" }}
                />
              </InputAdornment>
            ),
          }}
          sx={{
            maxWidth: "100%",
            "& .MuiOutlinedInput-root": {
              borderRadius: 999,
              fontSize: 14,
              paddingRight: 1.5,
              backgroundColor: "rgba(15,23,42,0.45)",
              border: "1px solid rgba(148,163,184,0.6)",
              color: "#E5E7EB",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              boxShadow: "0 18px 45px rgba(15,23,42,0.75)",
              "& fieldset": { border: "none" },
            },
            "& .MuiInputBase-input": {
              paddingY: 1.4,
            },
          }}
        />

        {/* Location */}
        <Button
          variant="outlined"
          startIcon={<PlaceOutlinedIcon sx={{ fontSize: 18 }} />}
          sx={{
            borderRadius: 999,
            whiteSpace: "nowrap",
            px: 2.8,
            py: 1.1,
            fontSize: 12,
            textTransform: "uppercase",
            letterSpacing: 0.9,
            color: "#E5E7EB",
            borderColor: "rgba(148,163,184,0.7)",
            backgroundColor: "rgba(15,23,42,0.4)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            boxShadow: "0 14px 32px rgba(15,23,42,0.7)",
            flexShrink: 0,
            "&:hover": {
              borderColor: "rgba(191,219,254,0.95)",
              backgroundColor: "rgba(15,23,42,0.6)",
            },
          }}
        >
          Location
        </Button>

        {/* Sort */}
        <Stack
          direction="row"
          spacing={0.75}
          alignItems="center"
          sx={{
            display: { xs: "none", sm: "flex" },
            flexShrink: 0,
          }}
        >
          <Typography
            sx={{
              fontSize: 12,
              textTransform: "uppercase",
              letterSpacing: 0.7,
              color: "rgba(209,213,219,0.85)",
            }}
          >
            Sort
          </Typography>
          <IconButton
            size="small"
            sx={{
              borderRadius: 999,
              border: "1px solid rgba(148,163,184,0.7)",
              backgroundColor: "rgba(15,23,42,0.4)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              boxShadow: "0 14px 32px rgba(15,23,42,0.7)",
              "&:hover": {
                backgroundColor: "rgba(15,23,42,0.65)",
              },
            }}
          >
            <TuneOutlinedIcon sx={{ fontSize: 18, color: "#E5E7EB" }} />
          </IconButton>
        </Stack>
      </Stack>

      {/* Tags row */}
      <Stack direction="row" spacing={1} flexWrap="wrap">
        {TAGS.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            clickable
            sx={{
              borderRadius: 999,
              fontSize: 12,
              textTransform: "uppercase",
              letterSpacing: 0.7,
              color: "rgba(226,232,240,0.98)",
              backgroundColor: "rgba(15,23,42,0.35)",
              border: "1px solid rgba(148,163,184,0.7)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              boxShadow: "0 12px 30px rgba(15,23,42,0.7)",
              "& .MuiChip-label": {
                px: 1.8,
                py: 0.7,
              },
              "&:hover": {
                backgroundColor: "rgba(56,189,248,0.35)",
                borderColor: "rgba(191,219,254,1)",
              },
            }}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default ResetFiltersBar;
