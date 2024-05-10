"use server";

import React from "react";
import "./globals.css";
import NavBar from "@/components/navbarComponents/NavBar";
import ContactUs from "@/components/contactUs/contactUs";
import Copyright from "@/components/copyright/copyRight";
import Image from "next/image";
import JavcoSignZoomed from "../public/JavcoSignZoomed-min.jpg";
import Link from "next/link";
import { fetchText } from "@/globalFunctions/apiCalls/apiCalls";

const Home: React.FC = async () => {
  const text = await fetchText();
  // Extract the first item from the text array
  const textData = text.text[0].text;

  // Parse the text to get the actual JSON object
  const parsedText = JSON.parse(textData);

  // Now you can access the Home_Page key
  const homePage = parsedText.text.Home_Page;

  // Access the keys within Home_Page
  const mainHeader = homePage.Main_Header;
  const secondHeader = homePage.Second_Header;
  const typesOfTrailers = homePage.Types_Of_Trailers;
  const infoAboutJavco = homePage.Info_About_Javco;
  const linkText = homePage.Link_Text;
  const linkToInventory = homePage.Link_To_Inventory;

  return (
    <>
      <div className="overflow-x-hidden">
        <div className="bg-white text-jblue mb-2 shadow-lg shadow-indigo-500/40 rounded-b px-8">
          <NavBar />
        </div>
        <div className="bg-jblue text-white text-center mb-2 p-2">
          <h1 className="font-bold text-5xl p-2">{mainHeader}</h1>
        </div>
        <div className="flex items-center justify-center mb-4">
          <Image
            src={JavcoSignZoomed.src}
            alt="Aerial view of Javco's land"
            height={400}
            width={600}
            loading="lazy"
          />
        </div>
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-jblue">
            {secondHeader}
          </h1>
          <div className="bg-jblue text-white text-center">
            <div className="flex flex-col justify-center items-center">
              <div className="font-semibold flex flex-row justify-between p-2 w-3/5 md:w-1/5">
                <p>{typesOfTrailers.Type_One}</p>
                <p>{typesOfTrailers.Type_Two}</p>
              </div>
              <div className="font-semibold flex flex-row w-2/5 justify-between p-2 md:w-1/5">
                <p>{typesOfTrailers.Type_Three}</p>
                <p>{typesOfTrailers.Type_Four}</p>
              </div>
            </div>
            <p className="p-2 text-xl font-semibold">{infoAboutJavco}</p>
            <h2 className="font-bold text-2xl mb-4 p-2">
              <a href="/rentals">
                <u>{linkText.Link_To_Rental_Text}</u>
              </a>{" "}
              {linkText.Filler}
              <a href="/sales">
                <u>{linkText.Link_To_Sales_Text}</u>
              </a>{" "}
              <Link href="mailto:info@javco.co?subject=Javco Inquiry">
                <u>{linkText.Link_To_Email}</u>
              </Link>
            </h2>
            <h2>
              <Link
                className="text-white font-bold text-2xl underline"
                href={"/inventory"}
              >
                {linkToInventory}
              </Link>
            </h2>
          </div>
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
};

export default Home;
