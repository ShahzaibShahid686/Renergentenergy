"use client";
import React from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Section from "../component/Section";
import { SolarServices } from "../component/SolarServices";
import { EnergyIntro } from "../component/EnergyInto";
import { RenewableFeatures } from "../component/RenewableFeatures";
import { FourStepProcess } from "../component/FourStepProcess";
import { EnergyOperations } from "../component/EnergyOperations";
import { SolarImpactSlider } from "../component/SolarImpactSlider";
import { CtaBanner } from "../component/Cta Banner";


function Homepage() {
  return (
    <div>
      <Section/>
      
      <SolarServices/>
      <EnergyIntro/>
      <RenewableFeatures/>
      <FourStepProcess/>
      <EnergyOperations/>
      <SolarImpactSlider/>
      <CtaBanner/>
      {/* <ContactFormModal/> */}
          
      </div>  
      
      );
}

export default Homepage;
