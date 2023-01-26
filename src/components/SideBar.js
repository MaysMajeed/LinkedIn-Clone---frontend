import {
  Avatar,
  Box,
  Button,
  Divider,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
function SideBar() {
  return (
    <Box sx={{ display: { xs: "none", md: "block" } }}>
      {/* Paper One */}
      <Paper
        elevation={3}
        flex={1}
        p={2}
        sx={{
          display: {
            xs: "none",
            sm: "flex",
            flexDirection: "column",
          },
          mr: "2vw",
          ml: "2vw",
          bgcolor: "#fff",
        }}
      >
        {/* Element One */}
        <Box
          sx={{
            height: "50px",
            backgroundColor: "lightBlue",
          }}
        ></Box>
        {/* Element Two */}
        <Avatar
          sx={{
            width: 56,
            height: 56,
          }}
        ></Avatar>

        {/* Element Three */}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            p: 2,
            justifyContent: "center",
          }}
        >
          <Link mt={2}>Mays Mahdi PMP®</Link>
          <Typography variant="p" mt={2} fontSize={13} color="gray">
            ERP Technical Specialist at QiCard
          </Typography>
        </Box>
        {/* Element Four */}
        <Divider></Divider>
        {/* Element Five */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            p: 2,
          }}
        >
          <Button sx={{ fontSize: 11, color: "gray" }}>
            Who's viewed your profile 79
          </Button>
          <Button sx={{ fontSize: 11, color: "gray" }}>
            Impressions of your post 209
          </Button>
        </Box>
      </Paper>

      {/* Paper Two */}
      <Paper
        elevation={3}
        flex={1}
        p={2}
        sx={{
          display: { xs: "none", sm: "block" },
          mr: "2vw",
          ml: "2vw",
          bgcolor: "#fff",
          mt: 1,
        }}
      >
        <Typography
          sx={{ fontSize: 13, color: "gray", display: "block", p: 1, ml: 1 }}
        >
          Recent
        </Typography>
        <Button sx={{ fontSize: 11, color: "gray", display: "block", ml: 1 }}>
          #creaivity
        </Button>
        <Button sx={{ fontSize: 11, color: "gray", display: "block", ml: 1 }}>
          #entrepreneurship
        </Button>
      </Paper>

      {/* Paper Three */}
      <Paper
        elevation={3}
        flex={1}
        p={2}
        sx={{
          display: { xs: "none", sm: "block" },
          mr: "2vw",
          ml: "2vw",
          bgcolor: "#fff",
          mt: 1,
        }}
      >
        <Box pt={1} mb={2}>
          <Link sx={{ fontSize: 15, p: 1, ml: 1 }}>Groups</Link>
          <Button sx={{ fontSize: 11, color: "gray", display: "block", ml: 1 }}>
            ERP community
          </Button>
          <Button sx={{ fontSize: 11, color: "gray", display: "block", ml: 1 }}>
            Project management
          </Button>
        </Box>

        <Link sx={{ fontSize: 15, p: 1, ml: 1 }}>Events</Link>
        <Box pt={1} mt={2} ml={1}>
          <Link sx={{ fontSize: 15, p: 1 }}>Followed Hashags</Link>
          <Button sx={{ fontSize: 11, color: "gray", display: "block" }}>
            #creaivity
          </Button>
          <Button sx={{ fontSize: 11, color: "gray", display: "block" }}>
            #entrepreneurship
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default SideBar;
