"use client";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import Bg_image from "@/components/UI/Bg_image";
import DirectMessage from "@/components/UI/DirectMessage";
import { Hero } from "@/components/UI/Hero";
import Pagination from "@/components/UI/Pagination";
import SearchSchools from "@/components/UI/SearchSchools";
import { Section } from "@/components/UI/Section";
import { MantineProvider } from "@mantine/core";
import { ThemeProvider } from "next-themes";
import React, { Suspense } from "react";

const page = () => {
  return (
    <MantineProvider theme={{ loader: "bars" }}>
      <ThemeProvider attribute="class">
        <Suspense fallback={<loading />}>
          <Header />
          <Hero />
          <Section />
          <SearchSchools />
          <Pagination />
          <DirectMessage />
          <Bg_image />
          <Footer />
        </Suspense>
      </ThemeProvider>
    </MantineProvider>
  );
};

export default page;
