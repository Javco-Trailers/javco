"use client"
import "../globals.css"
import scrollToSection from "@/globalFunctions/scrollToSections";
import NavBar from "@/components/navbarComponents/NavBar"
import ContactUs from "@/components/contactUs/contactUs";
import Copyright from "@/components/copyright/copyRight";
import ImageWithOverlay from "@/components/imageWithOverlay/ImageWithOverlay";
import StorageSection from "@/components/servicePageComponents/Storage";
import RentalsSection from "@/components/servicePageComponents/Rentals";
import SalesSection from "@/components/servicePageComponents/Sales";
import SellTrailers from "@/components/servicePageComponents/SellTrailers";

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

     <div>
      <StorageSection/>
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