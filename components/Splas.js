import { useEffect, useRef } from "react";
import { gsap, Power3 } from "gsap";

const Splas = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const tl = gsap.timeline({
      defaults: { duration: 0.5, ease: Power3.easeOut },
    });
    tl.to(".svg-elem-1", {
      scale: 0.5,
      transformOrigin: "center",
      delay: 1.5,
    });
    tl.fromTo(
      ".frist-text",
      { y: 0, opacity: 0 },
      { y: -25, opacity: 1 },
      "<0.2"
    );
    tl.fromTo(
      ".splas-screen",
      {
        autoAlpha: 1,
      },
      {
        autoAlpha: 0,
      }
    );
  }, []);
  return (
    <div className="bg-my-white dark:bg-my-black-dark fixed z-50 splas-screen left-0 right-0 top-0 bottom-0">
      <div className="absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <svg
          className="fill-my-black stroke-my-black dark:fill-white dark:stroke-white"
          width="201"
          height="113"
          viewBox="0 0 201 113"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M100.381 95.5146C87.5563 95.5146 77.1578 85.1161 77.1578 72.2911C77.1578 59.466 87.5563 49.0675 100.381 49.0675C113.206 49.0675 123.605 59.466 123.605 72.2911C123.605 85.1161 113.206 95.5146 100.381 95.5146ZM123.605 43.0607C117.233 37.9917 109.157 34.9622 100.381 34.9622C98.2451 34.9622 96.1535 35.1408 94.1215 35.4832C84.2663 37.1431 75.7212 42.6736 70.1089 50.4446C68.7244 48.5316 67.1613 46.7526 65.4493 45.1374C58.7651 38.8253 49.7511 34.9622 39.8289 34.9622C31.0531 34.9622 22.9769 37.9917 16.6054 43.0607V24.3478C16.6054 14.7755 10.8143 6.55797 2.55211 3H2.5V45.7105V72.2539V72.2911C2.5 92.902 19.2106 109.62 39.8289 109.62C49.7511 109.62 58.7651 105.749 65.4493 99.4374C62.3975 95.5147 59.9858 91.0635 58.3854 86.2475C54.1501 91.8748 47.4138 95.5146 39.8289 95.5146C27.0039 95.5146 16.6054 85.1161 16.6054 72.2911C16.6054 59.466 27.0039 49.0675 39.8289 49.0675C47.4138 49.0675 54.1501 52.6999 58.3854 58.3272C61.3182 62.2127 63.0525 67.0509 63.0525 72.2911C63.0525 80.4416 65.6651 87.9893 70.1089 94.1302C76.8824 103.509 87.9211 109.62 100.381 109.62C112.842 109.62 123.88 103.509 130.654 94.1302C132.038 96.0431 133.602 97.8221 135.314 99.4374C141.998 105.749 151.012 109.62 160.934 109.62C181.552 109.62 198.263 92.902 198.263 72.2911C198.263 51.6727 181.552 34.9622 160.934 34.9622C152.158 34.9622 144.082 37.9917 137.71 43.0607V24.8912V23.7523C137.487 14.448 131.793 6.49842 123.717 3H123.605V34.6272C126.329 36.3094 128.86 38.282 131.153 40.5001C132.649 41.9441 134.033 43.4998 135.314 45.1374C136.162 46.2316 136.966 47.363 137.71 48.5316C139.646 51.5685 141.216 54.8511 142.377 58.3272C146.613 52.6999 153.349 49.0675 160.934 49.0675C173.759 49.0675 184.157 59.466 184.157 72.2911C184.157 85.1161 173.759 95.5146 160.934 95.5146C153.349 95.5146 146.613 91.8748 142.377 86.2475C139.445 82.3621 137.71 77.5313 137.71 72.2911C137.71 64.133 135.098 56.5854 130.654 50.4446C129.158 48.3753 127.453 46.4623 125.57 44.7354C124.937 44.1549 124.282 43.5966 123.605 43.0607V43.0607Z"
            // stroke="#283747"
            strokeWidth="1.6"
            strokeMiterlimit="2.61313"
            className="svg-elem-1"
          ></path>
        </svg>
        <h2 className="font-my-font frist-text font-semibold text-lg opacity-0 capitalize">
          bob personal website
        </h2>
      </div>
    </div>
  );
};

export default Splas;