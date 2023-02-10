import Head from "next/head";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Modal from "react-modal";
export default function ProductDetail() {
  const [modal, setModal] = useState(false);
  return (
    <>
      <Head>
        <title>Products | Decamyra&apos;s</title>
        <meta name="description" content="Decamyra's" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="bg-bgWhite min-h-full px-4 md:px-20 flex flex-col md:flex-row gap-x-10">
        <div className="bg-[#cccccc]/20 w-full md:w-[15%] min-h-full flex flex-col justify-center items-center gap-y-4 text-4xl">
          <button className="rounded-md shadow-2xl px-4 py-2 text-center bg-white ease-in-out transition-transform hover:scale-[1.2] w-fit">
            F&amp;B Linen
          </button>
          <button className="rounded-md shadow-2xl px-4 py-2 text-center bg-white ease-in-out transition-transform hover:scale-[1.2] w-fit">
            F&amp;B Linen
          </button>
          <button className="rounded-md shadow-2xl px-4 py-2 text-center bg-white ease-in-out transition-transform hover:scale-[1.2] w-fit">
            F&amp;B Linen
          </button>
          <button className="rounded-md shadow-2xl px-4 py-2 text-center bg-white ease-in-out transition-transform hover:scale-[1.2] w-fit">
            F&amp;B Linen
          </button>
          <button className="rounded-md shadow-2xl px-4 py-2 text-center bg-white ease-in-out transition-transform hover:scale-[1.2] w-fit">
            F&amp;B Linen
          </button>
          <button className="rounded-md shadow-2xl px-4 py-2 text-center bg-white ease-in-out transition-transform hover:scale-[1.2] w-fit">
            F&amp;B Linen
          </button>
          <button className="rounded-md shadow-2xl px-4 py-2 text-center bg-white ease-in-out transition-transform hover:scale-[1.2] w-fit">
            F&amp;B Linen
          </button>
          <button className="rounded-md shadow-2xl px-4 py-2 text-center bg-white ease-in-out transition-transform hover:scale-[1.2] w-fit">
            F&amp;B Linen
          </button>
          <button className="rounded-md shadow-2xl px-4 py-2 text-center bg-white ease-in-out transition-transform hover:scale-[1.2] w-fit">
            F&amp;B Linen
          </button>
          <button className="rounded-md shadow-2xl px-4 py-2 text-center bg-white ease-in-out transition-transform hover:scale-[1.2] w-fit">
            F&amp;B Linen
          </button>
        </div>
        <div className="bg-white w-full md:w-[85%] min-h-full py-5">
          <h2 className="font-bold text-center text-5xl">F&amp;B Linen</h2>
          <div className="flex flex-col justify-between min-h-[93%] py-[5%]">
            <div className="flex flex-col md:flex-row gap-x-10">
              <Carousel
                showThumbs={false}
                autoPlay
                infiniteLoop
                showStatus={false}
                className="md:w-1/2"
              >
                <div className="">
                  <img
                    src="/productcarousel/carousel1.jpg"
                    className="object-cover"
                  />
                </div>
                <div className="">
                  <img
                    src="/productcarousel/carousel2.jpg"
                    className="object-cover"
                  />
                </div>
              </Carousel>
              <div className="md:w-1/2 min-h-full">
                <h3 className="text-center text-3xl font-bold">All Products</h3>
                <div className="grid grid-cols-2 gap-y-10 py-8 text-xl place-items-center">
                  <p>Item</p>
                  <p>Item</p>
                  <p>Item</p>
                  <p>Item</p>
                  <p>Item</p>
                  <p>Item</p>
                  <p>Item</p>
                  <p>Item</p>
                  <p>Item</p>
                  <p>Item</p>
                </div>
              </div>
            </div>
            <div className="grid place-items-center">
              <button
                onClick={() => setModal((old) => !old)}
                className="uppercase bg-gold text-gray transition-[padding] duration-300 ease-in-out w-fit px-10 hover:px-14 font-bold py-2"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modal}
        shouldCloseOnOverlayClick
        onRequestClose={() => setModal(false)}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
          overlay: {
            backdropFilter: "blur(4px)",
          },
        }}
      >
        <form action="" className="grid grid-cols-3 gap-y-10 gap-x-10 text-xl">
          Here is the form content
        </form>
      </Modal>
    </>
  );
}
