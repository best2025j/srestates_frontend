// "use client";
import React from "react";
import { Hero } from "@/components/UI/Hero";
import { Section } from "@/components/UI/Section";
import SearchSchools from "@/components/UI/SearchSchools";
import Pagination from "@/components/UI/Pagination";
import DirectMessage from "@/components/UI/DirectMessage";
import Bg_image from "@/components/UI/Bg_image";

const page = () => {
  return (
    <main>
      <Hero />
      <Section />
      <SearchSchools />
      <Pagination />
      <DirectMessage />
      <Bg_image />
    </main>
  );
};

export default page;
