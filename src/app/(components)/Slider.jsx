// src/components/Slider.jsx
"use client";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";
import Slider_Images from "./Slider_Img";
const slides = Slider_Images;
import { animatePageOut } from "../utils/animation";

const Slider = () => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPreviousClick, setIsPreviousClick] = useState(false);
  // Ensure slides array exists and has items
  if (!slides || slides.length === 0) {
    return null; // Render nothing if no slides or empty slides array
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
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
  // eslint-disable-next-line react-hooks/rules-of-hooks
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

  const handleclick = () => {
    animatePageOut("/ContactUs", router);
    const contactUsDiv = document.querySelector(".contact_us");
    contactUsDiv.classList.add("active");
  };

  return (
    <>
      <div className="relative h-[400px] lg:h-[600px] w-full overflow-hidden ">
        {transitions((style, item) => (
          <animated.div
            key={item.id}
            className="absolute inset-0 bg-white"
            style={{ ...style }}
          >
            <div
              className="flex flex-col items-center justify-center h-full bg-black bg-opacity-0"
              style={{
                width: "100%",
                height: "600px",
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </animated.div>
        ))}

        <button
          onClick={prevSlide}
          className="hidden sm:flex hover:bg-red_new z-0 prev font-custom absolute top-1/2 transform -translate-y-1/2 left-4 w-8 md:w-12 h-8 md:h-12 px-4 py-2 rounded-full text-sm md:text-lg font-semibold items-center justify-center transition-all duration-[300ms] ease-in-out bg-white bg-opacity-50 text-black p-2"
        >
          <FontAwesomeIcon className="text-blue_new" icon={faChevronLeft} />
        </button>
        <button
          onClick={nextSlide}
          className="hidden sm:flex hover:bg-red_new  prev font-custom absolute top-1/2 transform -translate-y-1/2 right-4 w-8 md:w-12 h-8 md:h-12 px-4 py-2 rounded-full text-sm md:text-lg font-semibold z- 0 items-center justify-center transition-all duration-[300ms] ease-in-out bg-white bg-opacity-50 text-black p-2"
        >
          <FontAwesomeIcon className="text-blue_new" icon={faChevronRight} />
        </button>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-2 md:w-3 h-2 md:h-3 rounded-full transition-all duration-500 ${
                index === currentIndex ? "bg-blue_new" : "bg-red_new"
              }`}
            ></div>
          ))}
        </div>

        <div className=" absolute left-8  md:left-16 lg:inset-0  w-[85%] lg:w-[70vw] h-[100%] lg:h-[450px] lg:ml-[8vw] flex flex-col justify-center lg:justify-end ">
          <div
            data-aos="fade-up"
            className="w-[90%] h-auto lg:h-[35%] text-4xl lg:text-5xl text-[#2C2D3F] font-bold"
          >
            We build products that open{" "}
            <a className="text-blue_new">opportunities</a> & solve problems
            globally.
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="py-3 lg:pt-0 my-6 lg:mt-1 w-[95%] lg:w-[50%] h-auto text-sm lg:text-1xl text-[#2C2D3F] font-medium "
          >
            Share your unique insights, creativity, and a fearless approach to
            impossible challenges. Together, we can build solutions for all.
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className=" w-[80%] h-auto lg:h-[20%] flex items-center justify-start space-x-7 "
          >
            <div className="h-10 text-sm lg:text-base w-36 lg:h-12 lg:w-44 rounded-md btn flex items-center justify-center font-medium">
              <a
                onClick={() => {
                  handleclick();
                }}
              >
                Book Appoinment
              </a>
            </div>
            <div className="h-10 text-sm lg:text-base w-28 lg:h-12 lg:w-36 rounded-md btn2 flex items-center justify-center font-medium bg-red_new ">
              <a
                onClick={() => {
                  handleclick();
                }}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <button className=" hover:bg-red_new bg-blue-500 prev font-custom absolute top-1/2 transform -translate-y-1/2 left-4 w-12 h-12 px-4 py-2 rounded-full text-lg font-semibold z-10 flex items-center justify-center transition-all duration-[300ms] ease-in-out "
            onClick={prevSlide}><FontAwesomeIcon className="text-white" icon={faChevronLeft} /></button>
        <button className="hover:bg-red_new next font-custom absolute top-1/2 transform -translate-y-1/2 right-4 size-[3rem] bg-blue_new px-4 py-2 rounded-full text-lg font-semibold z-10 transition-all duration-[300ms] ease-in-out" onClick={nextSlide}><FontAwesomeIcon className="text-white" icon={faChevronRight} /></button> */}
    </>
  );
};
export default Slider;
