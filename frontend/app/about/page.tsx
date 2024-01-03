"use client"

import "../globals.css";
import scrollToSection from "@/globalFunctions/scrollToSections";
import NavBar from "@/components/navbarComponents/NavBar";
import ContactUs from "@/components/navbarComponents/contactUs/contactUs";

export default function Home() {
    return (
  <>
    <div className="bg-white text-jblue mb-2 shadow-lg shadow-indigo-500/40 rounded-b px-8">
     <NavBar scrollToSection={scrollToSection}/>
     <ContactUs/>
    </div>
  </>
    )
}  