import Image from "next/image";
import React from "react";

const Facilities = () => {
  return (
    <section className="w-full py-10 bg-gray-950" id="facilities">
      <div className="container">
        <div className="text-center items text-white">
          <h2 className="font-bold pr-20 md:pr-0 text-5xl md:text-6xl pb-5">Facilities</h2>
          <p className="text-xl md:text-2xl text-justify">
            The zest fitness studio has a wide range of <br className="block md:hidden" /> experience in 
            delivering the best services <br className="block md:hidden" /> that the fitness lifestyle 
            <br className="hidden md:block" /> needs. we have more <br className="block md:hidden" /> 
            than 5 years of experience and have 4 <br className="block md:hidden" /> branches in Bangalore.
            our ultimate goal is to <br /> contribute the best services to the fitness <br className="block md:hidden" />
            community and make difference in {`people's`} <br className="block md:hidden" /> lifestyles.
          </p>
        </div>
        <div className="flex gap-10 py-20 overflow-auto">
          <div className="min-w-full md:min-w-[0px] md:flex-1 relative h-[300px]">
            <Image
              fill
              src="/davidcohen-wD5LMt3ElT4-unsplash.webp"
              alt="image"
              className="object-cover"
            />
            <p>name</p>
          </div>
          <div className="min-w-full md:min-w-[0px] md:flex-1 relative h-[300px]">
            <Image
              fill
              src="/FREE WIFI.webp"
              alt="image"
              className="object-cover"
            />
          </div>
          <div className="min-w-full md:min-w-[0px] md:flex-1 relative h-[300px]">
            <Image
              fill
              src="/steam bath zest.webp"
              alt="image"
              className="object-cover"
            />
          </div>
          <div className="min-w-full md:min-w-[0px] md:flex-1 relative h-[300px]">
            <Image
              fill
              src="/NUTRITIOIST.webp"
              alt="image"
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex gap-10 overflow-auto">
          <div className="min-w-full md:min-w-[0px] md:flex-1 relative h-[300px]">
            <Image
              fill
              src="/CHANGING RROM.webp"
              alt="image"
              className="object-cover"
            />
          </div>
          <div className="min-w-full md:min-w-[0px] md:flex-1 relative h-[300px]">
            <Image
              fill
              src="/INBODY_edited.webp"
              alt="image"
              className="object-cover"
            />
          </div>
          <div className="min-w-full md:min-w-[0px] md:flex-1 relative h-[300px]">
            <Image
              fill
              src="/jan-laugesen-4UbSaPKGRqc-unsplash.webp"
              alt="image"
              className="object-cover"
            />
          </div>
          <div className="min-w-full md:min-w-[0px] md:flex-1 relative h-[300px]">
            <Image
              fill
              src="/physio.webp"
              alt="image"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
