import { Avatar, Box, Button, Paper } from "@mui/material";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import EventIcon from "@mui/icons-material/Event";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import React from "react";

function FeedHeader() {
  return (
    <Paper bgcolor="#fff" sx={{ display: "flex", flexDirection: "column" }}>
      <Box display="flex" m={2}>
        <Avatar></Avatar>
        <Button
          variant="outlined"
          fullWidth
          sx={{ ml: 2, borderRadius: "25px" }}
        >
          Start a post
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItem: "center",
          justifyContent: "space-between",
          p: 1,
        }}
      >
        <Button m={2} startIcon={<InsertPhotoIcon size="large" />}>
          Photo
        </Button>
        <Button
          m={2}
          startIcon={<OndemandVideoIcon color="success" size="large" />}
        >
          Video
        </Button>
        <Button m={2} startIcon={<EventIcon size="large" color="warning" />}>
          Audio event
        </Button>
        <Button m={2} startIcon={<NewspaperIcon size="large" color="error" />}>
          Write article
        </Button>
      </Box>
    </Paper>
  );
}

export default FeedHeader;
