import React from "react";
import spoon from "../assets/images/spoon.webp";

const Collection = () => {
  return (
    <section className="h-[165vh] flex flex-col items-center">
      <div>
        <p className="mb-16 text-2xl mt-60 cursor-pointe">
          Boutique Blended Loose Tea
        </p>
      </div>
      <div>
        <div className="mb-12 text-center text-9xl">INDULGE IN</div>
        <div className="text-center text-9xl">THE LUXURY</div>
      </div>

      <div>
        <p className="text-[#757575] mb-1 mt-12 text-[14px] text-center">
          Bold, vibrant flavors, expertly blended with luxurious tea leaves to
        </p>
        <p className="text-[#757575] mb-12 mt-0 text-[14px] text-center">
          bring you an unparalleled experience.
        </p>
      </div>
      <div>
        <a
          href=""
          className="p-4 text-sm duration-300 text-white no-underline hover:text-[#131313] transition border border-solid rounded-full hover:bg-white button"
        >
          VIEW OUR COLLECTION
        </a>
      </div>

      <div className="flex justify-center overflow-hidden">
        <img src={spoon} alt="spoon" className="object-cover w-[82%]" />
      </div>
    </section>
  );
};

export default Collection;
