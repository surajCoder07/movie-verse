import React, { useState } from "react";
import logo from "../assets/logo.png";
import { GoSearch, GoX } from "react-icons/go";
import { IoIosMenu } from "react-icons/io";

const Header = () => {
  const [mobileView, setMobileView] = useState(false);
  const [isSearchVisible , setIsSearchVisible] = useState(null)
  const handleClick = () => {
    isSearchVisible&&setIsSearchVisible(false)
    setMobileView(!mobileView);
  };
  const handleSearchClick = ()=>{
        mobileView&&setMobileView(false)
        setIsSearchVisible(true)
  }

  return (
    <div className={`grid grid-flow-col items-center justify-between px-2 h-auto z-50 fixed w-[100%] bg-[rgba(0,0,0,.25)] backdrop-blur-[2px] bg-opacity-0   text-white   ${mobileView&&"bg-primary-blue-1 duration-700 bg-opacity-10"}`}>
      <div className="grid-6 w-16  ">
        <img src={logo} alt="logo" className="w-full object-cover h-auto" />
      </div>
      <div className="grid-6 flex gap-3 items-center">
        {!mobileView && (
          <div
            className={`max-sm:hidden max-md:inline-block max-lg:inline-block flex items-center `}
          >
            <span className="mx-2">Movies</span>
            <span className="mx-2">Tv Shows</span>
          </div>
        )}
        <div>
          <GoSearch onClick={()=>handleSearchClick()} />
        </div>
        <div
          className={`max-sm:inline-block max-md:hidden max-lg:hidden max-xl:hidden max-2xl:hidden 2xl:hidden z-50 `}
          onClick={() => handleClick()}
        >
          {mobileView ? <GoX /> : <IoIosMenu />}
        </div>
      </div>
      <div
        className={
          "absolute bg-primary-blue-1 text-white left-0 right-0 bottom-0  duration-500  border-t border-gray-800 p-2 " +
          (mobileView ? "translate-y-10" : "-translate-y-[400px]")
        }
      >
        <ul>
          <li className="px-1 text-sm">Movies</li>
          <li className="px-1 text-sm">Tv Shows</li>
        </ul>
      </div>
      <div className={"absolute right-0 left-0 bg-white flex  items-center border border-blue-light-1 duration-300 p-2 "+(isSearchVisible?"translate-y-10": "-translate-y-16")}>
        <input type="text" placeholder="search" className="w-full px-2 py-1 focus:outline-none text-black"/>
        <GoX className="text-black" onClick={()=>setIsSearchVisible(false)}/>
      </div>
    </div>
  );
};
export default Header;
