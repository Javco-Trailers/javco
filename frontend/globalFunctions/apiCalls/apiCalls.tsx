import axios from "axios";
import { SetStateAction, Dispatch } from "react";

axios.defaults.withCredentials = true;
// apiCalls for inventory

export const getAllInventory = async (
  setStateFunction?: Dispatch<SetStateAction<any>>
) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/inventory`
    );

    if (setStateFunction) {
      setStateFunction(response.data.items);
      return null; // or return a message that indicates it set the state
    } else {
      return response.data.items; // return the data if no setStateFunction is provided
    }
  } catch (error) {
    console.error("Error fetching inventory:", error);
    throw error;
  }
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

export const addNewInventoryItem = (newItem: any) => {
  axios
    .post(`${process.env.NEXT_PUBLIC_BASE_URL}/inventory`, newItem)
    .then((response) => {
      console.log(response.data);
    });
};

export const deleteInventoryItem = (inventory_id: any) => {
  axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}/inventory/${inventory_id}`);
};

export const updateInventoryItem = (inventory_id: any, formData: any) => {
  axios
    .put(
      `${process.env.NEXT_PUBLIC_BASE_URL}/inventory/${inventory_id}`,
      formData
    )
    .then((response) => {
      console.log(response.data);
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
      },
      {
        withCredentials: true, // This ensures that cookies are sent with the request
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
    .get(`${process.env.NEXT_PUBLIC_BASE_URL}/logout`, {
      withCredentials: true, // This ensures that cookies are sent with the request
    })
    .then((response) => console.log("Successful Logout", response.status));
};

export const adminAlreadyLoggedInCheck = (
  setStateFunction: Dispatch<SetStateAction<boolean>>,
  setStatusCode: Dispatch<SetStateAction<number | null>>
) => {
  axios
    .get(`${process.env.NEXT_PUBLIC_BASE_URL}/protected`, {
      withCredentials: true, // Ensure cookies are sent with the request
    })
    .then((response) => {
      setStatusCode(response.status); // Set status code from the response
      console.log("You are already logged in", response.status);
      setStateFunction(true); // Set the state function indicating login is successful
    })
    .catch((error) => {
      // Handle errors
      if (error.response) {
        // If a response exists, get the status code
        const status = error.response.status; // Retrieve the status code from the error response
        setStatusCode(status); // Set the status code
        if (status === 401) {
          console.log("Unauthorized, status code 401");
          setStateFunction(false); // Indicate that the user is not logged in
        } else {
          console.error(`Error with status code: ${status}`);
        }
      } else {
        console.error("No response received or unknown error");
      }
    });
};

export const fetchText = async (setStateFunction: any) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/text-content`
  );

  if (setStateFunction) {
    setStateFunction(response.data.text);
    return null; // or return a message that indicates it set the state
  } else {
    return response.data; // return the data if no setStateFunction is provided
  }
};
