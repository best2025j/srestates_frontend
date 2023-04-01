"use client";
import { Button } from "@mantine/core";
import React from "react";
import { IoMdContact, IoMdMail } from "react-icons/io";
import { MdOutlineAlternateEmail, MdOutlinePhoneIphone } from "react-icons/md";

const Form = () => {
  return (
    <>
      <div className="bg-orange_light w-[900px] h-full rounded-xl justify-center flex items-center mx-auto">
        <form className="flex gap-10">
          <div className="space-y-10">  
            <div className="relative">
              {/* <label htmlFor="Name">Name</label> */}
              <input
                type="text"
                placeholder="David Niti"
                className="py-2 pl-10 w-96 h-10 rounded-full"
              />
              <div className="absolute top-3 insert-y-0 left-0 flex items-center pl-2">
                <IoMdContact className="text-black/80 h-5 w-5" />
              </div>
            </div>
            <div className="relative">
              {/* <label htmlFor="Name">Name</label> */}
              <input
                type="email"
                placeholder="ericabams@gmail.com"
                className="py-2 pl-10 w-96 h-10 rounded-full"
              />
              <div className="absolute top-3 insert-y-0 left-0 flex items-center pl-2">
                <IoMdMail className="text-black/80 h-5 w-5" />
              </div>
            </div>
            <div className="relative">
              {/* <label htmlFor="Name">Name</label> */}
              <input
                type="text"
                placeholder="your number"
                className="py-2 pl-10 w-96 h-10 rounded-full"
              />
              <div className="absolute top-3 insert-y-0 left-0 flex items-center pl-2">
                <MdOutlinePhoneIphone className="text-black/80 h-5 w-5" />
              </div>
            </div>
          </div>

          <div className="mb-4">
            <textarea
              placeholder="Your Message"
              className="h-screen bg-white border-none border outline-none rounded-[20px] w-[470px]"
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
