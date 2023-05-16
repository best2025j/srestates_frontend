"use client";
import { useRouter } from "next/navigation";
import React from "react";

export const metaData = {
  title: "Login",
};

export default function LoginPage() {
  const router = useRouter;

  return (
    <div className="py-40 font-bold">
      <h1>login page</h1>
    </div>
  );
}
