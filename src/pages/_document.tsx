import { Html, Head, Main, NextScript } from "next/document";
import Link from 'next/link';
import Image from 'next/image';

function MightyOrangutanLogo(){
  const orangutan: string = "https://raw.githubusercontent.com/Sam-JR-Milburn/productapi/refs/heads/main/images/orangutan.png";
  return (
    <div id="logolink">
      <Link href="/products">
        <Image src={orangutan} width={60} height={60} alt="MightyOrangutan"/>
        <h1>MightyOrangutan</h1>
      </Link>
    </div>
  );
}

/* Cart page not working yet */
function TrolleyButton(){
  return (
      <div id="trolleybutton">
        <Link href="/cart"><h2>Trolley</h2></Link>
      </div>
  );
}

function PageHeader(){
  return (
    <div id="pageheader">
      <MightyOrangutanLogo />
      <TrolleyButton />
    </div>
  );
}

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <PageHeader />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
