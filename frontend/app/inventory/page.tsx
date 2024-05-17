"use server";
import ContactUs from "@/components/contactUs/contactUs";
import NavBar from "@/components/navbarComponents/NavBar";
import Copyright from "@/components/copyright/copyRight";
import "../globals.css";
import InventoryContainer from "@/components/inventory-components/InventoryContainer";
import { getAllInventory } from "@/globalFunctions/apiCalls/apiCalls";
import action from "../action";

const InventoryPage = async () => {
  const data = await getAllInventory(null);
  action()

  return (
    <>
      <div className="overflow-x-hidden">
        <div className="bg-white text-jblue mb-2 shadow-lg shadow-indigo-500/40 rounded-b px-8">
          <NavBar />
        </div>
        <InventoryContainer data={data} />
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

export default InventoryPage;
