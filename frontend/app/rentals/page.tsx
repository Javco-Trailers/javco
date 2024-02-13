"use client"
import "../globals.css"
import scrollToSection from "@/globalFunctions/scrollToSections";
import NavBar from "@/components/navbarComponents/NavBar"
import ContactUs from "@/components/contactUs/contactUs";
import Copyright from "@/components/copyright/copyRight";
import RentalsSection from "@/components/servicePageComponents/Rentals";



export default function Home() {
    return (
  <>
  <div className="overflow-x-hidden">
  

    <div className="bg-white text-jblue mb-2 shadow-lg shadow-indigo-500/40 rounded-b px-8">
     <NavBar scrollToSection={scrollToSection}/>
     </div>
    <div className="border-b-2 border-jblue">
      <RentalsSection/>
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