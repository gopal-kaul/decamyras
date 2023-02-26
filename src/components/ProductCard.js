import Link from "next/link";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";

export default function ProductCard({ product }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <button
      onMouseEnter={(e) => {
        e.preventDefault();
        setFlipped((old) => !old);
      }}
      onMouseLeave={(e) => {
        e.preventDefault();
        setFlipped((old) => !old);
      }}
      onClick={(e) => {
        e.preventDefault();
        if (e.target === e.currentTarget) setFlipped((old) => !old);
      }}
      className="shadow-xl rounded-3xl w-full sm:w-1/3 md:w-1/4 lg:w-1/6 cursor-pointer"
    >
      <ReactCardFlip isFlipped={flipped}>
        <div className="relative">
          <img
            src={`/products/${product.coverImage}`}
            className="object-cover z-10 rounded-3xl"
          />
          <div className="absolute bottom-0 left-0 w-full text-center rounded-3xl bg-opacity-50 bg-cardWhite">
            <h2 className="font-bold py-1 text-xl">{product.name}</h2>
          </div>
        </div>
        <div className="bg-white w-full h-full rounded-3xl border border-gold">
          <div className="relative">
            <img
              src={`/products/${product.coverImage}`}
              className="object-cover z-10 rounded-3xl opacity-0"
            />

            <div className="absolute top-0 left-0 py-[10%] px-[10%] flex flex-col h-full justify-between">
              <div className="">
                <h2 className="font-bold text-xl text-center pb-[5%]">
                  {product.name}
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, veritatis!
                </p>
              </div>
              <div className="grid place-items-center">
                <Link
                  className="uppercase bg-gold text-gray transition-[padding] duration-300 ease-in-out w-fit px-10 hover:px-14 font-bold py-2"
                  href={`/products/${product.name
                    .replace(" ", "-")
                    .toLowerCase()}`}
                >
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </ReactCardFlip>
    </button>
  );
}
