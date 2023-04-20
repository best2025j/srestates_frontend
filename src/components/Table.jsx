import React from "react";
import ProgressBar from "./ProgressBar";

export default function Table() {
  return (
    <div className="w-full h-full px-[64px] grid grid-cols-3 gap-[304px]">
      <div className="space-y-[174px]">
        <div className="flex items-center">
          <ProgressBar />
          <div>
            <h1 className="font-bold text-[72px]">2000+</h1>
            <h1 className="text-[#828282] text-[24px] font-[400]">
              Sites Visit
            </h1>
          </div>
        </div>
      </div>
      <div className="space-y-[174]">
        <div className="flex items-center">
          <ProgressBar />
          <div>
            <h1 className="font-bold text-[72px]">0+</h1>
            <h1 className="text-[#828282] text-[24px] font-[400]">Engagers</h1>
          </div>
        </div>
      </div>
      <div className="space-y-[174]">
        <div className="flex items-center">
          <ProgressBar />
          <div>
            <h1 className="font-bold text-[72px]">200</h1>
            <h1 className="text-[#828282] text-[24px] font-[400]">
              Match Make
            </h1>
          </div>
        </div>
      </div>

      <div className="space-y-[174px]">
        <div className="flex items-center">
          <ProgressBar />
          <div>
            <h1 className="font-bold text-[72px]">500+</h1>
            <h1 className="text-[#828282] text-[24px] font-[400]">
              Sites Visit
            </h1>
          </div>
        </div>
      </div>
      <div className="space-y-[174]">
        <div className="flex items-center">
          <ProgressBar />
          <div>
            <h1 className="font-bold text-[72px]">12</h1>
            <h1 className="text-[#828282] text-[24px] font-[400]">Engagers</h1>
          </div>
        </div>
      </div>
      <div className="space-y-[174]">
        <div className="flex items-center">
          <ProgressBar />
          <div>
            <h1 className="font-bold text-[72px]">2</h1>
            <h1 className="text-[#828282] text-[24px] font-[400]">
              Match Make
            </h1>
          </div>
        </div>
      </div>

      {/* <div className="space-y-[174]">
        <div className="flex items-center">
          <ProgressBar />
        </div>
        <div>
          <h1 className="font-bold text-[72px]">12</h1>
          <h1 className="text-[#828282] text-[24px] font-[400]">
            Finished Design Sprints
          </h1>
        </div>
      </div>

      <div className="space-y-[174]">
        <div className="flex items-center">
          <ProgressBar />
        </div>
        <div>
          <h1 className="font-bold text-[72px]">200+</h1>
          <h1 className="text-[#828282] text-[24px] font-[400]">Roommates</h1>
        </div>
      </div>

      <div className="space-y-[174]">
        <div className="flex items-center">
          <ProgressBar />
          <div>
            <h1 className="font-bold text-[72px]">500+</h1>
            <h1 className="text-[#828282] text-[24px] font-[400]">Engagers</h1>
          </div>
        </div>
      </div>

      <div className="space-y-[174px]">
        <div className="flex items-center">
          <ProgressBar />
        </div>
        <div>
          <h1 className="font-bold text-[72px]">2</h1>
          <h1 className="text-[#828282] text-[24px] font-[400]">
            Site Upgrade
          </h1>
        </div>
      </div> */}
    </div>
  );
}
