import React from "react";
import Button from "../button/Button";

const Hero = () => {
  return (
    <section className="w-full h-[calc(100vh+60px)] mt-[60px]  pt-[70px] bg-hero bg-no-repeat bg-cover 
     bg-top md:bg-center" id="home">
      <div className="container">
        <h1 className="pt-[300px] px-20 mb-[15px] ml-0 md:ml-[180px] text-orange-600 text-center md:text-center text-3xl md:text-5xl leading-tight font-extrabold">
          YOUR RESULTS JUST GOT EASIER <br /> WITH ZEST FITNESS STUDIO
        </h1>
        <div className="flex flex-col items-center ">
          <div>
            <p className="text-orange-600 text-center pr-[50px] md:pr-0 font-bold text-2xl md:text-3xl">
              The fitness facility for all of your needs
            </p>
          </div>
          <div className="pt-5">
            <Button />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
