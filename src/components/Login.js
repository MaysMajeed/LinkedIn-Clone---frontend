import { Google } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  InputAdornment,
  Link,
  TextField,
} from "@mui/material";
import React from "react";

function Login() {
  return (
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
        required
        sx={{
          backgroundColor: "#eef3f8",
          m: 2,
          width: { xs: "50ch", md: "23vw" },
        }}
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
      />
      <Link href="#">Forget Password?</Link>
      <Button
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
  );
}

export default Login;
