import { faRightLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Services = () => {
    return (
        <div className='text-[#2c2d3f] w-full h-auto bg-slate-50 font-custom pb-16'
            style={{
                backgroundImage: 'url("/common_bg.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className='flex flex-col items-center  w-full h-full pt-10'>
                <span className=' text-center mt-5'>Services</span>
                <span className=' w-[85%] sm:w-[60%] md:w-auto lg:w-1/2 text-3xl lg:text-4xl font-bold text-center mt-2 '>We offer different <span className='text-blue_new'>Services</span> for your Health.</span>
                <span className=' w-[60%] text-center mt-4 text-sm lg:text-base text-[#888] mb-10'>Upgrade your health app with real-time ambulance tracking, telemedicine services, experience in managing health.</span>

                <div className='h-auto w-[80%] sm:w-auto grid grid-cols-1 place-items-center'>

                    {/* FirstDiv */}

                    <div className='rounded-xl shadow-xl outline-black px-2 p-0 sm:p-7 w-[100%] sm:w-[85%] lg:w-[75%] h-[375px] sm:h-[300px] md:h-[400px] lg:h-[500px] flex items-center my-5 flex-col justify-center sm:justify-normal sm:flex-row bg-white' >
                        <span className='sm:hidden text-2xl lg:text-3xl text-center font-bold'>Book An Ambulance</span>
                        <div className='sm:hidden  text-sm lg:text-base w-[8rem] h-[10%] text-left font-medium '><a href="#" className="relative active text-blue_new  h-full flex items-center justify-start pb-2">Learn More <FontAwesomeIcon className="text-blue_new pl-2" icon={faRightLong} /><span className="before-element-2 bg-blue-500" ></span></a>
                        </div>
                        <div className='hidden sm:flex h-1/2 sm:h-full w-full sm:w-1/2  flex-col justify-center space-y-3 lg:space-y-4 px-2 sm:px-3 lg:px-5 '>
                            <span className='text-2xl lg:text-3xl font-bold'>Book An Ambulance</span>
                            <div className='hidden sm:block w-1/5 h-1 bg-blue_new'></div>
                            <span className='hidden sm:block text-sm lg:text-base font-normal w-[85%] text-[#6c6c6c]'>A patient transport ambulance is an essential part of emergency medical services. It is used to transport patients who require medical attention from one location to another.</span>
                            <span className='hidden md:block text-lg font-bold '>Types of Ambulance</span>
                            <ul className='hidden md:flex text-sm lg:text-base flex-col text-[#6c6c6c]'>
                                <li>&#8226; Basic Life Support (BLS).</li>
                                <li>&#8226; Advance Life Support (ALS).</li>
                                <li>&#8226; Train Ambulance.</li>
                                <li>&#8226; Air Ambulance.</li>
                            </ul>
                            <div className='text-sm lg:text-base w-[8rem] h-[10%] text-left font-medium '><a href="#" className="relative active text-blue_new  h-full flex items-center justify-start pb-2">Learn More <FontAwesomeIcon className="text-blue_new pl-2" icon={faRightLong} /><span className="before-element-2 bg-blue-500" ></span></a>
                            </div>
                        </div>
                        <div className='bg-red-200 h-56 sm:h-[85%] w-56 mt-6 sm:mt-0 sm:w-1/2 rounded-full sm:rounded-xl shadow-lg'
                            style={{
                                backgroundImage: 'url("/app_features_3.jpg")',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}></div>
                    </div>

                    {/* SecondDiv */}

                    <div className='rounded-xl shadow-xl outline-black px-2 p-0 sm:p-7 w-[100%] sm:w-[85%] lg:w-[75%] h-[375px] sm:h-[300px] md:h-[400px] lg:h-[500px] flex items-center my-5 flex-col justify-center sm:justify-normal sm:flex-row bg-white' >
                        <span className='sm:hidden text-2xl lg:text-3xl text-center font-bold'>Get Your Medicine</span>
                        <div className='sm:hidden  text-sm lg:text-base w-[8rem] h-[10%] text-left font-medium '><a href="#" className="relative active text-blue_new  h-full flex items-center justify-start pb-2">Learn More <FontAwesomeIcon className="text-blue_new pl-2" icon={faRightLong} /><span className="before-element-2 bg-blue-500" ></span></a>
                        </div>


                        <div className='hidden sm:flex h-1/2 sm:h-full w-full sm:w-1/2  flex-col justify-center space-y-3 lg:space-y-4 px-2 sm:px-3 lg:px-5 '>

                            <span className='text-2xl lg:text-3xl font-bold'>Get Your Medicine</span>

                            <div className='hidden sm:block w-1/5 h-1 bg-blue_new'></div>
                            <span className='hidden sm:block text-sm lg:text-base font-normal w-[85%] text-[#6c6c6c]'>A patient transport ambulance is an essential part of emergency medical services. It is used to transport patients who require medical attention from one location to another.</span>


                            <span className='hidden md:block text-lg font-bold '>Benefits</span>
                            <ul className='hidden md:flex text-sm lg:text-base flex-col text-[#6c6c6c]'>
                                <li>&#8226; 10 min delivery.</li>
                                <li>&#8226; Heavy discounts.</li>
                                <li>&#8226; Easy to use.</li>
                                <li>&#8226; On your doorsteps.</li>
                            </ul>
                            <div className='text-sm lg:text-base w-[8rem] h-[10%] text-left font-medium '><a href="#" className="relative active text-blue_new  h-full flex items-center justify-start pb-2">Learn More <FontAwesomeIcon className="text-blue_new pl-2" icon={faRightLong} /><span className="before-element-2 bg-blue-500" ></span></a>
                            </div>
                        </div>

                        <div className='bg-red-200 h-56 sm:h-[85%] w-56 mt-6 sm:mt-0 sm:w-1/2 rounded-full sm:rounded-xl shadow-lg'
                            style=
                            {{
                                backgroundImage: 'url("/get_your_medicine.jpg")',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        ></div>

                    </div>

                </div>
            </div>

        </div >
    )
}

export default Services