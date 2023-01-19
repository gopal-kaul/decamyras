import Head from "next/head";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Fade } from "react-reveal";
export default function Home() {
  return (
    <>
      <Head>
        <title>Decamyra's</title>
        <meta name="description" content="Decamyra's" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Fade>
          <Carousel
            showThumbs={false}
            autoPlay={true}
            dynamicHeight={true}
            infiniteLoop={true}
            showStatus={false}
            transitionTime={2000}
            interval={10000}
            showIndicators={false}
          >
            {[1, 2, 3].map((ele) => (
              <div key={ele} className="relative">
                <img
                  src={`/carousel/${ele}.jpg`}
                  className="h-[110vh] w-full object-cover"
                />
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
                <div className="absolute bottom-0 text-white w-full left-0 px-[5%] pt-[2%] pb-[3%] items-start text-start font-opensans bg-transparent/60">
                  <h2 className="font-bold text-3xl pb-6 font-graphik">Sample Title</h2>
                  <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, tenetur ea. Rerum animi id quod, inventore quam facere laboriosam placeat itaque. Sequi necessitatibus sapiente nulla debitis suscipit sed dolores. Consectetur? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam error saepe ut reprehenderit libero numquam deserunt sed facere aliquid! Odit, recusandae praesentium sint iusto iure molestias soluta autem ipsa amet.</p>
                </div>
              </div>
            ))}
          </Carousel>
        </Fade>
      </main>
    </>
  );
}
