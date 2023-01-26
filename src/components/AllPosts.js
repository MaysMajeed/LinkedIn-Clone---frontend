import { Box } from "@mui/material";
import React from "react";
import SinglePost from "./SinglePost";

function AllPosts() {
  return (
    <Box>
      <SinglePost />
      <SinglePost />
      <SinglePost />
    </Box>
  );
}

export default AllPosts;
