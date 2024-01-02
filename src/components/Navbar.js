import React, { useState } from 'react';
import logoPrimary from '../assets/logo-primary.png';
import './Navbar.css';
import { motion } from 'framer-motion';
function Navbar({ apiUrl }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleHamburger() {
    setIsOpen((f) => !f);
  }
  function handleCategory(e) {
    if (isOpen) {
      setIsOpen((f) => !f);
    }
    let a = e.target.getAttribute('data-cat');
    if (a === '/') {
      apiUrl('https://fakestoreapi.com/products');
    } else {
      apiUrl(
        `https://fakestoreapi.com/products/category/${e.target.getAttribute(
          'data-cat'
        )}`
      );
    }
  }
  const fadeInVariants = {
    initial: {
      opacity: 0,
      y: -50,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    hover: {
      scale: 1.2,
    },
    tap: {
      scale: 1.1,
    },
  };
  return (
    <nav>
      <div className='logo'>
        <motion.img
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7 }}
          src={logoPrimary}
          alt='logo'
          onClick={handleCategory}
          data-cat='/'
        />
      </div>
      <div
        className={`hamburger ${isOpen ? 'active' : ''}`}
        onClick={handleHamburger}
      >
        <div className='lines'></div>
        <div className='lines'></div>
        <div className='lines'></div>
      </div>
      <div className={`links ${isOpen ? 'open' : ''}`}>
        {/* <MotionConfig> */}
        <motion.a
          href='#trending'
          variants={fadeInVariants}
          initial='initial'
          animate='animate'
          whileHover='hover'
          whileTap='tap'
          transition={{
            delay: 0.05,
          }}
          onClick={handleCategory}
          data-cat='/'
        >
          All Products
        </motion.a>
        <motion.a
          href='#trending'
          variants={fadeInVariants}
          initial='initial'
          animate='animate'
          whileHover='hover'
          whileTap='tap'
          transition={{
            delay: 0.15,
          }}
          onClick={handleCategory}
          data-cat="men's%20clothing"
        >
          Men's Clothes
        </motion.a>
        <motion.a
          href='#trending'
          variants={fadeInVariants}
          initial='initial'
          animate='animate'
          whileHover='hover'
          whileTap='tap'
          transition={{
            delay: 0.2,
          }}
          onClick={handleCategory}
          data-cat="women's%20clothing"
        >
          Women's Clothes
        </motion.a>
        <motion.a
          href='#trending'
          variants={fadeInVariants}
          initial='initial'
          animate='animate'
          whileHover='hover'
          whileTap='tap'
          transition={{
            delay: 0.25,
          }}
          onClick={handleCategory}
          data-cat='jewelery'
        >
          Jewelry
        </motion.a>
        <motion.a
          href='#trending'
          variants={fadeInVariants}
          initial='initial'
          animate='animate'
          whileHover='hover'
          whileTap='tap'
          transition={{
            delay: 0.3,
          }}
          onClick={handleCategory}
          data-cat='electronics'
        >
          Electronics
        </motion.a>
        {/* </MotionConfig> */}
      </div>
    </nav>
  );
}

export default Navbar;
