"use client";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "next-themes";
import React from "react";

const page = () => {
  return (
    <ThemeProvider attribute="class">
      <div>
        <Navbar />
      </div>
    </ThemeProvider>
  );
};

export default page;
