import Head from "next/head";
import Marquee from "react-fast-marquee";
export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us | Decamyra&apos;s</title>
        <meta name="description" content="Decamyra's" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="bg-bgWhite min-h-full grid place-items-center px-4 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 place-content-evenly font-bold justify-between w-full text-3xl gap-y-5 md:gap-10">
          <h2 className="shadow-lg md:shadow-2xl py-10 rounded-2xl text-center hover:scale-105 transition-transform duration-300 ease-in-out">
            Our Company
          </h2>
          <h2 className="shadow-lg md:shadow-2xl py-10 rounded-2xl text-center hover:scale-105 transition-transform duration-300 ease-in-out">
            Our Team
          </h2>
        </div>
        <h2 className="text-center hover:scale-105 transition-transform duration-300 ease-in-out font-bold text-3xl">
          Our Clientele
        </h2>
        <Marquee speed={"50"} gradient={false}>
          <div className="flex flex-row gap-10">
            <img src="/carousel/1.jpg" className="object-cover h-[30vh]" />
            <img src="/carousel/2.jpg" className="object-cover h-[30vh]" />
            <img src="/carousel/3.jpg" className="object-cover h-[30vh]" />
            <img src="/carousel/1.jpg" className="object-cover h-[30vh]" />
            <img src="/carousel/2.jpg" className="object-cover h-[30vh]" />
            <img src="/carousel/3.jpg" className="object-cover h-[30vh]" />
          </div>
        </Marquee>
      </div>
    </>
  );
}
