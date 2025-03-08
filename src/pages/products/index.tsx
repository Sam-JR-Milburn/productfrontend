'use client'
import { useState, useEffect } from 'react'

export default function ProductsPage() {
  const [products, setProducts] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function getProducts() {
      try {
        const resp = await fetch('/api/products');
        console.log(`HTTP Code from productapi: ${resp.status}`);
        const data = await resp.json();
        console.log(`Data Length: ${data.length}`);
        setProducts(data);
        setLoading(false);
      } catch({ name, message }) {
        console.log(`Error Caught. Name: ${name}, Message: ${message}`);
        setLoading(true);
      }
    };
    getProducts();
  }, []);

  return (
    <div>
      <p>Grabbing API product data.</p>
      {isLoading !== true ? <p>Loaded.</p> : <p>Loading...</p>}
      {isLoading !== true ?
        <ul>
          {products.map((product) => (
            <li key={product.productid}><b>{product.title}</b><br />{product.description}<br />{product.price}</li>
          ))}
        </ul>
    : <p></p>}
    </div>
  );
}
