import Image from "next/image";
import React from "react";

const WhatWeLiveBy = () => {
  return (
    <section className="w-full bg-black text-white py-14">
      <div className="w-full max-w-[1200px] my-0 mx-auto px-12 lg:px-4 flex flex-col gap-8">
        <div className="w-full" data-dsn-animate="up">
          <h2 className="text-[42px] font-extrabold tracking-wide">
            What we live by
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {WHAT_WE_LIVE_BY_DATA.map((item, index) => {
            return (
              <div
                key={item.imgSrc + item.title + index + Math.random()}
                className="py-9 px-12 flex flex-col gap-2 items-center h-[550px]"
                style={{
                  backgroundColor: index % 3 === 0 ? "#1c1c1c" : undefined,
                }}
              >
                <div className="w-24 min-w-24 h-24 min-h-24 relative p-2">
                  <Image
                    src={item.imgSrc}
                    layout="fill"
                    objectFit="contain"
                    alt=""
                  />
                </div>
                <h4 className="font-medium text-3xl">{item.title}</h4>
                <div className="bg-teal-500 w-20 h-[1px] mb-3" />
                {item.content.map((_item, index) => {
                  return (
                    <span key={_item + index + Math.random()}>
                      <p className="text-sm font-medium">{_item}</p>
                      <p>&nbsp;</p>
                    </span>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeLiveBy;

const WHAT_WE_LIVE_BY_DATA = [
  {
    imgSrc: "/AboutUs/23511.png",
    title: "Hard work",
    content: [
      "It's what motivates us to go beyond the commonplace. With unimaginable application of mind, hard work and depth of thought. People, Processes, and Performance - all working in sync to create extraordinary outcomes.",
    ],
  },
  {
    imgSrc: "/AboutUs/71772.png",
    title: "Balance & Fair Play",
    content: [
      "Promotions are encouraged from within the ranks for those who move out of their comfort zone and show initiative and promise, we ensure that they are recognition and responsibility.",
      "We also go the extra mile to ensure that all those associated with us - our partners, suppliers, vendors, consultants and most importantly, our clients - get the highest value for their trust reposed in us.",
    ],
  },
  {
    imgSrc: "/AboutUs/48793.png",
    title: "Research and Development",
    content: [
      "Funds are earmarked on developing and latest technological innovations, new materials, new textures, and new possibilities. We have a talented and reliable R&amp;D team in our company, which burns midnight oil to come up with the latest innovations&nbsp; Our team keeps an eagle eye on current market trends, materials and tech and existing demands so we can ride the wave and benefit our clientele at each step.",
    ],
  },
  {
    imgSrc: "/AboutUs/55174.png",
    title: "Quality Assurance, Infrastructure and Delivery",
    content: [
      "Quality is not something that happens overnight. It is a continuous process of persistence, hard work and a deeply-ingrained habits of delivering quality in every aspect of our services.",
    ],
  },
];
