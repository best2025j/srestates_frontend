"use client";
import { useState } from "react";
import Image from "next/image";
import image from "../public/assets/images/HeaderLogo.png";
import darkmode from "../public/assets/svg/Darkmode.svg";
import lightmode from "../public/assets/svg/Lightmode.svg";
// import menu from "../public/assets/svg/menu.svg";
// import close from "../public/assets/svg/close.svg";
import Link from "next/link";
import "animate.css";
import { useTheme } from "next-themes";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handClick = () => {
    setNav(!nav);
  };

  const handClose = () => {
    setNav(!nav);
  };

  const { theme, setTheme } = useTheme();

  return (
    <div
      className={
        nav
          ? " bg-orange_light dark:bg-black h-[87px] py-[10.5px] sm:px-[64px] px-[36px] w-full fixed z-[10]"
          : "dark:bg-black bg-orange_light h-[87px] py-[10.5px] sm:px-[64px] px-[36px] w-full fixed z-[10]"
      }
    >
      <div className="flex justify-between h-full w-full items-center">
        <Link href="/">
          <Image src={image} alt="home" className="w-14 h-10" />
        </Link>

        <div className="md:flex hidden gap-3 items-center">
          <ul className="flex space-x-10">
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
          </ul>

          <button className=" bg-orange10 rounded-xl h-12 w-[169px] ">
            <Link href="/signIn">Sign In</Link>
          </button>

          {/* button for changing  background color */}
          <button
            className=" "
            onClick={() =>
              theme == "dark" ? setTheme("light") : setTheme("dark")
            }
          >
            {theme == "dark" ? (
              <Image
                src={lightmode}
                alt="dark-mode"
                className="w-14 h-[3rem]"
              />
            ) : (
              <Image src={darkmode} alt="dark-mode" className="w-14 h-[3rem]" />
            )}
          </button>
        </div>

        {/*  */}
        <button className="md:hidden cursor-pointer " onClick={handClick}>
          {nav ? (
            <AiOutlineClose className="w-7 h-7" />
          ) : (
            <AiOutlineMenu className="w-7 h-7" />

            // <Image src={close} alt="menu" />
            // <Image src={menu} alt="menu" />
          )}
        </button>
      </div>

      {/* mobile */}
      <div
        className={
          nav
            ? "md:hidden fixed left-0 bg-white dark:bg-black w-full h-full ease-in duration-500"
            : "fixed left-[-100%] h-screen  ease-out duration-700"
        }
      >
        <div className="text-center pt-10">
          <ul className="space-y-10">
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
              <button className=" bg-orange10 rounded-xl h-12 w-[169px] ">
                <Link href="/">Sign In</Link>
              </button>
            </div>

            <div>
              <button
                className=" "
                onClick={() =>
                  theme == "dark" ? setTheme("light") : setTheme("dark")
                }
              >
                {theme == "dark" ? (
                  <Image
                    src={lightmode}
                    alt="dark-mode"
                    className="w-14 h-[4.2rem]"
                  />
                ) : (
                  <Image
                    src={darkmode}
                    alt="dark-mode"
                    className="w-14 h-[4.2rem]"
                  />
                )}
              </button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};
