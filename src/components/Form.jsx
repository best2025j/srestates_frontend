import { Button } from "@mantine/core";
import React from "react";
import { IoMdContact, IoMdMail } from "react-icons/io";
import { MdOutlinePhoneIphone } from "react-icons/md";

const Form = () => {
  return (
    <form className="gap-10 justify-center items-center flex-col md:flex-row flex">
      <div className="space-y-6">
        <div>
          <label htmlFor="Name">Name</label>
          <div className="relative mt-2">
            <input
              type="text"
              placeholder="David Niti"
              className="pl-14 w-80 h-[50px] bg-white rounded-[22px]"
            />
            <div className="absolute top-3 insert-y-0 left-0 flex items-center pl-4">
              <IoMdContact className="text-black/80 h-6 w-6" />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="Name">Email</label>
          <div className="relative mt-2">
            <input
              type="email"
              placeholder="ericabams@gmail.com"
              className="pl-14 w-80 h-[50px] border border-[#00A0E3] outline-[#00A0E3] rounded-[22px]"
            />
            <div className="absolute top-3 insert-y-0 left-0 flex items-center pl-4">
              <IoMdMail className="text-black/80 h-6 w-6" />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="Name">Phone number</label>
          <div className="relative mt-2">
            <input
              type="text"
              placeholder="your number"
              className="pl-14 w-80 h-[50px] bg-white rounded-[22px]"
            />
            <div className="absolute top-3 insert-y-0 left-0 flex items-center pl-4">
              <MdOutlinePhoneIphone className="text-black/80 h-6 w-6" />
            </div>
          </div>
        </div>
      </div>

      <div className="my-4">
        <textarea
          placeholder="Your Message"
          className="md:h-[275px] px-6 py-10 bg-white border-none border outline-none rounded-[20px] w-80 h-80 placeholder:pl-5 md:w-[470px]"
        />
      </div>
    </form>
  );
};

export default Form;
