import React from "react";

interface IProps {
  iconRoute: string;
  title: string;
}

function ServiceCard({ iconRoute, title }: IProps) {
  return (
    <div className="shadow-md rounded-[30px] px-6 flex flex-col items-center py-16 gap-8 justify-around bg-white">
      <div>
        <img src={iconRoute} alt="service icon" />
      </div>
      <p className="text-dark text-[24px] font-bold text-center">{title}</p>
    </div>
  );
}

export default ServiceCard;
