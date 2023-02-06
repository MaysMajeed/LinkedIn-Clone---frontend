import {
  Avatar,
  Box,
  Button,
  Paper,
  Modal,
  Typography,
  Divider,
  TextField,
  IconButton,
  Fab,
} from "@mui/material";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import EventIcon from "@mui/icons-material/Event";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import ImageIcon from "@mui/icons-material/Image";
import YouTubeIcon from "@mui/icons-material/YouTube";
import DescriptionIcon from "@mui/icons-material/Description";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import React, { useState } from "react";

const style = {
  position: "absolute",
  top: 310,
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  color: "rgba(0,0,0,0.7)",
};

function FeedHeader({ user }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [postText, setPostText] = useState("");
  const [uploadImg, setUploadImg] = useState("");
  const [uploadVideo, setUploadVideo] = useState("");
  const [uploadDocs, setUploadDocs] = useState("");
  const handlePostSubmitting = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("text", postText);
    if (uploadImg) {
      formData.append("documents", uploadImg);
    } else if (uploadVideo) {
      formData.append("documents", uploadVideo);
    } else if (uploadDocs) {
      formData.append("documents", uploadDocs);
    }

    console.log(uploadImg, uploadVideo, uploadDocs);

    try {
      await fetch("https://saif780.pythonanywhere.com/api/posts/", {
        method: "POST",
        body: formData,
        headers: {
          //"Content-Type": "multipart/form-data",
          Authorization: "Bearer " + user,
        },
      })
        .then((response) => {
          response.json();
          if (response.status === 201) {
            window.location.replace("/home");
          }
        })
        .then((data) => {});
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Paper bgcolor="#fff" sx={{ display: "flex", flexDirection: "column" }}>
      <Box display="flex" m={2}>
        <Avatar></Avatar>
        <Button
          variant="outlined"
          fullWidth
          sx={{
            ml: 2,
            borderRadius: "25px",
            borderColor: "gray",
            textTransform: "none",
          }}
          onClick={handleOpen}
        >
          Start a post
        </Button>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h5"
            sx={{ fontWeight: "100" }}
          >
            Create a post
          </Typography>
          <Divider sx={{ mb: 2, mt: 2 }} />
          <Box
            sx={{
              display: "flex",
              alignItem: "center",
              justifyContent: "flex-start",
              m: 2,
            }}
          >
            <Avatar></Avatar>
            <Typography sx={{ ml: 1, mt: 1 }}>Mays Mahdi PMP®</Typography>
          </Box>
          <TextField
            placeholder="What do you want to talk about?"
            multiline
            rows={4}
            sx={{ width: "100%" }}
            value={postText}
            onChange={(e) => setPostText(e.currentTarget.value)}
          />
          {uploadImg && (
            <Box
              sx={{
                overflow: "hidden",
                m: 2,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={URL.createObjectURL(uploadImg)}
                alt="avatar"
                height="150"
              />
            </Box>
          )}
          {uploadVideo && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                m: 1,
              }}
            >
              <video width={400} height={200} controls>
                <source
                  src={URL.createObjectURL(uploadVideo)}
                  type="video/mp4"
                />
              </video>
            </Box>
          )}

          {uploadDocs && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <video width={400} height={300} controls>
                <source
                  src={URL.createObjectURL(uploadDocs)}
                  type="video/mp4"
                />
              </video>
            </Box>
          )}

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 5,
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box m={1}>
                <label htmlFor="uploadImg">
                  <input
                    style={{ display: "none" }}
                    id="uploadImg"
                    name="uploadImg"
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) => setUploadImg(e.target.files[0])}
                  />
                  <Fab
                    size="small"
                    component="span"
                    aria-label="add"
                    variant="extended"
                  >
                    <ImageIcon />
                  </Fab>
                </label>
              </Box>
              <Box m={1}>
                <label htmlFor="uploadVideo">
                  <input
                    style={{ display: "none" }}
                    id="uploadVideo"
                    name="uploadVideo"
                    type="file"
                    accept="video/*"
                    onChange={(e) => setUploadVideo(e.target.files[0])}
                  />
                  <Fab
                    size="small"
                    component="span"
                    aria-label="add"
                    variant="extended"
                  >
                    <YouTubeIcon />
                  </Fab>
                </label>
              </Box>
              <Box m={1}>
                <label htmlFor="uploadDocs">
                  <input
                    style={{ display: "none" }}
                    id="uploadDocs"
                    name="uploadDocs"
                    type="file"
                    accept=".xlsx,.xls,.doc,.docx,.ppt, .pptx,.txt,.pdf"
                    onChange={(e) => setUploadDocs(e.target.files[0])}
                  />
                  <Fab
                    size="small"
                    component="span"
                    aria-label="add"
                    variant="extended"
                  >
                    <DescriptionIcon />
                  </Fab>
                </label>
              </Box>

              <IconButton m={1}>
                <MoreHorizIcon />
              </IconButton>
            </Box>
            <Button
              variant="contained"
              disabled={postText.length === 0 || uploadImg === 0}
              size="small"
              sx={{ borderRadius: "15px", height: 35 }}
              onClick={handlePostSubmitting}
            >
              Post
            </Button>
          </Box>
        </Box>
      </Modal>

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
