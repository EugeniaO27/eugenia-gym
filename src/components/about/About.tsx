import Image from "next/image";
import React from "react";
import Button from "../button/Button";

const About = () => {
  return (
    <section className="w-full" id="about">
      <div className="pt-[50px] flex flex-col md:flex-row gap-[90px] bg-primary-300 text-white">
        <div className="flex-initial">
          <Image
            height={450}
            width={700}
            src="/ad64ba_6310d3ab26f44cf784c6eca047147b96~mv2.webp"
            alt="image"
            className="object-cover"
          />
        </div>
        <div className="flex-1 pl-10 items-center">
          <h2 className="font-semibold text-4xl">The Zest Experience</h2>
          <p className="py-6 block md:text-xl">
            The zest fitness studio has a wide range of experience in <br />{" "}
            delivering the best services that the fitness lifestyle <br />{" "}
            needs. we have more than 5 years of experience and <br /> have 4
            branches in Bangalore. our ultimate goal is to <br /> contribute the
            best services to the fitness community and <br /> make difference in{" "}
            {`people's`} lifestyles.
          </p>
          <div className="pb-5">
            <Button />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-[90px]  bg-primary-300 text-white">
        <div className="pl-10 flex-1">
          <h2 className="pt-20 font-semibold text-4xl">
            Fitness Is for Everyone
          </h2>
          <p className="py-6 block md:text-[20px]">
            The Zest Fitness Studio is a 24/7, a multi-level facility that{" "}
            <br /> houses an expansive selection of equipment, the latest in{" "}
            <br /> group exercise classes, and resources for a complete <br />{" "}
            wellness experience. We provide a friendly, welcoming <br />{" "}
            atmosphere for all members of all fitness levels from <br />{" "}
            beginners to PRO athletes. Whether your passion is, <br /> cardio,
            weight training, bodybuilding, powerlifting,
            <br /> CrossFit, or functional training; we have all the <br />{" "}
            equipment and necessary machines you need for results. <br />
            Come train with us!
          </p>
          <div>
            <button
              className="px-10 py-5 rounded-full cursor-pointer text-white bg-primary-500
               hover:bg-primary-200">
              Services
            </button>
          </div>
        </div>
        <div className="flex-initial pt-1">
          <Image
            height={200}
            width={700}
            src="/ad64ba_284337398a9448f1984ca349b30e6a9a~mv2.webp"
            alt="image"
            className="object-cover"
          />
        </div>
      </div>
      <div className=" pt-10 bg-primary-300 text-white">
        <div className="pl-[60px]">
           <h3 className="text-center pb-7 font-bold pr-[150px] text-3xl md:text-6xl">Welcome to the Fit Family</h3>
           <p className="pl-0 md:pl-[100px] block md:text-xl leading-7">
             We believe the quality of our health determines the <br className="block md:hidden" /> quality of our lives—and 
             nothing is more important than <br className="block md:hidden" /> that. 
             <br className="hidden md:block" /> We believe fitness is about strengthening
             and <br className="block md:hidden" /> conditioning your body and mind so you can get out
             <br className="block md:hidden" /> there, explore <br className="hidden md:block" /> the world, 
             seek new adventures and <br className="block md:hidden" /> be the person you were meant to be.
          </p>
        </div>
        <div className="pt-4 flex flex-col md:flex-row gap-5">
         <div className="flex-1 text-left pl-10 md:pl-[100px]">
           <h3 className="pt-10 md:pt-20 font-bold text-3xl md:text-4xl">
             If you want to be healthy and <br /> happy, we want to help!
           </h3>
           <p className="py-5 text-xl">
            At zest fitness studio, we believe getting fit <br className="block md:hidden" /> should be FUN,
            varied, <br className="hidden md:block" /> 
            and done with friends. <br className="block md:hidden" /> There is power in being part of a
            community <br /> of like-minded individuals that supports us, share <br className="block md:hidden" />
            our experiences, <br className="hidden md:block" /> and celebrate our successes. 
            </p>
            <p>
            {`There’s`} no ‘one right way to train. Your goals are unique, <br className="block md:hidden" /> 
            which is <br className="hidden md:block" /> why we offer various
            program options. Whether <br className="block md:hidden" /> {`you’re`}` looking just 
            <br className="hidden md:block"/> to get fit, get strong, or fuel your <br className="block md:hidden" />
            competitive fire, we have a <br className="hidden md:block" /> program for you. <br />
            We listen to what {`you’re`} looking to achieve, then lay out the <br className="block md:hidden" /> 
            best <br className="hidden md:block"/> 
            path to get there. No prior experience is required.
           </p>
         </div>
         <div className="flex-1 pr-[200px] pt-10 pb-[500px] md:block relative">
            <Image 
            fill
            src="/premium_photo-1664478033451-837e72808845.avif"
            alt="image"
            className="object-cover object-right-bottom"
            />
         </div>
        </div>
      </div>
    </section>
  );
};

export default About;
