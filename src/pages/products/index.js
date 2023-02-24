import Head from "next/head";
import data from "@/data.json";
import Link from "next/link";
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
      <div className="bg-bgWhite min-h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 place-items-center px-4 md:px-20 gap-x-10 gap-y-20 py-10 rounded-lg">
        {products.map((product) => (
          <Link
            className="relative shadow-xl rounded-3xl hover:rotate-y-180 transition-all transform-style-3d duration-500 perspective-1000"
            key={product.name}
            href={`/products/${product.name.replace(" ", "-").toLowerCase()}`}
          >
            <div className="relative backface-hidden">
              <img
                src={`/products/${product.coverImage}`}
                className="object-cover z-10 rounded-3xl"
              />
              <div className="absolute bottom-0 left-0 w-full text-center rounded-3xl bg-opacity-50 bg-cardWhite">
                <h2 className="font-bold py-1 text-xl">{product.name}</h2>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full rotate-y-180 bg-white px-[10%] py-[10%] backface-hidden rounded-3xl shadow-xl">
              <h2 className="font-bold text-xl text-center pb-[5%]">{product.name}</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem officiis culpa porro facilis, voluptas, ea nihil ad,
                tempore totam corporis omnis expedita deleniti enim dolor? Sint
                nulla molestiae at! Eveniet?
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
