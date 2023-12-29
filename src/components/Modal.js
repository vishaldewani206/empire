import React from 'react';
import './Modal.css';
import { IoClose } from 'react-icons/io5';
import { FaStar } from 'react-icons/fa';
function Modal({ isOpen, modalProduct, setIsOpen }) {
  if (!isOpen) {
    return null;
  }
  return (
    <div className='modal'>
      <IoClose className='close' onClick={() => setIsOpen(false)} />
      <div className='img'>
        <img src={modalProduct.image} alt='Product' className='productImage' />
      </div>
      <div className='text'>
        <h1>{modalProduct.title}</h1>
        <p>{modalProduct.description}</p>
        <div className='priceRating'>
          <div className='price'>
            <h2>${modalProduct.price}</h2>
          </div>
          <div className='modalRating'>
            <FaStar className='modalStar' />{' '}
            <span>{modalProduct.rating.rate}/5</span>
          </div>
        </div>
        <div className='actionBtns'>
          <button className='buyNow action'>Buy Now</button>
          <button className='addToCart action'>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
