import type { NextApiRequest, NextApiResponse } from 'next';

const apiUrl: string = 'http://localhost/products/';

/* Backend-for-Frontend (BFF) API endpoint */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
){
  try {
    /* Grab URL 'slug' (dynamic route) */
    const productid: string = req.query.productid as string;
    if(!productid /* null, undefined or empty. */ || isNaN(productid) /* Checks if this is NOT a number */) {
      throw new Error("Invalid URL slug."); /* HTTP 400? */
    }
    let dynamicApiUrl: string = apiUrl.concat(productid);

    /* Fetch, convert, return. */
    const apiRes  = await fetch(dynamicApiUrl);
    const apiJson = await apiRes.json();
    res.status(200).json(apiJson);

  } catch({ name, message }){
    if(message === "Invalid URL slug."){
      res.status(400); /* Bad Request: requesting productid's that are non-numeric. */
    } else {
      res.status(502); /* Bad Gateway: other issues with the BFF API 'proxy'. */
    }
    /* console.log(`Error: ${name} - ${message}`); */ /* Server-side. Will need a logging framework. */
  }
}
