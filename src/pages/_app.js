import "@/styles/globals.css";
import localFont from "@next/font/local";
import Navbar from "@/components/Navbar";
import { Quicksand } from "@next/font/google";
import Footer from "@/components/Footer";
import { useEffect, useRef } from "react";
const artifexCF = localFont({
  src: "../fonts/ArtifexCF/ArtifexCF-Regular.woff2",
  variable: "--font-artifexCF",
});
const utsaah = localFont({
  src: [
    {
      path: "../fonts/Utsaah/utsaah.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Utsaah/utsaahb.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Utsaah/utsaahi.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/Utsaah/utsaahbi.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-utsaah",
});
const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  const ref = useRef(null);
  useEffect(() => {
    const setContainer = () => {
      ref.current.style.maxHeight =
        window.innerHeight -
        document.querySelector("nav").clientHeight -
        16 +
        "px";
      ref.current.style.minHeight =
        window.innerHeight -
        document.querySelector("nav").clientHeight -
        16 +
        "px";
      ref.current.style.height =
        window.innerHeight -
        document.querySelector("nav").clientHeight -
        16 +
        "px";
    };
    setContainer();
    window.addEventListener("resize", setContainer);
    return () => {
      window.removeEventListener("resize", setContainer);
    };
  }, []);
  return (
    <div
      className={`${artifexCF.variable} ${utsaah.variable} ${quicksand.variable} font-sans scroll-smooth w-screen h-screen overflow-hidden bg-[#1a1a1a]`}
    >
      <div className="relative z-[1000]">
        <div className="sticky w-full h-full top-0 left-0">
          <Navbar />
        </div>
      </div>
      <main
        ref={ref}
        className={`overflow-y-scroll w-full px-4 font-quicksand`}
      >
        <Component {...pageProps} />
      </main>
    </div>
  );
}
