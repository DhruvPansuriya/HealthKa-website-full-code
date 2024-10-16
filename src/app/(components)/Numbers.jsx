import {
  faCalendar,
  faCalendarAlt,
  faFaceSmile,
  faFaceSmileBeam,
  faHospital,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import CountingComponent from "./CountingComponent";

const Numbers = () => {
  return (
    <>
      <div
        className="numbers_bg relative font-custom text-white p-10 lg:p bg-blue_new w-full h-auto flex justify-center items-center  "
        style={{
          backgroundImage: 'url("/hand_shake.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* < div class="relative w-full h-full p-10 lg:p-16 bg-blue_new  flex items-center justify-center flex-grow "></div> */}

        <div className=" relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center h-auto w-auto">
          <div className=" outer_div_numbers transition-all duration-300 ease-in-out m-16 h-[100%] w-[100%] flex items-center justify-between">
            <div className="inner_div_numbers transition-all duration-300 ease-in-out h-[80px] w-[80px] border text-white border-white rounded-full flex items-center justify-center text-3xl">
              <FontAwesomeIcon className="" icon={faHospital} />
            </div>
            <div className=" h-full w-[65%] flex flex-col items-start justify-center">
              <CountingComponent n={1} />
              <span className="text-1xl  font-medium">Clinics</span>
            </div>
          </div>

          <div className="outer_div_numbers transition-all duration-300 ease-in-out m-10 h-[100%] w-[100%] flex items-center justify-between">
            <div className="inner_div_numbers transition-all duration-300 ease-in-out h-[80px] w-[80px] border border-white rounded-full flex items-center justify-center text-3xl">
              <FontAwesomeIcon icon={faUserDoctor} />
            </div>
            <div className=" h-full w-[65%] flex flex-col items-start justify-center">
              <CountingComponent n={5} />
              <span className="text-1xl  font-medium">Doctors</span>
            </div>
          </div>

          <div className="outer_div_numbers transition-all duration-300 ease-in-out m-10 h-[100%] w-[100%] flex items-center justify-between">
            <div className="inner_div_numbers transition-all duration-300 ease-in-out h-[80px] w-[80px] border border-white rounded-full flex items-center justify-center text-3xl">
              <FontAwesomeIcon icon={faFaceSmileBeam} />
            </div>
            <div className=" h-full w-[65%] flex flex-col items-start justify-center">
              <CountingComponent n={36} />
              <span className="text-1xl  font-medium">Happy Patients</span>
            </div>
          </div>

          <div className="outer_div_numbers transition-all duration-300 ease-in-out m-10 h-[100%] w-[100%] flex items-center justify-between">
            <div className="inner_div_numbers transition-all duration-300 ease-in-out h-[80px] w-[80px] border border-white rounded-full flex items-center justify-center text-3xl">
              <FontAwesomeIcon icon={faCalendarAlt} />
            </div>
            <div className=" h-full w-[65%] flex flex-col items-start justify-center">
              <CountingComponent n={1} />
              <span className="text-1xl  font-medium">Years of Experience</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Numbers;
