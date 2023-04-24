"use client";
import React from "react";
import RootLayout from "../layout";

export const metaData = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <RootLayout shouldHideHeaderFooter={true}>
      <main className="py-40 font-bold">
        <h1>login page</h1>
      </main>
    </RootLayout>
  );
}
