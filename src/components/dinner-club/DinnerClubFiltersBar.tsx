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

const DinnerClubFiltersBar: FC = () => {
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
                  sx={{ fontSize: 20, color: "rgba(0,0,0,0.9)" }}
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
              border: "1px solid rgba(0,0,0, 0.8)",
              color: "#000000",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
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
            color: "#000000",
            borderColor: "rgba(0,0,0,0.8)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
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
            borderRadius: 999,
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid black",
            px: 2.8,
            py: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: 12,
              textTransform: "uppercase",
              letterSpacing: 0.7,
              color: "rgba(0,0,0,0.8)",
              pt: 0.5
            }}
          >
            Sort
          </Typography>
          <IconButton
            size="small"
            sx={{
              borderRadius: 999,
              "&:hover": {
                backgroundColor: "rgba(15,23,42,0.65)",
              },
            }}
          >
            <TuneOutlinedIcon sx={{ fontSize: 18, color: "#000000" }} />
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
              color: "#000000",
              border: "1px solid rgba(0,0,0,0.8)",
              backgroundColor: "#FFFFFF",
              "& .MuiChip-label": {
                px: 1.8,
                py: 0.7,
              },
              "&:hover": {
                borderColor: "rgba(191,219,254,1)",
              },
            }}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default DinnerClubFiltersBar;
