import React from "react";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";

const work = () => {
  return (
    <div>
      <Hero heading={"Work"} message={"This is a preview of some of my work"} />
      <Portfolio />
    </div>
  );
};

export default work;
