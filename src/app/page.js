import common from "@/style/common.module.css"
import HeroSection from "@/component/HeroSection";
import Project from "@/component/ProjectSection";
import React from "react";
import ServicesSection from "@/component/servicesSection";

export default function Home() {
  return (
   <>
        <HeroSection />
       <ServicesSection />
       <div className={common.main}>
           <h2 className={common.commonHeading}>Our Projects</h2>
           <Project />
       </div>

   </>
  )
}
