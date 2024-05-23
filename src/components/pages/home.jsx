import React from 'react';
import { Typography, Button, Grid, Box, Stack, Divider, Stepper, Step, StepLabel, StepContent } from '@mui/material';
import HeroSection from '../hero';
import ActionAreaCard from '../surfaces/card';
import BrandSection from './brandSection';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const steps = [
    {
      label: 'Sign Up and Create Profile',
      description: 'Join our community by signing up and creating your profile. Showcase your skills and connect with others.',
    },
    {
      label: 'Find and Apply for Opportunities',
      description: 'Browse through available opportunities and apply for the ones that match your skills and interests.',
    },
    {
      label: 'Collaborate and Grow',
      description: 'Work with innovative companies, gain experience, and grow your network and portfolio.',
    },
  ];

  const cardContent = [
    {
      image: '/src/assets/images/card-1.jpg',
      title: 'Exclusive Collaboration Opportunities',
      description: 'Discover unique opportunities to work with top brands and companies.',
      link: '#',
    },
    {
      image: '/src/assets/images/card-2.jpg',
      title: 'Networking with Industry Leaders',
      description: 'Connect with leaders and experts in your industry to grow your network.',
      link: '#',
    },
    {
      image: '/src/assets/images/card-3.jpg',
      title: 'Resources and Support',
      description: 'Access a wealth of resources and support to help you succeed in your field of interest.',
      link: '#',
    },
    {
      image: '/src/assets/images/card-4.jpg',
      title: 'Boost Your Portfolio',
      description: 'Build a strong portfolio by working on diverse and high-impact projects.',
      link: '#',
    },
    {
      image: '/src/assets/images/card-5.jpg',
      title: 'Gain Exposure',
      description: 'Increase your visibility and reach by collaborating with renowned companies.',
      link: '#',
    }
  ];

  const brandContent = [
    {
      image: '/src/assets/images/card-2-1.jpg', // Replace with your image URL
      title: 'Access to Diverse Creatives',
      description: 'Tap into a pool of diverse and talented creators to bring fresh perspectives to your brand.',
      link: '#',
    },
    {
      image: '/src/assets/images/card-2-2.jpg', // Replace with your image URL
      title: 'Enhanced Brand Visibility',
      description: 'Increase brand visibility by collaborating with influencers and content creators with large followings.',
      link: '#',
    },
    {
      image: '/src/assets/images/card-2-3.jpg', // Replace with your image URL
      title: 'Tailored Creator Matches',
      description: 'Find the perfect match for your brand with our advanced matching algorithm that considers your specific needs and goals.',
      link: '#',
    },
    {
      image: '/src/assets/images/card-2-4.avif', // Replace with your image URL
      title: 'Streamlined Collaboration Process',
      description: 'Effortlessly manage collaborations from start to finish with our intuitive platform and communication tools.',
      link: '#',
    },
  ];

  const brandList = [
    {
      "name": "Tata Group",
      "industry": "Conglomerate",
      "hq_location": "Mumbai, Maharashtra",
      "founded": 1868,
      "image": "/src/assets/images/tata.png"
    },
    {
      "name": "Reliance Industries",
      "industry": "Conglomerate",
      "hq_location": "Mumbai, Maharashtra",
      "founded": 1966,
      "image": "/src/assets/images/realince.png"
    },
    {
      "name": "Infosys",
      "industry": "Information Technology",
      "hq_location": "Bangalore, Karnataka",
      "founded": 1981,
      "image": "/src/assets/images/infosys.png"
    },
    {
      "name": "Wipro",
      "industry": "Information Technology",
      "hq_location": "Bangalore, Karnataka",
      "founded": 1945,
      "image": "/src/assets/images/wipro.png"
    },
    {
      "name": "HDFC Bank",
      "industry": "Banking",
      "hq_location": "Mumbai, Maharashtra",
      "founded": 1994,
      "image": "/src/assets/images/hdfc.png"
    },
    {
      "name": "ICICI Bank",
      "industry": "Banking",
      "hq_location": "Mumbai, Maharashtra",
      "founded": 1994,
      "image": "/src/assets/images/icici.png"
    },
    {
      "name": "State Bank of India",
      "industry": "Banking",
      "hq_location": "Mumbai, Maharashtra",
      "founded": 1806,
      "image": "/src/assets/images/sbi.png"
    },
    {
      "name": "Mahindra Group",
      "industry": "Conglomerate",
      "hq_location": "Mumbai, Maharashtra",
      "founded": 1945,
      "image": "/src/assets/images/mahindra.jpg"
    },
    {
      "name": "Bajaj Auto",
      "industry": "Automobiles",
      "hq_location": "Pune, Maharashtra",
      "founded": 1945,
      "image": "/src/assets/images/bajaj.jpg"
    },
    {
      "name": "Amul",
      "industry": "Dairy",
      "hq_location": "Anand, Gujarat",
      "founded": 1946,
      "image": "/src/assets/images/amul.png"
    }
  ]
  

  return (
    <Stack direction="column">
      <Stack container direction="row" gap={10} alignItems="center" padding={10}>
        <Grid item alignContent="center">
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Localink
          </Typography>
          <Typography variant="h5" paragraph>
            At Localink, we bridge the gap between talented creators and innovative companies, fostering collaborations that drive creativity and growth.
          </Typography>
          <br />
          <Link to={"/register"}>
            <Button variant="contained" color="success">
              Sign Up Today
            </Button>
          </Link>
        </Grid>
        <Grid item width={400}>
          <img
            src="/src/assets/images/infu.png" // Replace with your image URL
            alt="Influencer"
            style={{ width: '100%', height: 'auto' }}
          />
        </Grid>
      </Stack>
      <Divider />
      <Box padding={10}>
        <Typography variant="h4" component="h2" gutterBottom>
          How It Works
        </Typography>
        <Box py={2}>
          <Stepper orientation="horizontal">
            {steps.map((step, index) => (
              <Step key={index} active>
                <StepLabel>{step.label}</StepLabel>
                <StepContent>
                  <Typography>{step.description}</Typography>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Box>
      <HeroSection />
      <Box padding={10}>
            <Typography variant="h4" component="h2" gutterBottom>
              How Localink help Creators?
            </Typography>
            <Grid container gap={4} py={3} direction="column" sx={{ overflow: 'auto', maxHeight: '400px' }} className="hidden-scrolling-bar">
              {
                cardContent.map((data, i)=>{
                  return <ActionAreaCard title={data.title} content={data.description} image_url={data.image} />
                })
              }
            </Grid>
      </Box>
      <Divider />
      <Box padding={10} bgcolor="whitesmoke">
        <Typography variant="h4" component="h2" gutterBottom marginBottom={3}>
          Brands
        </Typography>
        <BrandSection brands={brandList} />
      </Box>
      <Divider />
      <Box padding={10}>
            <Typography variant="h4" component="h2" gutterBottom>
              How Localink help Brands?
            </Typography>
            <Grid container gap={4} py={3} direction="column" sx={{ overflow: 'auto', maxHeight: '400px' }} className="hidden-scrolling-bar">
              {
                brandContent.map((data, i)=>{
                  return <ActionAreaCard title={data.title} content={data.description} image_url={data.image} />
                })
              }
            </Grid>
      </Box>
    </Stack>
  );
};

export default HomePage;