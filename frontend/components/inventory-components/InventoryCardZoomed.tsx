import { useState } from "react";
import { InventoryItem } from "@/app/types/types";
import { XCircleIcon } from "lucide-react";
import LazyImage from "./LazyImage";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

interface ZoomedInventoryProps {
  inventoryItem: InventoryItem;
  handleZoom: () => void;
  imagesForInventoryItem: string[];
}

const InventoryCardZoomed: React.FC<ZoomedInventoryProps> = ({
  inventoryItem,
  handleZoom,
  imagesForInventoryItem,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleGoForward = () => {
    activeIndex < imagesForInventoryItem.length - 1
      ? setActiveIndex((prev: number) => prev + 1)
      : setActiveIndex(0);
  };

  const handleGoBack = () => {
    activeIndex > 0
      ? setActiveIndex((prev: number) => prev - 1)
      : setActiveIndex(imagesForInventoryItem.length - 1);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
      <div className="w-4/5 bg-white p-4 rounded-lg shadow-xl relative h-[70vh] md:h-[85vh] overflow-y-auto">
        <button
          onClick={handleZoom}
          className="absolute top-2 right-2 text-gray-600"
        >
          <XCircleIcon size={24} />
        </button>
        {/* Content of the zoomed-in inventory card */}
        <p className="font-bold text-jblue">
          <u className="text-lg">MAKE</u>: {inventoryItem.model}
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
        <p className="font-bold text-jblue">
          <u className="text-lg">DETAILS</u>:{" "}
          {inventoryItem.detailed_description}
        </p>
        <div className="relative h-[50vh] p-2 m-1 ">
          <button
            onClick={handleGoBack}
            className="absolute top-1/2 left-2 bg-white rounded-r p-2 border-2 border-jblue transform -translate-y-1/2"
          >
            <ChevronLeftIcon />
          </button>
          <LazyImage
            key={`${activeIndex}imagecourselthumbnail`}
            src={imagesForInventoryItem[activeIndex]}
            width={64}
            height={64}
            className="object-contain w-full h-full bg-black bg-opacity-50 rounded border-jblue border-2"
            alt={`Thumbnail for ${inventoryItem.short_description}`}
          />
          <button
            onClick={handleGoForward}
            className="absolute top-1/2 right-2 bg-white rounded-r p-2 border-2 border-jblue transform -translate-y-1/2"
          >
            <ChevronRightIcon />
          </button>
        </div>
        {/* Preview Thumbnails */}
        <div className="flex justify-center space-x-2">
          {imagesForInventoryItem.map((image, index) => (
            <div
              key={`${inventoryItem._id}-${index}-thumbnail`}
              className={`w-16 h-16 bg-gray-200 rounded-lg border-2 cursor-pointer ${
                activeIndex === index ? "border-jblue" : "border-transparent"
              }`}
              onClick={() => {
                setActiveIndex(index);
              }}
            >
              <LazyImage
                key={`${index}imagecourselthumbnail`}
                src={image}
                width={64}
                height={64}
                className="object-contain w-full h-full"
                alt={`Thumbnail for ${inventoryItem.short_description}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InventoryCardZoomed;
