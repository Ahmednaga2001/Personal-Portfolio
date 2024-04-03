import React, { useState } from 'react';
import Container from '@mui/material/Container';
import { Typography, Grid } from '@mui/material';
import ecommImage from '../asset/e-commerce.png';
import ProjectBox from '../component/projectBox';
import moviesImg from '../asset/movies.png';
import foodImg from '../asset/food.png';
import apiEcomm from '../asset/bac.jpg';
import bookeImg from '../asset/booke-tem.png';
import BlogImg from '../asset/blog.png';
import legacyImg from '../asset/legacy.png';
import portImg from '../asset/port.png';
function Project() {
  const [projectsInfo] = useState([
    {
      id: 1,
      name: 'Ecommerce-api',
      image: apiEcomm,
      gitHub: 'https://github.com/Ahmednaga2001/nodejs-ecommerce-api-v1',
      liveDemo : ''
    },
    {
      id: 2,
      name: 'Online Courses Academy-api',
      image: apiEcomm,
      gitHub: 'https://github.com/Ahmednaga2001/Online-Courses-Academy',
      liveDemo : ''

    },
    {
      id: 3,
      name: 'Blog Server',
      image: BlogImg,
      gitHub: 'https://github.com/Ahmednaga2001/BLOG-SERVER',
      liveDemo : ''

    },
    {
      id: 4,
      name: 'Ecommerce',
      image: ecommImage,
      gitHub: 'https://github.com/Ahmednaga2001/Shopping--Cart-Redux-Toolkit',
      liveDemo : 'https://ahmed-react-e-commerce.netlify.app/'

    },
    {
      id: 5,
      name: 'Movies App',
      image: moviesImg,
      gitHub: 'https://github.com/Ahmednaga2001/Movies-App',
      liveDemo : 'https://ahmed-movies-app-reactjs.netlify.app/'

    },
    {
      id: 6,
      name: 'Legacy-Logistics Website',
      image: legacyImg,
      gitHub: 'https://github.com/Ahmednaga2001/legacy-logistics',
      liveDemo : 'https://ahmednaga2001.github.io/legacy-logistics/'

    },
    {
      id: 7,
      name: 'Personal Portfolio',
      image: portImg,
      gitHub: 'https://github.com/Ahmednaga2001/Personal-Portfolio',
      liveDemo : 'https://main--naga-personal-portfolio.netlify.app/'

    },
    {
      id: 8,
      name: 'Food Template',
      image: foodImg,
      gitHub: 'https://github.com/Ahmednaga2001/Food',
      liveDemo : 'https://ahmednaga2001.github.io/Food/'

    },
    {
      id: 9,
      name: 'Book Template',
      image: bookeImg,
      gitHub: 'https://github.com/Ahmednaga2001/book-template',
      liveDemo : 'https://ahmednaga2001.github.io/book-template/'

    },
  ]);
  return (
    <div className="project">
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ fontWeight: 'bold', textAlign: 'center' }} component="h3" color="var(--text-color)">
          My <span style={{ color: '#2eb2d3' }}>Latest</span> Projects
        </Typography>
        <Grid container spacing={2} mt={4}>
          {projectsInfo.map((project, index) => (
            <ProjectBox key={project.id} index={index} name={project.name} image={project.image} gitHub={project.gitHub} liveDemo={project.liveDemo} />
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Project;
