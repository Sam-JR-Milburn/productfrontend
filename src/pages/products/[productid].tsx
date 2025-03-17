'use client'

import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import { Product, getProducts, FullProductSquare } from './productsquare.tsx';

export default function ProductPage() {
  const router = useRouter();
  const { productid } = router.query;
  let fetchurl: string = "/api/products/"+productid;

  const [product, setProduct] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function assignProduct(){
      try {
        const fetchedProducts: Product[] = await getProducts(fetchurl);
        /* Though this is an array, the json conversion will yield an object */
        console.log(`${fetchurl}`);
        console.log(`Undefined? ${fetchedProducts.length}`);
        if(fetchedProducts.length !== 1){
          throw new Error(`This should return one (1) product at url: ${fetchurl}`);
        }
        setProduct(fetchedProducts[0]);
        setLoading(false);
      } catch(error) {
        console.log(error);
        setLoading(true);
      }
    }
    assignProduct();
  }, []);

  return (
    <>
      {isLoading !== true ? <FullProductSquare {...product} /> : <p></p>}
    </>
  );
}
