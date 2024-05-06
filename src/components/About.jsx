import React from "react";
import 'typeface-poppins'

const About = () => {
  return (
    <div className="w-10/12 mx-auto font-poppins bg-gray-100 p-8 rounded-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
      <h1 className="text-center font-bold text-gray-700 text-4xl mt-3 mb-6 transition-colors duration-500 hover:text-gray-500">About Us</h1>
      <p className="mt-8 text-lg text-gray-600 leading-relaxed transition-colors duration-500 hover:text-gray-500">
        We exist to craft high quality, exquisite designs, exceptional
        management and extra ordinary service. We Pad Jewels epitomizes
        sophistications, elegance and innovation in every piece we create. Our
        dedicated design and development team enable us cater to current trend
        and hence being available to our customers with unique and
        classic designs.
      </p>
    </div>
  );
};

export default About;
