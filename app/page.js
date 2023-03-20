"use client";
import { Header } from "@/components/Header";
import { ThemeProvider } from "next-themes";
import React from "react";

const page = () => {
  return (
    <ThemeProvider attribute="class">
      <div className="">
        <Header />
      </div>
    </ThemeProvider>
  );
};

export default page;
