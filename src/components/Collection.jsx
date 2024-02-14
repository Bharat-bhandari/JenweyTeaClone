import React from "react";

const Collection = () => {
  return (
    <section className="h-[200vh] flex flex-col items-center">
      <div>
        <p className="mb-16 text-2xl mt-44 cursor-pointe">
          Boutique Blended Loose Tea
        </p>
      </div>
      <div>
        <div className="mb-8 text-center text-9xl">INDULGE IN</div>
        <div className="text-center text-9xl">THE LUXURY</div>
      </div>

      <div>
        <p className="text-[#757575] mb-1 text-[14px] text-center">
          Bold, vibrant flavors, expertly blended with luxurious tea leaves to
        </p>
        <p className="text-[#757575] mt-0 text-[14px] text-center">
          bring you an unparalleled experience.
        </p>
      </div>
      <div>
        <a href="">VIEW OUR COLLECTION</a>
      </div>
    </section>
  );
};

export default Collection;
