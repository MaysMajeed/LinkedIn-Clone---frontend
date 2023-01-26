import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import TextsmsIcon from "@mui/icons-material/Textsms";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import SendIcon from "@mui/icons-material/Send";

import React from "react";

function SinglePost() {
  return (
    <Card sx={{ mb: 2 }}>
      <Link href="#" sx={{ textDecoration: "none" }}>
        <CardHeader
          avatar={<Avatar aria-label="LinkedIn User">R</Avatar>}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Doaa Abd alkrim"
          subheader="Senior human resources specialist"
        />
      </Link>
      {process.env.PUBLIC_URL + "/undraw_pancakes_238t.svg" && (
        <CardMedia
          sx={{
            height: "50vh",
            mt: 5,
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
          title="avatar"
          image={process.env.PUBLIC_URL + "/undraw_pancakes_238t.svg"}
        />
      )}

      <CardContent>
        <Typography variant="body2" color="text.secondary" mt={2}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>

      <CardActions
        sx={{
          display: "flex",
          mt: 5,
          pb: 1,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Button startIcon={<ThumbUpOffAltIcon />} size="small">
          Like
        </Button>
        <Button startIcon={<TextsmsIcon />} size="small">
          Comment
        </Button>
        <Button startIcon={<PublishedWithChangesIcon />} size="small">
          Repost
        </Button>
        <Button startIcon={<SendIcon />} size="small">
          Send
        </Button>
      </CardActions>
    </Card>
  );
}

export default SinglePost;
