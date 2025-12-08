import { createTheme, responsiveFontSizes } from "@mui/material/styles"
import type { BrandPalette, BrandPaletteOptions } from "@/theme/brandColors";
import { brandColors } from "@/theme/brandColors";
import type { PaletteOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
    interface Palette { brand: BrandPalette }
    interface PaletteOptions { brand?: BrandPaletteOptions }
  }

const brand: BrandPaletteOptions = brandColors;

const palette: PaletteOptions = {
  primary: { main: "#FFFFFF" },
  secondary: { main: "#8F8E8E" },
  background: { default: "#0C0C0C" },
  text: { primary: "#FFFFFF", secondary: "#364153" },
  info: { main: "#000000" },
  error: { main: "#DC2626" },
  success: { main: "#389685" },
  brand,
};

let theme = createTheme({
  palette,
  typography: {
    fontFamily: "Inter",
  },
})

theme = responsiveFontSizes(theme)

export default theme
