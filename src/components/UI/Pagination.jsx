"use client";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Image from "next/image";
import React from "react";
import man from "../../../Assets/images/man.png";
import "animate.css";
import { Carousel } from "@mantine/carousel";

const Pagination = () => {
  return (
    <div className="h-full w-full py-20">
      <div className="mx-auto py-6 space-y-[10px] text-center md:max-w-3xl max-w-xs">
        <div className="">
          <h1 className="md:text-[3.2rem] text-[26px] font-bold">
            Check Out Our Recent Reviews
          </h1>
        </div>
        <p className="font-normal md:text-2xl text-xs">
          Our reviews are from individuals like you who have similar interest.
        </p>
      </div>

      <div className="">
        <Carousel
          withIndicators
          height={400}
          max={300}
          controlSize={40}
          slideGap="md"
          align="start"
          styles={{
            control: {
              "&[data-inactive]": {
                opacity: 0,
                cursor: "default",
              },
            },
          }}
        >
          <Carousel.Slide>
            <div className="space-y-10 max-w-[866px] flex justify-center items-center mx-auto flex-col h-full ">
              <div className="font-bold text-2xl">
                <i>Found A Roommate</i>
              </div>
              <i className="text-2xl text-center">
                “I’m very pleased with this website. I came across it 2022 and I
                had no regrets whatsoever. I’ve recommended it to so many
                friends and family. I got my roommate from here and there is no
                issue. I just wish Student-real-estates becomes viral because it
                makes roommate pairing easier.”
              </i>
              <div className="flex justify-center items-center gap-4">
                <div>
                  <Image
                    src={man}
                    alt="man"
                    className="w-16 h-16 md:h-24 md:w-24"
                  />
                </div>
                <div>
                  <h3 className="font-bold md:text-2xl">Leonard Italy</h3>
                  <i className="">Chemistry Student EKSU</i>
                </div>
              </div>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div className="space-y-10 max-w-[866px] flex justify-center items-center mx-auto flex-col h-full ">
              <div className="font-bold text-2xl">
                <i>Found A Roommate</i>
              </div>
              <i className="text-2xl text-center">
                “I’m very pleased with this website. I came across it 2022 and I
                had no regrets whatsoever. I’ve recommended it to so many
                friends and family. I got my roommate from here and there is no
                issue. I just wish Student-real-estates becomes viral because it
                makes roommate pairing easier.”
              </i>
              <div className="flex justify-center items-center gap-4">
                <div>
                  <Image
                    src={man}
                    alt="man"
                    className="w-16 h-16 md:h-24 md:w-24"
                  />
                </div>
                <div>
                  <h3 className="font-bold md:text-2xl">Leonard Italy</h3>
                  <i className="">Chemistry Student EKSU</i>
                </div>
              </div>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div className="space-y-10 max-w-[866px] flex justify-center items-center mx-auto flex-col h-full ">
              <div className="font-bold text-2xl">
                <i>Found A Roommate</i>
              </div>
              <i className="text-2xl text-center">
                “I’m very pleased with this website. I came across it 2022 and I
                had no regrets whatsoever. I’ve recommended it to so many
                friends and family. I got my roommate from here and there is no
                issue. I just wish Student-real-estates becomes viral because it
                makes roommate pairing easier.”
              </i>
              <div className="flex justify-center items-center gap-4">
                <div>
                  <Image
                    src={man}
                    alt="man"
                    className="w-16 h-16 md:h-24 md:w-24"
                  />
                </div>
                <div>
                  <h3 className="font-bold md:text-2xl">Leonard Italy</h3>
                  <i className="">Chemistry Student EKSU</i>
                </div>
              </div>
            </div>
          </Carousel.Slide>
        </Carousel>
      </div>
    </div>
  );
};

export default Pagination;
