"use client";
import { Loader } from "@mantine/core";
// import React, { useEffect, useState } from "react";

export default function loading() {
  // const [isloading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   setIsLoading(true);
  //   return () => {
  //     setIsLoading(false);
  //   };
  // }, []);

  return (
    <div>
      <div className="flex items-center flex-row justify-center mx-auto w-full h-screen">
        <Loader size={48} />
        <h1>loading...</h1>
      </div>
    </div>
  );
}
