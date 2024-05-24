"use client";

import { useState, useEffect, Suspense, lazy } from "react";
import { InventoryItem } from "@/app/types/types";
import InventoryCardZoomed from "./InventoryCardZoomed";
import "../../app/globals.css";
import { getPhotosForSingleInventory } from "@/globalFunctions/apiCalls/apiCalls";
import { Maximize2 } from "lucide-react";
import LazyImage from "./LazyImage";

interface InventoryProps {
  inventoryItem: InventoryItem;
}

const InventoryCard: React.FC<InventoryProps> = ({ inventoryItem }) => {
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const [imagesForInventoryItem, setImagesForInventoryItem] = useState<
    string[] | null
  >(null);

  useEffect(() => {
    getPhotosForSingleInventory(setImagesForInventoryItem, inventoryItem._id);
  }, [inventoryItem._id]);

  useEffect(() => {
    isZoomed
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isZoomed]);

  // zoom on the element
  const handleZoom = () => {
    setIsZoomed((prev: boolean) => !prev);
  };

  return (
    <div className="w-full h-full  border-gray-200 border-2 rounded p-2">
      <div>
        {!imagesForInventoryItem ? (
          <div className="relative w-full md:h-[284.44px] bg-gray-200">
            <div className="absolute inset-0 flex justify-center items-center text-gray-500">
              Loading pictures...
            </div>
          </div>
        ) : (
          <div>
            <div className="relative w-full md:h-[284.44px]">
              <Maximize2
                onClick={handleZoom}
                className="absolute text-white bg-black rounded top-2 right-2 cursor-pointer"
              />

              <LazyImage
                width={200}
                height={200}
                alt={`Image for ${inventoryItem.short_description}`}
                src={imagesForInventoryItem[0]}
                className="rounded w-full"
              />
            </div>
          </div>
        )}
      </div>
      <div>
        <p className="font-bold text-jblue mt-2">
          <u className="text-lg">MAKE</u>: {inventoryItem.make}
        </p>
        <p className="font-bold text-jblue">
          <u className="text-lg">YEAR</u>: {inventoryItem.year}
        </p>
        <p className="font-bold text-jblue">
          <u className="text-lg">MODEL</u>: {inventoryItem.model}
        </p>
        <p className="font-bold text-jblue">
          <u className="text-lg">PRICE</u>: {inventoryItem.price}
        </p>
      </div>

      {isZoomed && imagesForInventoryItem && (
        <InventoryCardZoomed
          inventoryItem={inventoryItem}
          handleZoom={handleZoom}
          imagesForInventoryItem={imagesForInventoryItem}
        />
      )}
    </div>
  );
};

export default InventoryCard;
