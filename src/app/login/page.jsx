"use client";
import React from "react";
import Image from "next/image";
import Login from "@/components/auth/Login";

export const metaData = {
  title: "Login",
};

const page = () => {
  return (
    <div>
      <Login />
    </div>
  );
};

export default page;
