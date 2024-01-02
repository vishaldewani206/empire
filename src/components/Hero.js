import React from 'react';
import './Hero.css';
import hero from '../assets/hero.jpg';
import logo from '../assets/logo-secondary.png';
import { animate, delay, motion } from 'framer-motion';
function Hero() {
  const buttonVariants = {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.5,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 1,
      },
    },

    hover: { scale: 1.1, rotate: '3deg' },
  };
  return (
    <div
      className='hero'
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${hero})`,
      }}
    >
      <motion.img
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        src={logo}
        alt='logo'
        className='heroLogo'
      />
      <motion.button
        variants={buttonVariants}
        initial='initial'
        animate='animate'
        // transition={{ duration: 0.7, delay: 0.6 }}
        className='shopNow'
        // onHoverStart={{ delay: 0 }}
        whileHover='hover'
      >
        Shop Now
      </motion.button>
    </div>
  );
}

export default Hero;
