import type { NextApiRequest, NextApiResponse } from 'next';

const apiUrl = 'http://localhost/products';

/* Backend-for-Frontend (BFF) API endpoint */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
){
  try {
    /* Fetch, convert, return. */
    const apiRes  = await fetch(apiUrl);
    const apiJson = await apiRes.json();
    res.status(200).json(apiJson);
  } catch({ name, message }){
    res.status(502); /* Bad Gateway */
    console.log(`Error: ${name} - ${message}`);
  }
}
