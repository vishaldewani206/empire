import React, { useEffect, useState } from 'react';
import ApiCall from './ApiCall';
import { FaStar } from 'react-icons/fa';
import './Trending.css';
import Modal from './Modal';
import { motion } from 'framer-motion';
const Trending = ({ apiUrl, findSearch }) => {
  const product = ApiCall(apiUrl);
  const [isOpen, setIsOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState('');
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);
  const showVariants = {
    initial: {
      opacity: 0,
      scale: 0.5,
    },
    animate: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        // duration: 0.7 ,
        delay: 0.05 * i,
      },
    }),
  };
  return (
    product && (
      <div>
        <h1 className='heading' id='trending'>
          Trending
        </h1>
        <div className='items'>
          {product.map((e, i) => {
            return (
              <motion.div
                className='item'
                variants={showVariants}
                initial='initial'
                whileInView='animate'
                viewport={{
                  once: true,
                }}
                custom={i}
                key={e.id}
                onClick={() => {
                  setIsOpen(true);
                  setModalProduct(e);
                }}
              >
                <img
                  src={e.image}
                  alt='Product'
                  className='productImg'
                  id='Trending'
                />
                <div className='productDetails'>
                  <h3 className='productName'>
                    {e.title.length > 50
                      ? e.title.toString().slice(0, 50) + '...'
                      : e.title}
                  </h3>
                  <div className='rating'>
                    <FaStar className='star' />
                    <p>
                      {e.rating.rate}/5 ({e.rating.count}){' '}
                    </p>
                  </div>
                  <h3>Price: ${e.price}</h3>
                </div>
                <div className='btn'>
                  <button>Add To Cart</button>
                </div>
              </motion.div>
            );
          })}
        </div>
        {isOpen && (
          <Modal
            isOpen={isOpen}
            modalProduct={modalProduct}
            setIsOpen={setIsOpen}
          />
        )}
      </div>
    )
  );
};
export default Trending;
