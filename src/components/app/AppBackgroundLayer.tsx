// src/components/app/AppBackgroundLayer.tsx
"use client";

import type { FC } from "react";
import { Box } from "@mui/material";

const AppBackgroundLayer: FC = () => {
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
            'url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%221000%22 height=%222000%22%3E%3Cg filter=%22url(%23a)%22%3E%3Cpath fill=%22%230B1534%22 d=%22M-500-1000h2000v4000H-500z%22%2F%3E%3Cpath d=%22m592-288-878 776 1209 865 329-626%22 fill=%22%230B1534%22%2F%3E%3Cpath d=%22m1645-493-1430 2L450 861 1689-68%22 fill=%22%230B1534%22%2F%3E%3Cpath d=%22m773.381 696.238-8 364 355 663 712-571%22 fill=%22%235a78a8%22%2F%3E%3Cpath d=%22m732.905 891.476-992 1410 1168 237 366-410%22 fill=%22%23263F77%22%2F%3E%3Cpath d=%22m78.143 1453.19-53 969 205 174 796-96%22 fill=%22%235A78A8%22%2F%3E%3Cpath d=%22M1540 1589 530 2609l1064 475 289-272%22 fill=%22%235A78A8%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3Cfilter id=%22a%22 x=%22-91%22 y=%22-91%22 width=%221182%22 height=%222182%22 filterUnits=%22userSpaceOnUse%22 color-interpolation-filters=%22sRGB%22%3E%3CfeFlood flood-opacity=%220%22 result=%22BackgroundImageFix%22%2F%3E%3CfeBlend in=%22SourceGraphic%22 in2=%22BackgroundImageFix%22 result=%22shape%22%2F%3E%3CfeGaussianBlur stdDeviation=%2291%22 result=%22effect1_foregroundBlur_1_2%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3C%2Fsvg%3E")',
        },

        "&::after": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at top, rgba(8,15,35,0.35) 0%, rgba(3,7,18,0.8) 55%, rgba(3,7,18,0.95) 100%)",
          mixBlendMode: "soft-light",
          opacity: 0.95,
        },
      }}
    />
  );
};

export default AppBackgroundLayer;
