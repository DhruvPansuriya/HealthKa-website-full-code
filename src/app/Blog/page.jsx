/* eslint-disable react-hooks/rules-of-hooks */
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
import Blog_data from "../(components)/Blog_data"; // Assuming Blog_data is where you store blogs
import Image from "next/image";

const blogs = Blog_data;

const page = () => {
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      offset: 5,
      duration: 1000,
      easing: "ease",
      once: true,
    });
  }, []);

  return (
    <>
      <Topbar />
      <hr />
      <Navbar />

      {/* Banner Section */}
      <div
        style={{
          backgroundImage:
            'url("https://img.freepik.com/free-photo/doctors-shaking-hands-close-up_23-2148285726.jpg?t=st=1718961249~exp=1718964849~hmac=6d7f213acb5fc5d7a2639c0635d7a6607c2f3af06b641ff701e49976221e3b6f&w=996")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="section_title_bg bg-blue_new text-white w-full h-[300px] font-custom flex flex-col justify-center items-center space-y-6"
      >
        <span className="text-4xl font-bold">Blogs</span>
        <span className="text-sm">
          <span
            onClick={() => {
              router.push("/Home");
            }}
            className="hover:text-red_new hover:cursor-pointer text-white"
          >
            Home
          </span>{" "}
          <FontAwesomeIcon icon={faAngleRight} /> Blogs
        </span>
      </div>

      {/* Blog List Section */}
      <div className="h-auto w-full py-10 flex item-center justify-center">
        <div className="bg-white w-[85%] lg:w-[75%] h-auto grid grid-cols-1 place-items-center font-custom text-[#333]">
          {/* Section Title */}
          <div className="mb-10 text-center">
            <span className="w-full text-3xl lg:text-4xl text-[#333] font-bold text-left mt-2">
              Keep Up With Our Most Recent Medical News.
            </span>
            <div className="block w-[15%] h-1 bg-blue_new mt-3 mx-auto"></div>
          </div>

          {/* Blog Posts */}
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="sm:blog_hover shadow-lg mb-16 rounded-xl h-[450px] sm:h-auto w-full flex flex-col sm:flex-row sm:items-center"
            >
              {/* Blog Image */}
              <div className="rounded-t-xl sm:rounded-l-xl sm:rounded-t-none h-[200px] sm:h-[350px] xl:h-[400px] w-full sm:w-1/2 bg-cover bg-center">
                <Image src={blog.image} width={500} height={200} />
              </div>

              {/* Blog Content */}
              <div className="flex flex-col w-full sm:w-[60%] p-5 rounded-br-xl rounded-bl-xl h-auto sm:h-auto justify-center space-y-3 bg-opacity-100">
                <div className="bg-red_new text-sm sm:text-base text-white h-auto w-fit p-1.5 flex items-center justify-center">
                  {blog.date}
                </div>
                <span className="w-full text-2xl lg:text-3xl font-semibold text-blue_new">
                  {blog.title}
                </span>
                <span className="w-[100%] text-xs lg:text-sm">
                  {blog.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default page;
