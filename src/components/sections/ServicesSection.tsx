import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import ServiceCard from "../cards/ServiceCard";

function ServicesSection() {
  const data = [
    {
      iconRoute: "/images/tv_icon.png",
      title: "Social Media Management",
    },
    {
      iconRoute: "/images/cog_icon.png",
      title: "Search Engine Opimization",
    },
    {
      iconRoute: "/images/pen_icon.png",
      title: "Design",
    },
    {
      iconRoute: "/images/tv_alt_icon.png",
      title: "Ads",
    },
  ];
  return (
    <section className="flex flex-col md:flex-row gap-8 items-center">
      <div>
        <p className="text-primary  text-[24px] font-semibold text-center md:text-left">
          Our Services
        </p>
        <p className="text-dark text-[24px] md:text-[55px] font-semibold text-center md:text-left">
          Perfect and Fast Movement
        </p>
        <p className="text-customGray">
          We move with make a Creative Strategy for help your business goal, we
          help to improve your income by a services we have. make your content
          look interesting and make people look for your business
        </p>
        <Link href="/" className="text-primary flex gap-4 font-bold mt-4">
          Read more <ArrowRight color="#377DFF" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {data.map((service, index) => (
          <ServiceCard {...service} key={index} />
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
