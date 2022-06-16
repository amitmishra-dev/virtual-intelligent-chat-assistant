import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper,
  Button,
} from "@material-ui/core";

const axios = require("axios");

export default function LoginPage() {
  const [user, setuser] = useState({
    email: "",
    password: "",
  });

  const change = useNavigate();

  function signuphandel() {
    change.push("/");
  }

  //const dispatch = useDispatch();
  function handel(e) {
    const { name, value } = e.target;

    setuser({
      ...user,
      [name]: value,
    });
  }

  function submit(e) {
    e.preventDefault();
    const w = {
      name: user.name,
      email: user.email,
    };

    axios
      .post("http://localhost:5000/users/login", {
        email: user.email,
        password: user.password,
      })
      .then((resp) => {
        console.log(resp);
        alert("You have been successfully Logged In");
        change("/user");
      })
      .catch((error) => {
        console.log(error);
        //return "error"
      });
  }
  return (
    <div
      style={{
        alignItem: "centre",
        margin: "auto",
        padding: 80,

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        height: "78vh",
        backgroundImage: `url(https://w0.peakpx.com/wallpaper/70/122/HD-wallpaper-read-the-book-library-books-motivation-inscription-reader.jpg)`,
      }}
    >
      <div className="form">
        <Box
          sx={{
            display: "flex",
            "& > :not(style)": {
              width: 400,
              height: 300,
            },
          }}
        >
          <Paper>
            <Grid
              container
              spacing={3}
              direction={"column"}
              justify={"center"}
              alignItems={"center"}
            >
              <Grid>
                <Avatar
                  sx={{ bgcolor: deepOrange[500] }}
                  src="/broken-image.jpg"
                />
              </Grid>
              <Grid item xs={8}>
                <TextField
                  label="Username"
                  type={"mail"}
                  name="email"
                  onChange={handel}
                  required
                ></TextField>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  label="Password"
                  type={"password"}
                  name="password"
                  onChange={handel}
                  required
                ></TextField>
              </Grid>
              <Grid item xs={8}>
                <p>
                  Don't have an account?{" "}
                  <a href="/register" style={{ textDecoration: "none" }}>
                    Sign Up
                  </a>
                </p>
                <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                  type={"submit"}
                  onClick={submit}
                >
                  {" "}
                  Login{" "}
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </div>
    </div>
  );
}
