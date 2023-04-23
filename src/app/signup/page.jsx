"use client";
import React from "react";
import RootLayout from "../layout";

export const metaData = {
  title: "SignUp",
};

export default function page() {
  return (
    <RootLayout showHeaderFooter={false}>
      <main className="py-40 text-bold">
        <h1>signup page</h1>
      </main>
    </RootLayout>
  );
}
