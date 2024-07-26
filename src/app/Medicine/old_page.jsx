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
import News_data from "../(components)/News_data";
import { useRouter } from "next/navigation";
import Medicine_data from "../(components)/Medicine_data";

import News from "../(components)/News";
import Footer from "../(components)/Footer";
import { faAngleRight, faArrowLeft, faGreaterThan, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Medicines = Medicine_data;

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
                className="numbers_bg bg-blue_new text-white w-full h-[300px] font-custom flex flex-col justify-center items-center space-y-6">
                <span className="text-4xl font-bold">Medicine</span>
                <span className="text-sm"><span onClick={() => { router.push("/Home"); }} className="hover:text-red_new hover:cursor-pointer text-white">Home</span> <FontAwesomeIcon icon={faAngleRight} />  Medicine</span>
            </div >


            <div className="bg-white w-full h-[1250px] flex flex-col items-center font-custom text-[#333]">
                <span className='text-4xl mt-16  font-bold'>All medicine are available | <span className="text-blue_new">order now</span></span>
                <div className='w-1/12 h-2 mt-4 bg-blue_new'></div>

                <div className="bg-white w-[95%] h-[1800px] grid grid-cols-4 p-10">

                    {
                        Medicines.map((Medicine, index) => (
                            <div className=' hover:-translate-y-2  transition-transform duration-300 ease-in-out news_hover shadow-lg m-4   rounded-xl h-[300px] w-[300px] flex flex-col items-center'>
                                <div className='rounded-xl h-[55%] w-[55%] m-2 shadow-md'
                                    key={index}
                                    style={{
                                        backgroundImage: `url(${Medicine.image})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                ></div>
                                <div className=" h-[25%] mt-4 bg-blue_new  w-full flex items-center justify-center p-4">
                                    <span className="text-center text-white ">{Medicine.title}</span>
                                </div>
                                <div className=' text-[#333] w-[8rem] pl-4 h-[15%] text-center font-semibold items-center justify-center '><a href="#" className="relative active pb-0.5 h-full flex items-center justify-left">Buy Now <FontAwesomeIcon className="text-[#333] pl-2" icon={faRightLong} /></a>
                                </div>
                                <div className="bg-black news_hover_div snimate animate-increaseWidthLeft"></div>
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
