"use client";

import type { FC, ReactNode } from "react";
import { Button } from "@mui/material";
import { keyframes, styled } from "@mui/material/styles";

const floatingPoints = keyframes`
  0% {
    transform: translateY(0);
  }
  85% {
    opacity: 0;
  }
  100% {
    transform: translateY(-55px);
    opacity: 0;
  }
`;

const dash = keyframes`
  0% {
    stroke-dasharray: 0, 20;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 10, 10;
    stroke-dashoffset: -5;
  }
  100% {
    stroke-dasharray: 20, 0;
    stroke-dashoffset: -10;
  }
`;

const StyledButton = styled(Button)(() => ({
  cursor: "pointer",
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  transition: "all 0.25s ease",
  background:
    "radial-gradient(65.28% 65.28% at 50% 100%, #F8C657 0%, rgba(255, 165, 0, 0) 100%), linear-gradient(0deg, #F8C657, #F8C657)",
  borderRadius: 9999,
  border: "none",
  outline: "none",
  padding: "12px 24px",
  minHeight: 48,
  minWidth: 102,
  textTransform: "none",
  boxShadow: "none",

  "&::before, &::after": {
    content: '""',
    position: "absolute",
    transition: "all 0.5s ease-in-out",
    zIndex: 0,
    borderRadius: 9999,
  },

  "&::before": {
    inset: 1,
    background:
      "linear-gradient(177.95deg, rgba(255, 255, 255, 0.19) 0%, rgba(255, 255, 255, 0) 100%)",
  },

  "&::after": {
    inset: 2,
    background:
      "radial-gradient(65.28% 65.28% at 50% 100%, rgba(255, 165, 0, 0.8) 0%, rgba(255, 165, 0, 0) 100%), linear-gradient(0deg, #F8C657, #F8C657)",
  },

  "&:active": {
    transform: "scale(0.95)",
  },

  "&:hover svg": {
    transform: "translateX(2px)",
  },

  "&:hover path": {
    animation: `${dash} 0.8s linear forwards`,
  },
}));

const PointsWrapper = styled("div")(() => ({
  overflow: "hidden",
  width: "100%",
  height: "100%",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 1,
}));

interface PointConfig {
  left: string;
  opacity: number;
  duration: number;
  delay?: number;
}

const POINTS_CONFIG: readonly PointConfig[] = [
  { left: "10%", opacity: 1, duration: 2.35, delay: 0.2 },
  { left: "30%", opacity: 0.7, duration: 2.5, delay: 0.5 },
  { left: "25%", opacity: 0.8, duration: 2.2, delay: 0.1 },
  { left: "44%", opacity: 0.6, duration: 2.05 },
  { left: "50%", opacity: 1, duration: 1.9 },
  { left: "75%", opacity: 0.5, duration: 1.5, delay: 1.5 },
  { left: "88%", opacity: 0.9, duration: 2.2, delay: 0.2 },
  { left: "58%", opacity: 0.8, duration: 2.25, delay: 0.2 },
  { left: "98%", opacity: 0.6, duration: 2.6, delay: 0.1 },
  { left: "65%", opacity: 1, duration: 2.5, delay: 0.2 },
];

interface PointProps {
  config: PointConfig;
}

const Point = styled("i")<PointProps>(({ config }) => ({
  position: "absolute",
  bottom: -10,
  width: 2,
  height: 2,
  backgroundColor: "#fff",
  borderRadius: 9999,
  pointerEvents: "none",
  left: config.left,
  opacity: config.opacity,
  animationName: floatingPoints,
  animationIterationCount: "infinite",
  animationTimingFunction: "ease-in-out",
  animationDuration: `${config.duration}s`,
  animationDelay: config.delay !== undefined ? `${config.delay}s` : undefined,
}));

const Inner = styled("span")(() => ({
  zIndex: 2,
  gap: 6,
  position: "relative",
  width: "100%",
  color: "#181818",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 16,
  fontWeight: 600,
  lineHeight: 1.5,
  transition: "color 0.2s ease-in-out",

  "& svg": {
    width: 18,
    height: 18,
    transition: "transform 0.3s ease",
    stroke: "#181818",
    fill: "none",
  },
}));

export interface FloatingPointsButtonProps {
  children?: ReactNode;
  label?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const JoinUsButton: FC<FloatingPointsButtonProps> = ({
  children,
  label = "Join Us",
  type = "button",
  onClick,
}) => {
  return (
    <StyledButton type={type} onClick={onClick} disableRipple>
      <PointsWrapper>
        {POINTS_CONFIG.map((config) => (
          <Point key={`${config.left}-${config.duration}-${config.delay ?? 0}`} config={config} />
        ))}
      </PointsWrapper>

      <Inner>
        {children ?? label}
        <svg
          className="icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </Inner>
    </StyledButton>
  );
};

export default JoinUsButton;
