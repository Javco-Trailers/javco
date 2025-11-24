"use server";

import "../globals.css";
import NavBar from "@/components/navbarComponents/NavBar";
import ContactUs from "@/components/contactUs/contactUs";
import Copyright from "@/components/copyright/copyRight";
import AboutUsSection from "@/components/aboutUs/AboutUsSection";

export default async function Home() {

  return (
    <>
      <div className="bg-white text-jblue mb-2 shadow-lg shadow-indigo-500/40 rounded-b px-8">
        <NavBar />
      </div>

      <div>
        <AboutUsSection />
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
