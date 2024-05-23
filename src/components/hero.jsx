// src/HeroSection.js
import React from 'react';
import { Container, Typography, Button, Box} from '@mui/material';


const HeroSection = () => {
  return (
    <Box alignContent="center" justifyItems="center" textAlign="center" style={{
        backgroundImage: "url(/src/assets/images/background.png)",
        backgroundSize: "cover",
        height: "80vh"
      }}>
      <Box>
        <Typography variant="h2" component="h1" gutterBottom color="white">
            Connect with Localink
        </Typography>
        <Typography variant="h5" paragraph color="whitesmoke">
        Empowering creators and businesses to collaborate, innovate, and grow together 
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Get Started
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;