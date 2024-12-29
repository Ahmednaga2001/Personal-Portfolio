import { Grid } from '@mui/material';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub , FaLink } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
export default function ProjectBox({ name, image, gitHub, liveDemo,index , desc }) {
  
  const ref = useRef(null);
  const inView = useInView(ref);
  const projVariant = {
    hidden: {},
    visible: {
      transition: {
        when: 'beforeChildren',
        delayChildren: index * 0.1 + 1,
      },
    },
  };

  const childVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <Grid className="grid" item xs={12} sm={6} md={6} lg={4} ref={ref}>
        <motion.div variants={projVariant} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={childVariant} className="grid-parent">
            <div className="box">
              <img src={image} alt={name} />
              <h4>{name}</h4>
              <p>{desc}</p>
              <div className='icons'>
            {
              gitHub && (
                <a href={gitHub} target="_blank" >
                <FaGithub size={16} color="white" />
                GitHub
              </a>
              )
            }
          {liveDemo && (
            <a href={liveDemo} target="_blank">
              <FaLink size={16} color="white"/>
              Live Demo
            </a>
          )}
              </div>
            </div>
         
          </motion.div>
        </motion.div>
      </Grid>
    </>
  );
}
