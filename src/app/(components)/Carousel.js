import React, { useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Carousel = ({ slides }) => {
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

  return (
    <div className="font-custom bg-slate-50 pb-5 flex flex-col items-center justify-center h-[600px] sm:h-[550px] md:h-[600px] lg:h-[650px] pt-12 relative">
      <div className="flex flex-col justify-center items-center mb-12 lg:mb-10">
        <span className="text-xl font-medium text-blue_new">F.A.Q</span>
        <span className="text-3xl md:text-4xl font-bold text-center">
          Frequently Asked Questions
        </span>
      </div>
      <div className="relative w-[85%] md:w-[75%] lg:w-[65%] xl:w-[60%] h-[70%] lg:h-[60%] xl:h-[70%] overflow-hidden rounded-xl">
        {transitions((style, item) => (
          <animated.div
            key={item.id}
            className="absolute inset-0 bg-white flex flex-col items-center justify-center"
            style={{ ...style }}
          >
            <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-0">
              <span className="w-[90%] sm:w-[85%] md:w-[75%] text-2xl lg:text-3xl xl:text-4xl font-bold text-center mb-7 text-blue_new">
                {item.question}
              </span>
              <span className="w-[90%] sm:w-[85%] md:w-[75%] text-sm lg:text-xl text-center mt-7">
                {item.answer}
              </span>
            </div>
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
      </div>
    </div>
  );
};

export default Carousel;
