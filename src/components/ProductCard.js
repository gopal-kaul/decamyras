import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";

export default function ProductCard({ product, index, setLoaded }) {
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
      className="shadow-xl rounded-3xl w-full sm:w-1/3 lg:w-1/4 h-[35vh] cursor-pointer"
    >
      <ReactCardFlip isFlipped={flipped}>
        <div className="relative h-[35vh]">
          <Image
            fill
            onLoadingComplete={() =>{
              setLoaded((old) => {
                let temp = [...old];
                temp[index] = true;
                return temp;
              })
            }
            }
            alt={product.name}
            src={`/products/${product.coverImage}`}
            className="object-cover w-full h-[35vh] z-10 rounded-3xl"
          />
          <div className="absolute bottom-0 left-0 w-full text-center rounded-3xl bg-opacity-50 bg-cardWhite z-20">
            <h2 className="font-bold py-1 text-xl">{product.name}</h2>
          </div>
        </div>
        <div className="bg-white w-full h-[35vh] rounded-3xl border border-gold">
          <div className="relative h-full">
            <div className="absolute top-0 left-0 py-[10%] px-[10%] flex flex-col h-full justify-between">
              <div className="">
                <h2 className="font-bold text-xl text-center pb-[5%]">
                  {product.name}
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Error, veritatis!
                </p>
              </div>
              <div className="grid place-items-center">
                <Link
                  className="uppercase bg-gold text-gray transition-[padding] duration-350 ease-in-out w-fit px-10 hover:px-14 font-bold py-2 rounded-md"
                  href={`/products/${product.name
                    .replaceAll(" ", "-")
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
