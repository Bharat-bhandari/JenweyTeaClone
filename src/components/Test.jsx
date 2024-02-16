import React, { useRef } from "react";

// import { TextPlugin } from "gsap/TextPlugin";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import "./Test.css";
import image from "../assets/images/main.webp";

const Test = () => {
  const container = useRef();

  useGSAP(
    () => {
      // gsap code here...
      gsap
        .timeline()
        .addLabel("myLabel1")
        .from(".box", {
          // clipPath: "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)",
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1,
          ease: "power2.inOut",
        })

        .from(
          ".text1",
          {
            y: -20,
            display: "none",
            opacity: 0,
            autoAlpha: 0,
            ease: "power1.in",
            duration: 1,
          },
          "myLabel1"
        )

        .fromTo(
          ".text2",
          {
            opacity: 0,
            clipPath: "polygon(50.00% 50.00%,50% 50%,50% 50%,50% 50%)",
          },
          {
            opacity: 1,
            clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
            duration: 0.5,
          },
          "myLabel1+=50%"
        );
    },
    { scope: container }
  );

  return (
    <div>
      <div
        ref={container}
        className="maindiv"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div>
          <div className="mb-0 text-4xl font-normal tracking-wide lg:text-9xl text1">
            YOUR SEVEN STAR
          </div>
          <div className="mt-0 text-4xl font-normal tracking-wide md:text-9xl text2">
            CONCIERGE TEA CO.
          </div>
        </div>
        <div className="box"></div>
      </div>
    </div>
  );
};

export default Test;
