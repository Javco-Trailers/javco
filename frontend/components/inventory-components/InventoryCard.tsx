import { useState, useEffect } from "react";
import Image from "next/image";
import { InventoryItem } from "@/app/types/types";
import InventoryCardZoomed from "./InventoryCardZoomed";
import "../../app/globals.css";
import { getPhotosForSingleInventory } from "@/globalFunctions/apiCalls/apiCalls";
import { MoonLoader } from "react-spinners";
import { Maximize2, XIcon } from "lucide-react";

interface InventoryProps {
  inventoryItem: InventoryItem;
}

const InventoryCard: React.FC<InventoryProps> = ({ inventoryItem }) => {
  const [imagesForInventoryItem, setImagesForInventoryItem] = useState<
    string[] | null
  >(null);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  console.log(inventoryItem);

  useEffect(() => {
    getPhotosForSingleInventory(setImagesForInventoryItem, inventoryItem._id);
  }, []);

  useEffect(() => {
    if (imagesForInventoryItem) console.log(imagesForInventoryItem);
  }, [imagesForInventoryItem]);

  // zoom on the element
  const handleZoom = () => {
    setIsZoomed((prev: boolean) => !prev);
  };

  return (
    <div className="w-full h-full">
      {/* Ensure border class is correct */}
      {!imagesForInventoryItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <MoonLoader size={50} color="#2164a6" />
        </div>
      )}
      {imagesForInventoryItem && (
        <div className="flex flex-col  h-full w-[80vw] md:w-full rounded border-4 border-stone-300 shadow-xl p-2">
          <div className="relative w-full md:h-[284.44px]">
            <Maximize2
              onClick={handleZoom}
              className="absolute text-white bg-black rounded top-2 right-2 cursor-pointer"
            />

            <Image
              width={200}
              height={200}
              alt={`Image for ${inventoryItem.short_description}`}
              src={imagesForInventoryItem[0]}
              className="rounded w-full "
            />
          </div>
          <p className="font-bold text-black">
            <u>Make</u>: {inventoryItem.make}
          </p>
          <p className="font-bold text-black">
            <u>Year</u>: {inventoryItem.year}
          </p>
          <p className="font-bold text-black">
            <u>Model</u>: {inventoryItem.model}
          </p>
          <p className="font-bold text-black">
            <u>About</u>: {inventoryItem.short_description}
          </p>
        </div>
      )}
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
