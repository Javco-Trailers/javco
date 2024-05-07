"use client";

import { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";
import {
  adminLogout,
  adminAlreadyLoggedInCheck,
} from "@/globalFunctions/apiCalls/apiCalls";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const [authSuccessful, setAuthSuccessful] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    adminAlreadyLoggedInCheck(setAuthSuccessful);
  }, []);

  return (
    <div>
      {!authSuccessful ? <MoonLoader /> : <div>Welcome to the dashboard</div>}
    </div>
  );
};

export default Dashboard;
