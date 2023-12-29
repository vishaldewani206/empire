import { useEffect, useState } from 'react';

function ApiCall(url) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [url]);
  return product;
}

export default ApiCall;
