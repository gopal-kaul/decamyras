import Head from "next/head";
import data from "@/data.json";
import ProductCard from "@/components/ProductCard";
import { useState } from "react";
import logo from "../../../public/logo.webp";
import Image from "next/image";
export async function getStaticProps() {
  return {
    props: {
      products: data.products,
    },
  };
}
export default function Products({ products }) {
  const [loaded, setLoaded] = useState(Array(products.length).fill(false));

  return (
    <>
      <Head>
        <title>Products | Decamyra&apos;s</title>
        <meta name="description" content="Decamyra's" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="bg-bgWhite min-h-full flex flex-row flex-wrap px-4 lg:px-20 gap-x-10 gap-y-20 py-10 rounded-lg justify-center relative">
        <div
          className={`${
            loaded.indexOf(false) === -1
              ? "hidden"
              : "w-full h-full grid place-items-center absolute top-0 left-0 bg-white z-50 opacity-100 rounded-lg"
          } transition-opacity duration-500 ease-in-out`}
        >
          <Image
            alt="Logo"
            width="150"
            height="150"
            src={logo}
            className="animate-pulse"
            priority
          />
        </div>
        {products.map((product, idx) => (
          <ProductCard
            index={idx}
            setLoaded={setLoaded}
            key={product.name}
            product={product}
          />
        ))}
      </div>
    </>
  );
}
