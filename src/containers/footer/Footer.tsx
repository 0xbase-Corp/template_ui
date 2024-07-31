// Footer.tsx
import React from 'react';
import { Box, Grid, Typography, TextField, Button, IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#004d40', color: 'white', padding: '2rem 1rem' }}>
      <Grid container spacing={3} justifyContent="space-between">
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>
            <img src="/logo.png" alt="Logo" style={{ maxWidth: '100%' }} />
          </Typography>
          <Typography variant="body2">
            Faucibus mi proin amet elit. Cras tellus fames egestas sed laoreet euismod fermentum bibendum id.
          </Typography>
          <Button variant="contained" sx={{ mt: 2, backgroundColor: '#00796b', color: 'white' }}>
            Contact Us
          </Button>
          <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
            <IconButton href="#" sx={{ color: 'white' }}>
              <TwitterIcon />
            </IconButton>
            <IconButton href="#" sx={{ color: 'white' }}>
              <LinkedInIcon />
            </IconButton>
            <IconButton href="#" sx={{ color: 'white' }}>
              <FacebookIcon />
            </IconButton>
            <IconButton href="#" sx={{ color: 'white' }}>
              <InstagramIcon />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12} md={2}>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <Typography variant="body2">Home</Typography>
          <Typography variant="body2">About Us</Typography>
          <Typography variant="body2">Portfolio</Typography>
          <Typography variant="body2">Our Team</Typography>
        </Grid>
        <Grid item xs={12} md={2}>
          <Typography variant="h6" gutterBottom>
            Portfolio
          </Typography>
          <Typography variant="body2">Folionomics</Typography>
          <Typography variant="body2">Folionomics</Typography>
          <Typography variant="body2">Folionomics</Typography>
          <Typography variant="body2">Folionomics</Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>
            Newsletter
          </Typography>
          <Typography variant="body2">
            Sign up to our newsletter to get the latest news & updates
          </Typography>
          <Box sx={{ mt: 2 }}>
            <TextField
              label="Enter Your Email"
              variant="outlined"
              size="small"
              sx={{ backgroundColor: 'white', borderRadius: 1, width: '100%' }}
            />
            <Button
              variant="outlined"
              sx={{
                mt: 1,
                backgroundColor: 'transparent',
                borderColor: 'white',
                color: 'white',
                width: '100%',
                '&:hover': {
                  backgroundColor: '#00796b',
                  borderColor: '#00796b',
                },
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="body2">
          © 2024 Oxbase. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
