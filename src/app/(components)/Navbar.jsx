import {
  faBars,
  faChevronDown,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { animatePageOut } from "../utils/animation";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState(1);
  useEffect(() => {
    const storedActiveIndex = localStorage.getItem("activeIndex");
    if (storedActiveIndex) {
      setActiveIndex(parseInt(storedActiveIndex, 10));
    }
  }, []);

  const handleNavItemClick = (index, path) => {
    setActiveIndex(index);
    localStorage.setItem("activeIndex", index);
    if (pathname !== path) {
      animatePageOut(path, router);
    }
  };

  const handleNavItemClick2 = (path) => {
    setActiveIndex(6);
    localStorage.setItem("activeIndex", 6);
    if (pathname !== path) {
      animatePageOut(path, router);
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky top-0 z-10">
      <div className="md:shadow-lg bg-white  w-auto text-xs md:text-[0.8rem] lg:text-[0.9rem] font-custom flex items-center justify-between md:justify-center px-5  md:space-x-5 lg:space-x-12 xl:space-x-24 h-[4.5rem]">
        <div
          className="w-auto z-50 h-[4.5rem] bg-white logo flex items-center justify-between"
          style={{
            width: "7rem",
            height: "4.6rem",
            backgroundImage: `url("/hk-logo.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: 0,
            margin: 0,
          }}
        ></div>

        <div
          onClick={toggleMenu}
          className="flex md:hidden hover:cursor-pointer h-auto w-auto  flex-col"
        >
          <div
            className={`w-6 h-0.5 ${
              isOpen ? "bg-red_new" : "bg-blue_new"
            } transition-transform duration-300 ease-in-out ${
              isOpen ? "rotate-45 translate-y-1.5" : "translate-x-0"
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-blue_new my-1 transition-opacity duration-300 ease-in-out ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 ${
              isOpen ? "bg-red_new" : "bg-blue_new"
            } transition-transform duration-300 ease-in-out ${
              isOpen ? "-rotate-45 -translate-y-1.5" : "translate-x-0"
            }`}
          ></div>
        </div>
        <div className="mr-0 bg-white hidden md:flex items-center justify-between h-[4.5rem]">
          <ul className="header nav flex items-center space-x-2">
            <li className="relative h-[4.5rem] md:w-16  lg:w-24">
              <a
                onClick={() => {
                  handleNavItemClick(1, "/Home");
                }}
                key="1"
                className={`${
                  activeIndex === 1 ? "active" : ""
                } hover:cursor-pointer relative navItems pb-1 h-full flex items-center justify-center hover:text-[#1a76d1]`}
              >
                Home
                <span className="before-element bg-blue-500"></span>
              </a>
            </li>
            <li className="relative h-[4.5rem] md:w-20 lg:w-24">
              <a
                onClick={() => {
                  handleNavItemClick(2, "/Doctors");
                }}
                key="2"
                className={`${
                  activeIndex === 2 ? "active" : ""
                } hover:cursor-pointer relative navItems pb-1 h-full flex items-center justify-center hover:text-[#1a76d1]`}
              >
                Doctors
                <span className="before-element"></span>
              </a>
            </li>
            <li className="relative h-[4.5rem] md:w-20 lg:w-24">
              <a
                onClick={() => {
                  handleNavItemClick(3, "/Ambulance");
                }}
                key="3"
                className={`${
                  activeIndex === 3 ? "active" : ""
                } hover:cursor-pointer relative navItems pb-1 h-full flex items-center justify-center hover:text-[#1a76d1]`}
              >
                Ambulance
                <span className="before-element"></span>
              </a>
            </li>
            <li className="relative h-[4.5rem] md:w-20 lg:w-24">
              <a
                onClick={() => {
                  handleNavItemClick(4, "/Medicine");
                }}
                key="4"
                className={`${
                  activeIndex === 4 ? "active" : ""
                } hover:cursor-pointer relative navItems pb-1 h-full flex items-center justify-center hover:text-[#1a76d1]`}
              >
                Medicine
                <span className="before-element"></span>
              </a>
            </li>
            <li className="relative h-[4.5rem] md:w-20 lg:w-24">
              <a
                onClick={() => {
                  handleNavItemClick(5, "/Blog");
                }}
                key="5"
                className={`${
                  activeIndex === 5 ? "active" : ""
                } hover:cursor-pointer relative navItems pb-1 h-full flex items-center justify-center hover:text-[#1a76d1]`}
              >
                Blogs
                <span className="before-element"></span>
              </a>
            </li>
            <li className="relative h-[4.5rem] md:w-20 lg:w-24">
              <a
                onClick={() => {
                  handleNavItemClick(6, "/ContactUs");
                }}
                key="6"
                className={`${
                  activeIndex === 6 ? "active" : ""
                } contact_us hover:cursor-pointer relative navItems pb-1 h-full flex items-center justify-center hover:text-[#1a76d1]`}
              >
                Contact Us
                <span className="before-element"></span>
              </a>
            </li>
          </ul>
          <div className="hidden md:flex md:ml-5 lg:ml-16 h-12 md:w-32 lg:w-44 rounded-md btn  items-center justify-center font-medium ">
            <a
              onClick={() => {
                handleNavItemClick2("/ContactUs");
              }}
            >
              Book Appoinment
            </a>
          </div>
        </div>
      </div>
      <div
        className={`z-20 flex font-custom  bg-slate-200 w-[100vw] h-[0px] flex-col items-center sticky top-0 mobile-nav ${
          isOpen ? " open" : ""
        }`}
      >
        <a
          className="h-auto py-3 pl-8 w-full hover:cursor-pointer hover:bg-blue_new hover:text-white bg-white text-[#333]"
          href="/Home"
        >
          Home
        </a>
        <a
          className="h-auto py-3 pl-8 w-full hover:cursor-pointer hover:bg-blue_new hover:text-white bg-white text-[#333]"
          href="/Doctors"
        >
          Doctors
        </a>
        <a
          className="h-auto py-3 pl-8 w-full hover:cursor-pointer hover:bg-blue_new hover:text-white bg-white text-[#333]"
          href="/Ambulance"
        >
          Ambulance
        </a>
        <a
          className="h-auto py-3 pl-8 w-full hover:cursor-pointer hover:bg-blue_new hover:text-white bg-white text-[#333]"
          href="/Medicine"
        >
          Medicine
        </a>
        <a
          className="h-auto py-3 pl-8 w-full hover:cursor-pointer hover:bg-blue_new hover:text-white bg-white text-[#333]"
          href="/Blogs"
        >
          Blogs
        </a>
        <a
          className="h-auto py-3 pl-8 w-full hover:cursor-pointer hover:bg-blue_new hover:text-white bg-white text-[#333]"
          href="/ContactUs"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Navbar;

// className = "bg-blue-500 hover:bg-red-500 text-white font-bold py-2 px-4 rounded transition-all duration-300"
