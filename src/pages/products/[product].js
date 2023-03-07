import Head from "next/head";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import data from "@/data.json";
import Link from "next/link";

export async function getStaticPaths() {
  const paths = data.products.map((product) => ({
    params: { product: product.name.replaceAll(" ", "-").toLowerCase() },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const product = data.products.find(
    (product) =>
      product.name.replaceAll(" ", "-").toLowerCase() === context.params.product
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
      <div className="bg-bgWhite min-h-full flex flex-col gap-x-10 rounded-lg relative">
        <div className="bg-gold/40 w-full flex flex-row justify-center items-center text-sm md:text-xl font-bold  rounded-lg mx-auto gap-x-5">
          <div className="overflow-auto gap-x-5 inline-flex py-5 px-5 snap-x snap-proximity scroll-pl-5">
            {data.products.map((prod) => (
              <Link
                key={prod.name}
                href={`/products/${prod.name
                  .replaceAll(" ", "-")
                  .toLowerCase()}`}
                className={`rounded-md shadow-2xl px-8 py-2 text-center grid items-center bg-white ease-in-out transition-transform hover:scale-[1.2] snap-start  ${
                  prod.name.replaceAll(" ", "-").toLowerCase() ===
                  product.name.replaceAll(" ", "-").toLowerCase()
                    ? "border-4 border-gold"
                    : ""
                }`}
              >
                {prod.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="bg-bgWhite w-full min-h-full py-5 px-4 md:px-20">
          <h2 className="font-bold text-center text-6xl font-utsaah">
            {product.name}
          </h2>
          <div className="flex flex-col justify-center xl:flex-row gap-x-10 bg-white shadow-2xl mt-10 2xl:mx-20 mb-10 rounded-2xl">
            <div className="xl:w-[50%]">
              <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{ delay: 1000, disableOnInteraction: false }}
                navigation={false}
                centeredSlides={true}
                speed={1500}
                pagination={{ clickable: true }}
                slidesPerView={1}
                loop={true}
                className="h-full w-full md:rounded-l-xl rounded-t-xl"
              >
                <SwiperSlide>
                  <img
                    src="/productcarousel/carousel1.jpg"
                    className="w-full h-auto lg:h-full xl:w-auto object-cover md:rounded-l-xl rounded-t-xl"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/productcarousel/carousel2.jpg"
                    className="w-full h-auto lg:h-full xl:w-auto object-cover md:rounded-l-xl rounded-t-xl"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="xl:w-[50%] min-h-full rounded-xl px-5">
              <h3 className="text-3xl font-bold pt-5">All Products</h3>
              <div className="grid grid-cols-3 gap-y-6 py-8 text-md xl:text-xl">
                {product.items.map((ele) => (
                  <p key={ele}>{ele}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="grid place-items-center">
            <button
              onClick={() => setModal((old) => !old)}
              className="uppercase bg-gold text-gray transition-[padding] duration-300 ease-in-out w-fit px-10 hover:px-14 font-bold py-2 text-xl rounded-lg"
            >
              Contact Us
            </button>
          </div>
        </div>
        <div
          className={`${
            modal
              ? "absolute left-0 top-0 h-full w-full backdrop-blur-md bg-opacity-40 bg-black grid place-items-center z-50"
              : "hidden"
          }`}
        >
          <div className="relative bg-white rounded-2xl w-fit mx-5 px-5 py-5">
            <button
              onClick={() => setModal(false)}
              className="absolute top-0 right-2"
            >
              x
            </button>
            <div className="grid place-content-center place-items-start">
              <div className="text-2xl font-bold">Send an Enquiry</div>
              <div className="w-1/2 h-1 bg-gold" />
            </div>
            <form
              action=""
              onSubmit={() => {
                setModal(false);
              }}
              className="text-xl w-full z-20 pt-5"
            >
              <div className="grid text-xs md:text-base grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-4">
                {product.items.map((ele) => (
                  <div key={ele} className="flex flex-row items-center gap-2">
                    <input name={ele} type={"checkbox"} className="" />
                    <p>{ele}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col pt-4 gap-4 text-sm md:text-base">
                <div className="flex flex-col sm:flex-row gap-4">
                  <label htmlFor="name">Name</label>
                  <input
                    placeholder="John Doe"
                    name="name"
                    required
                    type={"text"}
                    className="border-b border-b-gold focus:outline-none"
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <label htmlFor="email">Email</label>
                  <input
                    placeholder="user@email.com"
                    name="email"
                    type={"email"}
                    required
                    className="border-b border-b-gold focus:outline-none"
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <label htmlFor="email">Phone</label>
                  <input
                    placeholder="+91-1234567890"
                    name="phone"
                    required
                    type={"text"}
                    className="border-b border-b-gold focus:outline-none"
                  />
                </div>
              </div>
              <div className="grid place-items-center mt-4">
                <button
                  type="submit"
                  className="uppercase bg-gold text-gray transition-[padding] duration-300 ease-in-out w-fit px-10 hover:px-14 font-bold py-2"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
