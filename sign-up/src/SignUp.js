import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";


const SignUp = () => {

  const theme = createTheme();
  const isActive = useMediaQuery("(min-width:600px)");
  return (
    <ThemeProvider theme={theme}>
      <Grid container style={{ minHeight: "100vh" }}>
        <Grid container item xs={12} sm={6}>
          <Box width={400} sx={{mt: 2, mb: 2, ml: 10, mr: 2}}>
            <Typography variant="h3" sx={{ mt: 2, mb: 2, ml: 2, mr: 2 }}>
              Sign Up
            </Typography>
            <Typography variant="subtitle1" sx={{ mt: 2, mb: 5, ml: 2, mr: 2 }}>
              Sign up with your Gmail
            </Typography>
            <Grid container spacing={2} sx={{ mr: 4 }}>
              <Grid item xs={6}>
                <TextField label="First Name" />
              </Grid>
              <Grid item xs={6}>
                <TextField label="First Name" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth required label="First Name" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth required label="First Name" />
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
              </Button>
              <Grid item>
                <Link
                  text-align="center"
                  underline="none"
                  href="#"
                  variant="body2"
                >
                  Already have an account? Sign In
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          { isActive &&
            (<img
              src="https://unsplash.it/700/500"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt="Loading"
            />)
          }
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default SignUp;
