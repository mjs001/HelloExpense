import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "rgb(152, 30, 168)",
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          background: "rgba(255, 255, 255, 0.698)",
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          background: "rgba(255, 255, 255, 0.951)",
        },
      },
    },
  },
});
