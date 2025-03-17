'use client'

import { useState, useEffect } from 'react';

import { Product, getProducts, ProductCatalog } from './productsquare.tsx';


export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]) // Empty array
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function assignProducts() {
      try {
        const fetchedProducts: Product[] = await getProducts('/api/products');
        setProducts(fetchedProducts);
      } catch(error) {
        /* Log issue? */
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }
    /* Explicitly call once per page-load. */
    assignProducts();
  }, []);

  return (
    <div>
      {isLoading !== true ?
        <ProductCatalog productarray={products} /> : <p>...</p>}
    </div>
  );
}
