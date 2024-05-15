"use server";
import "../globals.css";
import { fetchText } from "@/globalFunctions/apiCalls/apiCalls";
import NavBar from "@/components/navbarComponents/NavBar";
import ContactUs from "@/components/contactUs/contactUs";
import Copyright from "@/components/copyright/copyRight";
import SalesSection from "@/components/servicePageComponents/Sales";
import SellTrailers from "@/components/servicePageComponents/SellTrailers";
import Image from "next/image";
import Reefer from "../../public/ReeferVan-min.png";
import DryVan from "../../public/DryVanForSales-min.png";

export default async function SalesPage() {
  const text = await fetchText(null);
  // Extract the first item from the text array
  const textData = text.text[0].text;

  // Parse the text to get the actual JSON object
  const parsedText = JSON.parse(textData);
  return (
    <>
      <div className="overflow-x-hidden">
        <div className="bg-white text-jblue mb-2 shadow-lg shadow-indigo-500/40 rounded-b px-8">
          <NavBar />
        </div>
        <div className="w-full bg-white p-2 h-1/5 text-center">
          <h1 className={`text-jblue text-4xl font-bold mb-2`}>Sales</h1>
        </div>
        <div className="flex flex-col p-4 justify-around md:flex-row">
          <Image
            src={Reefer.src}
            height={400}
            width={500}
            alt="Picture of a red truck pulling a reefer trailer"
            loading="lazy"
          />
          <Image
            src={DryVan.src}
            height={400}
            width={500}
            alt="Picture of a blue truck pulling a dry van trailer"
            loading="lazy"
          />
        </div>
        <div className="border-b-2 border-jblue">
          <SalesSection parsedText={parsedText} />
        </div>

        <div className="border-b-2 border-jblue">
          <SellTrailers parsedText={parsedText} />
        </div>

        <div id="contact">
          <ContactUs />
        </div>
        <div>
          <Copyright />
        </div>
      </div>
    </>
  );
}
