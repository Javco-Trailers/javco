"use client";

import { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";
import {
  adminLogout,
  adminAlreadyLoggedInCheck,
} from "@/globalFunctions/apiCalls/apiCalls";
import { useRouter } from "next/navigation";
import NavBar from "@/components/navbarComponents/NavBar";
import "../../globals.css";
import scrollToSection from "@/globalFunctions/scrollToSections";

const Dashboard = () => {
  const [authSuccessful, setAuthSuccessful] = useState<boolean>(false);
  const [statusCode, setStatusCode] = useState<number | null>(null);

  const router = useRouter();
  const optionsForCMS = [
    "Home",
    "Rentals",
    "Sales",
    "About Us",
    "Inventory",
    "Contact Us",
  ];

  useEffect(() => {
    adminAlreadyLoggedInCheck(setAuthSuccessful, setStatusCode);
  }, []);

  useEffect(() => {
    console.log(statusCode);
    statusCode && statusCode === 401 ? router.push("/admin/login") : null;
  }, [statusCode]);

  const handleLogout = () => {
    adminLogout();
    router.push("/admin/login");
  };

  return (
    <section className="bg-gray-100 p-8 relative">
      <NavBar scrollToSection={scrollToSection} />
      <div>
        {!authSuccessful ? (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" // Full-screen overlay with opaque background
          >
            <MoonLoader size={50} color="#2164a6" />
          </div>
        ) : (
          <div className="w-1/5 flex flex-col">
            <select className="mb-2 rounded">
              {optionsForCMS.map((tabValue, index) => (
                <option key={`tabValue-${index}`}>{tabValue}</option>
              ))}
            </select>
            <button
              className="px-4 py-2 bg-jblue text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
