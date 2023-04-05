"use client";
import { Loader, Skeleton } from "@mantine/core";

export default function loading() {
  return (
    <div>
      <div className="flex items-center flex-col justify-center mx-auto w-full h-screen">
        {/* <Loader size={48} /> */}
        {/* <h1>loading...</h1>  */}
       <Skeleton height={50} circle mb="xl" />
      <Skeleton height={8} radius="xl" />
      <Skeleton height={8} mt={6} radius="xl" />
      <Skeleton height={8} mt={6} width="70%" radius="xl" />
      </div>


    </div>
  );
}
