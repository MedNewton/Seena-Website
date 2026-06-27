"use client";

import type { ButtonHTMLAttributes, ReactElement } from "react";
import { styled } from "@mui/material/styles";

type GenerateExperienceButtonProps = {
  label?: string;
  fontSize?: number;
  labelFontFamily?: string;
  labelWeight?: number;
  uppercase?: boolean;
  labelColor?: string;
  showIcon?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Wrapper = styled("div")(({ theme }) => ({
  position: "relative",
  display: "inline-block",
  // full-width on mobile so the button (width: 100% below sm) can stretch
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
  // let the button define the width; if you want full-width on mobile,
  // we already handle that inside ButtonRoot with breakpoints
  "&:hover .nebula-glow": {
    opacity: 0.25,
    transform: "scale(1)",
  },
  "&:hover .sheen-track": {
    transform: "translateX(100%)",
  },
  "&:hover .arrow-icon": {
    transform: "translateX(2px)",
    color: "#F9FAFB",
  },
}));

const Glow = styled("div")(() => ({
  position: "absolute",
  inset: 0, // match button bounds exactly
  borderRadius: 12,
  backgroundImage:
    "linear-gradient(90deg, #E59804, #DCB821, #E59804, #DCB821)",
  filter: "blur(16px)",
  opacity: 0,
  transition: "opacity 0.5s ease, transform 0.5s ease",
  pointerEvents: "none",
  zIndex: 0,
  transform: "scale(1)",
  transformOrigin: "center center",
}));

const ButtonRoot = styled("button")(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 12,
  padding: "14px 44px",
  borderRadius: 12,
  border: "none",
  // warm golden gradient: light cream -> amber -> deep brown (left to right)
  // solid fallback + explicit size/repeat so it always covers edge-to-edge
  backgroundColor: "#d77a1e",
  backgroundImage:
    "linear-gradient(90deg, #ffe8b2 0%, #d77a1e 50%, #1f1306 100%)",
  backgroundSize: "100% 100%",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  color: "#F9FAFB",
  fontSize: "0.875rem",
  fontWeight: 500,
  letterSpacing: "-0.01em",
  lineHeight: 1,
  cursor: "pointer",
  outline: "none",
  width: "100%",
  boxShadow: "0 16px 40px rgba(0,0,0,0.45)",
  transition:
    "background-color 0.25s ease, border-color 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease",
  overflow: "hidden",
  "&:hover": {
    transform: "scale(1.02)",
    filter: "brightness(1.06)",
  },
  "&:active": {
    transform: "scale(0.98)",
    boxShadow: "0 10px 25px rgba(0,0,0,0.55)",
  },
  "&:focus-visible": {
    outline: "none",
    boxShadow:
      "0 0 0 2px #25100A, 0 0 0 4px rgba(252,210,33,0.85)",
  },
  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
}));



const SheenTrack = styled("span")(() => ({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  transform: "translateX(-100%)",
  transition: "transform 0.7s ease-in-out",
  pointerEvents: "none",
  zIndex: 0,
}));

const SheenInner = styled("span")(() => ({
  position: "absolute",
  inset: 0,
  width: "50%",
  backgroundImage:
    "linear-gradient(to right, transparent, rgba(255,255,255,0.11), transparent)",
  transform: "skewX(-18deg)",
  transformOrigin: "left center",
}));

const ArrowIcon = styled("span")(() => ({
  position: "relative",
  zIndex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "rgba(249,250,251,0.6)",
  transition: "transform 0.3s ease, color 0.3s ease",
}));

const Label = styled("span", {
  shouldForwardProp: (prop) =>
    !["fontSize", "labelFontFamily", "labelWeight", "uppercase", "labelColor"].includes(
      prop as string
    ),
})<{
  fontSize: number;
  labelFontFamily: string;
  labelWeight: number;
  uppercase: boolean;
  labelColor: string;
}>(({ fontSize, labelFontFamily, labelWeight, uppercase, labelColor }) => ({
  position: "relative",
  zIndex: 1,
  fontSize: fontSize,
  fontWeight: labelWeight,
  letterSpacing: uppercase ? "0.06em" : "-0.01em",
  textTransform: uppercase ? "uppercase" : "none",
  fontFamily: labelFontFamily,
  color: labelColor,
}));

function NewButton({
  label = "Generate Experience",
  type = "button",
  fontSize = 16,
  labelFontFamily = "var(--font-montserrat)",
  labelWeight = 600,
  uppercase = false,
  labelColor = "#000000",
  showIcon = true,
  ...rest
}: GenerateExperienceButtonProps): ReactElement {
  return (
    <Wrapper>
      <Glow className="nebula-glow" />
      <ButtonRoot type={type} {...rest}>
        <SheenTrack className="sheen-track">
          <SheenInner />
        </SheenTrack>

        <Label
          fontSize={fontSize}
          labelFontFamily={labelFontFamily}
          labelWeight={labelWeight}
          uppercase={uppercase}
          labelColor={labelColor}
        >
          {label}
        </Label>

        {showIcon && (
          <ArrowIcon className="arrow-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              viewBox="0 0 24 24"
              fill="none"
              stroke={labelColor}
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </ArrowIcon>
        )}
      </ButtonRoot>
    </Wrapper>
  );
}

export default NewButton;
