// src/components/experiences/ExperiencesBackgroundLayer.tsx
"use client";

import type { FC } from "react";
import { Box } from "@mui/material";

const ExperiencesBackgroundLayer: FC = () => {
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
            'url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%221000%22 height=%222000%22%3E%3Cg filter=%22url(%23a)%22%3E%3Cpath fill=%22%23121E2F%22 d=%22M-500-1000h2000v4000H-500z%22%2F%3E%3Cpath d=%22m1557.476 1432.19-1056 515 1125 831 273-1226%22 fill=%22%232C61B5%22%2F%3E%3Cpath d=%22M1405-453 271-196 392 905l1109-122M2076.095 664.762l-1288 493 462 745 902-81%22 fill=%22%23121E2F%22%2F%3E%3Cpath d=%22m131 458-468 137 449 1140 839-485M-189.952 1776.524l-6 1048 834 138 468-1031%22 fill=%22%23121E2F%22%2F%3E%3Cpath d=%22m-628.333-926.19-91 1130 702 12 550-789%22 fill=%22%23ffd166%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3Cfilter id=%22a%22 x=%22-91%22 y=%22-91%22 width=%221182%22 height=%222182%22 filterUnits=%22userSpaceOnUse%22 color-interpolation-filters=%22sRGB%22%3E%3CfeFlood flood-opacity=%220%22 result=%22BackgroundImageFix%22%2F%3E%3CfeBlend in=%22SourceGraphic%22 in2=%22BackgroundImageFix%22 result=%22shape%22%2F%3E%3CfeGaussianBlur stdDeviation=%2291%22 result=%22effect1_foregroundBlur_1_2%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3C%2Fsvg%3E")',
        },

        // Dark overlay to keep content readable and soften the yellow/blue
        "&::after": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at top, rgba(5,10,20,0.18) 0%, rgba(3,7,18,0.62) 55%, rgba(3,7,18,0.8) 100%)",
          mixBlendMode: "soft-light",
          opacity: 0.5,
        },
      }}
    />
  );
};

export default ExperiencesBackgroundLayer;
