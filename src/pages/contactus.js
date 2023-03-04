import { MdOutlineLocalPhone, MdOutlineEmail } from "react-icons/md";
import Select from "react-select/";
import Head from "next/head";
export default function ContactUs() {
  return (
    <>
      <Head>
        <title>Contact Us | Decamyra&apos;s</title>
        <meta name="description" content="Decamyra's" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex justify-center items-center flex-col min-h-full bg-bgWhite gap-y-[10%] rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-y-4 place-content-evenly place-items-center py-5">
          <a
            className="flex flex-row items-center gap-4 border-4 border-gold shadow-lg px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out font-semibold"
            href="tel:+911234123412"
          >
            <MdOutlineLocalPhone />
            +91-1234567890
          </a>
          <a
            className="flex flex-row items-center gap-4 border-4 border-gold shadow-lg px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out font-semibold"
            href="mailto:info@decamyras.com"
          >
            <MdOutlineEmail />
            info@decamyras.com
          </a>
        </div>
        <div className="flex flex-col md:flex-row w-full gap-y-5 gap-x-10 grow pb-20 md:pb-2 px-4 h-fit md:px-20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4843388213676!2d78.4902006!3d17.436517399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a1bb1955555%3A0x7ff18a28fa08c210!2sGovdan%20Group!5e0!3m2!1sen!2sin!4v1675441974338!5m2!1sen!2sin"
            loading="lazy"
            className="w-full md:w-[40%] min-h-[35vh] md:min-h-full"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <form
            action="#"
            method="post"
            className="px-4 py-8 md:px-10 md:py-20 flex flex-col justify-between gap-3 md:w-[60%] bg-gray rounded-lg"
          >
            <div className="flex flex-col md:flex-row justify-between gap-y-3 gap-x-10">
              <div className="flex flex-col gap-3 w-full md:w-[35%]">
                <div className="flex flex-col gap-3">
                  <label className="font-bold text-white">Name</label>
                  <input
                    placeholder="John Doe"
                    type="text"
                    name="name"
                    className="focus:outline-none ring-2 focus:ring-4 ring-gold px-2 py-1 w-full rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="font-bold text-white">Organization</label>
                  <input
                    placeholder="Company"
                    type="text"
                    name="organization"
                    className="focus:outline-none ring-2 focus:ring-4 ring-gold px-2 py-1 w-full rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="font-bold text-white">Location</label>
                  <input
                    placeholder="Location"
                    type="text"
                    name="location"
                    className="focus:outline-none ring-2 focus:ring-4 ring-gold px-2 py-1 w-full rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="font-bold text-white">Phone Number</label>
                  <input
                    placeholder="+91-1234567890"
                    type="text"
                    name="phone"
                    className="focus:outline-none ring-2 focus:ring-4 ring-gold px-2 py-1 w-full rounded-lg"
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <label className="font-bold text-white">Email Address</label>
                  <input
                    placeholder="johndoe@gmail.com"
                    type="email"
                    name="email"
                    className="focus:outline-none ring-2 focus:ring-4 ring-gold px-2 py-1 w-full rounded-lg"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3 w-full md:w-[55%]">
                <label className="font-bold text-white">
                  Additional Information
                </label>
                <textarea
                  name="info"
                  className="focus:outline-none ring-2 focus:ring-4 ring-gold px-2 py-1 w-full rounded-lg min-h-[85%]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label className="font-bold text-white">
                Interested Products
              </label>
              <Select
                isMulti
                closeMenuOnSelect={false}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,

                  colors: {
                    ...theme.colors,
                    primary25: "#F0DC82",
                    primary50: "#F0DC82",
                    primary: "#F0DC82",
                  },
                })}
                className="w-full focus:outline-none border-2 focus:border-4 border-gold px-1 py-1 rounded-lg"
                options={[
                  { value: "Linen", label: "Linen" },
                  { value: "Bedsheets", label: "Bedsheets" },
                  { value: "Placeholder", label: "Another placeholder" },
                ]}
              />
            </div>
            <div className="grid place-items-center">
              <button
                type="submit"
                className="uppercase bg-gold text-gray transition-[padding] duration-300 ease-in-out w-fit px-10 hover:px-14 font-bold py-2 rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
