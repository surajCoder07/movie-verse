import React from "react";
import {RiFacebookCircleFill ,RiTwitterLine ,RiInstagramLine ,RiLinkedinBoxFill} from "react-icons/ri"

const Footer = () => {
  return (
    <div className="bg-primary-blue-2 text-white py-8 px-48 max-sm:px-3 flex flex-col gap-4 ">
      <div className="flex justify-center flex-wrap items-center text-center">
        <ul className="flex gap-3 text-sm max-sm:text-xs">
          <li className="hover:text-orange duration-500">Term & Conditions</li>
          <li className="hover:text-orange duration-500">About</li>
          <li className="hover:text-orange duration-500">Privacy Policy</li>
          <li className="hover:text-orange duration-500">FAQ</li>
        </ul>
      </div>
      <div>
        <p className="text-sm max-sm:text-xs text-gray-600 text-center ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          fermentum iaculis malesuada. Ut finibus risus non ornare tincidunt.
          Vestibulum a facilisis magna, at cursus ex. Pellentesque vulputate
          neque at ante tincidunt, vel lacinia est tempor. Curabitur vitae
          euismod felis. Donec ex odio, dapibus id libero at, eleifend
          condimentum arcu
        </p>
      </div>
      <div>
        <ul className="flex gap-2 items-center justify-center flex-wrap" >
          <li  className="bg-primary-blue-1 p-3 rounded-full cursor-pointer hover:shadow-custom duration-300"><RiFacebookCircleFill  className="hover:text-orange"/></li>
          <li  className="bg-primary-blue-1 p-3 rounded-full cursor-pointer hover:shadow-custom duration-300"><RiTwitterLine  className="hover:text-orange"/></li>
          <li  className="bg-primary-blue-1 p-3 rounded-full cursor-pointer hover:shadow-custom duration-300"><RiInstagramLine  className="hover:text-orange"/></li>
          <li  className="bg-primary-blue-1 p-3 rounded-full cursor-pointer hover:shadow-custom duration-300"><RiLinkedinBoxFill  className="hover:text-orange"/></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
