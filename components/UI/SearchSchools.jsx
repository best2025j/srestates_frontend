import Image from "next/image";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import image3 from "../../public/assets/images/isolation mode.png";

const SearchSchools = () => {
  return (
    <div className="h-full w-full relative mt-[45rem]">
      <div>
        <Image src={image3} className="w-full h-full" alt="isolation" />
      </div>

      <div className="space-y-8 h-full justify-center top-0 absolute w-full mx-auto flex flex-col">
        <div className="text-2xl text-center font-bold">
          <h1>University on Studentrealestates</h1>
        </div>

        <div className="grid md:grid-cols-4 grid-cols-2 text-center gap-4">
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
      </div>
    </div>
  );
};

export default SearchSchools;
