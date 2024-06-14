import React from 'react';
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_img from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="hero flex flex-col lg:flex-row items-center justify-between p-8 lg:p-16 bg-gradient-to-r from-purple-100 via-pink-200 to-red-500 text-white space-y-8 lg:space-y-0 lg:space-x-8">
      {/* Left Section */}
      <div className="hero-left text-center lg:text-left m-4 lg:max-w-md">
        <h2 className="text-2xl text-red-700 mb-4">NEW ARRIVALS ONLY</h2>
        <div className="hero-hand-icon flex items-center justify-center lg:justify-start mb-4">
          <p className="mr-2 text-6xl text-black font-semibold ">new</p>
          <img src={hand_icon} alt="Hand Icon" className="w-8 h-9" />
        </div>
        <p className="text-6xl text-black mb-2 font-semibold ">collections</p>
        <p className="text-6xl mt-2 mb-8  text-black font-semibold">for everyone</p>
        {/* Latest Collections Button */}
        <div className="hero-latest-btn flex items-center  bg-red-500 text-white px-6 py-3 rounded-full shadow-lg cursor-pointer hover:bg-red-700 transition duration-300 mx-auto lg:mx-0">
          <div className="text-lg font-semibold ">Latest Collections</div>
          <img src={arrow_icon} alt="Arrow Icon" className="w-6 h-6 ml-2" />
        </div>
      </div>

      {/* Right Section */}
      <div className="hero-right">
        <img src={hero_img} alt="Hero Image" className="w-full lg:w-96 rounded-lg" />
      </div>
    </div>
  );
}

export default Hero;
