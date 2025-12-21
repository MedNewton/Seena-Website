// src/components/seena-live/SeenaLiveBackgroundLayer.tsx
"use client";

import type { FC } from "react";
import { Box } from "@mui/material";

const DinnerClubBackgroundLayer: FC = () => {
  return (
    <Box
      aria-hidden="true"
      sx={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",

        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "repeat",
          backgroundImage:
            'url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%221000%22 height=%222000%22%3E%3Cg filter=%22url(%23a)%22%3E%3Cpath fill=%22%236A8FF0%22 d=%22M-500-1000h2000v4000H-500z%22%2F%3E%3Cpath d=%22m381-484-561 329 930 767 277-696%22 fill=%22%236A8FF0%22%2F%3E%3Cpath d=%22M732-340-15-217 127 975l1175-454%22 fill=%22%236A8FF0%22%2F%3E%3Cpath d=%22M898 541 401 1787l1292 268 283-777%22 fill=%22%23B388EB%22%2F%3E%3Cpath d=%22m-685.952 549.476-316 993 1206 295 140-498%22 fill=%22%230f52ba%22%2F%3E%3Cpath d=%22M1341 1460 205 2480l373 227 803-1223%22 fill=%22%230F52BA%22%2F%3E%3Cpath d=%22m1025 1472-520 525 632 560 402-503%22 fill=%22%23B388EB%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3Cfilter id=%22a%22 x=%22-91%22 y=%22-91%22 width=%221182%22 height=%222182%22 filterUnits=%22userSpaceOnUse%22 color-interpolation-filters=%22sRGB%22%3E%3CfeFlood flood-opacity=%220%22 result=%22BackgroundImageFix%22%2F%3E%3CfeBlend in=%22SourceGraphic%22 in2=%22BackgroundImageFix%22 result=%22shape%22%2F%3E%3CfeGaussianBlur stdDeviation=%2291%22 result=%22effect1_foregroundBlur_1_2%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3C%2Fsvg%3E")',
        },

        // Slight darkening so UI stays readable on top of bright blues/purples
        "&::after": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at top, rgba(15,23,42,0.15) 0%, rgba(15,23,42,0.55) 55%, rgba(15,23,42,0.8) 100%)",
          mixBlendMode: "soft-light",
          opacity: 0.6,
        },
      }}
    />
  );
};

export default DinnerClubBackgroundLayer;
