import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";

function Step4SignUp({ setStep, formData, setFormData }) {
  const handleSubmitStep4 = (e) => {
    e.preventDefault();
    console.log(formData);
    setStep((currentStep) => currentStep + 1);
  };
  return (
    <form onSubmit={handleSubmitStep4}>
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
            fontSize: { xs: "5px", lg: "10px", xl: "20px" },
          }}
          variant="p"
        >
          Your profile helps you dicover new people and opertunities
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
              id="signUpJTInput"
              label="Most recent job title"
              variant="outlined"
              size="small"
              sx={{
                width: { xs: "87vw", sm: "57vw", md: "47vw", lg: "27vw" },
                mt: "2vw",
              }}
              value={formData.JT}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  JT: e.currentTarget.value,
                })
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

export default Step4SignUp;
