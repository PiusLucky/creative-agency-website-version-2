import React from "react";
import Header from "../common/Header";
import TestimonialCard from "../cards/TestimonialCard";

function TestimonialSection() {
  const data = [
    {
      imageUrl: "/images/lady.png",
      name: "Angel Rose",
      role: "Creative Manager",
      review:
        "There are many variations passages of Lorem Ipsum majority some by words which don't look . ",
    },
    {
      imageUrl: "/images/lady.png",
      name: "Angel Rose",
      role: "Creative Manager",
      review:
        "There are many variations passages of Lorem Ipsum majority some by words which don't look . ",
    },
    {
      imageUrl: "/images/lady.png",
      name: "Angel Rose",
      role: "Creative Manager",
      hasDotOnBackground: true,
      review:
        "There are many variations passages of Lorem Ipsum majority some by words which don't look . ",
    },
  ];
  return (
    <section className="relative">
      <Header title="Testimonial" subtitle="People Talk about us" />
      <div className="flex gap-16 flex-col md:flex-row items-center mt-16">
        {data.map((datum, index) => (
          <TestimonialCard key={index} {...datum} />
        ))}
      </div>

      {/* <div className="absolute top-0 left-0 hidden md:block">
        <img src="/images/blue_rectangular_dots.png" alt="rectangular dots" />
      </div> */}
    </section>
  );
}

export default TestimonialSection;
