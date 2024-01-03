"use client"

import React from "react";
import "./globals.css";
import NavBar from '@/components/navbarComponents/NavBar';
import ContactUs from "@/components/contactUs/contactUs";
import scrollToSection from "@/globalFunctions/scrollToSections";
import Copyright from "@/components/copyright/copyRight";

export default function Home() {

 
  return (
<>
  <div className="bg-white text-jblue mb-2 shadow-lg shadow-indigo-500/40 rounded-b px-8">
   <NavBar scrollToSection={scrollToSection}/>
   <div className="text-xl">H</div>
   <br/>
   <div className="text-xl">H</div>
   <br/>
   <div className="text-xl">H</div>
   <br/>
   <div className="text-xl">H</div>
   <br/>
   <div className="text-xl">H</div>
   <br/>
   <div className="text-xl">H</div>
   <br/>
   <div className="text-xl">H</div>
   <br/>
   <div className="text-xl">H</div>
   <br/>
   <div className="text-xl">H</div>
   <br/>
   <div className="text-xl">H</div>
   <br/>
   <div className="text-xl">H</div>
   <br/>
   <div className="text-xl">H</div>
   <br/>
   <div className="text-xl">H</div>
   <br/>
   <div className="text-xl">H</div>
   <br/>
   <div className="text-xl">H</div>
   <br/>
   <div className="text-xl">H</div>
   <br/>
   <div className="text-xl">H</div>
   <br/>
   <div className="text-xl">H</div>
   <br/>
   <div id="contact">
   <ContactUs/>
   <Copyright/>
   </div>
  </div>
</>



  
  )
}
