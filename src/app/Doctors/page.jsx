/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState, useEffect } from "react";
import Topbar from "../(components)/Topbar";
import Navbar from "../(components)/Navbar";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { useTransition, animated } from "react-spring";
import { useRouter } from "next/navigation";
import Footer from "../(components)/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import Ambulance_images from "./Data";
const slides = Ambulance_images;

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentIndex, setCurrentIndex] = useState(0);
  // eslint-disable-next-line react-hooks/rules-of-hooks
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
        <span className="text-4xl font-bold">Doctors</span>
        <span className="text-sm">
          <span
            onClick={() => {
              router.push("/Home");
            }}
            className="hover:text-red_new hover:cursor-pointer text-white"
          >
            Home
          </span>{" "}
          <FontAwesomeIcon icon={faAngleRight} /> Doctors
        </span>
      </div>
      <div
        className="h-auto w-full shadow-lg bg-white flex justify-center"
        style={{
          backgroundImage: 'url("nexus_x1.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="font-custom justify-center w-[85%] lg:w-[70%] h-full flex flex-col mt-16">
          <div className="flex flex-col md:flex-row w-full h-full items-center md:item ">
            <div className="h-full w-full md:w-[70%]">
              <div className="">
                <span className="w-full text-3xl lg:text-4xl text-[#333] font-bold text-left ">
                  Nexus: The Ultimate Doctor ERP Portal
                </span>
                <div className="block w-[10%] h-1 bg-blue_new mt-3"></div>
              </div>
              <div className="flex">
                <span className="w-[100%] sm:w-[80%] text-base text-[#757575] font-normal text-left mt-2 ">
                  Nexus is our comprehensive ERP portal designed to streamline
                  healthcare management for doctors and their receptionists. It
                  empowers medical professionals with a robust set of tools to
                  efficiently manage their practice.
                </span>
              </div>
            </div>
            <div
              className="w-[80%] md:w-[45%] xl:w-[35%] h-[120px] md:h-[150px] mt-5 md:mt-0"
              style={{
                backgroundImage: 'url("/nexus-logo.png")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>

          <hr className="mt-10"></hr>
          {/* hello */}

          <div className="relative h-[400px] xl:h-[450px] w-full overflow-hidden mt-16">
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

          {/* hello */}
          {/* <div className="my-6 mt-10 flex flex-col items-center justify-center">
                        <span className='w-full text-3xl lg:text-4xl text-[#333] font-bold text-center mt-2 '>Features.</span>
                        <div className='block w-[75%] h-0.5 rounded-xl bg-blue_new mt-3'></div>
                    </div> */}
          <div className="w-full h-auto flex flex-col my-6 md:my-16 rounded-xl md:bg-white items-center py-10">
            <div className="w-[100%] sm:w-[80%] md:w-[90%] bg-white rounded-xl md:rounded-none md:bg-transparent h-auto md:h-[300px] space-y-3 md:space-y-0 py-4 md:py-0 my-5 md:my-1 flex flex-col md:flex-row justify-center md:justify-end items-center">
              <div className="w-full md:w-1/2 h-auto  md:h-full flex items-center justify-center">
                <div
                  className="w-72 h-72 rounded-full bg-red-500"
                  style={{
                    backgroundImage: 'url("nexus1.jpg")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <FontAwesomeIcon
                  className="hidden text-4xl text-blue_new pl-5"
                  icon={faChevronRight}
                />
              </div>
              <div className="w-full md:w-1/2 h-auto md:h-full px-5 flex flex-col justify-center items-center">
                <div className="flex flex-col space-y-2">
                  <span className="text-2xl lg:text-3xl text-blue_new font-bold w-full">
                    Appointment Management
                  </span>
                  <span className="text-sm text-[#757575]  font-normal w-full">
                    Effortlessly Track and Schedule Patient Appointments
                  </span>
                  <div className="bg-[#9a9a9a] h-[0.15rem] w-1/4 mt-2"></div>
                </div>
                <div className="text-[#757575]  h-auto w-full pt-5 text-sm flex flex-col items-center lg:text-base text-left">
                  <ul className="space-y-3">
                    <li>
                      &#8226; Receive notifications for upcoming appointments.
                    </li>
                    <li>
                      &#8226; Reschedule or cancel appointments with ease.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-[100%] sm:w-[80%] md:w-[90%] bg-white rounded-xl md:rounded-none md:bg-transparent h-auto md:h-[300px] space-y-3 md:space-y-0 py-4 md:py-0 my-5 md:my-1 flex flex-col md:flex-row-reverse justify-center md:justify-end items-center">
              <div className="w-full md:w-1/2 h-auto  md:h-full flex items-center justify-center">
                <FontAwesomeIcon
                  className="text-4xl text-blue_new pr-5"
                  icon={faChevronLeft}
                />

                <div
                  className="w-72 h-72 rounded-full bg-red-500"
                  style={{
                    backgroundImage: 'url("nexus2.jpg")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>
              <div className="w-full md:w-1/2 h-auto md:h-full px-5 flex flex-col justify-center items-center">
                <div className="flex flex-col space-y-2">
                  <span className="text-2xl lg:text-3xl text-blue_new font-bold w-full">
                    Prescription Creation
                  </span>
                  <span className="text-sm text-[#757575]  font-normal w-full">
                    Instantly Generate and Send Detailed Prescriptions
                  </span>
                  <div className="bg-[#9a9a9a] h-[0.15rem] w-1/4 mt-2"></div>
                </div>
                <div className="text-[#757575]  h-auto w-full pt-5 text-sm flex flex-col items-center lg:text-base text-left">
                  <ul className="space-y-3">
                    <li>
                      &#8226; Create accurate and detailed prescriptions
                      quickly.
                    </li>
                    <li>
                      &#8226; Include dosage instructions and medication
                      details.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-[100%] sm:w-[80%] md:w-[90%] bg-white rounded-xl md:rounded-none md:bg-transparent h-auto md:h-[300px] space-y-3 md:space-y-0 py-4 md:py-0 my-5 md:my-1 flex flex-col md:flex-row justify-center md:justify-end items-center">
              <div className="w-full md:w-1/2 h-auto  md:h-full flex items-center justify-center">
                <div
                  className="w-72 h-72 rounded-full bg-red-500"
                  style={{
                    backgroundImage: 'url("nexus4.jpg")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <FontAwesomeIcon
                  className="text-4xl text-blue_new pl-5"
                  icon={faChevronRight}
                />
              </div>
              <div className="w-full md:w-1/2 h-auto md:h-full px-5 flex flex-col justify-center items-center">
                <div className="flex flex-col space-y-2">
                  <span className="text-2xl lg:text-3xl text-blue_new font-bold w-full">
                    Patient Management
                  </span>
                  <span className="text-sm text-[#757575]  font-normal w-full">
                    Quickly Access and Manage Patient Information
                  </span>
                  <div className="bg-[#9a9a9a] h-[0.15rem] w-1/4 mt-2"></div>
                </div>
                <div className="text-[#757575]  h-auto w-full pt-5 text-sm flex flex-col items-center lg:text-base text-left">
                  <ul className="space-y-3">
                    <li>&#8226; Store and retrieve patient medical history.</li>
                    <li>&#8226; Update patient records in real-time.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-[100%] sm:w-[80%] md:w-[90%] bg-white rounded-xl md:rounded-none md:bg-transparent h-auto md:h-[300px] space-y-3 md:space-y-0 py-4 md:py-0 my-5 md:my-1 flex flex-col md:flex-row-reverse justify-center md:justify-end items-center">
              <div className="w-full md:w-1/2 h-auto  md:h-full flex items-center justify-center">
                <FontAwesomeIcon
                  className="text-4xl text-blue_new pr-5"
                  icon={faChevronLeft}
                />

                <div
                  className="w-72 h-72 rounded-full bg-red-500"
                  style={{
                    backgroundImage: 'url("nexus3.jpg")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>
              <div className="w-full md:w-1/2 h-auto md:h-full px-5 flex flex-col justify-center items-center">
                <div className="flex flex-col space-y-2">
                  <span className="text-2xl lg:text-3xl text-blue_new font-bold w-full">
                    Seamless Communication
                  </span>
                  <span className="text-sm text-[#757575]  font-normal w-full">
                    Maintain Direct and Efficient Patient Communication
                  </span>
                  <div className="bg-[#9a9a9a] h-[0.15rem] w-1/4 mt-2"></div>
                </div>
                <div className="text-[#757575]  h-auto w-full pt-5 text-sm flex flex-col items-center lg:text-base text-left">
                  <ul className="space-y-3">
                    <li>
                      &#8226; Send instant messages and updates to patients.
                    </li>
                    <li>
                      &#8226; Receive patient queries and respond promptly.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
