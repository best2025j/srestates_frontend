import React from "react";
import { FaUserPen } from "react-icons/fa";

export default function Login() {
  return (
    <section className="py-40 h-screen w-full">
      <form action="" className="">
        <fieldset class="border px-4 w-[500px] h-[60px] rounded-lg">
          <legend class="">first name</legend>
          <div className="flex items-center justify-between px-4">
            <div className="relative md:mt-2">
              <input
                type="text"
                placeholder="Your first name"
                className=" md:w-96 h-12 w-80 bg-white outline-none  md:placeholder:text-base placeholder:text-xs"
              />
              <div className="absolute top-4 md:top-3 insert-y-0 md:right-0 flex">
                <FaUserPen size={20} className="text-black/80 md:h-6 md:w-6" />
              </div>
            </div>
          </div>
          {/* <span className="flex justify-between px-4">
            <input type="text" placeholder="Your first name" />
            <FaUserPen size={20} className="" />
          </span> */}
        </fieldset>
        {/* <fieldset class="border p-4 w-[500px] h-[60px] rounded-lg">
          <legend class="">last name</legend>
          <input type="text" placeholder="Your last name" />
        </fieldset>
        <fieldset class="border p-4 w-[500px] h-[60px] rounded-lg">
          <legend class="">Email </legend>
          <input type="text" placeholder="Your email" />
        </fieldset>
        <fieldset class="border p-4 w-[500px] h-[60px] rounded-lg">
          <legend class="">phone</legend>
          <input type="text" placeholder="enter username" />
        </fieldset>{" "}
        <fieldset class="border p-4 w-[500px] h-[60px] rounded-lg">
          <legend class="">Password</legend>
          <input type="text" placeholder="Input a strong password" />
        </fieldset> */}
      </form>
    </section>
  );
}
