"use server";
import "../globals.css";
import { fetchText } from "@/globalFunctions/apiCalls/apiCalls";
import NavBar from "@/components/navbarComponents/NavBar";
import ContactUs from "@/components/contactUs/contactUs";
import Copyright from "@/components/copyright/copyRight";
import RentalsSection from "@/components/servicePageComponents/Rentals";

export default async function RentalsPage() {
  const text = await fetchText();
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
          <h1 className={`text-jblue text-4xl font-bold mb-2`}>
            {parsedText.text.Rentals_Page.Main_Header}
          </h1>
        </div>
        <div className="border-b-2 border-jblue">
          <RentalsSection parsedText={parsedText} />
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
