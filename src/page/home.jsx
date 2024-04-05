import React from 'react';
import { TypeAnimation } from 'react-type-animation'; // Correct import
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import Services from './services';
import About from './About';
import Project from './project';
import Contact from './contact';
import cv from '../asset/AhmedNaga.pdf';

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="home-content">
          {/* initial={{ x: '-100%', opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} */}
          <div>
            <TypeAnimation
              className="introduce-home"
              sequence={['I am a Full Stack Developer', 1000, 'I am a Front-End Developer', 1000, 'I am a Back-End Developer', 1000]}
              wrapper="span"
              speed={{ type: 'keyStrokeDelayInMs', value: 150 }}
              style={{
                fontSize: '3rem',
                display: 'inline-block',
                color: '#2eb2d3',
              }}
              repeat={Infinity}
            />
          </div>
          {/* initial={{ x: '-100%', opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 1 }} */}
          <p>
            Hello! I am Ahmed Naga, a software engineer. I love coding because it lets me build amazing solutions to make a difference in people
            lives. Whether it is creating websites, I am all about making useful and fun things!
          </p>
          {/* initial={{ x: '-100%', opacity: 0, rotate: 180 }}
            animate={{ x: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 2 }} */}
          <a className="custom-button" href={cv} download="Ahmed-Naga-cv">
            Download Resume
          </a>
          {/* initial={{ x: '50%', opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 2.5 }} */}
          <div>
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
        </div>
      </div>
      <Services />
      <About />
      <Project />
      <Contact />
    </>
  );
}
