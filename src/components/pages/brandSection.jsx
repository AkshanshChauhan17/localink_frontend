// BrandSection.js
import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';

const BrandSection = ({ brands }) => {

  return (
    <Grid container spacing={2}>
      {brands.map((brand, index) => (
        <Grid item xs={12} sm={2} md={4} key={index}>
          <Card style={{minWidth:300, alignItems: "center", display: "flex"}}>
            <CardMedia
              style={{width: 150, height: 100, objectFit: "contain", backgroundSize: "80px"}}
              image={brand.image}
              title={brand.name}
            />
            <CardContent>
              <Typography variant="h6" component="h2">
                {brand.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Industry: {brand.industry}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                HQ Location: {brand.hq_location}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Founded: {brand.founded}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default BrandSection;