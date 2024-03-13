import Image from "next/image";
import React from "react";

const BackgroundMask = () => {
  return (
    <div className="w-full bg-[#090909] text-white py-7 lg:hidden">
      {/* <div className="background-mask-bg" /> */}
      <div className="p-6">
        <div
          className="w-full min-w-full h-full min-h-[768px] relative p-2"
          data-dsn-grid="moveUp"
        >
          <Image
            data-dsn-y="30%"
            src="/AboutUs/5193back-a.png"
            layout="fill"
            objectFit="cover"
            alt=""
            //   style={{
            //     transform:
            //       "translate(0%, 11.127%) translate3d(0px, 0px, 0px) scale(1.03709, 1.03709)",
            //   }}
          />
        </div>
      </div>
    </div>
  );
};

export default BackgroundMask;
