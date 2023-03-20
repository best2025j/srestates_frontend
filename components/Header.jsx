"use client";
import { useState } from "react";
import Image from "next/image";
import image from "../public/assets/images/HeaderLogo.png";
import darkmode from "../public/assets/svg/Darkmode.svg";
import lightmode from "../public/assets/svg/Lightmode.svg";
import menu from "../public/assets/svg/menu.svg";
import close from "../public/assets/svg/close.svg";
import Link from "next/link";
import "animate.css";
import { useTheme } from "next-themes";

export const Header = () => {
  const [nav, setNav] = useState(false);

  const handClick = () => {
    setNav(!nav);
  };

  const handClose = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-orange_light h-[87px] py-[10.5px] px-[64px] w-full fixed z-[10]">
      <div className="flex justify-between h-full items-center">
        <Link href="/">
          <Image src={image} alt="home" className="w-14 h-10" />
        </Link>

        <ul className="md:flex hidden space-x-10 items-center">
          <li>
            <Link
              href="/"
              className="text-orange10 underline underline-offset-4 decoration-4"
            >
              Home
            </Link>
          </li>
          <li>
            <Link href="/">About Us</Link>
          </li>
          <li>
            <Link href="/">Contact Us</Link>
          </li>
          <li>
            <Link href="/" className="text-orange11">
              Log In
            </Link>
          </li>

          <div className="">
            <button className=" bg-orange11 rounded-xl h-12 w-[169px] ">
              <Link href="/signIn">Sign In</Link>
            </button>
          </div>

          <div>
            <button className="">
              <Image
                src={darkmode}
                alt="dark-mode"
                className="w-14 h-[4.2rem]"
              />
            </button>

            {/* <button>
              <Image
                src={lightmode}
                alt="dark-mode"
                className="w-14 h-[4.2rem]"
              />
            </button> */}
          </div>
        </ul>

        {/*  */}
        <div className="md:hidden cursor-pointer " onClick={handClick}>
          <Image src={menu} alt="menu" />
        </div>
      </div>

      {/* MObile veiw */}
      <div className={nav ? "md:hidden fixed bg-black/50" : ""}>
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-full h-[87px] bg-orange_light py-[10.5px] px-[64px] ease-in duration-500"
              : "fixed left-[-100%] h-screen top-0 p-5 ease-out duration-700 bg-white/40"
          }
        >
          <div className="flex justify-between h-[87px] bg-white items-center">
            <div>
              <Link href="/">
                <Image src={image} alt="home" className="w-12 h-8" />
              </Link>
            </div>

            <div className="md:hidden cursor-pointer" onClick={handClose}>
              <Image src={close} alt="close" className="w-6 h-6" />
            </div>
          </div>

          {/*  */}
          <ul className=" space-y-10 text-center">
            <li onClick={handClose}>
              <Link
                href="/"
                className="text-orange10 underline underline-offset-4 decoration-4"
              >
                Home
              </Link>
            </li>
            <li onClick={handClose}>
              <Link href="/">About Us</Link>
            </li>
            <li onClick={handClose}>
              <Link href="/">Contact Us</Link>
            </li>
            <li onClick={handClose}>
              <Link href="/" className="text-orange11">
                Log In
              </Link>
            </li>

            <div className="">
              <button className=" bg-orange11 rounded-xl h-12 w-[169px] ">
                <Link href="/">Sign In</Link>
              </button>
            </div>

            <div>
              <button className="">
                <Image
                  src={darkmode}
                  alt="dark-mode"
                  className="w-14 h-[4.2rem]"
                />
              </button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};
