/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState, useEffect } from "react";
import Topbar from "../(components)/Topbar";
import Navbar from "../(components)/Navbar";
import "aos/dist/aos.css"; // Import AOS styles
import { useRouter } from "next/navigation";
import Ambulance_images from "./Data";
import { useTransition, animated } from "react-spring";
import Footer from "../(components)/Footer";
import {
  faAngleRight,
  faArrowLeft,
  faGreaterThan,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const slides = Ambulance_images;
const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPreviousClick, setIsPreviousClick] = useState(false);
  // Ensure slides array exists and has items
  if (!slides || slides.length === 0) {
    return null; // Render nothing if no slides or empty slides array
  }
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex, slides.length]);
  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    setIsPreviousClick(false);
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setIsPreviousClick(true);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  // React-spring transitions for slides
  const transitions = useTransition(slides[currentIndex], {
    key: slides[currentIndex].id,
    from: {
      opacity: 0,
      transform: isPreviousClick
        ? "translate3d(-100%, 0, 0)"
        : "translate3d(100%, 0, 0)",
    },
    enter: {
      opacity: 1,
      transform: isPreviousClick
        ? "translate3d(0%, 0, 0)"
        : "translate3d(0%, 0, 0)",
    },
    leave: {
      opacity: 0,
      transform: isPreviousClick
        ? "translate3d(100%, 0, 0)"
        : "translate3d(-100%, 0, 0)",
    },
  });

  return (
    <>
      <Topbar />
      <hr></hr> <Navbar />
      <div
        style={{
          backgroundImage:
            'url("https://img.freepik.com/free-photo/doctors-shaking-hands-close-up_23-2148285726.jpg?t=st=1718961249~exp=1718964849~hmac=6d7f213acb5fc5d7a2639c0635d7a6607c2f3af06b641ff701e49976221e3b6f&w=996")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="section_title_bg bg-blue_new text-white w-full h-[300px] font-custom flex flex-col justify-center items-center space-y-6"
      >
        <span className="text-4xl font-bold">Ambulance</span>
        <span className="text-sm">
          <span
            onClick={() => {
              router.push("/Home");
            }}
            className="hover:text-red_new hover:cursor-pointer text-white"
          >
            Home
          </span>{" "}
          <FontAwesomeIcon icon={faAngleRight} /> Ambulance
        </span>
      </div>
      <div className="h-auto w-full bg-white flex justify-center">
        <div className="font-custom w-[85%] md:w-[80%] lg:w-[70%] h-full flex flex-col item-center my-10">
          {/* Carousel starts */}
          <div className="mb-10">
            <span className="w-full text-3xl lg:text-4xl text-[#333] font-bold text-left mt-2 ">
              Book An Ambulance Instantly
            </span>
            <div className="block w-[15%] h-1 bg-blue_new mt-3"></div>
          </div>
          <div className="relative h-[400px] xl:h-[450px] w-full overflow-hidden ">
            {transitions((style, item) => (
              <animated.div
                key={item.id}
                className="absolute inset-0 bg-white"
                style={{ ...style }}
              >
                <div
                  className="absolute inset-0 bg-white"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </animated.div>
            ))}

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 md:w-3 h-2 md:h-3 rounded-full transition-all duration-500 ${
                    index === currentIndex ? "bg-blue_new" : "bg-white"
                  }`}
                ></div>
              ))}
            </div>
          </div>
          {/* Carousel ends */}
          <div className="flex flex-col space-y-4 py-12">
            <span className="w-[100%] sm:w-[80%] text-base text-[#757575] font-normal text-left mt-2 ">
              With Indrav's mobile app, you can book an ambulance instantly. Our
              services are designed for rapid response, ensuring you get the
              help you need without delay. One call is all it takes to have an
              ambulance dispatched to your location.
            </span>
            <span className="block text-lg font-semibold text-[#333]">
              Types of Ambulance
            </span>
            <ul className="flex text-base flex-col text-[#757575]">
              <li>&#8226; Basic Life Support (BLS).</li>
              <li>&#8226; Advance Life Support (ALS).</li>
              <li>&#8226; Train Ambulance.</li>
              <li>&#8226; Air Ambulance.</li>
            </ul>
            <span className="block text-base font-semibold text-[#757575]">
              &#8226; This Feature is coming very soon..
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
