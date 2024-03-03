"use client";

import { useEffect } from "react";
import NavBar from "@/components/common/NavBar";
import AboutUsSection from "@/components/sections/AboutUsSection";
import CollaborationSection from "@/components/sections/CollaborationSection";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import LandingPageProvider from "@/providers/LandingPageProvider";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <LandingPageProvider>
      <div>
        <NavBar />
        <HeroSection />
        <div className="px-4 md:px-16 flex flex-col gap-16 md:gap-32 mt-16 md:mt-32">
          <AboutUsSection />
          <ServicesSection />
          <PortfolioSection />
          <TestimonialSection />
          <CollaborationSection />
        </div>
        <div className="mt-16 md:mt-32">
          <FooterSection />
        </div>
      </div>
    </LandingPageProvider>
  );
}
