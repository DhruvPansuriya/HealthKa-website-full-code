// components/CurtainTransition.js
import { motion } from 'framer-motion';
import React from 'react';

const curtainVariants = {
  initial: {
    width: '0%',
    left: '50%',
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  animate: {
    width: ['0%', '50%', '50%', '0%'],
    left: ['50%', '0%', '50%'],
    transition: {
      duration: 1.5,
      times: [0, 0.25, 0.75, 1],
      ease: 'easeInOut',
    },
  },
};

const CurtainTransition = ({ isVisible }) => {
  return (
    <>
      <motion.div
        className="curtain curtain-left"
        variants={curtainVariants}
        initial="initial"
        animate={isVisible ? 'animate' : 'initial'}
      />
      <motion.div
        className="curtain curtain-right"
        variants={curtainVariants}
        initial="initial"
        animate={isVisible ? 'animate' : 'initial'}
      />
    </>
  );
};

export default CurtainTransition;
