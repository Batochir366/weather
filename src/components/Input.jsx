import React from "react";
import { IoMdSearch } from "react-icons/io";

export const Input = ({ handleonchange }) => {
  return (
    <div className="w-fit h-fit">
      <div className="px-6 shadow-custom  bg-white rounded-[48px] flex items-center justify-center gap-4">
        <IoMdSearch className="size-[48px] text-gray-300" />
        <input
          onChange={handleonchange}
          placeholder="Search"
          className="w-[400px]  h-[44px] rounded-[48px] px-6 py-4 bg-white focus-visible:outline-none text-black text-[32px] font-[700] "
          type="text"
        />
      </div>
    </div>
  );
};
