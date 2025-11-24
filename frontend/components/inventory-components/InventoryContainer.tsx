import "../../app/globals.css";

import { InventoryItem } from "@/app/types/types";

import InventoryCard from "./InventoryCard";


const InventoryContainer: React.FC = () => {
  return (
    <section className="bg-gray-100 p-8 relative">
      <iframe src="https://cherrytrader.com/embed/seller/javco-trailer-sales-inc-f24f6d" width="100%" height="1080" style={{border:0}} />
    </section>
  );
};

export default InventoryContainer;
