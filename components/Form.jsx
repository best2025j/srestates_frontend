"use client";
import { Button } from "@mantine/core";
import React from "react";
import { IoMdContact, IoMdMail } from "react-icons/io";
import { MdOutlineAlternateEmail, MdOutlinePhoneIphone } from "react-icons/md";

const Form = () => {
  return (
    <>
      <div className="bg-orange_light py-20 px-16` w-[900px] h-full rounded-xl justify-center flex items-center mx-auto">
        <form className="flex gap-10">
          <div className="space-y-10">
            <div className="relative">
              {/* <label htmlFor="Name">Name</label> */}
              <input
                type="text"
                placeholder="David Niti"
                className="py-2 pl-14 w-80 h-[50px] bg-white rounded-full"
              />
              <div className="absolute top-3 insert-y-0 left-0 flex items-center pl-4">
                <IoMdContact className="text-black/80 h-6 w-6" />
              </div>
            </div>
            <div className="relative">
              {/* <label htmlFor="Name">Name</label> */}
              <input
                type="email"
                placeholder="ericabams@gmail.com"
                className="py-2 pl-14 w-80 h-[50px] bg-[#F9E7E7] rounded-full"
              />
              <div className="absolute top-3 insert-y-0 left-0 flex items-center pl-4">
                <IoMdMail className="text-black/80 h-6 w-6" />
              </div>
            </div>
            <div className="relative">
              {/* <label htmlFor="Name">Name</label> */}
              <input
                type="text"
                placeholder="your number"
                className="py-2 pl-14 w-80 h-[50px] bg-white rounded-full"
              />
              <div className="absolute top-3 insert-y-0 left-0 flex items-center pl-4">
                <MdOutlinePhoneIphone className="text-black/80 h-6 w-6" />
              </div>
            </div>
          </div>

          <div className="mb-4">
            <textarea
              placeholder="Your Message"
              className="h-[370px] py-10 bg-white border-none border outline-none rounded-[20px]  placeholder:pl-5 w-[470px]"
            />
          </div>

          {/* <div className="flex items-center justify-center">
            <Button className="rounded py-2 px-4 bg-orange10">
              send message
            </Button>
          </div> */}
        </form>
      </div>
    </>
  );
};

export default Form;
