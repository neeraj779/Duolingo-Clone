import React from "react";
import { TopBarItemProps } from "../common/types/TopBar.types";

const TopBarItem: React.FC<TopBarItemProps> = ({ iconSrc, value, labelClass }) => {
  return (
    <div className="flex items-center px-3 py-2 transition-colors duration-200 rounded-xl hover:bg-gray-100">
      <img className="w-8 h-7" src={iconSrc} alt="Score icon" />
      <span className={`pl-[5px] ${labelClass}`}>{value}</span>
    </div>
  );
};

const TopBar: React.FC = () => {
  return (
    <div className="flex justify-between items-center mb-6 space-x-4 font-din-round-light font-extrabold text-[15px]">
      <div className="px-3 py-2 transition-colors duration-200 rounded-xl hover:bg-gray-100">
        <svg
          viewBox="0 1914 82 66"
          className="w-[36px] h-[28.98px]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <image
            xlinkHref="https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"
            height="3168"
            width="82"
          />
        </svg>
      </div>

      <TopBarItem
        iconSrc="https://d35aaqx5ub95lt.cloudfront.net/images/icons/65b8a029d7a148218f1ac98a198f8b42.svg"
        value="0"
        labelClass="text-[#E5E5E5]"
      />
      <TopBarItem
        iconSrc="https://d35aaqx5ub95lt.cloudfront.net/images/gems/45c14e05be9c1af1d7d0b54c6eed7eee.svg"
        value="500"
        labelClass="text-[#1CB0F6]"
      />
      <TopBarItem
        iconSrc="https://d35aaqx5ub95lt.cloudfront.net/images/hearts/8fdba477c56a8eeb23f0f7e67fdec6d9.svg"
        value="5"
        labelClass="text-[#FF4B4B]"
      />
    </div>
  );
};

export default TopBar;
