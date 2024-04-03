import React from 'react';
import Container from '@mui/material/Container';
import { Typography, Grid } from '@mui/material';

export default function Contact() {
  return (
    <div className="contact">
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ fontWeight: 'bold', textAlign: 'center' }} component="h3" color="var(--text-color)">
          Contatct <span style={{ color: '#2eb2d3' }}>Me!</span>
        </Typography>
        <form action="#">
          <Grid container spacing={2} mt={4}>
            <Grid item xs={12} md={6} lg={6}>
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="Email Address" />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <input type="text" placeholder="Mobile Number" />
              <input type="text" placeholder="Email Subject" />
            </Grid>
            <Grid item xs={12}>
              <textarea name="Your Message" id=""></textarea>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
}
