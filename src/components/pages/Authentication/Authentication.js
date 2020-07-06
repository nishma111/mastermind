import React from "react";

import * as firebase from "firebase";

import { makeStyles } from "@material-ui/core/styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LockTwoTone from "@material-ui/icons/LockTwoTone";
import {
  Avatar,
  Grid,
  Typography,
  TextField,
  InputAdornment,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: "#800080",
    height: "100vh",
  },
  avatar: {
    margin: "200px 0px 20px 0px",
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  header: {
    color: "#FFFF00",
    marginBottom: "40px",
  },
  input: {
    display: "flex",
    borderRadius: "25px",
    background: "white",
    marginBottom: "10px",
    padding: "8px 16px 8px 16px",
  },
  button1: {
    margin: "10px 0px 10px 0px",
    backgroundColor: "#343232",
    width: "260px",
    height: "48px",
    padding: "8px 16px 8px 16px",
    borderRadius: "25px",
    color: "white",
    "&:hover": {
      backgroundColor: "#009688",
    },
  },
  button2: {
    backgroundColor: "#343232",
    width: "260px",
    height: "48px",
    padding: "8px 16px 8px 16px",
    borderRadius: "25px",
    color: "white",
    "&:hover": {
      backgroundColor: "#009688",
    },
  },
}));

const Authentication = (props) => {
  const {} = props;
  const classes = useStyles();

  var firebaseConfig = {
    apiKey: "AIzaSyApLYsR5WGviwKkMdtHJINlrDLyeK3OtRY",
    authDomain: "game-36a74.firebaseapp.com",
    databaseURL: "https://game-36a74.firebaseio.com",
    projectId: "game-36a74",
    storageBucket: "game-36a74.appspot.com",
    messagingSenderId: "933382632470",
    appId: "1:933382632470:web:d3652c5ba77f080ee8b137",
    measurementId: "G-RCDFTKBHRN",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var provider = new firebase.auth.GoogleAuthProvider();

  const signInGoogle = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log("Success", user);

        // ...
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("Error", errorMessage);
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };

  return (
    <Grid
      className={classes.background}
      container
      direction="column"
      alignItems="center"
    >
      <Grid item>
        <Avatar className={classes.avatar} src="./images/logo.jpg" />
      </Grid>
      <Grid item>
        <Typography className={classes.header} variant="h4">
          Games
        </Typography>
      </Grid>

      <Grid item>
        <TextField
          className={classes.input}
          placeholder="Email"
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircleIcon />
              </InputAdornment>
            ),
            disableUnderline: true,
          }}
        />
      </Grid>

      <Grid item>
        <TextField
          className={classes.input}
          placeholder="Password"
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockTwoTone />
              </InputAdornment>
            ),
            disableUnderline: true,
          }}
        />
      </Grid>
      <Grid item>
        <Button variant="contained" className={classes.button1}>
          Login
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          className={classes.button2}
          onClick={signInGoogle}
        >
          Login with Google
        </Button>
      </Grid>
    </Grid>
  );
};

export default Authentication;
