import { Google } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";

function Step1SignUp({ setStep, formData, setFormData }) {
  const handleSubmitStep1 = (e) => {
    e.preventDefault();
    setStep((currentStep) => currentStep + 1);
  };
  return (
    <form onSubmit={handleSubmitStep1}>
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
          variant="p"
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
              label="Email"
              variant="outlined"
              size="small"
              required
              sx={{
                width: { xs: "87vw", sm: "57vw", md: "47vw", lg: "27vw" },
                mt: "2vw",
              }}
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.currentTarget.value })
              }
            ></TextField>
            <TextField
              id="signUpPasswordInput"
              label="Password"
              variant="outlined"
              size="small"
              required
              sx={{
                width: { xs: "87vw", sm: "57vw", md: "47vw", lg: "27vw" },
                mt: "2vw",
                mb: "2vw",
              }}
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.currentTarget.value })
              }
            ></TextField>
          </Box>
          <Typography
            sx={{
              m: "20px",
              color: "rgba(0,0,0,0.7)",
              fontSize: "12px",
            }}
          >
            By clicking Agree & Join, you agree to the LinkedIn{" "}
            <Link>User Agreement</Link>, <Link>Privacy Policy</Link> ,{" "}
            <Link>and Cookie Policy</Link>.
          </Typography>
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
            Agree & Join
          </Button>
          <Divider sx={{ width: "27vw" }}>Or</Divider>
          <Button
            variant="outlined"
            sx={{
              borderRadius: "30px",
              m: 2,
              size: "small",
              width: { xs: "85vw", sm: "55vw", md: "45vw", lg: "25vw" },
            }}
            startIcon={<Google />}
          >
            Sign up with Google
          </Button>
          Already on LinkedIn?<Link to="/login">Sign in</Link>
        </Stack>
      </Box>
    </form>
  );
}

export default Step1SignUp;
