import React from "react";

const CURRENT_JOB_OPENING = [
  "3D Visualizer/Designer – Vacancy- 1",
  "Content Writer - Vacancy-1",
  "Client Servicing Manager - Vacancy 2",
  "Chef - Vacancy 1",
  "Marketing Manager Corporate Sales",
  "Dietician/Nutritionist",
  "Head of R&D  dept",
  "Analyst/ Engineer Cfd",
  "Executive Assistant to the Chairman and Managing Director",
  "Senior Copywriter (Mumbai)",
  "Junior Copywriter (Mumbai)",
  "Mid level Animator(Mumbai)",
  "HR+Admin(Mumbai)",
  "Senior Graphic Designer(Mumbai)",
  "Social Media Executive (Mumbai)",
  "Creative Head (Delhi)",
  "Bill of Quantity Expert ( Delhi)",
  "Social Media Executive (Delhi)",
];

const ThankIntro = () => {
  return (
    <section className="w-full bg-black text-white py-14">
      <div className="w-full max-w-[1200px] my-0 mx-auto px-12 lg:px-4 flex flex-col gap-8">
        <h2 className="text-[42px] font-extrabold tracking-wide mb-4">
          THANK YOU FOR YOUR INTEREST IN DEEPALI DESIGNS AND EXHIBITS
        </h2>
        <div className="mb-4 text-[#ffffffb0] gap-4">
          <p>
            Deepali is powered by a team of creative, quirky, ambitious and
            restless people, looking to evolve, better and push the limits of
            what’s possible.
          </p>
          <p>WE THINK YOU&apos;LL FIT RIGHT IN</p>
          <p>
            We are continuously on the lookout for both young and experienced
            talent, to join our team. Get a headstart. Build a life with us.
            Remember, success can’t build happiness but happiness can create
            success. If you&apos;re looking for a great work-life balance - this
            is the place to be! For current employment positions, internships,
            or prospective opportunities, we invite you to share more about your
            field of interest and position to: careers@deepalidesigns.com
          </p>
        </div>
        <div>
          <h3 className="text-[#ffffffb0] text-lg mb-2 font-bold">
            Current Job Openings
          </h3>
          {CURRENT_JOB_OPENING.map((item, index) => {
            return (
              <p
                key={item + index + Math.random()}
                className="text-[#ffffffb0]"
              >
                {index + 1}) {item}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ThankIntro;
