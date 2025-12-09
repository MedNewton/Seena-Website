// src/components/seena-live/SeenaLiveBackgroundLayer.tsx
"use client";

import type { FC } from "react";
import { Box } from "@mui/material";

const SeenaLiveBackgroundLayer: FC = () => {
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
            'url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%221000%22 height=%222000%22%3E%3Cg filter=%22url(%23a)%22%3E%3Cpath fill=%22%23B388EB%22 d=%22M-500-1000h2000v4000H-500z%22%2F%3E%3Cpath d=%22m198.429 1054.048-1244 24 462 1215 824-551%22 fill=%22%236a8ff0%22%2F%3E%3Cpath d=%22M1020-282 66 394l346 202 676-29%22 fill=%22%23B388EB%22%2F%3E%3Cpath d=%22m782.81 613.048-233 312 818 835 382-887%22 fill=%22%230F52BA%22%2F%3E%3Cpath d=%22m572.143 519.333-539 289 837 1285 616-24%22 fill=%22%23B388EB%22%2F%3E%3Cpath d=%22M1332 1724 13 2102l565 1014 837-67%22 fill=%22%236A8FF0%22%2F%3E%3Cpath d=%22M1203 1685 539 2896l813 66 523-554%22 fill=%22%23B388EB%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3Cfilter id=%22a%22 x=%22-91%22 y=%22-91%22 width=%221182%22 height=%222182%22 filterUnits=%22userSpaceOnUse%22 color-interpolation-filters=%22sRGB%22%3E%3CfeFlood flood-opacity=%220%22 result=%22BackgroundImageFix%22%2F%3E%3CfeBlend in=%22SourceGraphic%22 in2=%22BackgroundImageFix%22 result=%22shape%22%2F%3E%3CfeGaussianBlur stdDeviation=%2291%22 result=%22effect1_foregroundBlur_1_2%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3C%2Fsvg%3E")',
        },

        // Optional dark overlay to keep content readable
        "&::after": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at top, rgba(15,23,42,0.15) 0%, rgba(15,23,42,0.55) 55%, rgba(15,23,42,0.75) 100%)",
          mixBlendMode: "soft-light",
          opacity: 0.7,
        },
      }}
    />
  );
};

export default SeenaLiveBackgroundLayer;
