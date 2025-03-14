'use client'

import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import { FullProductSquare } from './productsquare.tsx';

export default function ProductPage() {
  const router = useRouter();
  const { productid } = router.query;
  let fetchurl: string = "/api/products/"+productid;
  console.log(fetchurl);

  const [product, setProduct] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function getProduct(){
      try {
        const resp = await fetch(fetchurl, { signal: AbortSignal.timeout(4000) });
        const data = await resp.json();
        setProduct(data);
        setLoading(false);
      } catch({ name, message }) {
        setLoading(true);
      }
    }
    getProduct();
  }, []);

  return (
    <>
      {isLoading !== true ? <p>Loaded.</p> : <p>Loading...</p>}
      {isLoading !== true ? <FullProductSquare {...product} /> : <p></p>}
    </>
  );
}
