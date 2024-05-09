import { useState, useRef } from "react";
import { InventoryItem } from "@/app/types/types";
import { XCircleIcon } from "lucide-react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

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
  const carouselRef = useRef<any>(null);

  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50" // Full-screen opaque background with high z-index
    >
      <div className="w-4/5 bg-white p-4 rounded-lg shadow-xl relative">
        <button
          onClick={handleZoom}
          className="absolute top-2 right-2 text-gray-600" // Close button in top-right corner
        >
          <XCircleIcon size={24} />
        </button>
        {/* Content of the zoomed-in inventory card */}
        <h1 className="text-2xl font-bold">Model: {inventoryItem.model}</h1>

        <p className="font-bold text-black">
          <u>Year</u>: {inventoryItem.year}
        </p>
        <p className="font-bold text-black">
          <u>Model</u>: {inventoryItem.model}
        </p>
        <p className="font-bold text-black">
          <u>Price</u>: {inventoryItem.price}
        </p>
        <p className="font-semibold">
          Details: {inventoryItem.detailed_description}
        </p>
        <Carousel
          responsive={responsive}
          beforeChange={(nextSlide: number) => setActiveIndex(nextSlide)}
          ref={carouselRef}
        >
          {imagesForInventoryItem.map((image: string, index) => {
            return (
              <div className="bg-gray-500 rounded">
                <Image
                  key={`${inventoryItem._id}-${index}`}
                  height={100}
                  width={100}
                  className="w-full object-contain max-h-[60vh]"
                  src={image}
                  alt={`${inventoryItem.short_description} image ${index + 1}`}
                />
              </div>
            );
          })}
        </Carousel>
        {/* Preview Thumbnails */}
        <div className="flex justify-center space-x-2">
          {" "}
          {/* Horizontal spacing for thumbnails */}
          {imagesForInventoryItem.map((image, index) => (
            <div
              key={`${inventoryItem._id}-${index}-thumbnail`}
              className={`w-16 h-16 bg-gray-200 rounded-lg border-2 cursor-pointer ${
                activeIndex === index ? "border-jblue" : "border-transparent"
              }`} // Highlight active thumbnail
              onClick={() => {
                setActiveIndex(index); // Update the active index
                carouselRef.current.goToSlide(index); // Programmatically move the carousel
              }}
            >
              <Image
                src={image}
                width={64}
                height={64}
                className="object-contain w-full h-full" // Maintain aspect ratio
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
