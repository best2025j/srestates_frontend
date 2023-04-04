"use client";
import Layout from "@/components/Layout/Layout";
import React from "react";
export default function AboutLayout({ children }) {
  return (
    <>
      <main>
        <Layout>{children}</Layout>
      </main>
    </>
  );
}
