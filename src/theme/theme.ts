import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "rgb(36 36 36 / 1)",
      paper: "rgb(29 29 29 / 1)",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#9CA3AF",
    },
  },
  typography: {
    fontFamily:
      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
    h1: { fontWeight: 700, color: "#FFFFFF" },
    h2: { fontWeight: 600, color: "#FFFFFF" },
    h3: { fontWeight: 600, color: "#FFFFFF" },
    body1: { color: "#9CA3AF" },
    body2: { color: "#9CA3AF" },
    button: { textTransform: "none", color: "#9CA3AF" },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          // Custom Scrollbar
          scrollbarWidth: "thin",
          scrollbarColor: "#9CA3AF rgba(36,36,36,0.5)",
        },
        "*::-webkit-scrollbar": {
          width: "8px",
          height: "8px",
        },
        "*::-webkit-scrollbar-track": {
          background: "rgba(36,36,36,0.5)",
          borderRadius: "4px",
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: "#9CA3AF",
          borderRadius: "4px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          transition: "all 0.3s ease",
          "&:hover": {
            "&:hover": {
              borderColor: "#F7AB0A",
              color: "#F7AB0A",
              backgroundColor: "rgba(247, 171, 10, 0.08)",
              transform: "translateY(-2px)",
              boxShadow: "0 4px 12px rgba(156, 163, 175, 0.2)",
            },
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "rgb(29 29 29 / 1)",
          borderRadius: "16px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          transition: "all 0.3s ease",
          "&:hover": {
            // transform: "translateY(-4px)",
            boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "rgb(45 45 45 / 1)",
          // borderRadius: "16px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
        },
      },
    },
  },
});

// Make typography responsive
theme = responsiveFontSizes(theme);

export default theme;
