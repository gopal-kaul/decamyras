import Image from "next/image";
import { Fade } from "react-reveal";
import logo from "../../public/logo.png";
import { useState } from "react";
import Navlinks from "./Navlinks";

export default function Navbar({ ...props }) {
  const [menu, setMenu] = useState(false);
  return (
    <Fade>
      <nav
        className="flex flex-col bg-[#1a1a1a] text-gold font-graphik z-20 py-2.5"
        {...props}
      >
        <div className="flex flex-row justify-between items-center relative px-[10%] md:px-[5%]">
          <div className="w-1/4 flex flex-row items-center gap-6 md:gap-10">
            <Image
              src={logo}
              className="w-[10vw] md:w-[4vw] h-auto aspect-square"
            />
            <div className="">
              <h2 className="font-artifexCF font-bold text-2xl lg:text-[2vw] tracking-widest leading-tight pt-2 md:pt-2">
                Decamyra&apos;s
              </h2>
              <p className="font-utsaah text-md lg:text-[1.4vw] tracking-wide text-white/80">
                A Luxury Living
              </p>
            </div>
          </div>
          <div className="md:hidden z-50">
            <div
              id="nav-icon"
              className={menu ? "open" : ""}
              onClick={() => setMenu((old) => !old)}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <style jsx>
              {`
                #nav-icon {
                  width: 40px;
                  height: 20px;
                  position: relative;
                  -webkit-transform: rotate(0deg);
                  -moz-transform: rotate(0deg);
                  -o-transform: rotate(0deg);
                  transform: rotate(0deg);
                  -webkit-transition: 0.5s ease-in-out;
                  -moz-transition: 0.5s ease-in-out;
                  -o-transition: 0.5s ease-in-out;
                  transition: 0.5s ease-in-out;
                  cursor: pointer;
                }

                #nav-icon span {
                  display: block;
                  position: absolute;
                  height: 3px;
                  width: 100%;
                  background: #f0dc82;
                  border-radius: 3px;
                  opacity: 1;
                  left: 0;
                  -webkit-transform: rotate(0deg);
                  -moz-transform: rotate(0deg);
                  -o-transform: rotate(0deg);
                  transform: rotate(0deg);
                  -webkit-transition: 0.25s ease-in-out;
                  -moz-transition: 0.25s ease-in-out;
                  -o-transition: 0.25s ease-in-out;
                  transition: 0.25s ease-in-out;
                }
                #nav-icon span:nth-child(1) {
                  top: 0px;
                }

                #nav-icon span:nth-child(2),
                #nav-icon span:nth-child(3) {
                  top: 10px;
                }

                #nav-icon span:nth-child(4) {
                  top: 20px;
                }

                #nav-icon.open span:nth-child(1) {
                  top: 10px;
                  width: 0%;
                  left: 50%;
                }

                #nav-icon.open span:nth-child(2) {
                  -webkit-transform: rotate(45deg);
                  -moz-transform: rotate(45deg);
                  -o-transform: rotate(45deg);
                  transform: rotate(45deg);
                }

                #nav-icon.open span:nth-child(3) {
                  -webkit-transform: rotate(-45deg);
                  -moz-transform: rotate(-45deg);
                  -o-transform: rotate(-45deg);
                  transform: rotate(-45deg);
                }

                #nav-icon.open span:nth-child(4) {
                  top: 10px;
                  width: 0%;
                  left: 50%;
                }
              `}
            </style>
            <ul
              onClick={() => setMenu(false)}
              className={`${
                menu ? "flex" : "hidden"
              } flex-col items-start uppercase font-utsaah text-2xl lg:text-[1.6vw] gap-8 absolute top-full pt-[10%] left-0 w-screen bg-[#1a1a1a] h-screen pl-[13%] z-50`}
            >
              <Navlinks />
            </ul>
          </div>
          <ul className="hidden md:flex flex-row items-center uppercase font-utsaah text-[1.6vw] pt-[1%] gap-10">
            <Navlinks />
          </ul>
        </div>
      </nav>
    </Fade>
  );
}
