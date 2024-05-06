import { useEffect, useState } from "react";
import "../../app/globals.css";
import { getAllInventory } from "@/globalFunctions/apiCalls/apiCalls";
import { InventoryItem } from "@/app/types/types";
import { MoonLoader } from "react-spinners";
import InventoryCard from "./InventoryCard";

const InventoryContainer = () => {
  const [allInventory, setAllInventory] = useState<InventoryItem[] | null>(
    null
  );

  useEffect(() => {
    getAllInventory(setAllInventory);
  }, []);

  return (
    <section className="bg-gray-100 p-8 relative">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl text-center mb-4 font-bold text-jblue">
          Inventory
        </h1>
        {/* Loader that covers the entire screen */}
        {!allInventory && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" // Full-screen overlay with opaque background
          >
            <MoonLoader size={50} color="#2164a6" />
          </div>
        )}
        {/* Main content goes here */}
        {allInventory && (
          <div className="flex-wrap p-1 w-full">
            {allInventory?.map(
              (inventoryItem: InventoryItem, index: number) => {
                return (
                  <InventoryCard
                    key={`inventory-item-${index}`}
                    inventoryItem={inventoryItem}
                  />
                );
              }
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default InventoryContainer;
