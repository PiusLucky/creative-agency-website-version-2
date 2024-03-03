import React from "react";

interface IProps {
  imageUrl: string;
  name: string;
  role: string;
  review: string;
  hasDotOnBackground?: boolean;
}

function TestimonialCard({
  imageUrl,
  name,
  role,
  review,
  hasDotOnBackground = false,
}: IProps) {
  return (
    <div className="relative flex flex-col gap-8 shadow-lg bg-white  rounded-[20px]  p-8">
      <div className="flex items-center gap-4">
        <div>
          <img
            src={imageUrl}
            alt="reviewer image"
            className="w-[70px] h-[70px] rounded-full object-cover"
          />
        </div>

        <div>
          <p className="text-primary text-[20px]">{name}</p>
          <p className="text-[11px] text-customGray">{role}</p>
        </div>
      </div>
      <div className="text-customGray">{review}</div>

      <div
        className={`${
          hasDotOnBackground
            ? "absolute -bottom-8 right-6 rotate-[45deg] -z-10 hidden md:block"
            : "hidden"
        }`}
      >
        <img
          src="/images/blue_rectangular_dots.png"
          alt="blue rectangular dots"
        />
      </div>
    </div>
  );
}

export default TestimonialCard;
