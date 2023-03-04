import Head from "next/head";
import Marquee from "react-easy-marquee";
export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us | Decamyra&apos;s</title>
        <meta name="description" content="Decamyra's" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="bg-bgWhite min-h-full grid place-items-center px-4 md:px-20 rounded-lg">
        <div className="w-full shadow-lg md:shadow-2xl py-10 rounded-2xl hover:scale-105 transition-all duration-300 ease-in-out hover:border-4 border-gold px-5">
          <h2 className="font-bold text-3xl">Our Company</h2>
          <div className="bg-gold w-20 h-1 mt-1 mb-3"></div>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ratione
            vero possimus nisi voluptatum quibusdam atque a dolor, voluptate
            tempora sunt maxime ad quos eligendi mollitia distinctio modi, magni
            hic beatae minus tempore pariatur provident sapiente. Soluta
            assumenda itaque excepturi.
          </p>
        </div>
        <div className="space-y-10 w-full">
          <h2 className="text-center hover:scale-105 transition-transform duration-300 ease-in-out font-bold text-3xl">
            Our Clientele
          </h2>
          <Marquee
            className="bg-black py-10"
            height="400px"
            width="100%"
            reverse={true}
            align="center"
          >
            <div className="flex flex-row gap-10">
              <img
                src="/carousel/1.jpg"
                className="object-contain h-[400px] w-auto"
              />
              <img
                src="/carousel/2.jpg"
                className="object-contain h-[400px] w-auto"
              />
              <img
                src="/carousel/3.jpg"
                className="object-contain h-[400px] w-auto"
              />
              <img
                src="/carousel/1.jpg"
                className="object-contain h-[400px] w-auto"
              />
              <img
                src="/carousel/2.jpg"
                className="object-contain h-[400px] w-auto"
              />
            </div>
          </Marquee>
        </div>
      </div>
    </>
  );
}
