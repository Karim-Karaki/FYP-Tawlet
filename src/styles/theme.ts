import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    text: {
      primary: "#000000", // Set primary text to black
      secondary: "#4A4A4A", // Darker gray for secondary text
      disabled: "#9E9E9E", // Medium gray for disabled text
    },
    primary: {
      main: "#B34768", // Darker Pink
      contrastText: "#FFFFFF", // White for better contrast
    },
    secondary: {
      main: "#D35D79", // A slightly less dark pink than primary
      contrastText: "#FFFFFF", // White for contrast
    },
    success: {
      light: "#C28B9B", // Darker Pink/Beige
      main: "#AF6B7D", // Medium Dark Pink
      dark: "#995160", // Even Darker Pink
      contrastText: "#FFFFFF", // White for contrast
    },
    warning: {
      light: "#DEA985", // Adjusted Beige
      main: "#D97B5D", // Darker Beige
      dark: "#C5623E", // Even Darker Beige
      contrastText: "#FFFFFF", // White for contrast
    },
    error: {
      light: "#E57373", // Adjusted to standard Material UI error light
      main: "#D32F2F", // Darker Pink for error
      dark: "#C2185B", // Dark Pink almost towards purple
      contrastText: "#FFFFFF", // White for contrast
    },
    background: {
      paper: "#EEDCDC", // Adjusted Light Pink
      default: "#E2C1C0", // Darker Light Pink
    },
  },
  typography: {
    fontFamily: "Changa, sans-serif",
  },
});

export default theme;
