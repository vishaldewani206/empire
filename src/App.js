import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Trending from './components/Trending';
import { TailSpin } from 'react-loader-spinner';
import { useState, useEffect } from 'react';

function App() {
  const [newCat, setNewCat] = useState('https://fakestoreapi.com/products');
  const [show, setShow] = useState(true);
  const [findSearch, setFindSearch] = useState('');
  const setCategory = (u) => {
    setNewCat(u);
  };
  useEffect(() => {
    // delayshow();
    setTimeout(() => {
      setShow(false);
    }, 1000);
  }, []);
  return (
    <div className='App'>
      {show ? (
        <TailSpin
          height='80'
          width='80'
          color='#000'
          ariaLabel='tail-spin-loading'
          radius='1'
          wrapperStyle={{}}
          wrapperClass='load'
          visible={show}
        />
      ) : (
        <Navbar apiUrl={setCategory} setFindSearch={setFindSearch} />
      )}
      {show ? undefined : <Hero />}
      {show ? undefined : <Trending apiUrl={newCat} findSearch={findSearch} />}
    </div>
  );
}

export default App;
