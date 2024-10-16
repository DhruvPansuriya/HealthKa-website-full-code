"use client";
import React, { useEffect } from "react";
import Topbar from "./(components)/Topbar";
import Navbar from "./(components)/Navbar";
import Slider from "./(components)/Slider";
import Top_Features from "./(components)/Top_Features";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import AppFeatures from "./(components)/AppFeatures";
import Numbers from "./(components)/Numbers";
import Services from "./(components)/Services";
import Emergency from "./(components)/Emergency";
import Carousel from "./(components)/Carousel";
import Faq_que from "./(components)/Faq_que";
import News_data from "./(components)/News_data";
import Doctors from "./(components)/Doctors"
import News from "./(components)/News";
import Footer from "./(components)/Footer";
const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
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
    <div className="w-auto">
      <Topbar className="" />
      <hr></hr> <Navbar />
      <Slider />
      <Top_Features />
      <AppFeatures />
      <Doctors />
      <Numbers />
      <Services />
      <Emergency />
      <Carousel slides={Faq_que} />
      <News newses={News_data} />
      <Footer />
    </div>
  );
};

export default page;
