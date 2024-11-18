// import component
import WrapContainer from "./components/WrapContainer";
import Search from "./components/Icons/Search";
import CartPost from "./components/ShowPost/CartPost";
import Flower from "./components/Flower/Flower";
import ViewAll from "./components/viewAll/ViewAll";
import RecipeHeader from "./components/RecipeHeader/RecipeHeader";
import Recipe from "./pages/recipe";
//icon import
import { CiCircleRemove } from "react-icons/ci";
// import pack next
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
// import library
import clsx from "clsx";
// import icons react
import { FiGift } from "react-icons/fi";
import { CiStar } from "react-icons/ci";
import { IoIosStar } from "react-icons/io";
// import image
import img2 from "../../public/flower-2.png";
import img3 from "../../public/flower-3.png";
import img4 from "../../public/flower-4.png";

interface Product {
  id: number;
  name: string;
  image: string;
}
const products: Product[] = [
  { id: 1, name: "Dinner", image: "https://picsum.photos/200/300" },
  { id: 2, name: "potato", image: "https://picsum.photos/200/301" },
  { id: 3, name: "salad", image: "https://picsum.photos/200/302" },
  { id: 4, name: "soup", image: "https://picsum.photos/200/303" },
  { id: 5, name: "pasta", image: "https://picsum.photos/200/304" },
  { id: 6, name: "salmon", image: "https://picsum.photos/200/305" },
  { id: 7, name: "shrimp", image: "https://picsum.photos/200/306" },
  { id: 8, name: "Nodule", image: "https://picsum.photos/200/307" }
];

export default function Home() {
  return (
    <>
      <WrapContainer className="">
        <section className="mx-6">
          <div className="content-container">
            <h1 className="text-slate-900 motion-preset-rebound-down motion-delay-[1100ms]  be-vietnam-pro-bold text-[2rem] uppercase font-bold text-center mt-[30px] mb-[20px]">
              Công thức
            </h1>
            <div className="search-recipe motion-preset-rebound-down motion-delay-[1200ms] lg:mx-[200px]">
              <div className="flex items-center border border-slate-500/30 hover:border-slate-500 duration-200 transition-all px-4">
                <form action="#" className="w-3/4">
                  <input
                    type="text"
                    placeholder="Search recipe ..."
                    className="italic w-full text-slate-500 p-2 outline-none border-none"
                  />
                </form>
                <div className="w-1/4 flex items-center justify-end">
                  <Search className=" cursor-pointer hover:text-slate-900 text-slate-500 text-[24px] mr-10" />
                  <CiCircleRemove className=" cursor-pointer hover:text-slate-900 text-slate-500 text-[24px]" />
                </div>
              </div>
            </div>
            <div className="list_recipes mt-10">
              <div
                className={clsx(
                  "overflow-scroll lg:overflow-hidden scroll-smooth mb-6 -mx-[16px] w-[100% + 32px]"
                )}
              >
                <ul className="flex items-center lg:justify-center pb-[16px] br-[16px]">
                  {products.map((item, index) => {
                    return (
                      <li
                        className="pr-6 motion-preset-rebound-down motion-delay-[1400ms]"
                        key={index}
                      >
                        <Link href="#" className="block">
                          <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
                            <img
                              src={item.image}
                              className="w-full hover:scale-110 duration-300 transition-all  object-cover"
                            />
                          </div>
                          <p className="text-slate-500 text-[18px] text-center capitalize hover:text-slate-900 duration-300 transition-all mt-3 text-sm">
                            {item.name}
                          </p>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* video introduction */}
        <section className="content-container px-[16px] mt-10">
          <div className="motion-preset-rebound-down motion-delay-[1500ms]  text-center mb-5 text-slate-500 text-[20px]">
            Featured Recipe
          </div>
          <Flower
            image={img2}
            className="motion-preset-rebound-down motion-delay-[1600ms]"
          />
          <div className="video lg:flex lg:items-start mt-5 lg:mt-8">
            <div className="lg:order-2 lg:ml-5 lg:w-7/12">
              <video
                loop={true}
                autoPlay={true}
                src="/video.mp4"
                className="mb-6 motion-preset-rebound-down motion-delay-[1800ms]"
              ></video>
            </div>
            <div className="lg:order-1 lg:mr-5 lg:w-5/12 lg:text-left">
              <h2 className="motion-preset-slide-right motion-duration-500 motion-delay-[2000ms]  video-heading lg:text-left text-center text-slate-800 text-[1.5rem]">
                Epic Snickerdoodles From Jessie Sheehan
              </h2>
              <p className="motion-preset-slide-right motion-duration-500 motion-delay-[2000ms]  video-description lg:text-left  text-[1.2rem] mt-4 text-center leading-[2rem] text-slate-600">
                These snickerdoodles from Jessie Sheehan are slightly puffy,
                soft-middled, crispy-edged, and delish!
              </p>
              <Link
                href="#"
                className="lg:order-3 order-4 lg:col-start-1  lg:flex-none lg:justify-start flex justify-center mt-10 "
              >
                <button className="motion-preset-rebound-down motion-delay-[2200ms] px-[20px] capitalize  py-[8px] text-[1.4rem] font-thin bg-amber-700/60 hover:bg-amber-700 duration-300 transition-all text-white ">
                  view recipe
                </button>
              </Link>
            </div>
          </div>
        </section>
        {/* list post recipe */}
        <Flower image={img3} className="pt-10 motion-preset-rebound-down motion-delay-[2300ms]" />
        <Recipe />
      </WrapContainer>
    </>
  );
}
