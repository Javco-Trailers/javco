import "../../app/globals.css";

import { InventoryItem } from "@/app/types/types";

import InventoryCard from "./InventoryCard";

interface InventoryContainerProps {
  data: any;
  imageArrayAfterPromises:any
}

const InventoryContainer: React.FC<InventoryContainerProps> = ({ data, imageArrayAfterPromises }) => {

  
  return (
    <section className="bg-gray-100 p-8 relative">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl text-center mb-4 font-bold text-jblue">
          Inventory
        </h1>

        <div
          className={`flex flex-col flex-wrap md:flex-row w-full p-1 ${
            data.length === 1 ? "justify-center" : "justify-start"
          }`}
        >
          {data.map((inventoryItem: InventoryItem, index: number) => (
            <div
              key={`inventory-item-${index}`}
              className="w-full sm:w-1/2 md:w-1/3 p-2 basis-1/3"
            >
              <InventoryCard inventoryItem={inventoryItem} imageDataForItem={imageArrayAfterPromises[index]}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InventoryContainer;
