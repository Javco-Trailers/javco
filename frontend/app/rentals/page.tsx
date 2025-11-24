"use server";
import "../globals.css";
import NavBar from "@/components/navbarComponents/NavBar";
import ContactUs from "@/components/contactUs/contactUs";
import Copyright from "@/components/copyright/copyRight";
import RentalsSection from "@/components/servicePageComponents/Rentals";

export default async function RentalsPage() {

  return (
    <>
      <div className="overflow-x-hidden">
        <div className="bg-white text-jblue mb-2 shadow-lg shadow-indigo-500/40 rounded-b px-8">
          <NavBar />
        </div>

        <div className="w-full bg-white p-2 h-1/5 text-center">
          <h1 className={`text-jblue text-4xl font-bold mb-2`}>
            Rentals
          </h1>
        </div>
        <div className="border-b-2 border-jblue">
          <RentalsSection />
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
