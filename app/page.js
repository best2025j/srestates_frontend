"use client";
// import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";
import { ThemeProvider } from "next-themes";
import React from "react";

const page = () => {
  return (
    <ThemeProvider attribute="class">
      <div>
        <Navbar />
        {/* <Hero /> */}
        <Section />
      </div>
    </ThemeProvider>
  );
};

export default page;
