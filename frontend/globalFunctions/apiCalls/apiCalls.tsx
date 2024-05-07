import axios, { AxiosError } from "axios";
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

//apiCalls for Login/Logout/Protected

export const adminLogin = async (username: string, password: string) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/login`, // Ensure the environment variable is correctly defined
      {
        username: username,
        password: password, // Ensure you're sending all required data
      }
    );

    // Handle successful response
    console.log("Login successful:", response.data);
    return response.data; // Return data or handle success
  } catch (error: any) {
    // Handle error response
    if (error.response) {
      // Server responded with a status code that falls out of the range of 2xx
      console.error("Error response:", error.response.data);
      throw new Error(error.response.data.error || "Login failed"); // Throw an error for handling elsewhere
    } else if (error.request) {
      // Request was made but no response received
      console.error("No response received:", error.request);
      throw new Error("No response from server");
    } else {
      // Something else happened in setting up the request
      console.error("Error setting up request:", error.message);
      throw new Error("Unexpected error during login");
    }
  }
};

export const adminLogout = () => {
  axios
    .get(`${process.env.NEXT_PUBLIC_BASE_URL}/logout`)
    .then((response) => console.log("Successful Logout", response.status));
};

export const adminAlreadyLoggedInCheck = () => {
  axios
    .get(`${process.env.NEXT_PUBLIC_BASE_URL}/protected`)
    .then((response) =>
      console.log("You are already logged in", response.status)
    );
};
