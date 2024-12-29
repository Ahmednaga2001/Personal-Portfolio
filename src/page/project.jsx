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
import portImg from '../asset/port.png';
import fruitImg from '../asset/fruit.png';
import tcmgImg from '../asset/tcmg.png';

function Project() {
  const [selectedType, setSelectedType] = useState('');
  const [projectsInfo] = useState([
    {
      id: 1,
      name: 'Ecommerce-api',
      image: apiEcomm,
      gitHub: 'https://github.com/Ahmednaga2001/nodejs-ecommerce-api-v1',
      liveDemo: '',
      type: 'node',
      description: 'A backend API for an ecommerce platform built with Node.js and Express.'
    },
    {
      id: 2,
      name: 'Online Courses Academy-api',
      image: apiEcomm,
      gitHub: 'https://github.com/Ahmednaga2001/Online-Courses-Academy',
      liveDemo: '',
      description: 'A RESTful API for managing an online courses platform.',
      type : "node"
    },
    {
      id: 3,
      name: 'Blog Server',
      image: BlogImg,
      gitHub: 'https://github.com/Ahmednaga2001/BLOG-SERVER',
      liveDemo: '',
      type: 'node',
      description: 'A backend server for a blogging platform with authentication and CRUD operations.'
    },
    {
      id: 4,
      name: 'Ecommerce',
      image: ecommImage,
      gitHub: 'https://github.com/Ahmednaga2001/Shopping--Cart-Redux-Toolkit',
      liveDemo: 'https://ahmed-react-e-commerce.netlify.app/',
      type: 'react',
      description: 'A React-based ecommerce website that utilizes Redux Toolkit for state management.'
    },
    {
      id: 5,
      name: 'Movies App',
      image: moviesImg,
      gitHub: 'https://github.com/Ahmednaga2001/Movies-App',
      liveDemo: 'https://ahmed-movies-app-reactjs.netlify.app/',
      type: 'react',
      description: 'A React-based app that allows users to search and view movies from the TMDB API.'
    },
    {
      id: 6,
      name: 'Product Website',
      image: fruitImg,
      gitHub: 'https://github.com/Ahmednaga2001/Prducts-Project',
      liveDemo: 'https://ahmednaga2001.github.io/Fruit/',
      type: 'js',
      description: 'A simple logistics website built using HTML, CSS, and JavaScript.'
    },
    
    {
      id: 8,
      name: 'Food Template',
      image: foodImg,
      gitHub: 'https://github.com/Ahmednaga2001/Food',
      liveDemo: 'https://ahmednaga2001.github.io/Food/',
      type: 'html',
      description: 'A food-themed website template built with HTML and CSS.'
    },
    {
      id: 9,
      name: 'Book Template',
      image: bookeImg,
      gitHub: 'https://github.com/Ahmednaga2001/book-template',
      liveDemo: 'https://ahmednaga2001.github.io/book-template/',
      type: 'html',
      description: 'A book-themed website template built with HTML and CSS.'
    },
    {
      id : 10,
      name : "TCMG Webiste",
      image : tcmgImg,
      gitHub : "",
      liveDemo : "https://tcmg-law.vercel.app/",
      type : "react",
      description: "A professional law firm website for TCMG Law, built with NextJs. It features a modern design and showcases the firm's services, practice areas, and more."

    }
  ]);
  

  const handleFilter = (type) => {
    setSelectedType(type);
  };

  // Filter projects based on the selected type
  const filteredProjects = selectedType
    ? projectsInfo.filter((project) => project.type === selectedType)
    : projectsInfo;

  return (
    <div className="project">
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{ fontWeight: 'bold', textAlign: 'center' }}
          component="h3"
          color="var(--text-color)"
        >
          My <span style={{ color: '#2eb2d3' }}>Latest</span> Projects
        </Typography>
        <div className="tecContainer">
          <button onClick={() => handleFilter('html')}>HTML-CSS</button>
          <button onClick={() => handleFilter('js')}>HTML-CSS-JavaScript</button>
          <button onClick={() => handleFilter('react')}>ReactJs</button>
          <button onClick={() => handleFilter('node')}>NodeJs</button>
          <button onClick={() => handleFilter('')}>All</button>
        </div>
        <Grid container spacing={2} mt={4}>
          {filteredProjects.map((project, index) => (
            <ProjectBox
              key={project.id}
              index={index}
              name={project.name}
              image={project.image}
              gitHub={project.gitHub}
              liveDemo={project.liveDemo}
              desc = {project.description}
            />
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Project;
