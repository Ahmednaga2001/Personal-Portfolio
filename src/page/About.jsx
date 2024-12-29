import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref);

  const parentVariants = {
    visible: { opacity: 1, transition: { staggerChildren: 0.7, when: 'beforeChildren' } },
    hidden: { opacity: 0 },
  };

  const childVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <div className="about" ref={ref}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ fontWeight: 'bold', textAlign: 'center' }} component="h3" color="var(--text-color)">
          More <span style={{ color: '#2eb2d3' }}>About</span> Me
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={6}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', pt: '50px' }} component="h4" color="var(--text-color)">
              My <span style={{ color: '#2eb2d3' }}>Education</span>
            </Typography>
            <Typography variant="h5" sx={{ mt: '15px' }} component="h5" color="var(--text-color)">
              Bachelor&apos;s Degree in <span style={{ color: '#2eb2d3' }}>Computer Science</span>
            </Typography>
            <Typography variant="h5" sx={{ mt: '15px' }} component="h5" color="var(--text-color)">
              Faculty <span style={{ color: '#2eb2d3' }}>Computers and Information Science</span>
            </Typography>
            <Typography variant="h5" sx={{ mt: '15px' }} component="h5" color="var(--text-color)">
              Grade <span style={{ color: '#2eb2d3' }}>Very Good</span>
            </Typography>
            <Typography variant="h5" sx={{ mt: '15px' }} component="h5" color="var(--text-color)">
              University <span style={{ color: '#2eb2d3' }}>Mansoura</span>
            </Typography>
            <Typography variant="h5" sx={{ mt: '15px' }} component="h5" color="var(--text-color)">
              Date <span style={{ color: '#2eb2d3' }}>2019 - 2023</span>
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', pt: '50px' }} color="var(--text-color)">
              My <span style={{ color: '#2eb2d3' }}>Skills</span>
            </Typography>
            {/* parentVariants */}
            <motion.div animate={inView ? 'visible' : 'hidden'} variants={parentVariants}>
              {/* Programming Languages */}
              <motion.div variants={childVariants}>
                <Typography
                  variant="h5"
                  sx={{
                    mt: '15px',
                    boxShadow: 'var(--text-color) 0px 5px 10px;',
                    padding: '10px',
                  }}
                  color="var(--text-color)"
                >
                  Programming Languages <span style={{ color: '#2eb2d3' }}>JavaScript,C#</span>
                </Typography>
              </motion.div>
              {/* Programming Languages */}
              {/* Front-end */}
              <motion.div variants={childVariants}>
                <Typography
                  variant="h5"
                  sx={{
                    mt: '15px',
                    boxShadow: 'var(--text-color) 0px 5px 10px;',
                    padding: '10px',
                  }}
                  color="var(--text-color)"
                >
                  Front-end Technologies <span style={{ color: '#2eb2d3' }}>React.js, Next.js , Redux, HTML5, CSS3, Bootstrap , Tailwind CSS</span>
                </Typography>
              </motion.div>
              {/* Front-end/}
          {/* Back-end*/}
              <motion.div variants={childVariants}>
                <Typography
                  variant="h5"
                  sx={{
                    mt: '15px',
                    boxShadow: 'var(--text-color) 0px 5px 10px;',
                    padding: '10px',
                  }}
                  color="var(--text-color)"
                >
                  Back-end Technologies <span style={{ color: '#2eb2d3' }}>Node.js , Express.js</span>
                </Typography>
              </motion.div>
              {/* Back-end*/}
              {/* Database */}
              <motion.div variants={childVariants}>
                <Typography
                  variant="h5"
                  sx={{
                    mt: '15px',
                    boxShadow: 'var(--text-color) 0px 5px 10px;',
                    padding: '10px',
                  }}
                  color="var(--text-color)"
                >
                  Database <span style={{ color: '#2eb2d3' }}>MongoDB</span>
                </Typography>
              </motion.div>
              {/* Database */}
              {/* version control */}
              <motion.div variants={childVariants}>
                <Typography
                  variant="h5"
                  sx={{
                    mt: '15px',
                    boxShadow: 'var(--text-color) 0px 5px 10px;',
                    padding: '10px',
                  }}
                  color="var(--text-color)"
                >
                  Version Control <span style={{ color: '#2eb2d3' }}>Git , GitHub</span>
                </Typography>
              </motion.div>
              {/* version control */}
            </motion.div>
            {/* parentVariants */}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
