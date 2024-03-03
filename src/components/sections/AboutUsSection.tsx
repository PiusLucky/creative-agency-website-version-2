import React from "react";
import Header from "../common/Header";
import MainButton from "../common/MainButton";

function AboutUsSection() {
  return (
    <div>
      <Header title="About Us" subtitle="Our Teammate" />
      <div className="flex justify-between items-center gap-8 flex-col md:flex-row">
        <div>
          <img src="/images/team_image.png" alt=" team image" />
        </div>
        <div>
          <p>
            We move with make a Creative Strategy for help your business goal,
            we help to improve your income by a services we have. make your
            content look interesting and make people look for your business
          </p>
          <p>
            We move with make a Creative Strategy for help your business goal,
            we help to improve your income by a services we have. make your
            content look interesting and make people look for your business
          </p>

          <div className="flex gap-4 mt-8">
            <MainButton text="About Us" />
            <MainButton
              text="Our Story"
              classes="bg-white hover:bg-white border border-primary text-primary font-semibold"
              iconRoute="/images/play_icon.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsSection;
