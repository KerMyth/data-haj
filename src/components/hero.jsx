import React from "react";
import Haji from "../assets/Haji.png";

const Hero = () => {
  return (
    <div className="max-w-[1640px] h-[270px] lg:h-[600px] max-w[600px] mx-auto px-[5px] py-3 md:px-[18px] md:py-3 lg:px-[60px] lg:py-[20px] ">
      <div className="max-h-[500px] relative">
        <div className="absolute w-full h-[250px] md:h-[350px] lg:h-[550px] text-gray-50 max-h-[600px] bg-black/40 flex flex-col justify-center items-center rounded-2xl">
          <h1 className="font-bold">Best</h1>
        </div>
        <img
          src={Haji}
          alt=""
          className="h-[250px] md:h-[350px] lg:h-[550px] w-full"
        />
      </div>
    </div>
  );
};

export default Hero;
