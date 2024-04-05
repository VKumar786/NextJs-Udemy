import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Not Found",
};

const NotFound = () => {
  return (
    <section className="w-full bg-black text-white py-16 min-h-[60vh]">
      <div className="w-full max-w-[1200px] min-h-[60vh] my-0 mx-auto px-4 flex flex-col gap-8 items-center justify-center">
        <div className="text-center">
          <h1 className=" text-7xl font-black m-0 uppercase bg-cover bg-center heading-highlight">
            Not Found
          </h1>
          <p
            className="text-[#ddd8d8] font-medium text-2xl"
            style={{ wordBreak: "break-word" }}
          >
            Unfortunately, we could not find the requested page or resources.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
