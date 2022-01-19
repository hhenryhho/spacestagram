import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const overrides = {
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Roboto, sans-serif",
  },
  fontWeights: {
    normal: 300,
    medium: 500,
    bold: 700,
  },
  colors: {
    brand: {
      background: "#fafafa",
      100: "#0B0C10", // Rich Black
      200: "#1F2833", // Gunmetal
      275: "#5A5C5E", // Darker Silver
      300: "#C5C6C7", // Silver
      325: "#EAEBEB", // Lighter Silver
      highlight: "#4AF1F2", // Fluorescent Blue (Highlight Blue)
      muted: "#45A29E", // Cadet Blue (Muted Blue)
    },
  },
  breakpoints: createBreakpoints({
    sm: "35em",
    md: "35em",
    lg: "80em",
    xl: "80em",
  }),
};

const customTheme = extendTheme(overrides);

export default customTheme;
