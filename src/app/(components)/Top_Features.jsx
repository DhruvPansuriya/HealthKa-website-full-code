import { faLaptop, faRightLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './Top_Features.module.css'; // Import the CSS module

const Top_Features = () => {
    return (<>
        <div className='z-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 sm:px-24 md:px-16 lg:px-24 xl:px-32 gap-5 place-items-center font-custom relative pt-12 lg:pt-0 lg:absolute lg:top-[40rem] items-center justify-center h-auto w-auto '>


            <div className={`col-span-1 hover:-translate-y-2  transition-transform duration-300 ease-in-out bg-blue_new text-white sm:w-[100%] md:w-[100%] h-auto md:h-80 p-7 my-6 rounded-md text-center flex flex-col justify-between
            ${styles.background_image_container} relative`} >
                <div>
                    <div className=' h-auto w-full font-bold text-xl lg:text-2xl text-left flex justify-between items-center'><span>24/7 Help Line</span></div>
                    <div className='bg-white h-[0.15rem] w-full mt-2'></div>
                </div>
                <div className=' h-auto w-full pt-5 text-base flex text-left'>
                    &#8226; Offers a 24/7 helpline for healthcare assistance. Health emergency assistance services anytime, anywhere.
                </div>
                <div className=' w-[8rem] h-[15%] text-left font-semibold mt-5'><a href="#" className="relative active text-white pb-1 h-full flex items-center justify-start">Learn More <FontAwesomeIcon className="text-white pl-2" icon={faRightLong} /><span className="before-element-1 bg-blue-500" ></span></a>
                </div >
            </div >

            <div className={`col-span-1 hover:-translate-y-2  transition-transform duration-300 ease-in-out bg-blue_new text-white sm:w-[100%] md:w-[100%] h-auto md:h-80 p-7 my-6 rounded-md text-center flex flex-col justify-between
            ${styles.background_image_container2} relative`} >
                <div>
                    <div className=' h-auto w-full font-bold text-xl lg:text-2xl text-left flex justify-between items-center'><span>Patient prescription portal</span></div>
                    <div className='bg-white h-[0.15rem] w-full mt-2'></div>
                </div>
                <div className=' h-auto w-full pt-5 text-base flex text-left'>
                    &#8226; Offers a 24/7 helpline for healthcare assistance. Health emergency assistance services anytime, anywhere.
                </div>
                <div className=' w-[8rem] h-[15%] text-left font-semibold mt-5'><a href="#" className="relative active text-white pb-1 h-full flex items-center justify-start">Learn More <FontAwesomeIcon className="text-white pl-2" icon={faRightLong} /><span className="before-element-1 bg-blue-500" ></span></a>
                </div >
            </div >

            <div className={` col-span-1 md:col-span-2 lg:col-span-1 hover:-translate-y-2  transition-transform duration-300 ease-in-out bg-blue_new text-white sm:w-[100%] md:w:[100%] lg:w-[100%] h-auto md:h-64 lg:h-80 p-7 my-6   rounded-md text-center flex flex-col justify-between ${styles.background_image_container3} relative`}>
                <div>
                    <div className=' h-auto w-full font-bold text-xl lg:text-2xl text-left flex justify-between items-center'><span>10 minutes delivery</span></div>
                    <div className='bg-white h-[0.15rem] w-full mt-2'></div>
                </div>
                <div className=' h-auto w-full pt-5 text-base flex text-left'>
                    &#8226; Offers a 24/7 helpline for healthcare assistance. Health emergency assistance services anytime, anywhere.
                </div>
                <div className=' w-[8rem] h-[15%] text-left font-semibold mt-5'><a href="#" className="relative active text-white pb-1 h-full flex items-center justify-start">Learn More <FontAwesomeIcon className="text-white pl-2" icon={faRightLong} /><span className="before-element-1 bg-blue-500" ></span></a>
                </div>
            </div>
        </div >
    </>
    )
}

export default Top_Features