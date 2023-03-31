import { Button, Input, TextInput, Textarea } from "@mantine/core";
import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { IoMdContact } from "react-icons/io";
import { MdOutlineAlternateEmail, MdOutlinePhoneIphone } from "react-icons/md";

const Form = () => {
  return (
    <>
      <div className="bg-orange_light w-[1133px] h-[740px] rounded-xl justify-center items-center mx-auto">
        <form className="flex md:flex-row">
          <div className="w-[474px] h-full gap-20">
            <div className="mb-4">
              <TextInput
                label="Name"
                placeholder="David Niti"
                icon={<IoMdContact className="text-black/60" />}
              />
            </div>
            <div className="mb-4">
              <TextInput
                label="Email"
                placeholder="ericabams@gmail.com"
                icon={<MdOutlineAlternateEmail className="text-black/60" />}
              />
            </div>
            <div className="mb-4">
              <TextInput
                label="phone"
                placeholder="your number"
                icon={<MdOutlinePhoneIphone className="text-black/60" />}
              />
            </div>
          </div>

          <div className="mb-4 w-[400px] h-[600px]">
            <Textarea label="Message" placeholder="Your Message" className="h-[700px] w-[200px]" />
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
