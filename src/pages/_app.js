import "@/styles/globals.css";
import localFont from "@next/font/local";
import Navbar from "@/components/Navbar";
import { Open_Sans } from "@next/font/google";
import Footer from "@/components/Footer";
import { useEffect, useRef } from "react";
const artifexCF = localFont({
  src: "../fonts/ArtifexCF/ArtifexCF-Regular.woff2",
  variable: "--font-artifexCF",
});
const opensans = Open_Sans({ subsets: ["latin"], variable: "--font-opensans" });
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
const graphik = localFont({
  src: [
    {
      path: "../fonts/Graphik/GraphikBlack.otf",
      weight: "800",
      style: "normal",
    },
    {
      weight: "800",
      style: "italic",
      path: "../fonts/Graphik/GraphikBlackItalic.otf",
    },
    {
      weight: "700",
      path: "../fonts/Graphik/GraphikBold.otf",
    },
    {
      weight: "700",
      style: "italic",
      path: "../fonts/Graphik/GraphikBoldItalic.otf",
    },
    {
      path: "../fonts/Graphik/GraphikExtralight.otf",
      weight: "200",
    },
    {
      weight: "200",
      style: "italic",
      path: "../fonts/Graphik/GraphikExtralightItalic.otf",
    },
    {
      weight: "300",
      path: "../fonts/Graphik/GraphikLight.otf",
    },
    {
      path: "../fonts/Graphik/GraphikLightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../fonts/Graphik/GraphikMedium.otf",
      style: "600",
    },
    {
      style: "italic",
      weight: "600",
      path: "../fonts/Graphik/GraphikMediumItalic.otf",
    },
    {
      path: "../fonts/Graphik/GraphikRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Graphik/GraphikRegularItalic.otf",
      style: "italic",
    },
    {
      path: "../fonts/Graphik/GraphikSemiboldItalic.otf",
      style: "italic",
      weight: "600",
    },
    {
      weight: "600",
      path: "../fonts/Graphik/GraphikSemibold.otf",
      style: "normal",
    },
    {
      path: "../fonts/Graphik/GraphikThin.otf",
      weight: "100",
    },
    {
      weight: "100",
      style: "italic",
      path: "../fonts/Graphik/GraphikThinItalic.otf",
    },
  ],
  variable: "--font-graphik",
});

export default function App({ Component, pageProps }) {
  const ref = useRef(null);
  useEffect(() => {
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
  }, []);
  return (
    <div
      className={` ${utsaah.variable} ${artifexCF.variable} ${graphik.variable} ${opensans.variable} font-sans scroll-smooth w-screen h-screen overflow-hidden bg-[#1a1a1a]`}
    >
      <Navbar />
      <main ref={ref} className={`overflow-y-scroll w-full px-4`}>
        <Component {...pageProps} />
      </main>
    </div>
  );
}
