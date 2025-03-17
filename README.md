This is a Next.js + React + TypeScript + HTML/CSS portfolio project. The intent is to deploy a toy commerce site using a dedicated API at https://github.com/Sam-JR-Milburn/productapi.

## How do I run?

Prerequisites...
Clone productapi, ensure you have Docker, Python3 installed.
Ensure your pip virtual environment has FastAPI and sqlalchemy.
Then, in the context of the cloned 'productapi', run:

```bash
docker compose build
docker compose up -d
```

To run the development server, clone the repository and run:

```bash
npm install
npm run dev
```

The server will be hosted at localhost:3000.
I may make this an HTTPS server at some other date, it has to look good and have basic functionality for now.
