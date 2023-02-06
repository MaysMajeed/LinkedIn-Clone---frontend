import { Box, Divider } from "@mui/material";
import React from "react";
import AllPosts from "./AllPosts";
import FeedHeader from "./FeedHeader";

function Feed({ user }) {
  return (
    <Box
      flex={3}
      sx={{ mr: "2vw", ml: "2vw", minWidth: "450px", maxWidth: "600px" }}
    >
      <FeedHeader user={user} />
      <Divider sx={{ mt: "2vw", mb: "2vw" }} />
      <AllPosts />
    </Box>
  );
}

export default Feed;
