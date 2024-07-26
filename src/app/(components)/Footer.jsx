import { faFacebook, faFacebookF, faGooglePlus, faGooglePlusG, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCaretRight, faEnvelope, faPhone, faUserDoctor } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
    return (
        <div className='text-white font-custom bg-blue_new w-full h-auto flex flex-col items-center'>
            <div className='bg-blue_new w-auto sm:w-[400px] md:w-[700px] lg:w-auto h-auto grid-cols-1 grid md:grid-cols-2  lg:grid-cols-4 pt-6 pb-0 lg:py-10 px-4 sm:px-0 lg:px-16 place-items-center '>

                <div className='bg-blue_new  h-[250px] [md:h-[280px] lg:h-[350px] w-[97%] m-4 flex flex-col md:p-4  justify-between'>
                    <div className=' w-full h-12 flex flex-col justify-between'>
                        <span className='font-semibold text-xl'>About Us</span>
                        <div className='bg-white h-1 w-12'></div>
                    </div>
                    <div className=' w-full h-full flex flex-col justify-around'>
                        <span className='font-normal text-sm mt-4'>With HealthKa, you can rest assured that your health is in good hands. Download the app today and experience the convenience and efficiency of HealthKa's healthcare services. "Ap ka Health ke lia HealthKa app"
                        </span>
                        <div className=' h-9 w-fit space-x-2 md:w-full  flex items-center justify-between  '>
                            <div className='hover: cursor-pointer outer_div_numbers '>
                                <div className='inner_div_numbers  transition-all duration-300 ease-in-out h-8 text-sm md:text-base md:h-9 w-8 md:w-9 border border-white rounded-full flex items-center justify-center '><FontAwesomeIcon icon={faFacebookF} /></div>
                            </div>
                            <div className='hover: cursor-pointer outer_div_numbers '>
                                <div className='inner_div_numbers  transition-all duration-300 ease-in-out h-8 text-sm md:text-base md:h-9 w-8 md:w-9 border border-white rounded-full flex items-center justify-center '><FontAwesomeIcon icon={faInstagram} /></div>
                            </div>
                            <div className='hover: cursor-pointer outer_div_numbers '>
                                <div className='inner_div_numbers  transition-all duration-300 ease-in-out h-8 text-sm md:text-base md:h-9 w-8 md:w-9 border border-white rounded-full flex items-center justify-center '><FontAwesomeIcon icon={faTwitter} /></div>
                            </div>
                            <div className='hover: cursor-pointer outer_div_numbers '>
                                <div className='inner_div_numbers  transition-all duration-300 ease-in-out h-8 text-sm md:text-base md:h-9 w-8 md:w-9 border border-white rounded-full flex items-center justify-center '><FontAwesomeIcon icon={faGooglePlusG} /></div>
                            </div>
                            <div className='hover: cursor-pointer outer_div_numbers '>
                                <div className='inner_div_numbers  transition-all duration-300 ease-in-out h-8 text-sm md:text-base md:h-9 w-8 md:w-9 border border-white rounded-full flex items-center justify-center '><FontAwesomeIcon icon={faPinterest} /></div>
                            </div>
                        </div>
                    </div>

                </div>


                <div className='bg-blue_new h-[200px] md:h-[280px] lg:h-[350px] w-[97%] m-4 flex flex-col md:p-4 justify-between'>
                    <div className=' w-full h-12 flex flex-col justify-between'>
                        <span className='font-semibold text-xl'>Quik Links</span>
                        <div className='bg-white h-1 w-12'></div>
                    </div>
                    <div className=' w-full h-full flex flex-col  '>
                        <ul className='text-sm font-normal grid grid-cols-2 mt-5'>
                            <ui className='hover: translate-x-2 mb-4'><FontAwesomeIcon icon={faCaretRight} /> <a href='#'>Home</a></ui>
                            <ui className='hover: translate-x-2 mb-4'><FontAwesomeIcon icon={faCaretRight} /> <a href='#'>Hospital</a></ui>
                            <ui className='hover: translate-x-2 mb-4'><FontAwesomeIcon icon={faCaretRight} /> <a href='#'>Medicine</a></ui>
                            <ui className='hover: translate-x-2 mb-4'><FontAwesomeIcon icon={faCaretRight} /> <a href='#'>Blog</a></ui>
                            <ui className='hover: translate-x-2 mb-4'><FontAwesomeIcon icon={faCaretRight} /> <a href='#'>Contant Us</a></ui>
                            <ui className='hover: translate-x-2 mb-4'><FontAwesomeIcon icon={faCaretRight} /> <a href='#'>Get Started</a></ui >
                        </ul >

                    </div >

                </div >
                <div className='bg-blue_new h-[200px] md:h-[280px] lg:h-[350px] w-[97%] m-4 flex flex-col md:p-4 justify-between'>
                    <div className=' w-full h-12 flex flex-col justify-between'>
                        <span className='font-semibold text-xl'>Contact Us </span>
                        <div className='bg-white h-1 w-12'></div>
                    </div>
                    <div className=' w-full h-full flex flex-col'>
                        <span className='font-normal text-sm mt-5'>WIB(M) 8/3 GolfGreen Phase - 2
                            West Bengal, Kolkata 700095
                            India
                        </span>
                        <span className='font-normal text-sm mt-5'><FontAwesomeIcon icon={faPhone} /> 9123686386</span>
                        <span className='font-normal text-sm mt-2'><FontAwesomeIcon icon={faEnvelope} /> healthkaservices@gmail.com</span>
                    </div>

                </div>
                <div className='bg-blue_new h-[200px] md:h-[280px] lg:h-[350px] w-[97%] m-4 flex flex-col md:p-4 justify-between'>
                    <div className=' w-full h-12 flex flex-col justify-between'>
                        <span className='font-semibold text-xl'>News Letter</span>
                        <div className='bg-white h-1 w-12'></div>
                    </div>
                    <div className=' w-full h-full flex flex-col'>
                        <span className='font-normal text-sm mt-5'>subscribe to our newsletter to get allour news in your inbox.. Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        </span>

                    </div>

                </div>
            </div >


            <div
                style={{
                    boxShadow: '0 -16px 16px -1px rgba(0, 0, 0, 0.1)',
                }}
                className="bg-[#1a76d1] w-full h-[80px] text-sm flex items-center justify-center"
            >
                <span>© Copyright 2024 | All Rights Reserved by <span className='underline'><a href='#'>healthka.in</a></span></span>
            </div>

        </div >
    )
}

export default Footer