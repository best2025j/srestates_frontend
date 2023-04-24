"use client";
import { InputBase } from "@mantine/core";
import Image from "next/image";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Background_Image from "../Background_Image";

const SearchSchools = () => {
  return (
    <div className="h-full w-full relative md:mt-20 py-10">
      <Background_Image />

      {/* <div className="space-y-10 h-full justify-center top-0 absolute w-full mx-auto flex flex-col pt-[20rem]"> */}
      <div className="h-full top-0 absolute justify-center w-full flex py-32 flex-col space-y-[64px]">
        <h1 className="text-[26px] md:text-6xl text-center max-w-xs mx-auto md:max-w-none md:mx-0 font-bold">
          University on Student-real-estates
        </h1>

        <div className="grid md:grid-cols-5 grid-cols-2 gap-6 max-w-xs md:max-w-full mx-auto md:mx-0 md:gap-8 text-center">
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
          <div className="relative md:mt-2">
            <input
              type="text"
              placeholder="David Niti"
              className="pl-14 md:w-96 h-12 w-80 bg-white border-2 border-[#00A0E3] outline-none rounded md:rounded-[22px] md:placeholder:text-base placeholder:text-xs"
            />
            <div className="absolute top-4 md:top-3 insert-y-0 md:left-0 left-4 flex items-center pl-4">
              <AiOutlineSearch className="text-black/80 md:h-6 md:w-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSchools;
