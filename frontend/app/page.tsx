"use client";

import React from "react";
import "./globals.css";
import NavBar from "@/components/navbarComponents/NavBar";
import ContactUs from "@/components/contactUs/contactUs";
import scrollToSection from "@/globalFunctions/scrollToSections";
import Copyright from "@/components/copyright/copyRight";
import Image from "next/image";
import JavcoSignZoomed from "../public/JavcoSignZoomed-min.jpg";
import Link from "next/link";
import { fetchText } from "@/globalFunctions/apiCalls/apiCalls";

interface HomeProps {
  text: any;
}

const Home: React.FC<HomeProps> = async () => {
  const text = await fetchText();
  console.log(text);
  return (
    <>
      <div className="overflow-x-hidden">
        <div className="bg-white text-jblue mb-2 shadow-lg shadow-indigo-500/40 rounded-b px-8">
          <NavBar scrollToSection={scrollToSection} />
        </div>
        <div className="bg-jblue text-white text-center mb-2 p-2">
          <h1 className="font-bold text-5xl p-2">
            Welcome to Javco Trailer Sales Inc.
          </h1>
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
            Your Premier Destination for Affordable and Exceptional
            Semi-Trailers!
          </h1>
          <div className="bg-jblue text-white text-center">
            <div className="flex flex-col justify-center items-center">
              <div className="font-semibold flex flex-row justify-between p-2 w-3/5 md:w-1/5">
                <p>-Dry Vans</p>
                <p>-Reefers</p>
              </div>
              <div className="font-semibold flex flex-row w-2/5 justify-between p-2 w-3/5 md:w-1/5">
                <p>-Flatbeds</p>
                <p>-Tankers</p>
              </div>
            </div>
            <p className="p-2 text-xl font-semibold">
              Need a trailer? Javco has you covered! We offer a wide selection
              of Semi-trailers for storage, cartage & OTR use.
            </p>
            <h2 className="font-bold text-2xl mb-4 p-2">
              <a href="/rentals">
                <u>Rent</u>
              </a>{" "}
              or{" "}
              <a href="/sales">
                <u>Buy</u>
              </a>{" "}
              <Link href="mailto:info@javco.co?subject=Javco Inquiry">
                <u>NOW!</u>
              </Link>
            </h2>
            <h2>
              <Link
                className="text-white font-bold text-2xl underline"
                href={"/inventory"}
              >
                Click here to see view our current inventory!
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
