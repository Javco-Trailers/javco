"use server";
import ContactUs from "@/components/contactUs/contactUs";
import NavBar from "@/components/navbarComponents/NavBar";
import Copyright from "@/components/copyright/copyRight";
import "../globals.css";
import InventoryContainer from "@/components/inventory-components/InventoryContainer";
import { getAllInventory, getPhotosForSingleInventory } from "@/globalFunctions/apiCalls/apiCalls";
import action from "../action";
import { InventoryItem } from "../types/types";

const InventoryPage = async () => {
  
  const data = await getAllInventory(null);
  const imageArray = await data.map((inventoryItem: InventoryItem) => {
   return getPhotosForSingleInventory(null, inventoryItem._id)
  })
 
  const imageArrayAfterPromises = await Promise.all(imageArray);
 
  action()

  return (
    <>
      <div className="overflow-x-hidden">
        <div className="bg-white text-jblue mb-2 shadow-lg shadow-indigo-500/40 rounded-b px-8">
          <NavBar />
        </div>
        <InventoryContainer data={data} imageArrayAfterPromises={imageArrayAfterPromises}/>
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
