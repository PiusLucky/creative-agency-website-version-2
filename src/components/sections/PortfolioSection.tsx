import React from "react";
import Header from "../common/Header";
import PortfolioCard from "../cards/PortfolioCard";
import MainButton from "../common/MainButton";
import { motion } from "framer-motion";

function PortfolioSection() {
  const data = [
    {
      bgClass: "bg-bg-1",
      title: "Design Byte App",
    },
    {
      bgClass: "bg-bg-2",
      title: "Cloud App",
      hasDotOnBackground: true,
    },
    {
      bgClass: "bg-bg-3",
      title: "Design Funiture app",
    },
  ];
  return (
    <section className="relative">
      <Header title="Our Portfolio" subtitle="What do we do" />
      <p className="text-center text-customGray my-8">
        all projects that we have already done , proven can help to use more
        comfortable, then can used by client from our business
      </p>
      <div className="flex gap-16 flex-col md:flex-row items-center">
        {data.map((pfl, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="w-full hover:cursor-pointer"
          >
            <PortfolioCard key={index} {...pfl} />
          </motion.div>
        ))}
      </div>

      <div className="absolute top-16 right-0 hidden md:block">
        <img src="/images/rectangular_dots.png" alt="rectangular dots" />
      </div>

      <div className="flex justify-center mt-8">
        <MainButton
          text="See All Portfolio"
          classes="bg-white border border-primary hover:bg-white text-primary font-bold"
        />
      </div>
    </section>
  );
}

export default PortfolioSection;
