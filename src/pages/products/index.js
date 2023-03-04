import Head from "next/head";
import data from "@/data.json";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
export async function getStaticProps() {
  return {
    props: {
      products: data.products,
    },
  };
}
export default function Products({ products }) {
  return (
    <>
      <Head>
        <title>Products | Decamyra&apos;s</title>
        <meta name="description" content="Decamyra's" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="bg-bgWhite min-h-full flex flex-row flex-wrap px-4 lg:px-20 gap-x-10 gap-y-20 py-10 rounded-lg justify-center">
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </>
  );
}
