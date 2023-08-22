"use client";
import React from "react";
import Image from "next/image";
<<<<<<< HEAD
import Login from "@/components/auth/Login";
=======
import Login from "../../../components/auth/Login";
// import Login from "@/components/auth/Login";
>>>>>>> 47eef2c82a0e6f27db0b3950efad8986fb89e903

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
