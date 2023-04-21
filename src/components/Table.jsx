import React from "react";
import ProgressBar from "./ProgressBar";

export default function Table() {
  return (
    <div className="w-[80%] h-full  grid grid-cols-3 gap-60 py-10">
      <div className="space-y-[174px]">
        <div className="space-x-4 flex justify-center items-center">
          <div>
            <ProgressBar />
          </div>
          <div className="">
            <h1 className="font-bold text-[72px]">2000+</h1>
            <span className="text-[#828282] text-[24px] font-[400]">
              Sites Visit
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-[174px]">
        <div className="space-x-4 flex justify-center items-center">
          <div>
            <ProgressBar />
          </div>
          <div className="">
            <h1 className="font-bold text-[72px]">0</h1>
            <span className="text-[#828282] text-[24px] font-[400]">
              Match Make
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-[174px]">
        <div className="space-x-4 flex justify-center items-center">
          <div>
            <ProgressBar />
          </div>
          <div className="">
            <h1 className="font-bold text-[72px]">200+</h1>
            <span className="text-[#828282] text-[24px] font-[400]">
              Roommates
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-[174px]">
        <div className="space-x-4 flex justify-center items-center">
          <div>
            <ProgressBar />
          </div>
          <div className="">
            <h1 className="font-bold text-[72px]">500+</h1>
            <span className="text-[#828282] text-[24px] font-[400]">
              Engagers
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-[174px]">
        <div className="space-x-4 flex justify-center items-center">
          <div>
            <ProgressBar />
          </div>
          <div className="">
            <h1 className="font-bold text-[72px]">12</h1>
            <span className="text-[#828282] text-[24px] font-[400]">
              Finished Design Sprints
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-[174px]">
        <div className="space-x-4 flex justify-center items-center">
          <div>
            <ProgressBar />
          </div>
          <div className="">
            <h1 className="font-bold text-[72px]">2</h1>
            <span className="text-[#828282] text-[24px] font-[400]">
              Site Upgrade
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
