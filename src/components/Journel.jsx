import React, { useRef } from "react";
import j1 from "../assets/images/j1.webp";
import j2 from "../assets/images/j2.webp";
import j3 from "../assets/images/j3.webp";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Journel = () => {
  const container = useRef();

  useGSAP(() => {
    gsap.from(".content", {
      opacity: 0,
      duration: 0.5,
      ease: "none",
      scrollTrigger: ".content",
    });
  });

  return (
    <section ref={container} className="h-[100vh] bg-white text-[#181818] ">
      <div className="px-[7%] pt-[3%]">
        <p className="mb-2 text-2xl">Lisa's Journal</p>
        <div className="grid grid-cols-3 gap-10">
          <div>
            <div className="mx-auto">
              <img
                src={j1}
                className="object-cover w-full mb-16 content"
                alt="j1"
              />
            </div>
            <div className="flex flex-col max-w-[90%] mx-auto">
              <div className="text-[28px] leading-9 text-center">
                Tea Adornments Are a Thing
              </div>
              <div className="mt-4 text-base leading-7">
                We take luxury, beauty, and tea very seriously! And in doing so,
                I have designed a line of Tea Adornments I can not wait for you
                to experience. In the meantime, you can enjoy them at our
                favorite hotels.
              </div>
            </div>
          </div>
          <div>
            <div className="mx-auto">
              <img
                src={j2}
                className="object-cover w-full mb-16 content"
                alt="j1"
              />
            </div>
            <div className="flex flex-col max-w-[90%] mx-auto">
              <div className="text-[28px] leading-9 text-center">
                NOW OFFERED AT
              </div>
              <div className="mt-4 text-base leading-7">
                We take luxury, beauty, and tea very seriously! And in doing so,
                I have designed a line of Tea Adornments I can not wait for you
                to experience. In the meantime, you can enjoy them at our
                favorite hotels.
              </div>
            </div>
          </div>
          <div>
            <div className="mx-auto">
              <img
                src={j3}
                className="object-cover w-full mb-16 content"
                alt="j1"
              />
            </div>
            <div className="flex flex-col max-w-[90%] mx-auto">
              <div className="text-[28px] leading-9 text-center">
                Blessed Pure & Direct
              </div>
              <div className="mt-4 text-base leading-7">
                Have you ever ordered tea that was blessed with your life in
                mind? One of our favorite monks makes frequent visits to our
                production facility and graciously blesses all our tea
                inventory. He casts upon them well wishes for an abundance of
                love, prosperity, and happiness to al those who enjoy our Teas.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journel;
