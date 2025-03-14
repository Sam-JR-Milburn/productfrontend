import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { getPriceString } from '../../lib/misc.ts';

export function ProductSquare(product){
  return (
    <div class="productsquare">
      <Link href={"/products/"+product.productid}><Image src={product.imageurl} width={500} height={500} alt={product.title} /></Link>
      <p>{product.title}</p>
      <p>{getPriceString(product.price)}</p>
    </div>
  );
}

export function FullProductSquare(product){
  return (
    <div class="fullproductsquare">
      <Link href={"/products/"+product.productid}><Image src={product.imageurl} width={500} height={500} alt={product.title} /></Link>
      <p>{product.title}</p>
      <p>{product.description}</p>
      <p>{getPriceString(product.price)}</p>
    </div>
  );
}
