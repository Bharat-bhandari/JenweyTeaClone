import React from "react";
import { PiBagSimple } from "react-icons/pi";

const Header = () => {
  return (
    <>
      <header className=" grid grid-cols-3 bg-[#131313]  py-1 px-8 sticky top-0 z-20">
        <div className="flex items-center">
          <svg
            preserveAspectRatio="xMidYMid meet"
            data-bbox="44 84 112 32"
            viewBox="44 84 112 32"
            className="w-6 h-6"
            height="200"
            width="200"
            xmlns="http://www.w3.org/2000/svg"
            data-type="shape"
            role="presentation"
            aria-hidden="true"
            aria-label=""
            fill="white"
          >
            <g>
              <path d="M156 84v6H44v-6h112z"></path>
              <path d="M156 110v6H44v-6h112z"></path>
            </g>
          </svg>
          <div className="flex gap-4 ml-4 text-white uppercase">
            <p>Shop</p>
            <p>Wholesale</p>
            <p>Tea of the month</p>
          </div>
        </div>

        <div className="flex items-center justify-center flex-grow text-white">
          <div>Logo</div> {/* Replace "Logo" with your actual logo component */}
        </div>

        <div className="flex justify-end ">
          <div className="flex items-center gap-4">
            <div className="ml-4 text-white ">Login</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              className="flex items-center h-6 ml-2 text-xl text-white cursor-pointer"
              width="100%"
              height="100%"
              viewBox="0 0 164.9 196.4"
              preserveAspectRatio="xMinYMax meet"
              data-hook="svg-icon-9"
              fill="white"
            >
              <path d="M81.9 11.5c-18.8 0-34.1 16-34.1 35.7v18.1h7.8V47.2c0-15.4 11.8-27.9 26.4-27.9 14.5 0 26.4 12.5 26.4 27.9v18.1h6.6V64h1.1V47.2c-.1-19.7-15.4-35.7-34.2-35.7z"></path>
              <path d="M156.9 70.5v118H8v-118h148.9m8-8H0v134h164.9v-134z"></path>
            </svg>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
