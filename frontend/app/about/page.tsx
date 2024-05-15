"use server";

import "../globals.css";
import { fetchText } from "@/globalFunctions/apiCalls/apiCalls";
import NavBar from "@/components/navbarComponents/NavBar";
import ContactUs from "@/components/contactUs/contactUs";
import Copyright from "@/components/copyright/copyRight";
import AboutUsSection from "@/components/aboutUs/AboutUsSection";

export default async function Home() {
  const text = await fetchText(null);
  // Extract the first item from the text array
  const textData = text.text[0].text;

  // Parse the text to get the actual JSON object
  const parsedText = JSON.parse(textData);
  return (
    <>
      <div className="bg-white text-jblue mb-2 shadow-lg shadow-indigo-500/40 rounded-b px-8">
        <NavBar />
      </div>

      <div>
        <AboutUsSection parsedText={parsedText} />
      </div>

      <div id="contact">
        <ContactUs />
      </div>
      <div>
        <Copyright />
      </div>
    </>
  );
}
