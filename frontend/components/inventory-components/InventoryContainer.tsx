"use client"

import "../../app/globals.css";
import { useState, useEffect } from "react";
import { InventoryItem } from "@/app/types/types";
import { getAllInventory } from "@/globalFunctions/apiCalls/apiCalls";
import InventoryCard from "./InventoryCard";


interface InventoryContainerProps {
  data: any;
}

const InventoryContainer: React.FC<InventoryContainerProps> = ({ data }) => {
 const [fetchedData, setFetchedData] = useState<any>(data);

  useEffect(() => {
  getAllInventory(setFetchedData);
       
     
  },[])


  return (
    <section className="bg-gray-100 p-8 relative">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl text-center mb-4 font-bold text-jblue">
          Inventory
        </h1>
        {/* Loader that covers the entire screen */}
        {/* {!allInventory && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" // Full-screen overlay with opaque background
          >
            <MoonLoader size={50} color="#2164a6" />
          </div>
        )} */}

        <div
          className={`flex flex-col flex-wrap md:flex-row w-full p-1 ${
            data.length === 1 ? "justify-center" : "justify-between"
          }`}
        >
          {fetchedData.map((inventoryItem: InventoryItem, index: number) => (
            <div
              key={`inventory-item-${index}`}
              className="w-full sm:w-1/2 md:w-1/3 p-2"
            >
              <InventoryCard inventoryItem={inventoryItem} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InventoryContainer;
