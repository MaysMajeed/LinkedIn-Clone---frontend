import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";

function Step2SignUp({ setStep, formData, setFormData }) {
  const handleSubmitStep2 = (e) => {
    e.preventDefault();
    setStep((currentStep) => currentStep + 1);
  };
  return (
    <form onSubmit={handleSubmitStep2}>
      <Box
        sx={{
          height: "91vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.07)",
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
          Make the most of your professional life
        </Typography>
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextField
              id="signUpFirstNameInput"
              label="First Name"
              variant="outlined"
              size="small"
              required
              sx={{
                width: { xs: "87vw", sm: "57vw", md: "47vw", lg: "27vw" },
                mt: "2vw",
              }}
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.currentTarget.value })
              }
            ></TextField>
            <TextField
              id="signUpLastNameInput"
              label="Last Name"
              variant="outlined"
              size="small"
              required
              sx={{
                width: { xs: "87vw", sm: "57vw", md: "47vw", lg: "27vw" },
                mt: "2vw",
                mb: "2vw",
              }}
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.currentTarget.value })
              }
            ></TextField>
          </Box>
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
            Continue
          </Button>
        </Stack>
      </Box>
    </form>
  );
}

export default Step2SignUp;
