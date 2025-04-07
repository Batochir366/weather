import React from "react";
import { TbHome } from "react-icons/tb";
import { LuMapPin } from "react-icons/lu";
import { LuHeart } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";

export const Cards = ({ localtime, location, temp, conditions, isNight }) => {
  return (
    <div
      className={`w-[414px] h-[832px] rounded-[48px] backdrop-blur-md  absolute z-20  flex justify-center ${
        isNight ? "bg-custom" : ""
      } `}
    >
      <div
        className={`w-[398px] h-[504px] rounded-[42px] mt-2 flex flex-col items-center ${
          isNight ? "bg-custom" : "bg-customSun"
        }`}
      >
        <div className="flex pt-[56px] pl-[40px] items-center gap-[25px]">
          <div className="flex flex-col">
            <p className="text-[#9CA3AF] text-[18px] font-[500] ">
              {localtime}
            </p>
            <h1
              className={`text-[48px] font-[800] ${
                isNight ? "text-white" : "text-black"
              } `}
            >
              {location}
            </h1>
          </div>
          <LuMapPin className="size-8 text-gray-300" />
        </div>

        {isNight ? (
          <div className="pt-[183.11px] flex justify-center items-center">
            <img className="absolute" src="/moon.png" alt="Sun or Moon" />
            <img className="absolute" src="/shadow.png" alt="shadow" />
          </div>
        ) : (
          <div className="pt-[183.11px] flex justify-center items-center">
            <img className="absolute" src="/sun.png" alt="Sun or Moon" />
            <img className="absolute" src="/sunshadow.png" alt="shadow" />
          </div>
        )}

        <div className="flex absolute pt-[468px] w-[414px] pl-12 flex-col">
          <h1
            className={`text-[144px] bg-clip-text text-transparent ${
              isNight ? "bg-customText1" : "bg-customText2"
            }`}
          >
            {temp}
          </h1>
          <h3
            className={`text-[24px] ${
              isNight ? "text-[#777CCE]" : "text-[#FF8E27]"
            }`}
          >
            {conditions}
          </h3>
        </div>
        <div className="flex absolute pt-[746px] w-[414px] justify-around">
          <TbHome
            className={`size-8  ${isNight ? "text-white" : "text-black"}`}
          />
          <LuMapPin className="size-8 text-gray-300" />
          <LuHeart className="size-8 text-gray-300" />
          <FaRegUser className="size-[30px] text-gray-300" />
        </div>
      </div>
    </div>
  );
};
