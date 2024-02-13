"use client"
import "../globals.css"
import scrollToSection from "@/globalFunctions/scrollToSections";
import NavBar from "@/components/navbarComponents/NavBar"
import ContactUs from "@/components/contactUs/contactUs";
import Copyright from "@/components/copyright/copyRight";
import RentalsSection from "@/components/servicePageComponents/Rentals";
import Image from "next/image";
import DryVanInside from "../../public/DryVanInside.jpg"
import DryVansLinedUp from "../../public/dryvansatdock.jpg"
import ReefersLinedUp from "../../public/reefers lined up.jpg"


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

    <div className="flex flex-col p-4 justify-around md:flex-row">
      <Image src={DryVanInside.src} height={200} width={300} alt="Picture of the interior of a dry van"/>
      <Image src={DryVansLinedUp.src} height={200} width={300} alt="Picture of Dry Vans lined up at the docks"/>
      <Image src={ReefersLinedUp.src} height={200} width={300} alt="Picture of Dry Vans lined up at the docks"/>
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