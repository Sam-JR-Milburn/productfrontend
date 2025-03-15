import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { getPriceString } from '../../lib/misc.ts';

export function ProductSquare(product){
  return (
    <div class="product productsquare">
      <Link href={"/products/"+product.productid}><Image src={product.imageurl} width={300} height={300} alt={product.title} /></Link>
      <div class="outerproducttext">
        <p><b>{product.title}</b></p>
        <p><b>{getPriceString(product.price)}</b></p>
      </div>
    </div>
  );
}

export function FullProductSquare(product){
  return (
    <div class="product fullproductsquare">
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
    <div class="productcatalog">
      {props.productarray.map((product) => (
        <ProductSquare {...product} />
      ))}
    </div>
  );
}
