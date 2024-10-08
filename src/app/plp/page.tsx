import FiltersTab from "@/components/plp/FiltersTab/FiltersTab";
import HeroSection from "@/components/plp/HeroSection/HeroSection";
import React from "react";
import PreFooter from "@/components/plp/PreFooter/PreFooter";

const page = () => {
  return (
    <>
      <HeroSection />
      <FiltersTab />
      <PreFooter />
    </>
  );
};

export default page;
