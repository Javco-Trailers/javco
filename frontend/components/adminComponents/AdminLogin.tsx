import React, { useState, useEffect } from "react";
import {
  adminLogin,
  adminAlreadyLoggedInCheck,
} from "@/globalFunctions/apiCalls/apiCalls";
import { useRouter } from "next/navigation";
import "../../app/globals.css";
import { MoonLoader } from "react-spinners";

const AdminLogin = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [authSuccessful, setAuthSuccessful] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true); // New loading state
  const [statusCode, setStatusCode] = useState<number | null>(null);

  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      adminAlreadyLoggedInCheck(setAuthSuccessful, setStatusCode); // Perform auth check
      setLoading(false); // Set loading to false after the check
    };

    checkAuth(); // Initiate the check on component mount
  }, []);

  useEffect(() => {
    if (authSuccessful) {
      router.push("/admin/dashboard");
    }
  }, [authSuccessful]);

  const handleLogin = async (e: any) => {
    e.preventDefault(); // Prevent the form from refreshing or redirecting
    try {
      const result = await adminLogin(username, password); // Call the login function
      console.log("Login successful", result);
      router.push("/admin/dashboard"); // Navigate after successful login
    } catch (error: any) {
      console.error("Login failed", error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {loading && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" // Full-screen overlay with opaque background
        >
          <MoonLoader size={50} color="#2164a6" />
        </div>
      )}
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-lg font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-lg font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-jblue text-white rounded-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
