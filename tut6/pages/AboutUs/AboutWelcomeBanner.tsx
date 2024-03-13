import Image from "next/image";
import React from "react";

const AboutWelcomeBanner = () => {
  return (
    <div className="w-full h-full bg-[#000000] text-white min-h-[40vh] max-h-[40vh] relative lg:min-h-screen overflow-hidden">
      <div className="max-w-[1200px] w-full h-full min-h-screen flex items-center justify-end mx-auto my-0">
        <div
          className="absolute top-0 left-0 w-full h-full"
          data-dsn-grid="moveUp"
        >
          <Image
            src="/AboutUs/3319abt-h.png"
            data-dsn-y="30%"
            data-dsn-scale={1}
            layout="fill"
            objectFit="cover"
            alt=""
            // style={{
            //   transform:
            //     "translate(0%, 24%) translate3d(0px, 0px, 0px) scale(1.06, 1.06)",
            // }}
          />
        </div>
        <div className="w-[60%] h-full bg-[#0d0d0db3] p-10 z-10 n max-lg:hidden">
          <div data-dsn-animate="up" className="dsn-active">
            <h1 className="text-4xl font-extrabold tracking-wide">Meet</h1>
            <h1 className="text-4xl font-extrabold tracking-wide">
              Deepali Designs
            </h1>
            {ABOUT_WELCOME_BANNER_DATA.map((item, index) => {
              return (
                <p
                  key={index + item + Math.random()}
                  className="text-sm text-[#ffffffb0] text-justify mt-4"
                >
                  {item}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWelcomeBanner;

const ABOUT_WELCOME_BANNER_DATA = [
  "Deepali Designs and Exhibits has pioneered a stream of innovative concepts which have set new benchmarks and raised the bar for operations and logistics in the event industry. Powered by several factors - including a dedicated R&D division that explores futuristic material usage, immense application of mind, unimaginable hard work, thorough technical know-how and great execution capabilities, we have blazed and unbeatable record of delivering products and services relating to events & exhibitions.",
  "To give you a macro snapshot, we have a wide range of capabilities. Be it a quick Rapid Hospital Setup, or creating an immersive experience for an event or setting up of an exhibition booth - we are quickly off the mark and deliver unexpected results, with blazing fast turnarounds.",
  "We possess the widest range of infrastructure - in the form of our own workshop, an in-house design and execution team and are headquartered in New Delhi with a powerful presence in Mumbai- the commercial and business hub of the country.",
];
