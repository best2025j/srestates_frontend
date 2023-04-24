import React from "react";
import RootLayout from "../layout";
import Link from "next/link";

export default function page() {
  return (
    <RootLayout shouldHideHeaderFooter={true}>
      <div className="h-screen w-full py-20 flex flex-col justify-center items-center space-y-6">
        <div className=" md:max-w-[1081px] max-w-[252px]  items-start flex flex-col md:text-center">
          <h1 className="font-bold md:text-[62px] text-[26px]">
            Welcome to Studentrealestate!!! To further your request you need to
            Sign in/ Log in
          </h1>

          <div className=" flex md:flex-row flex-col py-[35px] md:py-[30px] items-center justify-center md:space-x-6 space-y-4 md:space-y-0">
            <button className="sm:w-[264px] w-[150px] h-[45px] bg-orange10 sm:h-[60.1px] rounded-xl">
              <Link href="/signup">signup</Link>
            </button>
            <button className="sm:w-[264px] w-[150px] h-[45px] border border-orange10 sm:h-[60.1px] rounded-xl">
              <Link href="/login">login</Link>
            </button>
          </div>

          <p className="md:text-2xl font-normal text-xs">
            <i>
              Ensure to fill the required forms with the right details as any
              error will lead to disactivating your account
            </i>
          </p>
        </div>
      </div>
    </RootLayout>
  );
}
