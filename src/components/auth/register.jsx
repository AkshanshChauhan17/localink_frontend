import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Grid, Stack, TextField } from '@mui/material';

export default function RegisterForm() {
  const theme = useTheme();
  const [imageSrc, setImageSrc] = React.useState('');
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mobileNumber, setMobileNumber] = React.useState();
  const [password, setPass] = React.useState("");
  const [confPassword, setConfPass] = React.useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
              const img = new Image();
              img.src = event.target.result;
              img.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                canvas.width = 1000;
                canvas.height = 1000;
                ctx.drawImage(img, 0, 0, 1000, 1000);
                const compressedImageSrc = canvas.toDataURL('image/jpeg', 0.8);
                setImageSrc(compressedImageSrc);
              };
            };
            reader.readAsDataURL(file);
          }
    }
  };

  const steps = [
    {
      label: 'Basic Details',
      input: <Stack gap={2}>
          <TextField
              fullWidth
              label="Name"
              type="text"
              autoComplete="current-password"
              value={name}
              onChange={(e)=>setName(e.target.value)}
          />
          <TextField
              fullWidth
              label="Email"
              type="email"
              autoComplete="current-password"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
          />
          <TextField
              fullWidth
              label="Mobile Number"
              type="tel"
              autoComplete="current-password"
              value={mobileNumber}
              onChange={(e)=>setMobileNumber(e.target.value)}
          />
      </Stack>
    },
    {
      label: 'Profile Image',
      input: <Stack gap={2}>
            {imageSrc && <img src={imageSrc} width={"100%"} style={{aspectRatio: 1}} /> }
            {!imageSrc && <TextField
                fullWidth
                type="file"
                autoComplete="current-password"
                onChange={handleFileChange}
            />}
      </Stack>
    },
    {
        label: 'Authentication Details',
        input: <Stack gap={2}>
            <TextField
              fullWidth
              label="Password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e)=>setPass(e.target.value)}
          />
          <TextField
                helperText={(confPassword!==password & confPassword!=="") ? "Password not matched" : ""}
                error={confPassword!==password & confPassword!==""}
              fullWidth
              label="Confirm Password"
              type="password"
              autoComplete="current-password"
              value={confPassword}
              onChange={(e)=>setConfPass(e.target.value)}
          />
        </Stack>
      }
  ];

  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Stack padding={10} alignItems="center" justifyContent="center" gap={20} direction="column" sx={{maxWidth: 2000, height: "100%"}}>
        <Box sx={{ minWidth: 500, maxWidth: 500, flexGrow: 1 }}>
        <Paper
            square
            elevation={0}
            sx={{
            display: 'flex',
            alignItems: 'center',
            height: 50,
            pl: 2,
            bgcolor: 'background.default',
            }}
        >
            <Typography variant="h5" component="h3">{steps[activeStep].label}</Typography>
        </Paper>
        <Box sx={{maxWidth: 470, width: '100%', p: 2 }}>
            {steps[activeStep].input}
        </Box>
        <MobileStepper
            variant="text"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
            <Button
                size="large"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
            >
                Next
                {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
                ) : (
                <KeyboardArrowRight />
                )}
            </Button>
            }
            backButton={
            <Button size="large" onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
                ) : (
                <KeyboardArrowLeft />
                )}
                Back
            </Button>
            }
        />
        </Box>
        <Button sx={{width: 500, padding: 2}} variant="contained" size="large" disabled={activeStep<=1}>
            SignUp
        </Button>
    </Stack>
  );
}