import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import React from "react";

function Step4SignUp({ setStep, formData, setFormData }) {
  const handleSubmitStep4 = (e) => {
    e.preventDefault();
    setStep((currentStep) => currentStep + 1);
    const signUpUpdate = {
      country: formData.countryRegion,
      city: formData.cityDistrict,
      job_title: formData.JT,
    };
    const token = localStorage.getItem("accessToken");
    if (token) {
      try {
        fetch("http://172.18.223.248:8070/api/auth/users/me/", {
          method: "PUT",
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json;charset=UTF-8",
          },
          body: JSON.stringify(signUpUpdate),
        })
          .then((response) => response.json())
          .then((data) => console.log(data));
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("there is no valid token!");
    }
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
            fontSize: { xs: "20px", lg: "25px", xl: "30px" },
          }}
          variant="h4"
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
              required
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
            <FormControlLabel
              sx={{ mt: 4 }}
              control={<Checkbox />}
              label="Iam a student"
            />
          </Box>
          <Button
            variant="contained"
            sx={{
              borderRadius: "30px",
              mt: 7,
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
