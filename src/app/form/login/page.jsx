"use client";
import React from "react";
import { useRouter } from "next/navigation";

export const metaData = {
  title: "Login",
};

const page = () => {
  const router = useRouter;

  return (
    <div className="py-40 font-bold">
      <h1>login page</h1>
    </div>
  );
};

export default page;
