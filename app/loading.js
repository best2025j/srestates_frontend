"use client";
import { Loader } from "@mantine/core";

export default function loading() {
  return (
    <div>
      <div className="flex items-center flex-row justify-center mx-auto w-full h-screen">
        <Loader size={48} />
        <h1>loading...</h1>
      </div>
    </div>
  );
}
