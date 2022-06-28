import React from "react";
import Navbar from "./Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary100: {
      light: "#757ce8",
      main: "#18181B",
      dark: "#1d2430",
      contrastText: "#fff",
    },
    primary200: {
      light: "#757ce8",
      main: "#18181B",
      dark: "#1d2430",
      contrastText: "#fff",
    },
    accent100: {
      light: "#757ce8",
      main: "#fff",
      dark: "#1d2430",
      contrastText: "#fff",
    },
  },
});

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <div className="flex bg-slate-600">
        <Navbar />
        <div className="flex-1  min-h-screen">{children}</div>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
