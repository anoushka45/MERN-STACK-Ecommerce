import React from 'react';
import exc_image from '../Assets/exclusive_image.png';

const Offers = () => {
  return (
    <div className="offers flex flex-col lg:flex-row items-center justify-between p-8 m-16 bg-gradient-to-tr from-purple-100 via-pink-300 to-red-500 text-black rounded-lg shadow-lg">
      <div className="offers-left text-center lg:text-left mb-8 lg:mb-0 lg:mr-8">
        <h1 className="text-6xl font-semibold mb-4">Exclusive</h1>
        <h1 className="text-6xl font-semibold mb-4">Offers for You</h1>
        <p className="text-lg">ONLY ON BESTSELLER PRODUCTS</p>
        <button className='p-4 m-2 bg-gradient-to-tr from-purple-500 via-pink-500 to-red-500 text-white rounded-lg shadow-lg  '>check now!</button>
      </div>
      <div className="offers-right">
        <img src={exc_image} alt="Exclusive Offer" className="w-full h-auto lg:w-96 rounded-lg" />
      </div>
    </div>
  );
};

export default Offers;
