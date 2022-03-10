import React from "react";
import SignUp from "./SignUp";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  typography: {
    fontFamily: "Inter",
    body1: {
      fontWeight: 700, // or 'bold'
    },
    button: {
      textTransform: "none",
    },
  },
});
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SignUp />
    </ThemeProvider>
  );
};
export default App;
