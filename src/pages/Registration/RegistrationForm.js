import React, { useState } from "react";
import {
  TextField,
  InputAdornment,
  IconButton,
  Grid,
  Button,
  Typography,
  //   InputProps,
} from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import * as Yup from "yup";
import { useField, Formik, Form } from "formik";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useDispatch } from "react-redux";
const useStyles = makeStyles((theme) =>
  createStyles({
    btn: {
      background: "pink",
    },
  })
);

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleLoginWithGoogle = () => {};
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        contact: "",
        password: "",
        conformPassword: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Please use a valid email")
          .required("Required."),
        username: Yup.string()
          .min(3, "Minimum of 3 characters.")
          .max(69, "Maximum of 69 characters.")
          .required("Required."),
        contact: Yup.string()
          .min(11, "Minimum of 11 characters.")
          .max(13, "Maximum of 11 characters.")
          .required("Required."),
        password: Yup.string()
          .min(8, "Minimum of 8 characters.")
          .max(69, "Maximum of 69 characters.")
          .required("Required."),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password"), null], "Passwords must match.")
          .required("Required."),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(props) => (
        <Form>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <PlainTextField name="username" label="Username" type="text" />
            </Grid>

            <Grid item xs={12}>
              <PlainTextField name="email" label="Email" type="email" />
            </Grid>

            <Grid item xs={12}>
              <PlainTextField
                name="contact"
                label="Mobile Number"
                type="text"
              />
            </Grid>

            <Grid item xs={12}>
              <PasswordField name="password" label="Password" />
            </Grid>

            <Grid item xs={12}>
              <PasswordField name="confirmPassword" label="Confirm Password" />
            </Grid>
            <Grid item container justifyContent="space-around" xs={12}>
              <Button
                fullWidth={true}
                className={classes.btn}
                variant="contained"
                type="submit"
              >
                Create an Account
              </Button>
            </Grid>
            <Grid item container alignContent="center">
              <Grid item container alignContent="center" xs={5}>
                <Grid item xs={12}>
                  {" "}
                  <hr />
                </Grid>
              </Grid>
              <Grid item container justifyContent="space-around" xs={2}>
                {" "}
                <Typography variant="h5">or</Typography>
              </Grid>
              <Grid item container alignContent="center" xs={5}>
                <Grid item xs={12}>
                  {" "}
                  <hr />
                </Grid>
              </Grid>
            </Grid>

            <Grid item container justifyContent="space-around" xs={12}>
              <Button
                fullWidth={true}
                variant="outlined"
                className={classes.btn}
                type="button"
              >
                Continue with Google
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

const PlainTextField = (props) => {
  const [field, meta] = useField(props);
  const { name, label, type } = props;
  return (
    <TextField
      size="small"
      variant="standard"
      {...field}
      label={label}
      name={name}
      type={type}
      error={Boolean(meta.error) && meta.touched}
      helperText={meta.touched ? meta.error : ""}
      fullWidth={true}
    />
  );
};

const PasswordField = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [field, meta] = useField(props);
  const { name, label } = props;
  const handleToggleVisibility = () => {
    setShowPassword((currState) => !currState);
  };
  return (
    <TextField
      size="small"
      variant="standard"
      {...field}
      name={name}
      label={label}
      error={meta.touched && Boolean(meta.error)}
      type={showPassword ? "text" : "password"}
      fullWidth={true}
      helperText={meta.touched ? meta.error : ""}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleToggleVisibility}>
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
