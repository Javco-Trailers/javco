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

  const router = useRouter();

  useEffect(() => {
    adminAlreadyLoggedInCheck(setAuthSuccessful);
  }, []);

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
          <select></select>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
