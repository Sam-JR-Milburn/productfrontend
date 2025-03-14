import { Html, Head, Main, NextScript } from "next/document";
import Link from 'next/link';

export default function Document() {


  return (
    <Html lang="en">
      <Head>
        <title>MightyOrangutan</title>
      </Head>
      <body>
        <Link href="/">Main Page</Link>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
