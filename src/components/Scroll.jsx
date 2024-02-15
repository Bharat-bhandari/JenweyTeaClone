import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import ball from "../assets/images/balls.webp";
import leaf from "../assets/images/leaf.webp";
import biscuit from "../assets/images/biscuit.webp";
import potLeaf from "../assets/images/potLeaf.webp";
import boxBiscuit from "../assets/images/boxBiscuit.webp";
import leafMirror from "../assets/images/leafMirror.webp";
import masale from "../assets/images/masale.webp";

const Scroll = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.to(".balls", {
        scrollTrigger: {
          trigger: ".balls",
          start: "top top",
          end: "bottom top",
          // markers: true,
          pin: true,
          scrub: 3,
        },
      });

      gsap.to(".leaf", {
        scrollTrigger: {
          trigger: ".leaf",
          start: "top top",
          end: "bottom top",
          pin: true,
          // markers: true,
          scrub: 3,
        },
      });

      gsap.to(".biscuit", {
        scrollTrigger: {
          trigger: ".biscuit",
          start: "top top",
          end: "bottom top",
          pin: true,
          // markers: true,
          scrub: 3,
        },
      });

      gsap.to(".potleaf", {
        scrollTrigger: {
          trigger: ".potleaf",
          start: "top top",
          end: "bottom+=100% top",
          pin: true,
          // markers: true,
          scrub: 3,
        },
      });

      gsap.to(".box5", {
        scrollTrigger: {
          trigger: ".box5",
          start: "top top",
          end: "bottom top",
          toggleActions: "play none reverse reset",
          pin: true,
          // markers: true,
          scrub: 3,
        },
      });

      gsap.to(".box6", {
        scrollTrigger: {
          trigger: ".box6",
          start: "top top",
          end: "bottom+=100% top",
          pin: true,
          // markers: true,
          scrub: 3,
          anticipatePin: 1,
        },
      });

      gsap.to(".leafMirror", {
        scrollTrigger: {
          trigger: ".leafMirror",
          start: "top top",
          end: "bottom+=100% top",
          pin: true,
          // markers: true,
          scrub: 3,
        },
      });

      gsap.to(".masale", {
        scrollTrigger: {
          trigger: ".masale",
          start: "top top",
          end: "bottom top",
          pin: true,
          // markers: true,
          scrub: 3,
        },
      });
    },

    { scope: container }
  );

  return (
    <>
      {/* First Section */}
      <section ref={container}>
        <div className="grid max-h-screen grid-cols-3 bg-white ">
          <div className="flex items-center balls">
            <img src={ball} className="object-cover w-full" alt="balls" />
          </div>
          <div className="bg-[#181818] max-h-screen"> center</div>
          <div className="max-h-screen overflow-hidden leaf">
            <img src={leaf} className="object-cover " alt="leaf" />
          </div>
        </div>

        {/* Second Section */}
        <div className="grid grid-cols-3 bg-white h-[100vh]">
          <div></div>
          <div className="flex items-center bg-white biscuit">
            <img src={biscuit} className="object-cover w-full " alt="biscuit" />
          </div>
          <div></div>
        </div>

        {/* Third Section */}
        <div className="grid grid-cols-3 bg-white max-h-[100vh]">
          <div className="overflow-hidden potleaf">
            <img src={potLeaf} className="object-cover " alt="balls" />
          </div>
          <div className="max-h-screen"> </div>
          <div className="bg-[#181818] max-h-[100vh] box5">
            <div className="flex flex-col items-center justify-center h-screen">
              <div>Hand Made Tea Cakes</div>
              <div>EXCLUSIVE HAND MADE TEA CAKES GIFT SET</div>
              <div>
                Designed by Lisa Marie - Made Exclusively by our farmers in
                China. Hand made Tea Cakes - Preserve the tea - beautifully
                packaged and ready to brew. Simply break a small piece from your
                cake and infuse in your teapot Each cake brews up to 20 pots
              </div>
              <div>
                <a
                  href=""
                  className="px-8 py-3 text-sm duration-300 text-white no-underline hover:text-[#131313] transition border border-solid rounded-full hover:bg-white button"
                >
                  BUY NOW
                </a>
              </div>
            </div>
          </div>
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
          <div className="bg-yellow-300 h-[100vh]"></div>
        </div>

        {/* Fifth Section */}
        <div className="grid grid-cols-3 bg-white h-[100vh]">
          <div></div>
          <div className="bg-[#181818] max-h-[100vh] box6">
            <div className="flex flex-col items-center justify-center h-screen">
              <div>Hand Made Tea Cakes</div>
              <div>EXCLUSIVE HAND MADE TEA CAKES GIFT SET</div>
              <div>
                Designed by Lisa Marie - Made Exclusively by our farmers in
                China. Hand made Tea Cakes - Preserve the tea - beautifully
                packaged and ready to brew. Simply break a small piece from your
                cake and infuse in your teapot Each cake brews up to 20 pots
              </div>
              <div>
                <a
                  href=""
                  className="px-8 py-3 text-sm duration-300 text-white no-underline hover:text-[#131313] transition border border-solid rounded-full hover:bg-white button"
                >
                  BUY NOW
                </a>
              </div>
            </div>
          </div>
          <div className="overflow-hidden leafMirror max-h-[100vh]">
            <img
              src={leafMirror}
              className="object-cover max-h-[100vh]"
              alt="leaf"
            />
          </div>
        </div>

        {/* Sixth Section */}
        <div className="grid grid-cols-3 bg-white h-[100vh]">
          <div className="flex items-center h-[100vh] masale">
            <img src={masale} className="object-cover w-full " alt="balls" />
          </div>
          <div></div>
          <div></div>
        </div>

        {/* Seventh Section */}
        <div className=" bg-white h-[100vh]"></div>
      </section>
    </>
  );
};

export default Scroll;
