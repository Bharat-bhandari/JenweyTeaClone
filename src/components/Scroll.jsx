import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import spoon from "../assets/images/spoon.webp";

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
          end: "bottom+=100% top",
          // markers: true,
          pin: true,
          scrub: 3,
        },
      });

      gsap.to(".temp1", {
        scrollTrigger: {
          trigger: ".temp1",
          start: "top top",
          end: "bottom top",
          pin: true,
          // markers: true,
          scrub: 3,
        },
      });
      gsap.to(".temp2", {
        scrollTrigger: {
          trigger: ".temp2",
          start: "top top",
          end: "bottom top",
          pin: true,
          // markers: true,
          scrub: 3,
        },
      });
      gsap.to(".temp3", {
        scrollTrigger: {
          trigger: ".temp3",
          start: "top top",
          end: "bottom top",
          pin: true,
          // markers: true,
          scrub: 3,
        },
      });

      gsap.from(".image1", {
        scale: 0,
        duration: 0.2,
        ease: "power4.out",
        scrollTrigger: ".image1",
      });

      gsap.from(".image2", {
        scale: 0,
        duration: 0.2,
        ease: "power4.out",
        scrollTrigger: ".image2",
      });

      gsap.from(".image3", {
        scale: 0,
        duration: 0.2,
        ease: "power4.out",
        scrollTrigger: ".image3",
      });

      gsap.from(".image4", {
        scale: 0,
        duration: 0.2,
        ease: "power4.out",
        scrollTrigger: ".image4",
      });

      gsap.to(".leaf", {
        scrollTrigger: {
          trigger: ".leaf",
          start: "top top",
          end: "bottom+=100% top",
          pin: true,
          // markers: true,
          scrub: 3,
        },
      });

      gsap.to(".biscuit", {
        scrollTrigger: {
          trigger: ".biscuit",
          start: "top top",
          end: "bottom+=100% top",
          pin: true,
          // markers: true,
          scrub: 3,
        },
      });

      gsap.to(".potleaf", {
        scrollTrigger: {
          trigger: ".potleaf",
          start: "top top",
          end: "bottom+=200% top",
          pin: true,
          // markers: true,
          scrub: 3,
        },
      });

      gsap.to(".box5", {
        scrollTrigger: {
          trigger: ".box5",
          start: "top top",
          end: "bottom+=100% top",
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
        <div className="grid max-h-screen grid-cols-3 bg-white">
          <div className="flex items-center p-10 balls">
            <img
              src={ball}
              className="object-cover w-full image1"
              alt="balls"
            />
          </div>
          <div className="bg-[#181818] max-h-[100vh]  px-12 ">
            <div className="flex flex-col justify-center h-screen w-[80%]">
              <div className="text-3xl mb-14">Hand Made Tea Cakes</div>
              <div className="text-[#757575] text-sm mb-5">
                SEASONAL GIFT SET
              </div>
              <div className="text-[#757575] text-sm mb-9">
                Hand tied blooming tea ball gift set: stunning blooming teas -
                tied by our farmers in China - known as Double Happiness.
                Flowers, herbs, tea leaves make up this beautiful Signature
                Jenwey Tea gift set. Tied with our Jenwey black ribbon
              </div>
              <div>
                <a
                  href=""
                  className="px-8  py-3 text-sm duration-300 text-white no-underline hover:text-[#131313] transition border border-solid rounded-full hover:bg-white button"
                >
                  BUY NOW
                </a>
              </div>
            </div>
          </div>
          <div className="max-h-screen overflow-hidden leaf ">
            <img src={leaf} className="object-cover w-full h-full" alt="leaf" />
          </div>
        </div>

        {/* Second Section */}
        <div className="grid grid-cols-3 bg-white h-[100vh]">
          <div></div>
          <div className="flex items-center p-10 bg-white biscuit">
            <img
              src={biscuit}
              className="object-cover w-full image2"
              alt="biscuit"
            />
          </div>
          <div></div>
        </div>

        {/* Third Section */}
        <div className="grid grid-cols-3 bg-white max-h-[100vh]">
          <div className="overflow-hidden potleaf">
            <img
              src={potLeaf}
              className="object-cover w-full h-full"
              alt="potleaf"
            />
          </div>
          <div className="max-h-screen"> </div>
          <div className="bg-[#181818] max-h-[100vh] box5 px-12">
            <div className="flex flex-col justify-center h-screen w-[80%]">
              <div className="text-3xl mb-14">Hand Made Tea Cakes</div>
              <div className="text-[#757575] text-sm mb-5">
                EXCLUSIVE HAND MADE TEA CAKES GIFT SET
              </div>
              <div className="text-[#757575] text-sm mb-9">
                Designed by Lisa Marie - Made Exclusively by our farmers in
                China. Hand made Tea Cakes - Preserve the tea - beautifully
                packaged and ready to brew. Simply break a small piece from your
                cake and infuse in your teapot Each cake brews up to 20 pots
              </div>
              <div>
                <a
                  href=""
                  className="px-8  py-3 text-sm duration-300 text-white no-underline hover:text-[#131313] transition border border-solid rounded-full hover:bg-white button"
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
          <div className="p-10 mx-auto my-auto">
            <img
              src={boxBiscuit}
              className="object-cover w-full image3"
              alt="biscuit"
            />
          </div>
          <div className=" h-[100vh]"></div>
        </div>

        {/* Fifth Section */}
        <div className="grid grid-cols-3 bg-white h-[100vh]">
          <div></div>
          <div className="bg-[#181818] max-h-[100vh] box6">
            <div className="bg-[#181818] max-h-[100vh] box5 px-12 ">
              <div className="flex flex-col justify-center h-screen w-[80%]">
                <div className="text-3xl mb-14">Jenwey Luxe Fall Teas</div>
                <div className="text-[#757575] text-sm mb-5">
                  Immerse yourself in the luxurious indulgence of Jenwey Teas'
                  latest masterpieces - spiced pumpkin creme puff, oatmeal apple
                  cinnamon, ginger spice & all things nice!! Each sip unveils a
                  vibrant dance of flavors This, dear connoisseur, is more than
                  just tea - it's a transcendent journey, a moment of respite
                  wrapped in the allure of fine ingredients and exceptional
                  craft. A luxury in every sip, an escapade in every glass.
                </div>

                <div>
                  <a
                    href=""
                    className="px-8  py-3 text-sm duration-300 text-white no-underline hover:text-[#131313] transition border border-solid rounded-full hover:bg-white button"
                  >
                    BUY NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden leafMirror max-h-[100vh]">
            <img
              src={leafMirror}
              className="object-cover w-full h-full"
              alt="leaf"
            />
          </div>
        </div>

        {/* Sixth Section */}
        <div className="grid grid-cols-3 bg-white h-[100vh] ">
          <div className="flex items-center p-10 bg-white masale">
            <img
              src={masale}
              className="object-cover w-full image4"
              alt="masale"
            />
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
