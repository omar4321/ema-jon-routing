import { useEffect } from 'react';
import { useState } from 'react';

const Useproducts = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then((res) => res.json())
      .then((data) => setProduct(data.products));
  }, []);

  return [product, setProduct];
};

export default Useproducts;
