import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const AppFeatures = () => {
  return (
    <div
      className="text-[#2c2d3f] w-full h-auto lg:h-[1000px] bg-red-100 font-custom"
      style={{
        backgroundImage: 'url("/common_bg.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-[100%] h-[27%] hidden lg:block"></div>
      <div className="flex flex-col items-center w-auto h-auto lg:mt-0 mt-8">
        <span className=" text-center mt-5 font-bold">Upcoming </span>
        <span className=" text-4xl font-bold text-center mt-2 ">
          <span className="text-pink-500">App</span> Features{" "}
        </span>
        <span className="w-[90%] md:w-[80%] lg:w-1/2 text-sm lg:text-base text-center mt-4">
          Upgrade your health app with real-time ambulance tracking,
          telemedicine services, and personalized health news for a seamless
          user experience in managing health and wellness needs.
        </span>

        <div className="w-auto h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-5 sm:px-16 md:px-10 place-items-center mt-5">
          <div className="hover:-translate-y-2  transition-all duration-300 ease-in-out w-[95%] h-[450px] shadow-sm hover:shadow-2xl flex flex-col items-center px-2 m-5 rounded-xl bg-white">
            <div
              className=" mt-5 w-60 lg:w-44 xl:w-56 h-60 lg:h-44 xl:h-56  rounded-full bg-red-200"
              style={{
                backgroundImage: 'url("/app_features_1.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="flex flex-col justify-center items-center">
              <span className="h-auto text-center text-[1.35rem] font-semibold mt-4">
                Patient Prescription Portal
              </span>
              <span className="text-center text-sm text-[#888] font-normal mt-4 px-6">
                Access and manage personalized medical prescriptions seamlessly
                through our Patient Prescription Portal.
              </span>

              <div className=" w-[8rem] h-[10%] mb-3 text-left font-medium mt-5">
                <a
                  href="#"
                  className="relative active text-red_new  h-full flex items-center justify-start pb-3"
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

          <div className="hover:-translate-y-2  transition-all duration-300 ease-in-out w-[95%] h-[450px] shadow-sm hover:shadow-2xl flex flex-col items-center px-2 m-5 rounded-xl bg-white">
            <div
              className="mt-5 w-60 lg:w-44 xl:w-56 h-60 lg:h-44 xl:h-56 rounded-full bg-red-200"
              style={{
                backgroundImage: 'url("/app_features_2.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="flex flex-col justify-center items-center">
              <span className="h-auto text-[1.35rem] font-semibold mt-4 ">
                10 Min Delivery
              </span>

              <span className="text-center text-sm text-[#888] font-normal mt-4 px-6">
                Access and manage personalized medical prescriptions seamlessly
                through our Patient Prescription Portal.
              </span>

              <div className=" w-[8rem] h-[10%] mb-3 text-left font-medium mt-5">
                <a
                  href="#"
                  className="relative active text-red_new  h-full flex items-center justify-start pb-3"
                >
                  Learn More{" "}
                  <FontAwesomeIcon
                    className="text-[#888] pl-2"
                    icon={faRightLong}
                  />
                  <span className="before-element-2 bg-blue-500"></span>
                </a>
              </div>
            </div>
          </div>
          <div className="hover:-translate-y-2  transition-all duration-300 ease-in-out w-[95%] h-[450px] shadow-sm hover:shadow-2xl flex flex-col items-center px-2 m-5 rounded-xl bg-white">
            <div
              className="mt-5 w-60 lg:w-44 xl:w-56 h-60 lg:h-44 xl:h-56 rounded-full bg-red-200"
              style={{
                backgroundImage: 'url("/app_features_3.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="flex flex-col justify-center items-center">
              <span className="h-auto text-[1.35rem] text-center font-semibold mt-4 ">
                Book An Ambulance
              </span>

              <span className="text-center text-sm text-[#888] font-normal mt-4 px-6">
                Access and manage personalized medical prescriptions seamlessly
                through our Patient Prescription Portal.
              </span>

              <div className=" w-[8rem] h-[10%] mb-3 text-left font-medium mt-5">
                <a
                  href="#"
                  className="relative active text-red_new  h-full flex items-center justify-start pb-3"
                >
                  Learn More{" "}
                  <FontAwesomeIcon
                    className="text-[#888] pl-2"
                    icon={faRightLong}
                  />
                  <span className="before-element-2 bg-blue-500"></span>
                </a>
              </div>
            </div>
          </div>

          <div className="hover:-translate-y-2  transition-all duration-300 ease-in-out w-[95%] h-[450px] shadow-sm hover:shadow-2xl flex flex-col items-center px-2 m-5 rounded-xl bg-white">
            <div
              className="mt-5 w-60 lg:w-44 xl:w-56 h-60 lg:h-44 xl:h-56 rounded-full bg-red-200"
              style={{
                backgroundImage: 'url("/app_features_4.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="flex flex-col justify-center items-center">
              <span className="h-auto text-[1.35rem] font-semibold mt-4 ">
                Get the nearby hospital Info
              </span>
              <span className="text-center text-sm text-[#888] font-normal mt-4 px-6">
                Access and manage personalized medical prescriptions seamlessly
                through our Patient Prescription Portal.
              </span>

              <div className=" w-[8rem] h-[10%] mb-3 text-left font-medium mt-5">
                <a
                  href="#"
                  className="relative active text-red_new  h-full flex items-center justify-start pb-3"
                >
                  Learn More{" "}
                  <FontAwesomeIcon
                    className="text-[#888] pl-2"
                    icon={faRightLong}
                  />
                  <span className="before-element-2 bg-blue-500"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppFeatures;
