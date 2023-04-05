"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import image from "../../public/assets/images/HeaderLogo.png";
import darkmode from "../../public/assets/svg/Darkmode.svg";
import lightmode from "../../public/assets/svg/Lightmode.svg";
import "animate.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useRouter } from "next/navigation";

const Header = () => {
  const [nav, setNav] = useState(false);
  const { theme, setTheme } = useTheme();

  const handClick = () => {
    setNav(!nav);
  };

  const handClose = () => {
    setNav(!nav);
  };

  const router = useRouter();
  return (
    <header
      className={
        nav
          ? " bg-orange_light dark:bg-black h-[70px] py-[10.5px] sm:px-[64px] px-[36px] w-full fixed z-[10]"
          : "dark:bg-black bg-orange_light h-[70px] py-[10.5px] sm:px-[64px] px-[36px] w-full fixed z-[10]"
      }
    >
      <nav className="flex justify-between h-full w-full items-center">
        <Link href="/">
          <Image src={image} alt="home" className="w-14 h-10 md:w-16 md:h-12" />
        </Link>

        <ul className="md:flex hidden items-center space-x-6">
          <li>
            <Link
              href="/"
              className="text-orange10 underline underline-offset-4 decoration-4"
            >
              Home
            </Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
          <li>
            <Link href="/login" className="text-orange10">
              Log In
            </Link>
          </li>

          <button className=" bg-orange10 rounded-xl h-12 w-[169px] ">
            <Link href="/signIn">Sign In</Link>
          </button>

          <button
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
        </ul>

        {/*  */}
        <button className="md:hidden cursor-pointer " onClick={handClick}>
          {nav ? (
            <AiOutlineClose className="w-7 h-7" />
          ) : (
            <AiOutlineMenu className="w-7 h-7" />
          )}
        </button>
      </nav>

      {/* mobile veiw */}

      <div
        className={
          nav
            ? "md:hidden fixed left-0 bg-white dark:bg-black w-full h-full ease-in duration-500"
            : "fixed left-[-100%] h-screen  ease-out duration-700"
        }
      >
        <ul className="text-center space-y-10 py-10">
          <li onClick={handClose}>
            <Link
              href="/"
              className="text-orange10 underline underline-offset-4 decoration-4"
            >
              Home
            </Link>
          </li>
          <li onClick={handClose}>
            <Link href="/about">About Us</Link>
          </li>
          <li onClick={handClose}>
            <Link href="/contact">Contact Us</Link>
          </li>
          <li onClick={handClose}>
            <Link href="/login" className="text-orange11">
              Log In
            </Link>
          </li>

          <div className="">
            <button className=" bg-orange10 rounded-xl h-12 w-[169px] ">
              <Link href="/signin">Sign In</Link>
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
    </header>
  );
};

export default Header;
