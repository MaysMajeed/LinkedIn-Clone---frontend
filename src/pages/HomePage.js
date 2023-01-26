import React from "react";
import RightBar from "../components/RightBar";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Feed from "../components/Feed";
import { Box, Stack } from "@mui/material";

function HomePage() {
  document.title = "Feed | LinkedIn";
  return (
    <Box bgcolor="rgba(0,0,0,0.07)">
      <NavBar />
      <Stack
        sx={{
          mt: 3,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>
    </Box>
  );
}

export default HomePage;
