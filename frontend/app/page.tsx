"use client";

import React from "react";
import "./globals.css";
import NavBar from "@/components/navbarComponents/NavBar";
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
        <h1 className="font-bold text-5xl p-2">Your Premier Destination for Semi-trailers</h1>
        <p className="p-2 text-xl font-semibold">"Need a traielr? Javco has you covered! We offer a wide selection of Semi-trailers for storage, cartage & OTR use."</p>
        <h2 className="font-bold text-2xl mb-4">Rent or Buy NOW!</h2>
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
