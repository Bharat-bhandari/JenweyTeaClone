import React from "react";
import ball from "../assets/images/balls.webp";
import leaf from "../assets/images/leaf.webp";
import biscuit from "../assets/images/biscuit.webp";
import potLeaf from "../assets/images/potLeaf.webp";
import boxBiscuit from "../assets/images/boxBiscuit.webp";
import leafMirror from "../assets/images/leafMirror.webp";
import masale from "../assets/images/masale.webp";

const Scroll = () => {
  return (
    <>
      {/* First Section */}
      <div className="grid grid-cols-3 bg-white h-[100vh]">
        <div className="p-8 mx-auto my-auto">
          <img src={ball} className="object-cover w-full " alt="balls" />
        </div>
        <div className="bg-[#181818]"> center</div>
        <div className="overflow-hidden">
          <img src={leaf} className="object-cover " alt="leaf" />
        </div>
      </div>

      {/* Second Section */}
      <div className="grid grid-cols-3 bg-white h-[100vh]">
        <div></div>
        <div className="p-8 mx-auto my-auto">
          <img src={biscuit} className="object-cover w-full " alt="biscuit" />
        </div>
        <div></div>
      </div>

      {/* Third Section */}
      <div className="grid grid-cols-3 bg-white h-[100vh]">
        <div className="overflow-hidden">
          <img src={potLeaf} className="object-cover " alt="balls" />
        </div>
        <div> </div>
        <div className="bg-[#181818]"> center</div>
      </div>

      {/* Fourth Section */}
      <div className="grid grid-cols-3 bg-white h-[100vh]">
        <div></div>
        <div className="p-8 mx-auto my-auto">
          <img
            src={boxBiscuit}
            className="object-cover w-full "
            alt="biscuit"
          />
        </div>
        <div></div>
      </div>

      {/* Fifth Section */}
      <div className="grid grid-cols-3 bg-white h-[100vh]">
        <div></div>
        <div className="bg-[#181818]"> center</div>
        <div className="overflow-hidden">
          <img src={leafMirror} className="object-cover " alt="leaf" />
        </div>
      </div>

      {/* Sixth Section */}
      <div className="grid grid-cols-3 bg-white h-[100vh]">
        <div className="p-8 mx-auto my-auto">
          <img src={masale} className="object-cover w-full " alt="balls" />
        </div>
        <div></div>
        <div></div>
      </div>

      {/* Seventh Section */}
      <div className=" bg-white h-[100vh]"></div>
    </>
  );
};

export default Scroll;
