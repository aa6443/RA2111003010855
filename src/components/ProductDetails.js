// ProductDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://20.244.56.144/test/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [productId]);

  return (
    <div>
      <h1>Product Details</h1>
      {product && (
        <div>
          <h2>{product.name}</h2>
          <p>Company: {product.company}</p>
          <p>Category: {product.category}</p>
          <p>Price: {product.price}</p>
          {/* Add other product details */}
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
