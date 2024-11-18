import React from "react";
import Link from "next/link";
//component
import WrapContainer from "../WrapContainer";
import ToggleContent from "../ToggleContent/ToggleContent";
// icon
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
//

const Footer = () => {
  return (
    <footer className="footer mt-10  bg-yellow-500 ">
      <WrapContainer className="p-2">
        <div className="footer-container grid grid-cols-1 lg:grid-cols-2 py-[100px]">
          <div className="footer-nav order-2 lg:order-1">
            <div className="wrap-nav lg:flex lg:items-start lg:justify-between">
              <ToggleContent
                title="Company"
                content={[
                  "About",
                  "Podcast",
                  "Network",
                  "Event",
                  "Communicate"
                ]}
              />
              <ToggleContent
                title="Get Help"
                content={[
                  "Contact",
                  "Register",
                  "Food",
                  "Order",
                  "Communicate"
                ]}
              />
              <ToggleContent
                title="explore"
                content={["The shop", "recipe", "food", "travel", "hotline"]}
              />
            </div>
          </div>
          <div className="footer-action order-1 lg:order-2">
            <div className="footer-social-link py-6">
              <ul className="flex justify-center items-center">
                <li className="mx-2">
                  <Link href="#">
                    <FaFacebookF className="text-white w-6 h-6 hover:translate-x-2 duration-300 transition-all hover:text-white/80 " />
                  </Link>
                </li>
                <li className="mx-2">
                  <Link href="#">
                    <FaInstagram className="text-white w-6 h-6 hover:translate-x-2 duration-300 transition-all hover:text-white/80 " />
                  </Link>
                </li>
                <li className="mx-2">
                  <Link href="#">
                    <FaTwitter className="text-white w-6 h-6 hover:translate-x-2 duration-300 transition-all hover:text-white/80 " />
                  </Link>
                </li>
                <li className="mx-2">
                  <Link href="#">
                    <FaPinterestP className="text-white w-6 h-6 hover:translate-x-2 duration-300 transition-all hover:text-white/80 " />
                  </Link>
                </li>
                <li className="mx-2">
                  <Link href="#">
                    <FaYoutube className="text-white w-6 h-6 hover:translate-x-2 duration-300 transition-all hover:text-white/80 " />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-mailing-list flex flex-col justify-center">
              <h4 className="text-center text-white capitalize font-semibold text-[1.5rem]">
                Sign up for our newsletter
              </h4>
              <p className="text-center my-4 text-sm text-white">
                Our best tips for eating thoughtfully and living joyfully, right
                in your inbox.
              </p>
            </div>
            <div className="box-mailing my-3">
              <form action="#">
                <div className="flex justify-center">
                  <div className="wrap-input flex flex-col">
                    {/* <label htmlFor="email" className="text-white text-[12px]">
                      Email
                    </label> */}
                    <input
                      type="email"
                      id="email"
                      placeholder="hello1234@gmail.com"
                      className="italic text-[16px] outline-none p-3 bg-white"
                    />
                  </div>
                  <button className="text-sm capitalize text-white px-2 bg-slate-800 ">
                    sign un
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </WrapContainer>
    </footer>
  );
};

export default Footer;
