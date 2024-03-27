import Image from 'next/image';
import React from 'react'

const CareerWelcomeBanner = () => {
  return (
    <div className="w-full h-full bg-[#000000] text-white min-h-[60vh] relative overflow-hidden">
      <div className="max-w-[1200px] w-full h-full flex items-center justify-end mx-auto my-0">
        <div
          className="absolute top-0 left-0 w-full h-full"
          data-dsn-grid="moveUp"
        >
          <Image
            src="/Career/2003back2.png"
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
      </div>
    </div>
  );
}

export default CareerWelcomeBanner