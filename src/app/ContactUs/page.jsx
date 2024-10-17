"use client";
import React, { useEffect } from "react";
import Topbar from "../(components)/Topbar";
import Navbar from "../(components)/Navbar";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { useRouter } from "next/navigation";
import Footer from "../(components)/Footer";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    AOS.init({
      // Global settings:
      offset: 5, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false,
    });
  }, []);
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
        <span className="text-4xl font-bold">Contact Us</span>
        <span className="text-sm">
          <span
            onClick={() => {
              router.push("/Home");
            }}
            className="hover:text-red_new hover:cursor-pointer text-white"
          >
            Home
          </span>{" "}
          <FontAwesomeIcon icon={faAngleRight} /> Contact Us
        </span>
      </div>
      <div className="bg-slate-50 w-full h-auto py-16  flex flex-col justify-center items-center font-custom  text-[#333]">
        <div className="bg-white w-[90%] sm:w-[500px] md:w-[85%] lg:w-[80%] xl:w-[70%] h-auto shadow-xl flex flex-col md:flex-row">
          <div
            style={{
              backgroundImage:
                'url("https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="bg-red-100 w-full md:w-[50%] h-[300px] md:h-[550px] lg:h-[500px] xl:h-[550px]"
          ></div>

          <div className=" bg-white w-full md:w-[50%] h-auto md:h-full flex flex-col items-start justify-around p-5 sm:p-10">
            <span className="text-3xl font-bold">Contact With Us</span>
            <div className="bg-blue_new h-1 w-1/5 mt-2"></div>
            <span className="text-sm mt-2">
              If you have any questions please fell free to contact with us.
            </span>

            <form className="h-auto w-full flex flex-col items-center pt-6 xl:pt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 place-items-center w-full  ">
                <input
                  type="text"
                  placeholder="Name"
                  name="Name"
                  className="border rounded-md outline-none m-2 h-12  p-2 w-[100%] md:w-[95%]"
                />
                <input
                  type="text"
                  placeholder="Email"
                  name="Email"
                  className="border rounded-md outline-none m-2 h-12  p-2 w-[100%] md:w-[95%]"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  name="Phone"
                  className="border rounded-md outline-none h-12 m-2 p-2 w-[100%] md:w-[95%]"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  name="Subject"
                  className="border rounded-md outline-none h-12 m-2 p-2 w-[100%] md:w-[95%]"
                />
                <textarea
                  type="text"
                  placeholder="Your Message"
                  className="visible md:hidden border rounded-md outline-none m-2 p-2 h-28 w-[100%] md:w-[95%]"
                />
                <button
                  type="submit"
                  className="visible md:hidden border rounded-md bg-blue_new h-10 w-[100%] m-2 text-white"
                >
                  Send
                </button>
              </div>
              <textarea
                type="text"
                placeholder="Your Message"
                className="hidden md:block border rounded-md outline-none  h-28 w-[97%] m-2 p-2"
              />
              <button
                type="submit"
                className="hidden md:block border rounded-md bg-blue_new h-10 w-[97%] m-2 text-white"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
