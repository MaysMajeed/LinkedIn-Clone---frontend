import { Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import NavBar from "../components/NavBar";
import Login from "../components/Login";

function LoginPage() {
  document.title = "LinkedIn Login, Sign in | LinkedIn";
  return (
    <Box width="100vw">
      <NavBar />
      <Stack
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            width: { xs: "48ch", md: "23vw" },
            m: "3vw",
            p: "3vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" mb="3vh">
            Sign in
          </Typography>
          <Typography>Stay updated on your professional world</Typography>
          <Login />
        </Paper>
      </Stack>
    </Box>
  );
}

export default LoginPage;
