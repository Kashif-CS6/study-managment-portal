"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Dashboard() {
  const router = useRouter();
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("Token");
    if (token) {
      setIsAuthenticated(true);
    } else {
      router.push("/auth/login");
    }
    setIsAuthChecked(true);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("Token");
    toast.success("Logout successfully!");
    router.push("/auth/login");
  };

  if (!isAuthChecked) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-20 h-20 border-2 border-green-600 animate-bounce rounded-full"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Or fallback UI
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-4">
          Welcome, Atif!
        </h1>
        <p className="text-lg">
          This is your dashboard. Let's get productive today 🚀
        </p>
        <button
          onClick={handleLogout}
          className="border-gray-500 rounded-md py-1 px-4 border-[1px] hover:border-blue-500 hover:text-blue-500 mt-10 transition-all duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
