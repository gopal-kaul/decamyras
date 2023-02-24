import Head from "next/head";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Modal from "react-modal";
import data from "@/data.json";
import Link from "next/link";

export async function getStaticPaths() {
  const paths = data.products.map((product) => ({
    params: { product: product.name.replace(" ", "-").toLowerCase() },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const product = data.products.find(
    (product) =>
      product.name.replace(" ", "-").toLowerCase() === context.params.product
  );
  return {
    props: { product },
  };
}

export default function ProductDetail({ product }) {
  console.log(product);
  const [modal, setModal] = useState(false);
  return (
    <>
      <Head>
        <title>Products | Decamyra&apos;s</title>
        <meta name="description" content="Decamyra's" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="bg-bgWhite min-h-full px-4 md:px-20 flex flex-col md:flex-row gap-x-10 rounded-lg">
        <div className="bg-[#cccccc]/20 w-full md:w-[15%] min-h-full flex flex-col justify-center items-center gap-y-4 text-xl font-bold">
          {data.products
            .filter(
              (prod) =>
                prod.name.replace(" ", "-").toLowerCase() !==
                product.name.replace(" ", "-").toLowerCase()
            )
            .map((product) => (
              <Link
                href={`/products/${product.name
                  .replace(" ", "-")
                  .toLowerCase()}`}
                className="rounded-md shadow-2xl px-8 py-2 text-center bg-white ease-in-out transition-transform hover:scale-[1.2] w-fit mx-[15%]"
              >
                {product.name}
              </Link>
            ))}
        </div>
        <div className="bg-white w-full md:w-[85%] min-h-full py-5">
          <h2 className="font-bold text-center text-6xl font-utsaah">
            {product.name}
          </h2>
          <div className="flex flex-col justify-between min-h-[93%] py-[5%]">
            <div className="flex flex-col md:flex-row gap-x-10">
              <Carousel
                showThumbs={false}
                autoPlay
                infiniteLoop
                showStatus={false}
                className="md:w-1/2"
              >
                <div className="">
                  <img
                    src="/productcarousel/carousel1.jpg"
                    className="object-cover"
                  />
                </div>
                <div className="">
                  <img
                    src="/productcarousel/carousel2.jpg"
                    className="object-cover"
                  />
                </div>
              </Carousel>
              <div className="md:w-1/2 min-h-full">
                <h3 className="text-center text-3xl font-bold">All Products</h3>
                <div className="grid grid-cols-3 gap-y-10 py-8 text-xl place-items-center">
                  <p>Item</p>
                  <p>Item</p>
                  <p>Item</p>
                  <p>Item</p>
                  <p>Item</p>
                  <p>Item</p>
                  <p>Item</p>
                  <p>Item</p>
                  <p>Item</p>
                </div>
              </div>
            </div>
            <div className="grid place-items-center">
              <button
                onClick={() => setModal((old) => !old)}
                className="uppercase bg-gold text-gray transition-[padding] duration-300 ease-in-out w-fit px-10 hover:px-14 font-bold py-2"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modal}
        shouldCloseOnOverlayClick
        onRequestClose={() => setModal(false)}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "8px",
          },
          overlay: {
            backdropFilter: "blur(15px)",
            zIndex: "10",
          },
        }}
      >
        <form
          action=""
          className="grid grid-cols-3 text-xl place-items-center place-content-evenly gap-x-20 w-full z-20"
        >
          <div className="space-y-3">
            <div className="flex flex-row gap-2">
              <input type={"checkbox"} className="" />
              <p>Table Cloth</p>
            </div>
            <div className="flex flex-row gap-2">
              <input type={"checkbox"} className="" />
              <p>Table Cloth</p>
            </div>
            <div className="flex flex-row gap-2">
              <input type={"checkbox"} className="" />
              <p>Table Cloth</p>
            </div>
            <div className="flex flex-row gap-2">
              <input type={"checkbox"} className="" />
              <p>Table Cloth</p>
            </div>
            <div className="flex flex-row gap-2">
              <input type={"checkbox"} className="" />
              <p>Table Cloth</p>
            </div>
            <div className="flex flex-row gap-2">
              <input type={"checkbox"} className="" />
              <p>Table Cloth</p>
            </div>
            <div className="flex flex-row gap-2">
              <input type={"checkbox"} className="" />
              <p>Table Cloth</p>
            </div>
            <div className="flex flex-row gap-2">
              <input type={"checkbox"} className="" />
              <p>Table Cloth</p>
            </div>
            <div className="flex flex-row gap-2">
              <input type={"checkbox"} className="" />
              <p>Table Cloth</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex flex-row gap-2">
              <input type={"checkbox"} className="" />
              <p>Table Cloth</p>
            </div>
            <div className="flex flex-row gap-2">
              <input type={"checkbox"} className="" />
              <p>Table Cloth</p>
            </div>
            <div className="flex flex-row gap-2">
              <input type={"checkbox"} className="" />
              <p>Table Cloth</p>
            </div>
            <div className="flex flex-row gap-2">
              <input type={"checkbox"} className="" />
              <p>Table Cloth</p>
            </div>
            <div className="flex flex-row gap-2">
              <input type={"checkbox"} className="" />
              <p>Table Cloth</p>
            </div>
            <div className="flex flex-row gap-2">
              <input type={"checkbox"} className="" />
              <p>Table Cloth</p>
            </div>
            <div className="flex flex-row gap-2">
              <input type={"checkbox"} className="" />
              <p>Table Cloth</p>
            </div>
            <div className="flex flex-row gap-2">
              <input type={"checkbox"} className="" />
              <p>Table Cloth</p>
            </div>
            <div className="flex flex-row gap-2">
              <input type={"checkbox"} className="" />
              <p>Table Cloth</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex flex-row gap-2">
              <input type={"checkbox"} className="" />
              <p>Table Cloth</p>
            </div>
            <div className="flex flex-row gap-2">
              <input type={"checkbox"} className="" />
              <p>Table Cloth</p>
            </div>
            <div className="flex flex-row gap-2">
              <input type={"checkbox"} className="" />
              <p>Table Cloth</p>
            </div>
            <div className="flex flex-row gap-2">
              <input type={"checkbox"} className="" />
              <p>Table Cloth</p>
            </div>
            <div className="flex flex-row gap-2">
              <input type={"checkbox"} className="" />
              <p>Table Cloth</p>
            </div>
            <div className="flex flex-row gap-2">
              <input type={"checkbox"} className="" />
              <p>Table Cloth</p>
            </div>
            <div className="flex flex-row gap-2">
              <input type={"checkbox"} className="" />
              <p>Table Cloth</p>
            </div>
            <div className="flex flex-row gap-2">
              <input type={"checkbox"} className="" />
              <p>Table Cloth</p>
            </div>
            <div className="flex flex-row gap-2">
              <input type={"checkbox"} className="" />
              <p>Table Cloth</p>
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
}
