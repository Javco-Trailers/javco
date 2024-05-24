"use client";

import { useState, useEffect, Suspense, lazy } from "react";
import { InventoryItem } from "@/app/types/types";
import InventoryCardZoomed from "./InventoryCardZoomed";
import "../../app/globals.css";
import {
  getImageForPreviewDisplay,
  getPhotosForSingleInventory,
} from "@/globalFunctions/apiCalls/apiCalls";
import { Maximize2 } from "lucide-react";
import LazyImage from "./LazyImage";
import { PacmanLoader } from "react-spinners";

interface InventoryProps {
  inventoryItem: InventoryItem;
}

const InventoryCard: React.FC<InventoryProps> = ({ inventoryItem }) => {
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const [previewPhoto, setPreviewPhoto] = useState<string>("");
  const [imagesForInventoryItem, setImagesForInventoryItem] = useState<
    string[] | null
  >(null);

  useEffect(() => {
    getImageForPreviewDisplay(setPreviewPhoto, inventoryItem.image_ids[0]);
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
        {!previewPhoto ? (
          <div className="relative w-full md:h-[284.44px] bg-gray-200">
            <div className="absolute inset-0 flex justify-center items-center">
              <PacmanLoader color={"rgb(33, 99, 166)"} />
            </div>
          </div>
        ) : (
          <div>
            <div className="relative w-full md:h-[284.44px]">
              {imagesForInventoryItem && (
                <Maximize2
                  onClick={handleZoom}
                  className="absolute text-white bg-black rounded top-2 right-2 cursor-pointer"
                />
              )}
              <LazyImage
                width={200}
                height={200}
                alt={`Image for ${inventoryItem.short_description}`}
                src={previewPhoto}
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
