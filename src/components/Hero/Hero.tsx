import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className="text-white">
      <div className="mx-auto mt-[-96px] flex h-screen w-full max-w-[800px] flex-col justify-center text-center">
        <p className="p-2 font-bold text-[#00df9a]">GROWING WITH DATA ANALYTICS</p>
        <h1 className="text-4xl font-bold sm:text-6xl md:py-6 md:text-7xl">Grow with data.</h1>
        <div className="flex items-center justify-center">
          <p className="py-4 text-xl font-bold sm:text-4xl md:text-5xl">Fast, flexible financing for</p>
          {/* <Typed className="pl-2 text-xl font-bold sm:text-4xl md:pl-4 md:text-5xl" strings={['BTB', 'BTC', 'SASS']} typeSpeed={120} backSpeed={140} loop /> */}
        </div>
        <p className="text-xl font-bold text-gray-500 md:text-2xl">Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
        <button className="mx-auto my-6 w-[200px] rounded-md bg-[#00df9a] py-3 font-medium text-black">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
