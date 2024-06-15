import React from 'react';

const Newsletter = () => {
  return (
    <div className="newsletter h-[40vh] flex flex-col justify-center items-center bg-gray-100 py-8 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
        Get Exclusive Offers on Your Email
      </h1>
      <p className="text-lg text-center text-gray-700 mb-6">
        Subscribe to our newsletter and stay updated
      </p>
      <div className="flex flex-col md:flex-row items-center gap-4 max-w-md px-4">
        <input
          type="email"
          placeholder="Your Email Id"
          className="w-full md:w-80 px-4 py-3 rounded-lg shadow-sm border border-gray-300 focus:outline-none focus:border-gray-400"
        />
        <button className="w-full md:w-auto px-6 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition duration-300 focus:outline-none">
          SUBSCRIBE!
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
