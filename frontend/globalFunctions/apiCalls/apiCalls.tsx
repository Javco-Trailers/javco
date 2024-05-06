import axios from "axios";
import { SetStateAction } from "react";

// apiCalls for inventory

export const getAllInventory = (setStateFunction: SetStateAction<any>) => {
  axios
    .get(`${process.env.NEXT_PUBLIC_BASE_URL}/inventory`)
    .then((response) => {
      setStateFunction(response.data.items);
    });
};

export const getPhotosForSingleInventory = (
  setStateFunction: SetStateAction<any>,
  inventoryId: string
) => {
  axios
    .get(`${process.env.NEXT_PUBLIC_BASE_URL}/inventory/${inventoryId}/images`)
    .then((response) => {
      setStateFunction(response.data.images);
    });
};
