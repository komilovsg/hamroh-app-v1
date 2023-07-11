import React from "react";
import Hero from "../components/Hero";
import SectionFeatures from "../components/SectionFearures";
import SectionCTA from "../components/SectionCTA";
import SectionHow from "../components/SectionHow";
import Footer from "../components/Footer";
import MobileApp from "../components/MobileApp";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <SectionFeatures />
      <MobileApp />
      <SectionCTA />
      <SectionHow />
      <Footer />
    </div>
  );
}
