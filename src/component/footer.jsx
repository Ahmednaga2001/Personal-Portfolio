import React from 'react';
import Container from '@mui/material/Container';
import { Grid, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <div className="footer">
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={4}>
            <Typography variant="h4" component="h4" color="var(--text-color)">
              Ahmed Naga
            </Typography>
            <div className="private-links">
              <a href="https://github.com/Ahmednaga2001" className="private-link">
                <GitHubIcon className="github-icon" />
              </a>
              <a href="https://www.linkedin.com/in/ahmed-naga-066ab11aa" className="private-link">
                <LinkedInIcon className="linkedin-icon" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100012919321638" className="private-link">
                <FacebookIcon className="facebook-icon" />
              </a>
            </div>
          </Grid>
          <Grid className="footer-links" item xs={12} md={12} lg={4}>
            <p>
              <ChevronRightIcon className="footer-links-icon" />
              <Link to="/">Home</Link>
            </p>
            <p>
              <ChevronRightIcon className="footer-links-icon" />
              <Link to="/project">Portofolio</Link>
            </p>
            <p>
              <ChevronRightIcon className="footer-links-icon" />
              <Link to="/about">About Me</Link>
            </p>
            <p>
              <ChevronRightIcon className="footer-links-icon" />
              <Link to="/contact">Contact</Link>
            </p>
          </Grid>
          <Grid item className="footer-info" xs={12} md={12} lg={4}>
            <p>
              <LocationOnIcon className="footer-info-icon" />
              Egypt, Mansoura
            </p>
            <p>
              <ContactMailIcon className="footer-info-icon" />
              ahmed.naga.mohamed@gmail.com
            </p>
            <p>
              <PhoneAndroidIcon className="footer-info-icon" />
              +201009243320
            </p>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
