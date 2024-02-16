import { Fragment, useRef } from "react";

import { PiBagSimple } from "react-icons/pi";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import "./Header.css";
const HeaderMain = () => {
  const container = useRef();

  useGSAP(
    () => {
      // gsap code here...
      gsap
        .timeline()
        .addLabel("myLabel1")
        .from(
          ".navitems div,.burgermenu",
          {
            display: "none",
            y: -10,
            opacity: 0,
            autoAlpha: 0,
            duration: 1,
            ease: "power1.in",
          },
          "myLabel1"
        )
        .from(
          ".subitemlogin",
          {
            display: "none",
            x: 25,
            opacity: 0.5,
            autoAlpha: 0,
            duration: 1,
            ease: "power1.in",
          },
          "mylLabel1"
        )
        .fromTo(
          ".logosvg",
          {
            opacity: 0,
            clipPath: "polygon(0% 0%,0% 0%,0% 100%,0% 100%)",
          },
          {
            duration: 1,
            ease: "power1.in",
            clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
            opacity: 1,
          },
          "myLabel1"
        );
    },
    { scope: container }
  );

  return (
    <Fragment>
      <div ref={container} className="headerblock">
        <div className="tabs">
          <div className="griditem1">
            <div className="burgermenu">
              <svg
                preserveAspectRatio="xMidYMid meet"
                data-bbox="44 84 112 32"
                viewBox="44 84 112 32"
                height="200"
                width="200"
                xmlns="http://www.w3.org/2000/svg"
                data-type="shape"
                role="presentation"
                aria-hidden="true"
                aria-label=""
                fill="white"
                className="menusvg"
              >
                <g>
                  <path d="M156 84v6H44v-6h112z"></path>
                  <path d="M156 110v6H44v-6h112z"></path>
                </g>
              </svg>
            </div>
            <div className="navitems">
              <div className="navitem1">SHOP</div>
              <div className="navitem2">WHOLESALE</div>
              <div className="navitem3">TEA OF MONTH</div>
            </div>
          </div>
          <div className="logo griditem2">
            <div className="blackbox">
              <svg
                // preserveAspectRatio="xMidYMid meet"
                // data-bbox="163.7 203.6 246.8 105.505"
                viewBox="163.7 203.6 246.8 105.505"
                // xmlns="http://www.w3.org/2000/svg"
                // data-type="color"
                // role="presentation"
                // aria-hidden="true"
                // aria-label=""
                // style=""
                className="logosvg"
              >
                <g>
                  <path
                    d="M335.2 309.1c.1 0-3.3-5-12.1-6.6-8.6-1.9-20.6-1.3-34 .7-13.5 1.6-26.1.7-34.8-1.6-8.8-2.2-13.3-5.5-13.3-5.5 0-.1 5 2.6 13.7 3.9 8.6 1.4 20.8 1.5 34.1-.1 13.3-2 26.1-1.8 34.8 1 8.9 2.6 11.7 8.4 11.6 8.2z"
                    fill="#ffffff"
                    data-color="1"
                  ></path>
                  <path
                    d="M296 251.9c2 1.6 4.7 2.2 7.7 1.5 3.5-.8 4.9-4.1 4.5-6.9-.1-.9-.4-1.5-.8-2-.5-.8-1.4-1.3-2.4-1.3-1.6 0-2.8 1.3-2.8 2.8 0 1.6 1.3 2.8 2.8 2.8.3 0 .5-.1.8-.1-.4 1.3-1.3 2.1-2.6 2.4-2.3.5-4.2.2-5.8-1-2.3-1.9-3.1-5.3-3-7.6h-2.2c-.2 2.8.8 7 3.8 9.4zm-4.9-13c.1.3.2.7.2 1 0 .4-.1.7-.2 1h4.4v-2.1h-4.4zm1.5-1.1h2c.3-.6 1.4-2.4 3.1-3.8 1.7-1.3 3.7-1 5.3.3 1.6 1.3 3.9 2.1 3.9 2.1 1-1 .4-3.2.4-3.2 2.1 1.3 2.9.9 4.2.7 1.3-.2 1.8 1.1 1.8 1.1.8-1 .5-2.7-.7-4.3-1.2-1.6-3.6-2-4.8-2.1-.2 0-.7-.1-.5-.5 1.3-1 4.2-.1 5.6.4 2.1.8 3.7 2.4 4.4 4.7 1.9 6.3-3.9 7.1-3.9 7.1s3.6 1.4 5.8-1.1c3.6-4 .4-13-9.5-13.6-10-.8-15.7 7.4-17.1 12.2zm-8.5 4.7h-2.3c0 2.3-.7 5.7-3 7.6-1.5 1.2-3.4 1.6-5.7 1-1.4-.3-2.2-1.1-2.6-2.4.3.1.5.1.8.1 1.6 0 2.8-1.3 2.8-2.8 0-1.6-1.3-2.8-2.8-2.8-1 0-1.8.5-2.3 1.3-.4.4-.7 1.1-.8 2-.4 2.8 1 6 4.5 6.9 3 .7 5.6.2 7.7-1.5 2.8-2.4 3.7-6.6 3.7-9.4zm2-6.4s1-.3 1.5-.3h1c.5 0 1.5.3 1.5.3.5-.9 2.2-7.1 6-11.3 3.8-4.1 7.1-4.5 10.1-4.3 3 .3 2.9 3.6 2.9 3.6s2.5-3.6.1-5.9c-2.4-2.3-5.8-1.8-7.5-.9-1.8.9-1.5 0-1.1-1.1.4-1.1-.4-3-.4-3-.2 1.8-3.8 2.5-5.8 6.1-1.3 2.4-3.4 8.8-3.8 10.3-.4 1.5-.6 2.8-1.3 2.6-.6-.1-.5-1.3.1-3.4.6-2.1 1.1-3.9 2.4-7.4 1.2-3.5.5-10.1 0-11.2-.5-1.1-.6-1.9-.6-1.9-.6.4-1.6 1.1-1.6 1.1s.5-1.3.1-2.6c-.3-1.1-1.2-1.7-1.6-3.2-.4 1.5-1.5 2.1-1.8 3.2-.4 1.3.1 2.6.1 2.6s-1-.7-1.6-1.1c0 0-.1.7-.6 1.9-.5 1.1-1.2 7.7 0 11.2 1.3 3.5 1.8 5.3 2.4 7.4.6 2.1.8 3.3.1 3.4-.6.1-.9-1.1-1.2-2.6-.4-1.5-2.4-7.9-3.8-10.3-2-3.6-5.5-4.4-5.8-6.1 0 0-.7 1.9-.4 3 .4 1.1.6 2-1.1 1.1-1.8-.9-5.1-1.4-7.5.9-2.4 2.2.1 5.9.1 5.9s-.1-3.4 2.9-3.6c3-.3 6.4.1 10.1 4.3 3.8 4.1 5.6 10.4 6.1 11.3zm4.1 3.8c0-1.1-.9-2.1-2.1-2.1-1.1 0-2.1.9-2.1 2.1 0 1.1.9 2.1 2.1 2.1 1.1 0 2.1-.9 2.1-2.1zm-5.1-1h-4.4v2.1h4.4c-.1-.3-.2-.7-.2-1 0-.4.1-.8.2-1.1zm-26.1-5.7c.7-2.2 2.2-3.8 4.4-4.7 1.4-.5 4.3-1.4 5.6-.4.2.3-.2.4-.5.5-1.2.1-3.6.5-4.8 2.1-1.2 1.6-1.6 3.3-.7 4.3 0 0 .5-1.3 1.8-1.1 1.3.2 2.2.7 4.2-.7 0 0-.6 2.2.4 3.2 0 0 2.3-.7 3.9-2.1 1.6-1.3 3.6-1.6 5.3-.3 1.7 1.3 2.8 3.1 3.1 3.8h2c-1.4-4.8-7.1-13-17-12.3-9.9.7-13 9.6-9.5 13.6 2.3 2.5 5.8 1.1 5.8 1.1s-5.9-.7-4-7z"
                    fill="#ffffff"
                    data-color="1"
                  ></path>
                  <path
                    d="M168.3 284.6V268c0-.7-.1-1.4-.4-1.9-.3-.5-.9-.8-1.9-.8h-.2v-.4h9.2v.4c-1 0-1.7.2-2 .7-.3.5-.4 1.2-.4 2v15.7c0 1-.1 1.9-.2 2.8s-.6 1.8-1.3 2.6-1.7 1.2-3.1 1.2c-.9 0-1.7-.2-2.3-.6-.6-.4-1.1-.9-1.4-1.5-.3-.6-.5-1.1-.6-1.7l.4-.1c.5 1 1.2 1.5 2.1 1.5 1.3 0 2.1-1.1 2.1-3.3z"
                    fill="#ffffff"
                    data-color="1"
                  ></path>
                  <path
                    d="M176.6 273.1v-.5c.7-.4 1.2-.9 1.6-1.5.4-.6.6-1.1.6-1.7-.6-.1-1.1-.4-1.5-.8-.3-.5-.5-1-.5-1.5 0-.7.2-1.2.7-1.7.4-.5 1-.7 1.7-.7.8 0 1.4.3 1.8.9s.6 1.3.6 2-.2 1.4-.5 2.2c-.3.8-.9 1.4-1.6 2.1-.8.5-1.8 1-2.9 1.2z"
                    fill="#ffffff"
                    data-color="1"
                  ></path>
                  <path
                    d="M196.9 264.9l.2 4.7h-.4c-.2-.8-.4-1.4-.6-2-.2-.5-.5-.9-.9-1.2s-.9-.4-1.6-.4h-3.9v8.9h3.1c.9 0 1.6-.2 2.1-.7.4-.4.7-1.1.8-2h.4v6.2h-.4c-.1-.9-.5-1.6-1-1.9s-1.1-.5-1.8-.5h-3.1v6.1c0 1.8.8 2.6 2.5 2.6h1.2c.8 0 1.5-.1 2-.3.5-.2.9-.6 1.3-1.2s.6-1.4.9-2.4h.4l-.3 5.1h-14.7v-.4c1 0 1.7-.3 2-.8.3-.5.5-1.2.5-2V268c0-.8-.1-1.4-.4-2-.3-.5-.9-.8-1.9-.8h-.1v-.4h13.7z"
                    fill="#ffffff"
                    data-color="1"
                  ></path>
                  <path
                    d="M205.7 264.9l11.9 13.6v-9.7c0-1.3-.2-2.1-.7-2.6s-1.2-.8-2.2-.9v-.4h6.7v.4c-.7.1-1.3.3-1.7.7s-.6.8-.7 1.2-.2 1-.2 1.7v17.4h-.5L204 270v11.9c0 1 .2 1.8.6 2.5.4.7 1.1 1.1 2.2 1.2v.4h-7v-.4c2-.2 2.9-1.2 2.9-3.1v-14c-.1 0-.1-.1-.2-.2l-.4-.4-.5-.5c-1.2-1.2-2.2-1.9-3.1-2.1v-.4h7.2z"
                    fill="#ffffff"
                    data-color="1"
                  ></path>
                  <path
                    d="M251.1 264.9v.4c-.7.1-1.4.4-1.9 1s-1 1.5-1.4 2.8l-5.4 17.1h-.4l-5.4-17.5h-.1l-5.7 17.5h-.4l-5.7-18.4c-.2-.7-.5-1.3-.8-1.6-.3-.4-.7-.6-1-.7-.3-.1-.7-.2-1-.2v-.4h9v.4c-.5 0-.9.2-1.3.4-.3.3-.5.7-.5 1.2 0 .3.1.7.2 1.2l2.9 9.4h.1l3.5-10.8c-.2-.4-.4-.7-.6-.9-.2-.2-.4-.3-.7-.4-.3-.1-.7-.1-1.1-.2v-.4h8.8v.4c-.5 0-.9.1-1.2.2-.3.1-.5.5-.5 1 0 .2 0 .4.1.6 0 .2.1.4.2.7s.1.4.1.5l2.9 9.3h.1l2.7-8.7c.2-.7.3-1.3.3-1.7 0-.8-.2-1.3-.6-1.5-.4-.2-.9-.3-1.5-.4v-.4h6.3z"
                    fill="#ffffff"
                    data-color="1"
                  ></path>
                  <path
                    d="M265.8 264.9l.2 4.7h-.4c-.2-.8-.4-1.4-.6-2-.2-.5-.5-.9-.9-1.2s-.9-.4-1.6-.4h-3.9v8.9h3.1c.9 0 1.6-.2 2.1-.7.4-.4.7-1.1.8-2h.4v6.2h-.4c-.1-.9-.5-1.6-1-1.9s-1.1-.5-1.8-.5h-3.1v6.1c0 1.8.8 2.6 2.5 2.6h1.2c.8 0 1.5-.1 2-.3.5-.2.9-.6 1.3-1.2s.6-1.4.9-2.4h.4l-.3 5.1H252v-.4c1 0 1.7-.3 2-.8.3-.5.5-1.2.5-2V268c0-.8-.1-1.4-.4-2-.3-.5-.9-.8-1.9-.8h-.1v-.4h13.7z"
                    fill="#ffffff"
                    data-color="1"
                  ></path>
                  <path
                    d="M289.2 264.9v.4c-1 0-1.8.3-2.6.9s-1.5 1.4-2.3 2.7l-3.6 5.8v8.2c0 .9.2 1.6.5 2.1.3.4 1 .7 1.9.7v.4h-9.2v-.4c1 0 1.7-.2 2-.7.3-.5.5-1.2.5-2v-7.1l-5.8-8.3c-.6-.9-1.2-1.5-1.6-1.8-.4-.3-.9-.4-1.5-.4v-.4h9.6v.4c-.5 0-.9.1-1.2.2-.3.1-.4.4-.4.8s.3.9.8 1.7l3.6 5.6 2.9-4.7c.5-.8.8-1.6.8-2.2 0-.3-.1-.6-.4-.9-.3-.3-.7-.4-1.3-.4v-.4h7.3z"
                    fill="#ffffff"
                    data-color="1"
                  ></path>
                  <path
                    d="M301.3 264.9H315c.6 0 1.2-.1 1.6-.3h.4l.1 5h-.4c-.2-1.5-.5-2.4-1-2.8-.5-.4-1-.6-1.7-.6h-3.7v16.7c0 .6.1 1 .2 1.4.1.4.3.7.7.9.4.2.9.4 1.6.4v.4h-9.2v-.4c1 0 1.7-.2 2-.7s.5-1.2.5-2v-16.7h-3.7c-.6 0-1.1.2-1.5.6-.4.4-.8 1.3-1.1 2.7h-.4l.1-5h.4c.3.3.8.4 1.4.4z"
                    fill="#ffffff"
                    data-color="1"
                  ></path>
                  <path
                    d="M332 264.9l.2 4.7h-.4c-.2-.8-.4-1.4-.6-2-.2-.5-.5-.9-.9-1.2s-.9-.4-1.6-.4h-3.9v8.9h3.1c.9 0 1.6-.2 2.1-.7.4-.4.7-1.1.8-2h.4v6.2h-.4c-.1-.9-.5-1.6-1-1.9s-1.1-.5-1.8-.5h-3.1v6.1c0 1.8.8 2.6 2.5 2.6h1.2c.8 0 1.5-.1 2-.3.5-.2.9-.6 1.3-1.2s.6-1.4.9-2.4h.4l-.3 5.1h-14.7v-.4c1 0 1.7-.3 2-.8.3-.5.5-1.2.5-2V268c0-.8-.1-1.4-.4-2-.3-.5-.9-.8-1.9-.8h-.1v-.4H332z"
                    fill="#ffffff"
                    data-color="1"
                  ></path>
                  <path
                    d="M345 264.7l6.6 18.3c.4.9.8 1.6 1.2 1.9.5.3 1.1.6 1.8.7v.4h-9.3v-.4c1.3-.1 1.9-.5 1.9-1.3 0-.1 0-.3-.1-.5 0-.2-.1-.5-.2-.7-.1-.3-.1-.4-.1-.5l-1.6-4.5h-5.8l-1.4 4.3c-.2.5-.3 1-.3 1.4 0 .7.2 1.1.5 1.3.4.2.8.4 1.3.5v.4h-5.9v-.4c.6-.1 1.2-.4 1.7-.9s1-1.6 1.5-3l5.6-17h2.6zm-5.1 12h4.9l-2.5-7.1-2.4 7.1z"
                    fill="#ffffff"
                    data-color="1"
                  ></path>
                  <path
                    d="M382.9 272.1h-.5c-.1-1-.4-1.9-.8-2.7-.4-.8-.9-1.5-1.5-2s-1.2-.9-1.9-1.2-1.5-.4-2.3-.4c-1.1 0-2 .2-2.8.7-.8.5-1.4 1.1-1.9 1.8-.5.9-.9 1.9-1.1 3-.2 1.1-.3 2.3-.3 3.6 0 2.3.4 4.1 1.1 5.5.7 1.4 1.6 2.3 2.7 2.9 1 .5 2.1.8 3.1.8 2.5 0 4.6-1.3 6.4-3.9v1.9c-.6.7-1.2 1.4-1.9 2-.7.6-1.5 1.1-2.6 1.4-1 .4-2.2.6-3.6.6-1.6 0-3-.3-4.3-.9-1.3-.6-2.3-1.4-3.1-2.4-.8-1-1.5-2.1-1.9-3.4-.4-1.3-.6-2.6-.6-4 0-1.2.1-2.3.4-3.3.3-1 .6-1.9 1.1-2.7.5-.8 1-1.5 1.7-2.2 1.1-1.1 2.3-1.8 3.5-2.2 1.2-.4 2.5-.6 3.9-.6s2.9.2 4.5.7c.6.1 1 .2 1.2.2.5 0 .9-.3 1.1-1h.4v7.8z"
                    fill="#ffffff"
                    data-color="1"
                  ></path>
                  <path
                    d="M384.7 275.4c0-1.4.2-2.8.7-4.1.5-1.3 1.1-2.5 2-3.5s2-1.8 3.2-2.3c1.3-.5 2.7-.8 4.3-.8 1.6 0 3 .3 4.3.8s2.3 1.3 3.2 2.3c.9 1 1.5 2.1 2 3.5.5 1.3.7 2.7.7 4.2s-.2 2.8-.7 4.1c-.4 1.3-1.1 2.4-1.9 3.4-.9 1-1.9 1.8-3.2 2.4-1.3.6-2.7.9-4.4.9-1.8 0-3.3-.3-4.6-1-1.3-.6-2.4-1.5-3.2-2.6s-1.4-2.2-1.8-3.5c-.4-1.3-.6-2.6-.6-3.8zm4.7-.3c0 1.4.1 2.8.3 4.2.2 1.4.7 2.7 1.5 3.9.8 1.2 2.1 1.8 3.8 1.8 2.3 0 3.9-1 4.5-3.1.7-2 1-4.1 1-6.2 0-1.7-.1-3.2-.4-4.6s-.8-2.7-1.6-3.7-2-1.5-3.5-1.5c-1.7 0-2.9.6-3.8 1.8s-1.3 2.4-1.5 3.7c-.2 1.2-.3 2.5-.3 3.7z"
                    fill="#ffffff"
                    data-color="1"
                  ></path>
                  <path
                    d="M408.4 281.6c.6 0 1.1.2 1.5.7s.6 1 .6 1.6c0 .6-.2 1.2-.6 1.6s-.9.7-1.5.7-1.1-.2-1.5-.7-.6-1-.6-1.6c0-.6.2-1.2.6-1.6.3-.5.8-.7 1.5-.7z"
                    fill="#ffffff"
                    data-color="1"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
          <div className="griditem3">
            <div className="subitemlogin">LOG IN</div>
            <div className="subitemlock">
              <PiBagSimple />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HeaderMain;
