import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
const Doctors = () => {
  return (
    <div
      className="text-[#2c2d3f] font-custom h-auto w-full bg-[#f6f6f8] backdrop-brightness-50 flex justify-center"
      style={{
        backgroundImage: 'url("/nexus_x.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-[100%] py-12 h-auto flex flex-col items-center">
        <div className="w-[85%] h-auto flex flex-col items-center">
          <span className="">Features</span>
          <span className="text-4xl mt-1 font-bold text-center">
            Nexus: The Ultimate ERP for Doctors,Clinics and Hospitals
          </span>
          <div
            style={{
              width: "27rem",
              height: "8rem",
              backgroundImage: `url("/nexus-logo.png")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center py-6 px-20 lg:px-8 xl:px-28">
          <div className="w-[100%] lg:w-[95%]  h-[350px]  space-y-3 flex flex-col items-center m-5 lg:m-10 ">
            <div
              className="w-56 h-56  rounded-full border"
              style={{
                backgroundImage: `url("/nexus1.jpg")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="w-full flex flex-col justify-center items-center">
              <span className="h-auto text-center text-[1.35rem] font-semibold">
                Appointment Management
              </span>
              <span className="text-center text-sm text-[#888] w-[60%] lg:w-[80%] font-normal">
                Effortlessly Track and Schedule Patient Appointments.
              </span>
            </div>
          </div>

          <div className="w-[100%] lg:w-[95%]  h-[350px] space-y-3 flex flex-col items-center m-5 lg:m-10 ">
            <div
              className="w-56 h-56 rounded-full border"
              style={{
                backgroundImage: `url("/nexus2.jpg")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="w-full flex flex-col justify-center items-center">
              <span className="h-auto text-center text-[1.35rem] font-semibold">
                Prescription Creation
              </span>
              <span className="text-center text-sm text-[#888] w-[60%] lg:w-[80%] font-normal">
                Instantly Generate and Send Detailed Prescriptions.
              </span>
            </div>
          </div>

          <div className="w-[100%] lg:w-[95%]  h-[350px] space-y-3 flex flex-col items-center m-5 lg:m-10 ">
            <div
              className="w-56 h-56 rounded-full border"
              style={{
                backgroundImage: `url("/nexus4.png")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="w-full flex flex-col justify-center items-center">
              <span className="h-auto text-center text-[1.35rem] font-semibold">
                Patient Management
              </span>
              <span className="text-center text-sm text-[#888] w-[60%] lg:w-[80%] font-normal">
                Quickly Access and Manage Patient Information.
              </span>
            </div>
          </div>

          <div className="w-[100%] lg:w-[95%]  h-[350px] space-y-3 flex flex-col items-center m-5 lg:m-10 ">
            <div
              className="w-56 h-56 rounded-full border"
              style={{
                backgroundImage: `url("/nexus3.jpg")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="w-full flex flex-col justify-center items-center">
              <span className="h-auto text-center text-[1.35rem] font-semibold">
                AI prescription reader
              </span>
              <span className="text-center text-sm text-[#888] w-[60%] lg:w-[80%] font-normal">
                Creates a single prescription history of a patient by reading
                previous prescription
              </span>
            </div>
          </div>
        </div>

        <div>
          <div className="w-[8rem] h-10 text-left font-medium">
            <a
              href="/Doctors"
              className="relative active text-red_new  h-full flex items-center justify-start pb-2"
            >
              Learn More{" "}
              <FontAwesomeIcon
                className="text-[#888] pl-2 "
                icon={faRightLong}
              />
              <span className="before-element-2  bg-blue-500"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
