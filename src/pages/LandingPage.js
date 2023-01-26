import { Avatar, Box, CardMedia, Stack, Typography } from "@mui/material";
import React from "react";
import Login from "../components/Login";
import NavBar from "../components/NavBar";
//import img from "../../public/deskTop.jpg";
function LandingPage() {
  document.title = "LinkedIn: Log In or Sign Up";
  return (
    <Box>
      <NavBar />
      <Stack
        sx={{ flexDirection: { xs: "column", md: "row" } }}
        justifyContent="space-between"
        mt={3}
      >
        <Box
          flex={1}
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Typography
            variant="h3"
            color="#8F5849"
            sx={{
              fontSize: { xs: "30px", md: "40px", lg: "45px", xl: "50px" },
              m: { xs: "3px", md: "5px", lg: "10px", xl: "13px" },
              ml: { xs: "2vw", md: "3vw", lg: "4vw", xl: "6vw" },
              mb: "7vw",
              p: { xs: "5px", md: "5px", lg: "10px", xl: "13px" },
            }}
            fontWeight="100"
          >
            Welcome to your professional community
          </Typography>
          <Login />
        </Box>

        <Box flex={1}>
          <CardMedia
            sx={{ height: "80vh" }}
            image={process.env.PUBLIC_URL + "/landingPage.svg"}
            title="avatar"
          />
        </Box>
      </Stack>
    </Box>
  );
}

export default LandingPage;
