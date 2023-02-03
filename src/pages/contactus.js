import { MdOutlineLocalPhone, MdOutlineEmail } from "react-icons/md";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Contact Us | Decamyra&apos;s</title>
        <meta name="description" content="Decamyra's" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex justify-center items-center flex-col min-h-full bg-white gap-y-[10%]">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full place-content-evenly place-items-center py-10">
          <a
            className="flex flex-row items-center gap-2"
            href="tel:+911234123412"
          >
            <MdOutlineLocalPhone />
            +91-1234567890
          </a>
          <a
            className="flex flex-row items-center gap-2"
            href="mailto:info@decamyras.com"
          >
            <MdOutlineEmail />
            info@decamyras.com
          </a>
        </div>
        <div className="flex flex-col md:flex-row w-full gap-y-5 md:gap-0 grow pb-4 md:pb-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4843388213676!2d78.4902006!3d17.436517399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a1bb1955555%3A0x7ff18a28fa08c210!2sGovdan%20Group!5e0!3m2!1sen!2sin!4v1675441974338!5m2!1sen!2sin"
            allowfullscreen=""
            className="w-full md:w-1/2 min-h-[50vh] md:min-h-full"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <form
            action="#"
            method="post"
            className="px-4 flex flex-col gap-3 w-1/2"
          >
            <label className="font-bold">Name</label>
            <input
              placeholder="John Doe"
              type="text"
              name="name"
              className="focus:outline-none ring-2 focus:ring-4 ring-gold px-1 py-1 w-fit focus:rounded-sm"
            />
            <label className="font-bold">Email</label>
            <input
              placeholder="johndoe@gmail.com"
              type="email"
              name="email"
              className="focus:outline-none ring-2 focus:ring-4 ring-gold px-1 py-1 w-fit focus:rounded-sm"
            />
            <button type="submit" className="uppercase bg-[#1a1a1a] text-gold transition-colors duration-300 ease-in-out hover:bg-gold hover:text-[#1a1a1a] w-fit px-10 font-bold py-3">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
