"use client";
import React from "react";
import Image from "next/image";

export const metaData = {
  title: "SignUp",
};

export default function page() {
  return (
    <div className="py-40 font-bold">
      {/* <div className="">
          <Image src="/" width={500} height={500} alt="" className="" />
        </div> */}
      <h1>login page</h1>
      <div className="">
        <fieldset class="border p-4 rounded-lg">
          <legend class="text-xl font-semibold mb-2">User Information</legend>
        </fieldset>
      </div>
    </div>
  );
}
