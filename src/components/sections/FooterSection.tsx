import React from "react";
import { Separator } from "@/components/ui/separator";

function FooterSection() {
  const data = [
    {
      title: "Terms & policies",
      items: ["Terms of Service", "Privacy Policy"],
    },
    {
      title: "Company",
      items: ["Home", "About Us", "Contact us"],
    },
    {
      title: "Contact",
      items: ["(+62) 893912392190", "agecnycr@gmail.com", "Contact us"],
    },
    {
      title: "Location",
      items: [
        "PT Osiris Real Estate Internasional",
        "Jl. KH. Wahid Hasyim Kel No.10D",
        "Jakarta, Indonesia",
        "team@OsirisRealEstate.com",
      ],
    },
  ];
  return (
    <section className="bg-[#383638] py-16 px-4 md:px-16">
      <div className="flex justify-between flex-col md:flex-row gap-16">
        <div>
          <img src="/images/footer_logo.png" alt="footer logo" />
        </div>
        <div className="flex justify-between flex-col gap-8 md:flex-row flex-grow">
          {data.map((option, index) => (
            <div key={index}>
              <p className="text-white font-bold text-[22px] mb-4" key={index}>
                {option.title}
              </p>
              <div className="flex flex-col gap-4">
                {option.items.map((item, index_inner) => (
                  <p className="text-white text-[16px]" key={index_inner}>
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center w-full mt-16">
        <div className="flex gap-4">
          <div>
            <img src="/images/facebook.png" alt="facebook icon" />
          </div>
          <div>
            <img src="/images/instagram.png" alt="instagram icon" />
          </div>
          <div>
            <img src="/images/linkedin.png" alt="linkedin icon" />
          </div>
          <div>
            <img src="/images/email.png" alt="email icon" />
          </div>
          <div>
            <img src="/images/x.png" alt="x icon" />
          </div>
        </div>
        <div className="my-4 w-full">
          <Separator />
        </div>

        <p className="text-white">
          Copyright @ 2022 Agency Creative. All Right Reserved
        </p>
      </div>
    </section>
  );
}

export default FooterSection;
