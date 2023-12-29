import React, { useEffect, useState } from 'react';
import logoPrimary from '../assets/logo-primary.png';
import { IoSearch } from 'react-icons/io5';
import './Navbar.css';
function Navbar({ apiUrl, setFindSearch }) {
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

  return (
    <nav>
      <div className='logo'>
        <img
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
        <h3 onClick={handleCategory} data-cat='/'>
          All Products
        </h3>
        <h3 onClick={handleCategory} data-cat="men's%20clothing">
          Men's Clothes
        </h3>
        <h3 onClick={handleCategory} data-cat="women's%20clothing">
          Women's Clothes
        </h3>
        <h3 onClick={handleCategory} data-cat='jewelery'>
          Jewelry
        </h3>
        <h3 onClick={handleCategory} data-cat='electronics'>
          Electronics
        </h3>
      </div>
    </nav>
  );
}

export default Navbar;
