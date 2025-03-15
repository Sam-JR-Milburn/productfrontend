'use client'

import { useState, useEffect } from 'react';

import { ProductCatalog } from './productsquare.tsx';

export default function ProductsPage() {
  const [products, setProducts] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function getProducts(){
      setProducts(null);
      setLoading(true);
      try {
        const resp = await fetch('/api/products', { signal: AbortSignal.timeout(4000) });
        const data = await resp.json();
        setProducts(data);
        setLoading(false);
      } catch({ name, message }) {
        setLoading(true);
      }
    }
    getProducts();
  }, []);

  return (
    <div>
      <p>Grabbing API product data.</p>
      {isLoading !== true ? <p>Loaded.</p> : <p>Loading...</p>}
      {isLoading !== true ?
        <ProductCatalog productarray={products} /> : <p>...</p>}
    </div>
  );
}
