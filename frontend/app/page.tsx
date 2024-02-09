"use client"

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
        <div className="flex flex-col justify-center items-center">
          <div className="font-semibold flex flex-row justify-between p-2 w-3/5 md:w-1/5">
            <p>-Dry Vans</p>
            <p>-Reefers</p>
          </div>
          <div className="font-semibold flex flex-row w-2/5 justify-between p-2 w-3/5 md:w-1/5">
            <p>-Flatbeds</p>
            <p>-Tankers</p>
          </div>
        </div>
        <p className="p-2 text-xl font-semibold">"Need a trailer? Javco has you covered! We offer a wide selection of Semi-trailers for storage, cartage & OTR use."</p>
        <h2 className="font-bold text-2xl mb-4 p-2"><a href="/rentals"><u>Rent</u></a> or <a href="/sales"><u>Buy</u></a> <a href="mailto:info@javco.co?subject=Javco Inquiry"><u>NOW!</u></a></h2>
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
