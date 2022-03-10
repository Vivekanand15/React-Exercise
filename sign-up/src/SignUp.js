import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          "Sign Up": "Sign Up",
          "Sign up with your Gmail": "Sign up with your Gmail",
          "First Name": "First Name",
          "Last Name": "Last Name",
          Email: "Email",
          Password: "Password",
          "Already have an account?": "Already have an account?",
          "Sign In": "Sign In",
        },
      },
      hi: {
        translation: {
          "Sign Up": "साइन अप करें",
          "Sign up with your Gmail": "अपने जीमेल के साथ साइन अप करें",
          "First Name": "पहला नाम",
          "Last Name": "अंतिम नाम",
          Email: "ईमेल",
          Password: "पासवर्ड",
          "Already have an account?": "पहले से ही एक खाता है?",
          "Sign In": "साइन इन करें",
        },
      },
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
    detection: {
      order: [
        "querystring",
        "cookie",
        "localStorage",
        "sessionStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
      ],
    },
  });

const theme = createTheme({
  typography:{
    fontFamily:'Inter'
  },
});
const SignUp = () => {

  
  const isActive = useMediaQuery("(min-width:600px)");
  return (
    <ThemeProvider theme={theme}>
      <Grid container style={{ minHeight: "100vh" }}>
        <Grid container item xs={12} sm={6}>
          <Box width={400} sx={{mt: 2, mb: 2, ml: 10, mr: 2}}>
            <Typography variant="h3" sx={{ mt: 2, mb: 2, ml: 2, mr: 2 }}>
              {t("Sign Up")}
            </Typography>
            <Typography variant="subtitle1" sx={{ mt: 2, mb: 5, ml: 2, mr: 2 }}>
             {t("Sign up with your Gmail")}
            </Typography>
            <Grid container spacing={2} sx={{ mr: 4 }}>
              <Grid item xs={6}>
                <TextField label={t("First Name")} />
              </Grid>
              <Grid item xs={6}>
                <TextField label={t("Last Name")} />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth required label={t("Email")} />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth required label={t("Password")} />
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
               {t("Sign Up")}
              </Button>
              <Grid item>
                 {t("Already have an account?")}
                <Link
                  text-align="center"
                  underline="none"
                  href="#"
                  variant="body2"
                >
                  {t("Sign In")}
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
