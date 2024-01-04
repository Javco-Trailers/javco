"use client"

import React from "react";
import "./globals.css";
import NavBar from '@/components/navbarComponents/NavBar';
import ContactUs from "@/components/contactUs/contactUs";
import scrollToSection from "@/globalFunctions/scrollToSections";
import Copyright from "@/components/copyright/copyRight";
import LandingPage from "@/components/landingPageContent/landingPageContent";
import Slideshow from "@/components/landingPageContent/landingPageImageSlideShow";

export default function Home() {

 
  return (
<>
<div className="overflow-x-hidden">
  <div className="bg-white text-jblue mb-2 shadow-lg shadow-indigo-500/40 rounded-b px-8">
   <NavBar scrollToSection={scrollToSection}/>
   </div>
   <div className="bg-jblue text-white text-center">
        <h1 className="font-bold text-5xl p-2">Affordable Semi-Trailers</h1>
        <p className="p-2 text-xl font-semibold">"Budget-Friendly Trailers, Business-Ready Adventures"</p>
      </div>
   <div>
    <Slideshow/>
    </div>
    <div>
    <LandingPage/>
    </div>

    <div id="contact">
   <ContactUs/>
   </div>
   <div>
   <Copyright/>
   </div>
  </div>
</>



  
  )
}
