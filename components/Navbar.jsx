import React from "react";
import Image from "next/image";
import image from "../public/assets/images/HeaderLogo.png";
import darkmode from "../public/assets/svg/Component3.svg";
import menu from "../public/assets/svg/menu.svg";
import close from "../public/assets/svg/close.svg";
import Link from "next/link";
import "animate.css";

export const Navbar = () => {
    return (
      <div className="bg-orange_light h-[87px] py-[10.5px] px-[64px] w-full ">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image src={image} alt="home" />
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
              <Link href="/aboutUs">About Us</Link>
            </li>
            <li>
              <Link href="/contactUs">Contact Us</Link>
            </li>
            <li>
              <Link href="/logIn" className="text-orange11">
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
            </div>
          </ul>

          {/*  */}
          <div className="md:hidden cursor-pointer">
            <Image src={menu} alt="menu" />
          </div>
        </div>

        {/* MObile veiw */}

        <div className="fixed left-0 top-0 w-full h-screen bg-white">
          <div className="fixed left-0 top-0 bg-orange_light h-[79.5px] w-full flex justify-between items-center px-9">
            <Link href="/">
              <Image src={image} alt="home" className="w-12 h-8" />
            </Link>

            <div className="md:hidden cursor-pointer">
              <Image src={close} alt="close" className="w-6 h-6" />
            </div>
          </div>

          {/*  */}
          <div className="py-20 flex flex-col">
            <ul className="space-y-10 text-center">
              <li>
                <Link
                  href="/"
                  className="text-orange10 underline underline-offset-4 decoration-4"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link href="/aboutUs">About Us</Link>
              </li>
              <li>
                <Link href="/contactUs">Contact Us</Link>
              </li>
              <li>
                <Link href="/logIn" className="text-orange11">
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
              </div>
            </ul>
          </div>
        </div>
      </div>
    );
};


