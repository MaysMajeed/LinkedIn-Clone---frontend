import { Google } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  InputAdornment,
  Link,
  TextField,
} from "@mui/material";
import { useState } from "react";
import React from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = {
      email: email,
      password: password,
    };

    try {
      await fetch("https://saif780.pythonanywhere.com/api/auth/jwt/create/", {
        method: "POST",
        headers: { "Content-Type": "application/json;charset=UTF-8" },
        body: JSON.stringify(loginData),
      })
        .then((response) => response.json())
        .then((data) => localStorage.setItem("loginJWT", data.access));
      window.location.replace("/home");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={handleLogin}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <TextField
          id="emailInput"
          label="Email or phone number"
          variant="outlined"
          size="small"
          type="email"
          required
          sx={{
            backgroundColor: "#eef3f8",
            m: 2,
            width: { xs: "50ch", md: "23vw" },
          }}
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <TextField
          required
          id="passwordInput"
          size="small"
          label="Password"
          variant="outlined"
          type="password"
          sx={{
            backgroundColor: "#eef3f8",
            m: 2,
            width: { xs: "50ch", md: "23vw" },
          }}
          InputProps={{
            endAdornment: <InputAdornment position="end">Show</InputAdornment>,
          }}
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <Link href="#">Forget Password?</Link>
        <Button
          type="submit"
          variant="contained"
          sx={{
            borderRadius: "30px",
            p: 1.5,
            m: 2,
            size: "small",
            width: { xs: "50ch", md: "23vw" },
          }}
        >
          Sign in
        </Button>
        <Divider sx={{ width: { xs: "50ch", md: "23vw" }, m: 2 }}>Or</Divider>
        <Button
          type="submit"
          variant="outlined"
          sx={{
            borderRadius: "30px",
            p: 1.5,
            m: 2,
            size: "small",
            width: { xs: "50ch", md: "23vw" },
          }}
          startIcon={<Google />}
        >
          Sign in with Google
        </Button>
      </Box>
    </form>
  );
}

export default Login;
