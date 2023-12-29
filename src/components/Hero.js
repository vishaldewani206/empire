import React from 'react';
import './Hero.css';
import hero from '../assets/hero.jpg';
import logo from '../assets/logo-secondary.png';
function Hero() {
  return (
    <div
      className='hero'
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${hero})`,
      }}
    >
      <img src={logo} alt='logo' className='heroLogo' />
      <button className='shopNow'>Shop Now</button>
    </div>
  );
}

export default Hero;
