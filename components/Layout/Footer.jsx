import { Select } from "@mantine/core";
import Image from "next/image";
import React from "react";
import image1 from "../../public/assets/images/Logo2.png";
import map from "../../public/assets/svg/map.svg";
import message from "../../public/assets/svg/message.svg";
import twitter from "../../public/assets/svg/twitter logo.svg";
import instagram from "../../public/assets/svg/instagram.svg";
import facebook from "../../public/assets/svg/facebook logo(1).svg";

const Footer = () => {
  return (
    <footer className="px-4 text-white top-[700px] relative bg-[#002F43] w-full h-[537px] grid grid-rows-1">
      <div className="absolute top-6">
        <Image src={image1} alt="logo image" />
      </div>
      <div className="flex justify-center space-x-20 border-b-2 py-20">
        <div className="space-y-6 ">
          <h3 className="font-2xl font-bold underline underline-offset-8 decoration-2 ">
            Contact
          </h3>
          <div className="flex felx-row space-x-4">
            <span>
              <Image src={map} alt="map" />
            </span>
            <h2>Lekki, Lagos</h2>
          </div>
          <div className="flex felx-row space-x-4">
            <span>
              <Image src={message} alt="text message" />
            </span>
            <h2>info@studentrealestates.com</h2>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="font-2xl font-bold underline underline-offset-8 decoration-2 ">
            Social Media
          </h3>
          <div className="flex felx-row space-x-4">
            <span>
              <Image src={twitter} alt="text twitter" />
            </span>
            <h2>Twitter</h2>
          </div>
          <div className="flex felx-row space-x-4">
            <span>
              <Image src={instagram} alt="text instagram" />
            </span>
            <h2>Instagram</h2>
          </div>
          <div className="flex felx-row space-x-4">
            <span>
              <Image src={facebook} alt="text facebook" />
            </span>
            <h2>Facebook</h2>
          </div>
        </div>

        <Select
          placeholder="Pick one"
          data={[{ value: "english", label: "English" }]}
        />
      </div>
      <div className="text-center py-8 ">
        <p>&copy; 2022 Studentrealestates inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
