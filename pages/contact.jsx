import React from "react";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";

const contact = () => {
  return (
    <div>
      <Hero heading={"Contact"} message={"This is the contact page"} />
      <Contact />
    </div>
  );
};

export default contact;
