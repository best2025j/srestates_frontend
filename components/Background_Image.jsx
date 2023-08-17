"use client";
import Image from "next/image";
import React from "react";
import image3 from "../Assets/images/IsolationMode.png";

export default function Background_Image() {
  return (
    <div className="w-full h-full">
      <Image src={image3} className="w-full h-full" alt="isolation" />
    </div>
  );
}
