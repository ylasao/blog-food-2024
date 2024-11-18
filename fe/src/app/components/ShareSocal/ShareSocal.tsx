import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
const listSocal = [FaFacebookF, FaTwitter, MdOutlineEmail];

const ShareSocal = () => {
  return (
    <div className="motion-preset-slide-right motion-duration-500 text-[14px] my-6 capitalize text-slate-500 flex items-center justify-center motion-delay-[900ms]">
      {listSocal.map((Icon, index) => (
        <span className="text-yellow-600 author mx-3">
          <Icon className="w-5 h-5 lg:w-6 lg:h-6 hover:translate-y-2 transition-all duration-300 cursor-pointer " />
        </span>
      ))}
    </div>
  );
};

export default ShareSocal;
