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
      <div className="bg-bgWhite min-h-full grid place-items-center gap-y-10 md:gap-y-0 px-4 md:px-20 rounded-lg">
        <div className="w-full shadow-lg md:shadow-2xl py-10 rounded-2xl hover:scale-105 transition-all duration-300 ease-in-out hover:border-4 border-gold px-5">
          <h2 className="font-bold text-3xl">Our Company</h2>
          <div className="bg-gold w-20 h-1 mt-1 mb-3"></div>
          <p className="text-xl">
            Decamyra&apos;s is an unit of Value Gain Distributors Private
            Limited. Value Gain Distributors was established in 2012. We are the
            manufacturer of Linen. The state-of-the-art laboratory provide the
            ideal platform to conduct exhaustive quality checks during every
            stage of production to ensure that the best product reaches the
            customer. We offer a broad selection of finest quality of Bed & Bath
            Linens, F&B, Banquet linens and also uniforms. Currently we cater to
            Hotels, Hospitals, Restaurants, Spas, Corporates, Institutions &
            Multi National Companies. We also customize the linen as per the
            customer&apos;s requirement to suit their needs.
          </p>
        </div>
        <div className="space-y-10 w-full">
          <h2 className="text-center hover:scale-105 transition-transform duration-300 ease-in-out font-bold text-3xl">
            Our Clientele
          </h2>
          <Marquee
            className="md:py-10 h-full"
            height="200px"
            width="100%"
            duration={30000}
            reverse={true}
            align="center"
          >
            <div className="flex flex-row gap-x-5 md:gap-x-16 items-center h-[200px] md:h-[200px] w-max">
              <img
                src="/clients/accor.webp"
                className="object-contain w-auto h-full"
              />
              <img
                src="/clients/google.webp"
                className="object-contain w-auto h-full"
              />
              <img
                src="/clients/taj.webp"
                className="object-contain w-auto h-full"
              />
              <img
                src="/clients/genpact.webp"
                className="object-contain w-auto h-full"
              />
              <img
                src="/clients/holidayinn.webp"
                className="object-contain w-auto h-full"
              />
              <img
                src="/clients/drreddys.webp"
                className="object-contain w-auto h-full"
              />
              <img
                src="/clients/itc.webp"
                className="object-contain w-auto h-full"
              />
              <img
                src="/clients/marriott.webp"
                className="object-contain w-auto h-full"
              />
              <img
                src="/clients/mayfair.webp"
                className="object-contain w-auto h-full"
              />
              <img
                src="/clients/novotel.webp"
                className="object-contain w-auto h-full"
              />
              <img
                src="/clients/parkhyatt.webp"
                className="object-contain w-auto h-full"
              />
              <img
                src="/clients/swosti.webp"
                className="object-contain w-auto h-full"
              />
              <img
                src="/clients/techmahindra.webp"
                className="object-contain w-auto h-full"
              />
              <img
                src="/clients/telanganatourism.webp"
                className="object-contain w-auto h-full"
              />
              <img
                src="/clients/westin.svg"
                className="object-contain h-full w-auto"
              />
            </div>
          </Marquee>
        </div>
      </div>
    </>
  );
}
