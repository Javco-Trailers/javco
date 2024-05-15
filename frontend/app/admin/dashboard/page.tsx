"use client";

import { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";
import {
  adminLogout,
  adminAlreadyLoggedInCheck,
  getAllInventory,
} from "@/globalFunctions/apiCalls/apiCalls";
import { useRouter } from "next/navigation";

import "../../globals.css";
import NewInventoryItem from "@/components/inventory-components/NewInventoryItem";
import EditInventoryItem from "@/components/inventory-components/EditInventoryItem";
import { InventoryItem } from "@/app/types/types";
import EditableTextForm from "@/components/adminComponents/editing-components/EditableTextForm";

const Dashboard = () => {
  const [authSuccessful, setAuthSuccessful] = useState<boolean>(false);
  const [statusCode, setStatusCode] = useState<number | null>(null);
  const [currentTab, setCurrentTab] = useState<string>("Home");
  const [addNew, setAddNew] = useState<boolean>(false);
  const [editDelete, setEditDelete] = useState<boolean>(false);
  const [inventoryItems, setInventoryItems] = useState<InventoryItem[] | null>(
    null
  );

  const router = useRouter();
  const optionsForCMS = ["Home", "Rentals", "Sales", "About Us", "Inventory"];

  useEffect(() => {
    adminAlreadyLoggedInCheck(setAuthSuccessful, setStatusCode);
    getAllInventory(setInventoryItems);
  }, []);

  useEffect(() => {
    statusCode && statusCode === 401 ? router.push("/admin/login") : null;
  }, [statusCode]);

  const handleLogout = () => {
    adminLogout();
    router.push("/admin/login");
  };

  const handleTabChange = (e: any) => {
    const chosenTabValue = e.target.value;
    setCurrentTab(chosenTabValue);
  };
  return (
    <section className="bg-gray-100 p-8 h-auto relative">
      <div>
        {!authSuccessful ? (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" // Full-screen overlay with opaque background
          >
            <MoonLoader size={50} color="#2164a6" />
          </div>
        ) : (
          <div className="w-1/5 flex flex-col">
            <button
              className="p-2 mb-3  bg-jblue text-white rounded-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onClick={handleLogout}
            >
              Logout
            </button>
            <select onChange={handleTabChange} className="mb-4 rounded">
              {optionsForCMS.map((tabValue, index) => (
                <option key={`tabValue-${index}`}>{tabValue}</option>
              ))}
            </select>
          </div>
        )}
      </div>
      {currentTab !== "Inventory" && (
        <EditableTextForm currentTab={currentTab} />
      )}
      {currentTab === "Inventory" && (
        <div className="h-full">
          {!addNew && !editDelete ? (
            <div>
              <button
                onClick={() => {
                  setAddNew(true);
                }}
                className="p-2 mb-3 mr-3 bg-jblue text-white rounded-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Add New
              </button>
              <button
                onClick={() => {
                  setEditDelete(true);
                }}
                className="p-2 mb-3  bg-jblue text-white rounded-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Edit/Delete Item
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                setAddNew(false);
                setEditDelete(false);
              }}
              className="p-2 mb-3  bg-jblue text-white rounded-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Close
            </button>
          )}
        </div>
      )}
      {currentTab === "Inventory" && addNew && (
        <div>
          <NewInventoryItem />
        </div>
      )}
      {currentTab === "Inventory" && editDelete && inventoryItems && (
        <div className="mb-2">
          {inventoryItems.map((item: InventoryItem, index: number) => {
            return (
              <EditInventoryItem
                key={`${item._id}-${index}`}
                index={index}
                inventoryItem={item}
                setInventoryItems={setInventoryItems}
                inventoryItems={inventoryItems}
              />
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Dashboard;
