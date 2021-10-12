import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";

// Custom ComponentsRe
import Form from "./RegistrationForm";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      minHeight: "100vh",
      minWidth: "100vw",
    },
    cutePicture: {
      borderRadius: "30px 0 0 30px",
      backgroundImage: "url('/images/registration-bg.jpg')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
    otherHalf: {
      //   backgroundImage:"linear-gradient(to left, #F9F9F9,#F9F9F9, #F9F9F9, #6BD9D8)",
    },
    regiBox: {
      padding: "1rem",
    },
  })
);

export default function Registration() {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container>
      <Grid
        className={classes.otherHalf}
        container
        justifyContent="space-around"
        alignContent="center"
        item
        xs={12}
        lg={6}
      >
        <Grid item lg={6}>
          <Typography align="center" variant="h4">
            Create an Account
          </Typography>
          <Box className={classes.regiBox}>
            <Form />
          </Box>
        </Grid>
      </Grid>
      <Grid className={classes.cutePicture} item xs={0} lg={6}></Grid>
    </Grid>
  );
}
