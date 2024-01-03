"use client"
import "../globals.css"
import scrollToSection from "@/globalFunctions/scrollToSections";
import NavBar from "@/components/navbarComponents/NavBar"
import ContactUs from "@/components/contactUs/contactUs";
import Copyright from "@/components/copyright/copyRight";
import ImageWithOverlay from "@/components/imageWithOverlay/ImageWithOverlay";

export default function Home() {
    return (
  <>
    <div className="bg-white text-jblue mb-2 shadow-lg shadow-indigo-500/40 rounded-b px-8">
     <NavBar scrollToSection={scrollToSection}/>
     </div>
     <div  className="m-4 p-2">
      <div className="mb-4">
      <ImageWithOverlay imageUrl="/" alt="Rentals" text="Rentals"/>
      </div>
      <div>
      <p className="text-center">Need a semi-trailer for a short time?</p>
      <p className="text-center">For who knows how long?</p>
      <p className="text-center">"Every day, Javco revolutionizes customer experiences, offering dynamic rental agreements designed to exceed expectations. Our commitment to flexibility means we're not just meeting needs, we're exceeding them—making business exciting and tailored just for you!"</p>
      </div>
     </div>
     <div>
     <ContactUs/>
     </div>
     <div>
     <Copyright/>
     </div>
  </>
    )
}  