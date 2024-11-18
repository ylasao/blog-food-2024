import React from "react";
import Image from "next/image";
import img1 from "../../../../public/video/video11.png";
import img2 from "../../../../public/video/video10.png";
import WrapContainer from "@/app/components/WrapContainer";
import WrapContainerVideo from "@/app/components/WrapContainerVideo";
import background from "../../../../public/background.png";
import Goback from "@/app/components/Back/Goback";
import { MdOutlineEditNote } from "react-icons/md";
import "@/app/globals.css";
const Page = () => {
  return (
    <WrapContainer className="">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
        <div className="md:col-span-9 p-2 m-auto">
          <div className="">
            <Goback />
            <div className="nameVideo">
              <h2 className="font-bold text-black/70 motion-preset-slide-right motion-duration-500  motion-delay-[400ms] text-[1.2rem] md:text-[1.3rem] my-4">
                Lorem ipsum dolor sit amet text-slate-500 consectetur
              </h2>
            </div>
            <div className="wrap-video">
              <video
                muted
                controls
                autoPlay={true}
                src="/video.mp4"
                className="mb-6 rounded-lg motion-preset-compress motion-delay-[500ms]"
              ></video>
            </div>

            <div className="description mt-5">
              <h2 className="text-yellow-600 font-bold py-5 text-center lg:text-start">
                Description
              </h2>
              <p className="text-slate-500/70 py-4motion-preset-slide-right motion-duration-500 motion-delay-[600ms]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem corporis quisquam fuga, eius impedit delectus non
                cumque nostrum totam eveniet id perspiciatis nemo corrupti vel
                ipsam illo excepturi amet iure!
              </p>
              <p className="text-slate-500/70 mt-3 motion-preset-slide-right motion-duration-500 motion-delay-[700ms]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid iusto beatae aut dolorem quis facere autem. Eveniet
                eaque vitae reiciendis ipsam at fuga eum? Blanditiis aliquid
                laboriosam dolor ab quidem.
              </p>
            </div>
          </div>
        </div>
        <div className="md:col-span-3">
          <div className="note p-2 rounded-lg mb-2">
            <div className=" rounded-lg border-solid border-1 border-slate-500 p-2">
              <h2 className="text-yellow-600 font-bold p-2 text-center rounded-md capitalize motion-preset-slide-right motion-duration-500 motion-delay-[800ms]">
                Note anything
              </h2>
              <div className="mt-4 flex items-center justify-between">
                <p className="capitalize text-sm text-slate-500 font-bold motion-preset-slide-right motion-duration-500 motion-delay-[900ms]">
                  NOTE
                </p>
                <MdOutlineEditNote className="text-slate-500 text-[1.3rem]" />
              </div>
              <div className="mt-4  motion-preset-slide-right motion-duration-500 motion-delay-[1000ms]">
                <ul>
                  <li className="border-b border-dashed border-b-slate-400 text-slate-400 py-2">
                    Thong tin cua ban
                  </li>
                  <li className="border-b border-dashed border-b-slate-400 text-slate-400 py-2">
                    Thong tin cua ban
                  </li>
                  <li className="border-b border-dashed border-b-slate-400 text-slate-400 py-2">
                    Thong tin cua ban
                  </li>
                  <li className="border-b border-dashed border-b-slate-400 text-slate-400 py-2">
                    Thong tin cua ban
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" p-2 rounded-lg ">
            <h2 className=" text-[16px] text-yellow-600  font-bold p-2 text-center rounded-md capitalize motion-preset-slide-right motion-duration-500 motion-delay-[1100ms]">
              Suggest
            </h2>
            <div className=" rounded-lg p-2  motion-preset-slide-right motion-duration-500 motion-delay-[1200ms]">
              <div className="flex mb-3 items-start">
                <div className="wrap-video w-1/3">
                  <Image className="rounded-lg" src={img2} alt="" />
                </div>
                <div className="content w-2/3">
                  <h2 className="text-sm text-slate-500  capitalize  ml-3">
                    Earum optio error, aspernatur laborum
                  </h2>
                </div>
              </div>
              <div className="flex mb-3 items-start">
                <div className="wrap-video w-1/3">
                  <Image className="rounded-lg" src={img2} alt="" />
                </div>
                <div className="content w-2/3">
                  <h2 className="text-sm text-slate-500  capitalize  ml-3">
                    Earum optio error, aspernatur laborum
                  </h2>
                </div>
              </div>
              <div className="flex mb-3 items-start">
                <div className="wrap-video w-1/3">
                  <Image className="rounded-lg" src={img2} alt="" />
                  <div className=""></div>
                </div>

                <div className="content w-2/3">
                  <h2 className="text-sm text-slate-500  capitalize  ml-3">
                    Earum optio error, aspernatur laborum
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WrapContainer>
  );
};

export default Page;
