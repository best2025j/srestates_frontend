"use client";
import React from "react";
import RootLayout from "../layout";

export const metaData = {
  title: "Login",
};

export default function page() {
  return (
    <RootLayout showHeaderFooter={false}>
      <main className="py-40 text-bold">
        <h1>login page</h1>
      </main>
    </RootLayout>
  );
}
