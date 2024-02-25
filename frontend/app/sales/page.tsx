"use client"
import "../globals.css"
import scrollToSection from "@/globalFunctions/scrollToSections";
import NavBar from "@/components/navbarComponents/NavBar"
import ContactUs from "@/components/contactUs/contactUs";
import Copyright from "@/components/copyright/copyRight";
import SalesSection from "@/components/servicePageComponents/Sales";
import SellTrailers from "@/components/servicePageComponents/SellTrailers";
import Image from "next/image";
import Reefer from "../../public/ReeferVan.png"
import DryVan from "../../public/DryVanForSales.png"

export default function Home() {
    return (
  <>
  <div className="overflow-x-hidden">
  

    <div className="bg-white text-jblue mb-2 shadow-lg shadow-indigo-500/40 rounded-b px-8">
     <NavBar scrollToSection={scrollToSection}/>
     </div>
     <div className="w-full bg-white p-2 h-1/5 text-center">
     <h1 className={`text-jblue text-4xl font-bold mb-2`}>Sales</h1>
     </div>
     <div className="flex flex-col p-4 justify-around md:flex-row">
      <Image src={Reefer.src} height={400} width={500} alt="Picture of a red truck pulling a reefer trailer"/>
      <Image src={DryVan.src} height={400} width={500} alt="Picture of a blue truck pulling a dry van trailer"/>
     </div>
    <div className="border-b-2 border-jblue">
      <SalesSection/>
     </div>

     

     <div className="border-b-2 border-jblue">
      <SellTrailers/>
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