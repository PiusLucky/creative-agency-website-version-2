import React from "react";

interface IProps {
  bgClass: string;
  title: string;
  hasDotOnBackground?: boolean;
}

function PortfolioCard({ bgClass, title, hasDotOnBackground = false }: IProps) {
  return (
    <div
      className={`px-8 ${bgClass} w-full  rounded-[30px] bg-cover bg-no-repeat relative ${
        hasDotOnBackground ? "h-[400px]" : "h-[350px]"
      }`}
    >
      <p
        className={`text-white ${
          hasDotOnBackground ? "bottom-[3rem]" : "bottom-8"
        } font-bold text-[24px] absolute `}
      >
        {title}
      </p>

      <div
        className={`${
          hasDotOnBackground
            ? "absolute top-16 -left-12 rotate-[45deg] -z-10"
            : "hidden"
        }`}
      >
        <img src="/images/rectangular_dots.png" alt="rectangular dots" />
      </div>
    </div>
  );
}

export default PortfolioCard;
