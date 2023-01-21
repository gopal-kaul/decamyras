import Head from "next/head";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Fade } from "react-reveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useRef } from "react";
export default function Home() {
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
          <div className="p-[1%] h-screen w-full overflow-y-scroll bg-[#1a1a1a]">
            <div
              className={`h-full bg-[url('/carousel/2.jpg')] bg-cover bg-center bg-no-repeat overflow-scroll snap-start snap-y snap-mandatory snap-always`}
            >
              <div className="sticky bottom-0">
                <div className="h-screen snap-start"></div>
                <div className="text-white w-full px-[5%] pt-[2%] pb-[2%] items-start text-start font-opensans bg-transparent/60 snap-start">
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
