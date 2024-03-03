import React from "react";

interface IProps {
  title: string;
  subtitle: string;
}

function Header({ title, subtitle }: IProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-primary text-[24px] font-semibold">{title}</p>
      <p className="text-dark text-[55px] font-bold">{subtitle}</p>
    </div>
  );
}

export default Header;
