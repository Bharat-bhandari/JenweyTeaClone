import React from "react";
import mainImg from "../assets/images/main.webp";

const Main = () => {
  return (
    <section className="relative flex items-center justify-center h-screen overflow-hidden bg-[#181818]">
      <img
        src={mainImg}
        alt="Main Background"
        className="absolute inset-0 object-cover w-full h-[92%]"
      />
      {/* <div className="absolute inset-0 "></div> */}
      <div className="relative z-10 text-center text-white mb-44">
        <h1 className="mb-0 text-4xl font-medium tracking-wide lg:text-9xl">
          YOUR SEVEN STAR
        </h1>
        <h1 className="mt-0 text-4xl font-medium tracking-wide md:text-9xl">
          CONCIERGE TEA CO.
        </h1>
      </div>
    </section>
  );
};

export default Main;
