"use client";
import Header from "@/components/Layout/Header";
import Layout from "@/components/Layout/layout";
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
          <Layout>
            <Hero />
            <Section />
            {/* <SearchSchools />
            <Pagination /> */}
          </Layout>
        </Suspense>
      </ThemeProvider>
    </MantineProvider>
  );
};

export default page;
