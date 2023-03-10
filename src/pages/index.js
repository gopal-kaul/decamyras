import Head from "next/head";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import Image from "next/image";
import i1 from "../../public/home/1.webp";
import i2 from "../../public/home/2.webp";
import i3 from "../../public/home/3.webp";
import i4 from "../../public/home/4.webp";
import logo from "../../public/logo.webp"
export default function Home() {
  return (
    <>
      <Head>
        <title>Decamyra&apos;s</title>
        <meta name="description" content="Decamyra's" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="rounded-lg h-full relative flex flex-row flex-wrap overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          centeredSlides={true}
          speed={3000}
          pagination={{ clickable: false }}
          slidesPerView={1}
          loop={true}
        >
          <SwiperSlide className="w-full h-full relative aspect-auto">
            <Image priority
              alt="Carousel Image"
              src={i1}
              placeholder="blur"
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide className="w-full h-full relative aspect-auto">
            <Image
              alt="Carousel Image"
              src={i2}
              placeholder="blur"
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide className="w-full h-full relative aspect-auto">
            <Image
              alt="Carousel Image"
              src={i3}
              placeholder="blur"
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide className="w-full h-full relative aspect-auto">
            <Image
              alt="Carousel Image"
              src={i4}
              placeholder="blur"
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
        <div className="absolute top-0 left-0 w-full h-full bg-opacity-60 bg-[#000000] grid place-items-center text-white z-10">
          <div className="grid place-items-center">
            <Image alt="Logo" width="150" height="150" src={logo} priority />
            <h2 className="font-artifexCF font-bold text-4xl text-center lg:text-6xl tracking-widest leading-tight pt-2 md:pt-2 text-gold">
              Decamyra&apos;s
            </h2>
            <p className="font-utsaah text-xl text-center lg:text-5xl tracking-wide text-white pt-2 md:pt-10 pb-10 font-semibold">
              A Complete Linen Solution
            </p>
            <Link
              href="/products"
              className="bg-gold px-12 text-gray font-bold uppercase py-2 rounded-lg group relative hover:pl-8 hover:pr-16 transition-[padding]"
            >
              Our Products
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute opacity-0 transition-opacity ease-in-out right-5 top-0 animate-bounce-x-4 group-hover:opacity-100 h-full py-2"
                viewBox="0 0 448 512"
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <style jsx global>
        {`
          .swiper-pagination-bullets {
            display: none;
          }
        `}
      </style>
    </>
  );
}
