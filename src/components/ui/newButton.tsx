"use client";

import type { ButtonHTMLAttributes, ReactElement } from "react";
import { styled } from "@mui/material/styles";

type GenerateExperienceButtonProps = {
  label?: string;
  fontSize?: number;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Wrapper = styled("div")(() => ({
  position: "relative",
  display: "inline-block",
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
  borderRadius: 9999,
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
  borderRadius: 9999,
  border: "1px solid rgba(255,255,255,0.12)",
  // even lighter warm brown base
  backgroundColor: "#996B41",
  backgroundImage:
    "url('data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%222000%22 height=%221000%22%3E%3Cg filter=%22url(%23a)%22%3E%3Cpath fill=%22%235A3520%22 d=%22M-1000-500h4000v2000h-4000z%22%2F%3E%3Cpath d=%22m136-197-437 426 65 700L867 105%22 fill=%22%23E1C074%22%2F%3E%3Cpath d=%22m278-71-82 1083 1354 368 17-1255%22 fill=%22%23E1C074%22%2F%3E%3Cpath d=%22M1919 304 807 1000l881 357 285-883%22 fill=%22%2370432A%22%2F%3E%3Cpath d=%22m7 227-502 869 528 430 754-746%22 fill=%22%23895333%22%2F%3E%3Cpath d=%22m787 822-480 538 1055 741 76-583%22 fill=%22%2370432A%22%2F%3E%3Cpath d=%22M1214 806 970 1955l447 305 1050-411%22 fill=%22%23A06637%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3Cfilter id=%22a%22 x=%22-200%22 y=%22-200%22 width=%222400%22 height=%221400%22 filterUnits=%22userSpaceOnUse%22 color-interpolation-filters=%22sRGB%22%3E%3CfeFlood flood-opacity=%220%22 result=%22BackgroundImageFix%22%2F%3E%3CfeBlend in=%22SourceGraphic%22 in2=%22BackgroundImageFix%22 result=%22shape%22%2F%3E%3CfeGaussianBlur stdDeviation=%22200%22 result=%22effect1_foregroundBlur_1_2%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3C%2Fsvg%3E')",
  backgroundSize: "cover",
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
  boxShadow:
    "inset 0 1px 0 0 rgba(255,255,255,0.12), 0 16px 40px rgba(0,0,0,0.45)",
  transition:
    "background-color 0.25s ease, border-color 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease",
  overflow: "hidden",
  "&:hover": {
    backgroundColor: "#4A2A1A",
    borderColor: "rgba(255,255,255,0.22)",
    transform: "scale(1.02)",
  },
  "&:active": {
    transform: "scale(0.98)",
    boxShadow:
      "inset 0 1px 0 0 rgba(255,255,255,0.10), 0 10px 25px rgba(0,0,0,0.55)",
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

const Label = styled("span")(({ fontSize }: { fontSize: number }) => ({
  position: "relative",
  zIndex: 1,
  fontSize: fontSize,
  fontWeight: 600,
  letterSpacing: "-0.01em",
  fontFamily: "var(--font-montserrat)",
  color: "#000000",
}));

function NewButton({
  label = "Generate Experience",
  type = "button",
  fontSize = 16,
  ...rest
}: GenerateExperienceButtonProps): ReactElement {
  return (
    <Wrapper>
      <Glow className="nebula-glow" />
      <ButtonRoot type={type} {...rest}>
        <SheenTrack className="sheen-track">
          <SheenInner />
        </SheenTrack>

        <Label fontSize={fontSize}>{label}</Label>

        <ArrowIcon className="arrow-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </ArrowIcon>
      </ButtonRoot>
    </Wrapper>
  );
}

export default NewButton;
