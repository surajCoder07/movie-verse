import React, { useState } from "react";

const SwitchTabs = ({ data, onTabChange }) => {
  const [movingBgPosition, setMovingBgPosition] = useState("left-0");
  const [selectedTab, setSelectedTab] = useState(0);

  const handleOnclick = (tab, index) => {
    setSelectedTab(index);
    setMovingBgPosition(index === 1 ? "right-0" : "left-0");
    onTabChange(tab);
  };

  return (
    <div>
      <div className=" relative w-[180px] max-sm:w-[140px] max-sm:h-7 h-9 rounded-full flex  items-center justify-between bg-white  px-3 cursor-pointer  ">
        {data.map((tab, index) => {
          return (
            <span
              className={`capitalize tab z-20 duration-500 py-2 max-sm:text-xs ${
                selectedTab === index ? "text-white" : "text-black"
              }`}
              onClick={() => handleOnclick(tab, index)}
              key={index}
            >
              {tab}
            </span>
          );
        })}
        <span
          className={`bg-gradient  absolute w-[50%] h-full  rounded-full  ${movingBgPosition}`}
        ></span>
      </div>
    </div>
  );
};

export default SwitchTabs;
