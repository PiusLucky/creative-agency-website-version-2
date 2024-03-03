import React from "react";
import MainButton from "../common/MainButton";

function CollaborationSection() {
  return (
    <section className="mt-8 flex flex-col-reverse gap-8 md:flex-row justify-between items-center">
      <div className="flex flex-col justify-center items-center md:items-start">
        <p className="text-dark text-2xl md:text-[55px] md:leading-[3.5rem] font-bold">
          Interesting Collaboration With Us?
        </p>
        <p className="text-customGray my-8">
          Help you to reach your business goal
        </p>
        <div>
          <MainButton text="Get Started" />
        </div>
      </div>
      <div>
        <img src="/images/collab.png" alt="colla" className="hidden md:block" />
        <img
          src="/images/collab_mobile.png"
          alt="colla"
          className="block md:hidden"
        />
      </div>
    </section>
  );
}

export default CollaborationSection;
