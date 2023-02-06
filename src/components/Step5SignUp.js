import { Box, Button, Link, Stack, TextField, Typography } from "@mui/material";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import React from "react";

function Step5SignUp({ step, setStep, formData, setFormData }) {
  const handleSubmitStep5 = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmitStep5}>
      <Box
        sx={{
          height: "91vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0,0,0,0.07)",
        }}
      >
        <Stack
          sx={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
            width: { xs: "90vw", sm: "60vw", md: "50vw", lg: "30vw" },
            borderRadius: "10px",
            pt: "2vh",
            pb: "2vh",
          }}
        >
          <Typography
            sx={{
              pb: { xs: "7vw", lg: "3vw" },
              pt: { xs: "7vw", lg: "3vw" },
              fontSize: { xs: "20px", lg: "25px", xl: "30px" },
            }}
            variant="h4"
          >
            Confirm your email
          </Typography>
          <Typography variant="p" sx={{ Color: "rgba(0,0,0,0.07)", mb: 2 }}>
            Type in the code we sent to emailAddress.
          </Typography>
          <TextField
            id="verificationCodeInput"
            variant="outlined"
            size="small"
            type="number"
          ></TextField>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              m: 2,
              fontSize: 12,
            }}
          >
            <Typography sx={{ mr: 1 }}>Didn't receive the code?</Typography>
            <Link>sent again</Link>
          </Stack>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MarkEmailReadIcon color="success" />
            <Typography sx={{ color: "green", m: 1 }}>Email sent</Typography>
          </Stack>

          <Button
            variant="contained"
            sx={{
              borderRadius: "30px",
              m: 2,
              size: "small",
              width: { xs: "85vw", sm: "55vw", md: "45vw", lg: "25vw" },
            }}
            type="submit"
          >
            Agree & Confirm
          </Button>
        </Stack>
      </Box>
    </form>
  );
}

export default Step5SignUp;
