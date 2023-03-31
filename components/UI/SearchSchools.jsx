import { InputBase } from "@mantine/core";
import Image from "next/image";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import image3 from "../../public/assets/images/isolation mode.png";

const SearchSchools = () => {
  return (
    <div className="h-full w-full relative mt-20">
      <div>
        <Image src={image3} className="w-full h-full" alt="isolation" />
      </div>

      {/* <div className="space-y-10 h-full justify-center top-0 absolute w-full mx-auto flex flex-col pt-[20rem]"> */}
      <div className="h-full justify-center top-0 absolute w-full flex flex-col space-y-[64px]">
        <div className="text-2xl md:text-6xl text-center font-bold">
          <h1>University on Studentrealestates</h1>
        </div>

        <div className="grid md:grid-cols-5 grid-cols-2 text-center gap-8 w-[90%] mx-auto">
          <p>University of Lagos</p>
          <p>University of Lagos</p>
          <p>University of Lagos</p>
          <p>University of Lagos</p>
          <p>University of Lagos</p>
          <p>University of Lagos</p>
          <p>University of Lagos</p>
          <p>University of Lagos</p>
          <p>University of Lagos</p>
          <p>University of Lagos</p>
          <p>University of Lagos</p>
          <p>University of Lagos</p>
          <p>University of Lagos</p>
          <p>University of Lagos</p>
          <p>University of Lagos</p>
          <p>University of Lagos</p>
          <p>University of Lagos</p>
          <p>University of Lagos</p>
          <p>University of Lagos</p>
          <p>University of Lagos</p>
        </div>

        <div className="flex items-center justify-center">
          <InputBase
            icon={<AiOutlineSearch />}
            placeholder="Search for university"
            className="w-[400px] h-20"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchSchools;