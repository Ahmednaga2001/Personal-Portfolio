import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { motion } from 'framer-motion';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

export default function Services() {
  return (
    <div className="services">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={6}>
            <Typography variant="h2" sx={{ fontWeight: 'bold' }} component="h2" color="var(--text-color)">
              My <span style={{ color: '#2eb2d3' }}>services</span>
            </Typography>
            <Typography variant="body1" color="var(--text-color)" sx={{ pt: '25px', lineHeight: '25px' }}>
              Experienced Frontend and Backend Developer Ready for Exciting Projects.
              <br />
              I write clean and efficient code, and I thrive on collaborative problem-solving.
              <br />
              Specializing in developing 100% responsive websites across all devices – desktops, tablets, and mobile phones – I focus on creating
              user-friendly web interfaces using React.js and robust backend solutions using Node.js, and Express.js.
              <br />
              If you are looking to bring your website vision to life with a dedicated developer who prioritizes quality and client satisfaction, let
              is discuss your project requirements. I am here to help you achieve your goals efficiently and effectively.
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={6}>
                <motion.div className="box" initial={{ y: '-30%' }} whileInView={{ y: 0 }} transition={{ duration: 1.3 }}>
                  <ApartmentIcon className="service-icon" />
                  <h3>Frontend Develop</h3>
                  <p>
                    I focus on creating engaging and user-friendly websites, using the newest tools and design ideas to make digital dreams a reality.
                  </p>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={6} lg={6} className="custom-grid" mt={2}>
                <motion.div className="box" initial={{ y: '-30%' }} whileInView={{ y: 0 }} transition={{ duration: 1.3 }}>
                  <ApartmentIcon className="service-icon" />
                  <h3>Backend Develop</h3>
                  <p>
                    I specialize in building robust and efficient backend systems, utilizing cutting-edge technologies and best practices to power
                    seamless digital experiences.
                  </p>
                </motion.div>{' '}
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <motion.div className="box" initial={{ y: '30%' }} whileInView={{ y: 0 }} transition={{ duration: 1.3 }}>
                  <ApartmentIcon className="service-icon" />
                  <h3>UI/UX Design</h3>
                  <p>
                    create easy-to-use and attractive designs for websites and apps, making sure users can move around smoothly and enjoy their time
                    online.
                  </p>
                </motion.div>{' '}
              </Grid>
              <Grid item xs={12} md={6} lg={6} className="custom-grid" mt={2}>
                <motion.div className="box" initial={{ y: '30%' }} whileInView={{ y: 0 }} transition={{ duration: 1.3 }}>
                  <ApartmentIcon className="service-icon" />
                  <h3>Project Management</h3>
                  <p>I excel in managing projects from start to finish, ensuring smooth communication and timely delivery of high-quality results.</p>
                </motion.div>{' '}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
