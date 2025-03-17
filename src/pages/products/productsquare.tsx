import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { getPriceString } from '../../lib/misc.ts';

export interface Product {
  productid: number;
  title: string;
  description: string;
  imageurl: string;
  price: float;
}

/* getProducts: Grab products in a strongly typed way from the web API. */
export async function getProducts(url: string): Promise<Product[]> {
  const resp = await fetch(url); // '/api/products' or '/api/products/[numberhere]'
  if(!resp.ok) {
    throw new Error(`Error from product api: ${resp.status}`);
  }
  const data: Product[] = await resp.json();
  return data;
}

export function ProductSquare(product: Product){
  return (
    <div className={"productsquare"}>
      <div className={"zoom"}>
        <Link href={"/products/"+product.productid}><Image src={product.imageurl} width={300} height={300} alt={product.title} /></Link>
      </div>
      <div className={"outerproducttext"}>
        <p><b>{product.title}</b></p>
        <p><b>{getPriceString(product.price)}</b></p>
      </div>
    </div>
  );
}

export function FullProductSquare(product: Product){
  return (
    <div className={"fullproductsquare"}>
      <Link href={"/products/"+product.productid}><Image src={product.imageurl} width={300} height={300} alt={product.title} /></Link>
      <div>
        <p><b>{product.title}</b></p>
        <p><b>{getPriceString(product.price)}</b></p>
      </div>
      <p>'{product.description}'</p>
    </div>
  );
}

export function ProductCatalog(props){
  return (
    <div className={"productcatalog"}>
      {props.productarray.map((product) => (
        <ProductSquare {...product} key={product.productid} />
      ))}
    </div>
  );
}
