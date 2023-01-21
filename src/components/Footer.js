import { HiPhone } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
export default function Footer({ className }) {
  return (
    <footer
      className={`w-full font-utsaah bg-[#1a1a1a] text-gold px-[10%] ${className}`}
    >
      <div className="flex flex-row justify-between pt-[2%] text-2xl">
        <div>
          <h3 className="font-bold text-3xl pb-4 font-graphik">Address</h3>
          <p className="leading-[1.25]">
            Decamyra&apos;s
            <br />
            Hyderabad
            <br />
            Telangana
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold text-3xl pb-4 font-graphik">Contact Us</h3>
          <div className="flex flex-row items-center gap-1">
            <HiPhone />
            <a href="tel:#">+91-1234123412</a>
          </div>
          <div className="flex flex-row items-center gap-1">
            <MdEmail />
            <a href="mailto:#">user@user.com</a>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-3xl pb-4 font-graphik">Socials</h3>
          <div className="flex flex-row items-center gap-2">
            <BsFacebook />
            <a href="#">Facebook</a>
          </div>
          <div className="flex flex-row items-center gap-2">
            <BsInstagram />
            <a href="#">Instagram</a>
          </div>
          <div className="flex flex-row items-center gap-2">
            <BsTwitter />
            <a href="#">Twitter</a>
          </div>
        </div>
      </div>
      <p className="text-center py-2">
        &copy; Copyright 2023 <span className="font-bold">Decamyra&apos;s</span>
      </p>
    </footer>
  );
}
