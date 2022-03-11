import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import useMediaQuery from "@mui/material/useMediaQuery";
import image from "./images/image.jpg";
import lejit from "./images/Lejit.svg";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import { inputLabelClasses } from "@mui/material/InputLabel";
import { withStyles } from "@material-ui/core/styles";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          "Sign Up": "Sign Up",
          "Sign up with your email": "Sign up with your email",
          "First Name": "First Name",
          "Last Name": "Last Name",
          Email: "Email address",
          Password: "Password ",
          "Already have an account?": "Already have an account?, ",
          "Sign In": "Sign In",
        },
      },
      hi: {
        translation: {
          "Sign Up": "साइन अप करें",
          "Sign up with your email": "अपने ईमेल के साथ साइन अप करें",
          "First Name": "पहला नाम",
          "Last Name": "अंतिम नाम",
          Email: "ईमेल एड्रेस",
          Password: "पासवर्ड",
          "Already have an account?": "पहले से ही एक खाता है?, ",
          "Sign In": "साइन इन करें",
        },
      },
    },
    lng: "en", // if you're using a language detector, do not define the lng option  {document.querySelector()}
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
const styles = (theme) => ({
  input: {
    height: 48,
  },
});

const SignUp = withStyles(styles)((props) => {
  const { t } = useTranslation();
  const isActive = useMediaQuery("(min-width:600px)");
  const { classes } = props;
  return (
    <Box>
      <Grid container style={{ minHeight: "100vh" }}>
        <Grid container item sm={4.5}>
          <Box
            sx={{
              pt: 4,
              pr: 2,
              pb: 2,
              pl: 2,
              mt: 5,
              mr: 7,
              mb: 2,
              ml: 7,
              width: "90%",
            }}
          >
            <img
              src={lejit}
              style={{ width: "64px", height: "33.6px", objectFit: "cover" }}
            />
            <Typography
              variant="h4"
              sx={{
                mt: 7,
                fontWeight: "700",
                fontSize: "34px",
                color: "#1C1C28",
              }}
            >
              {t("Sign Up")}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                mb: 5,
                mt: 1,
                fontWeight: "400",
                fontSize: "16px",
                color: "#555770",
              }}
            >
              {t("Sign up with your email")}
            </Typography>
            <Grid container spacing={2} sx={{ mr: 4 }}>
              <Grid item xs={6}>
                <TextField
                  label={t("First Name")}
                  height="48px"
                  InputLabelProps={{
                    sx: {
                      fontFamily: "Inter",
                      fontSize: "14px",
                      color: "#8E90A6",
                      fontWeight: "400",
                    },
                  }}
                  InputProps={{
                    className: classes.input,
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label={t("Last Name")}
                  InputLabelProps={{
                    sx: {
                      fontFamily: "Inter",
                      fontSize: "14px",
                      color: "#8E90A6",
                      fontWeight: "400",
                    },
                  }}
                  InputProps={{
                    className: classes.input,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label={t("Email")}
                  InputLabelProps={{
                    sx: {
                      fontFamily: "Inter",
                      fontSize: "14px",
                      color: "#8E90A6",
                      fontWeight: "400",
                    },
                  }}
                  InputProps={{
                    className: classes.input,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label={t("Password")}
                  InputLabelProps={{
                    sx: {
                      fontFamily: "Inter",
                      fontSize: "14px",
                      color: "#8E90A6",
                      fontWeight: "400",
                    },
                  }}
                  InputProps={{
                    className: classes.input,
                  }}
                />
              </Grid>
              <Grid item xs={12} sx={{ mt: 3, mb: 2 }}>
                <Button
                  type="submit"
                  contained
                  fullWidth
                  sx={{ backgroundColor: "#EBEBF0", height: "48px" }}
                  variant="contained"
                >
                  <Typography
                    sx={{ color: "#8E90A6", font: "Inter", fontSize: "16px" }}
                  >
                    {t("Sign Up")}
                  </Typography>
                </Button>
              </Grid>
              <Grid
                container
                justifyContent="center"
                sx={{ mr: 2, mb: 2, ml: 2 }}
              >
                <Typography sx={{ color: " #555770", fontSize: "14px" }}>
                  {t("Already have an account?")}
                  <Link
                    href="#"
                    variant="body2"
                    sx={{
                      color: " #3f50b5",
                      fontWeight: "700",
                      fontSize: "14px",
                      fontFaily: "Inter",
                      textDecoration: "none",
                    }}
                  >
                    {t("Sign In")}
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item sm={7.5}>
          <Box style={{ width: "100%", height: "100%" }} sx={{ pl: 3 }}>
            {isActive && (
              <img
                src={image}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  pl: 15,
                }}
                alt="Loading"
              />
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
});

export default SignUp;
