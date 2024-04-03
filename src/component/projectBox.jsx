import { Grid } from '@mui/material';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// eslint-disable-next-line react/prop-types
export default function ProjectBox({ name, image, gitHub, liveDemo,index }) {
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
      <Grid className="grid" item xs={12} md={6} lg={4} ref={ref}>
        <motion.div variants={projVariant} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={childVariant} className="grid-parent">
            <div className="box">
              <img src={image} alt={name} />
              <h4>{name}</h4>
            </div>
            <div className="box-overlay">
              <a href={gitHub}>Visit GitHub</a>
              <a href={liveDemo}>Live Demo</a>
            </div>
          </motion.div>
        </motion.div>
      </Grid>
    </>
  );
}
