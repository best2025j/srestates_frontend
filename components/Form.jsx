import { Button, Input, TextInput, Textarea } from "@mantine/core";
import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { IoMdContact } from "react-icons/io";
import { MdOutlineAlternateEmail } from "react-icons/md";

const Form = () => {
  return (
    <>
      <form>
        <TextInput label="Name" placeholder="" icon={<IoMdContact />} />
        <TextInput
          label="Email"
          placeholder=""
          icon={<MdOutlineAlternateEmail />}
        />
        <TextInput label='phone' placeholder="your number" icon={AiOutlinePhone} />
        <Textarea label="Message" />
        <Button>send message</Button>
      </form>
    </>
  );
};

export default Form;
