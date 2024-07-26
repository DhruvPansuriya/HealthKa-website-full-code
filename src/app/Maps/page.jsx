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
                <span className="text-4xl font-bold">Contact Us</span>
                <span className="text-sm"><span onClick={() => { router.push("/Home"); }} className="hover:text-red_new hover:cursor-pointer text-white">Home</span> <FontAwesomeIcon icon={faAngleRight} />  Contact Us</span>
            </div >

            
            <Footer />
        </>
    );
};

export default page;
