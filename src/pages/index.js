import Head from "next/head";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Fade } from "react-reveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useRef } from "react";
export default function Home() {
  const main = useRef(null);
  const co = useRef(null);
  // useEffect(() => {
  //   const scroll = function (e) {
  //     if (e.deltaY > 0) main.current.scrollIntoView({ behaviour: "smooth" });
  //   };
  //   document.addEventListener("wheel", scroll);
  //   return () => {
  //     document.removeEventListener("wheel", scroll);
  //   };
  // }, []);
  return (
    <>
      <Head>
        <title>Decamyra&apos;s</title>
        <meta name="description" content="Decamyra's" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Fade>
          <div
            className={`h-screen bg-[url('/carousel/2.jpg')] bg-cover bg-center bg-no-repeat overflow-scroll scroll-smooth`}
            onWheel={(e) => {
              if (e.deltaY > 0) main.current.scrollIntoView();
              else co.current.scrollIntoView();
            }}
          >
            {/* <img
                  src={`/carousel/${ele}.jpg`}
                  className="min-h-[100vh]"
                /> */}
            {/* <div className="absolute left-[10%] w-[80%] md:w-[40%] top-[5%] bg-white px-[5%] pt-[3%] pb-[4%] items-start text-start font-opensans">
                  <h2 className="text-[2vw] font-bold">
                    Hotel Curated Package
                  </h2>
                  <p className="text-[1.4vw] leading-normal mb-10 py-[5%]">
                    Our new custom design package is timeless and stylish,
                    inspired by textures of nature. Shop this package on
                    Marketplace.
                  </p>
                  <a
                    href="#"
                    className="bg-brown rounded-md text-white px-10 py-5 text-[1.3vw] font-bold transition-all duration-200"
                  >
                    Read More
                  </a>
                </div> */}
            <div className="sticky bottom-0">
              <div ref={co} className="h-screen"></div>
              <div
                className="text-white w-full px-[5%] pt-[2%] pb-[2%] items-start text-start font-opensans bg-transparent/60"
                ref={main}
              >
                <h2 className="font-bold text-3xl pb-6 font-graphik">
                  Sample Title
                </h2>
                <p className="text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto, tenetur ea. Rerum animi id quod, inventore quam
                  facere laboriosam placeat itaque. Sequi necessitatibus
                  sapiente nulla debitis suscipit sed dolores. Consectetur?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aliquam error saepe ut reprehenderit libero numquam deserunt
                  sed facere aliquid! Odit, recusandae praesentium sint iusto
                  iure molestias soluta autem ipsa amet.
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </main>
    </>
  );
}
Home.getLayout = function getLayout(page) {
  return (
    <>
      <div className="fixed top-0 z-50 w-full">
        <Navbar />
      </div>
      <div>{page}</div>
    </>
  );
};
