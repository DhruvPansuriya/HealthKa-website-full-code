"use client";
import React, { useEffect } from "react";
import Topbar from "../(components)/Topbar";
import Navbar from "../(components)/Navbar";
import Slider from "../(components)/Slider";
import Top_Features from "../(components)/Top_Features";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import AppFeatures from "../(components)/AppFeatures";
import Numbers from "../(components)/Numbers";
import Services from "../(components)/Services";
import Emergency from "../(components)/Emergency";
import Carousel from "../(components)/Carousel";
import Faq_que from "../(components)/Faq_que";
import Blog_data from "../(components)/Blog_data";
import { useRouter } from "next/navigation";

import News from "../(components)/News";
import Footer from "../(components)/Footer";
import { faAngleRight, faArrowLeft, faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const blogs = Blog_data;
const page = () => {
    const router = useRouter();
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

            <div style={{
                backgroundImage: 'url("https://img.freepik.com/free-photo/doctors-shaking-hands-close-up_23-2148285726.jpg?t=st=1718961249~exp=1718964849~hmac=6d7f213acb5fc5d7a2639c0635d7a6607c2f3af06b641ff701e49976221e3b6f&w=996")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
                className="section_title_bg bg-blue_new text-white w-full h-[300px] font-custom flex flex-col justify-center items-center space-y-6">
                <span className="text-4xl font-bold">Blogs</span>
                <span className="text-sm"><span onClick={() => { router.push("/Home"); }} className="hover:text-red_new hover:cursor-pointer text-white">Home</span> <FontAwesomeIcon icon={faAngleRight} />  Blogs</span>
            </div >

            <div className="h-auto w-full py-10 flex item-center justify-center">
                <div className="bg-white w-[85%] lg:w-[75%] h-auto grid grid-cols-1 place-items-center font-custom  text-[#333]" >
                    <div className="mb-10">
                        <span className='w-full text-3xl lg:text-4xl text-[#333] font-bold text-left mt-2 '>Keep Up With Our Most Recent Medical News.</span>
                        <div className='block w-[15%] h-1 bg-blue_new mt-3'></div>
                    </div>

                    {
                        blogs.map((blog, index) => (
                            <div className='sm:blog_hover shadow-lg mb-16 rounded-xl h-[450px] sm:h-auto w-full sm:w-full flex flex-col sm:flex-row sm:items-center'>
                                <div className='bg-blue-200 rounded-l-xl h-[200px] sm:h-[350px] xl:h-[400px] w-full sm:w-1/2'
                                    key={index}
                                    style={{
                                        backgroundImage: `url(${blog.image})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                ></div>

                                <div className="flex flex-col w-full sm:w-[60%] p-5 rounded-br-xl rounded-bl-xl h-auto sm:h-auto justify-center space-y-3 bg-opacity-100">
                                    <div className='bg-red_new text-sm sm:text-base text-white h-auto w-fit p-1.5 flex items-center justify-center'>{blog.date}</div>
                                    <span className="w-full text-2xl lg:text-3xl font-semibold text-blue_new ">
                                        {blog.title}
                                    </span>
                                    <span className="w-[100%] text-xs lg:text-sm ">{blog.description}</span>
                                </div>
                                <div className="bg-black hidden sm:visible blog_hover_div snimate animate-increaseWidthLeft"></div>
                            </div>
                        ))
                    }
                </div >
            </div >

            <Footer />
        </>
    );
};

export default page;
