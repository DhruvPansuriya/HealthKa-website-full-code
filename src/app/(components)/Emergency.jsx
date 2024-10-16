import React from "react";
import { animatePageOut } from "../utils/animation";
import { useRouter } from "next/navigation";

const Emergency = () => {
  const router = useRouter();
  const handleclick = () => {
    animatePageOut("/ContactUs", router);
    const contactUsDiv = document.querySelector(".contact_us");
    contactUsDiv.classList.add("active");
  };
  return (
    <div
      className="font-custom text-white bg-blue_new w-full h-auto py-12 md:py-16 flex flex-col justify-center items-center space-y-10 "
      style={{
        backgroundImage: 'url("/emergency.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <span className="text-2xl md:text-3xl font-semibold w-[60%] lg:w-[45%] xl:w-[35%] text-center">
        Do you need Emergency Medical Care? Call @ 8981326623
      </span>

      <div className="flex w-auto h-auto ">
        <div className="h-auto w-auto py-3 px-6 m-2 text-sm md:text-base rounded-md btn3 text-blue_new flex items-center justify-center font-medium ">
          <a
            onClick={() => {
              handleclick();
            }}
          >
            Contact Now
          </a>
        </div>
        <div className="h-auto w-auto py-3 px-6 m-2 text-sm md:text-base rounded-md btn2 flex items-center justify-center font-medium ">
          <a
            onClick={() => {
              handleclick();
            }}
          >
            Book Appoinment
          </a>
        </div>
      </div>
    </div>
  );
};

export default Emergency;
