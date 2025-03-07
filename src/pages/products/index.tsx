'use client'

import { useState, useEffect } from 'react'

export default function Page() {
  const [posts, setPosts] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function getPosts() {
      try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts/');
        console.log(`Response from \'jsonplaceholder.typicode.com\': ${resp.status}`);
        const data = await resp.json();
        console.log(`Data Length: ${data.length}`);
        setPosts(data);
        setLoading(false);
      } catch({ name, message }) {
        console.log(`Error Caught. Name: ${name}, Message: ${message}`);
        setLoading(true);
      }
    };
    getPosts();
  }, []);

  return (
    <div>
      <p>Grabbing API post data.</p>
      {isLoading !== true ? <p>Loaded.</p> : <p>Loading...</p>}
      {isLoading !== true ?
        <ul>
          {posts.map((post) => (
            <li key={post.id}>Title: <b>{post.title}</b></li>
          ))}
        </ul>
    : <p></p>}
    </div>
  );
}
