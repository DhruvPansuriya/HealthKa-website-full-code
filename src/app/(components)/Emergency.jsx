import React from 'react'
import { animatePageOut } from "../utils/animation"
import { useRouter } from "next/navigation";

const Emergency = () => {
    const router = useRouter();
    const handleclick = ()=>{
        animatePageOut("/ContactUs", router); 
        const contactUsDiv = document.querySelector('.contact_us');
        contactUsDiv.classList.add('active');
    }
    return (
        <div className='font-custom text-white bg-blue_new w-full h-auto py-12 md:py-16 flex flex-col justify-center items-center space-y-10 '
            style={{
                backgroundImage: 'url("/emergency.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >

            <span className='text-2xl md:text-3xl font-semibold w-[60%] lg:w-[45%] xl:w-[35%] text-center'>Do you need Emergency Medical Care? Call @ 1234 56789</span>
            <span className='text-sm md:text-base font-normal w-[85%] md:w-[55%] xl:w-[40%] text-center text-white'>A patient transport ambulance is an essential part of emergency medical services. It is used to transport patients who require medical attention from one location to another.</span>
            <div className='flex w-auto h-auto '>
                <div className='h-auto w-auto py-3 px-6 m-2 text-sm md:text-base rounded-md btn3 text-blue_new flex items-center justify-center font-medium '>
                    <a onClick={() => {handleclick(); }} >Contact Now</a>
                </div>
                <div className='h-auto w-auto py-3 px-6 m-2 text-sm md:text-base rounded-md btn2 flex items-center justify-center font-medium '>
                    <a onClick={() => {handleclick(); }} >Book Appoinment</a>
                </div>
            </div>

        </div >


    )
}

export default Emergency