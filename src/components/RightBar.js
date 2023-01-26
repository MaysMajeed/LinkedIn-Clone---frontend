import { Avatar, Box, Button, Paper, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
function RightBar() {
  return (
    <Box>
      <Paper
        elevation={3}
        flex={2}
        p={2}
        sx={{
          display: { xs: "none", md: "flex", flexDirection: "column" },
          mr: "2vw",
          ml: "2vw",
        }}
      >
        {/* folloing title */}
        <Typography p={2}>Add to your feed</Typography>

        {/* Follow sugestion */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            p: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar></Avatar>
            <Box m={1}>
              <Button sx={{ display: "block", fontSize: 14, color: "#000" }}>
                Amina R. Rahim
              </Button>
              <Button
                sx={{
                  display: "block",
                  fontSize: 12,
                  color: "#000",
                  fontWeight: 100,
                }}
              >
                Sales Director (Neo Visa card)
              </Button>
            </Box>
          </Box>
          <Button
            variant="outlined"
            startIcon={<AddIcon />}
            sx={{ borderRadius: "20px", fontSize: 11 }}
          >
            Follow
          </Button>
        </Box>
        {/* Follow suggesion */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            p: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar></Avatar>
            <Box m={1}>
              <Button sx={{ display: "block", fontSize: 14, color: "#000" }}>
                Amina R. Rahim
              </Button>
              <Button
                sx={{
                  display: "block",
                  fontSize: 12,
                  color: "#000",
                  fontWeight: 100,
                }}
              >
                Sales Director (Neo Visa card)
              </Button>
            </Box>
          </Box>
          <Button
            variant="outlined"
            startIcon={<AddIcon />}
            sx={{ borderRadius: "20px", fontSize: 11 }}
          >
            Follow
          </Button>
        </Box>

        {/* Follow suggesion */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            p: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar></Avatar>
            <Box m={1}>
              <Button sx={{ display: "block", fontSize: 14, color: "#000" }}>
                Amina R. Rahim
              </Button>
              <Button
                sx={{
                  display: "block",
                  fontSize: 12,
                  color: "#000",
                  fontWeight: 100,
                }}
              >
                Sales Director (Neo Visa card)
              </Button>
            </Box>
          </Box>
          <Button
            variant="outlined"
            startIcon={<AddIcon />}
            sx={{ borderRadius: "20px", fontSize: 11 }}
          >
            Follow
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default RightBar;
