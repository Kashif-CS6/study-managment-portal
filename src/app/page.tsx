"use client";

import Navbar from "@/components/common/Navbar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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
    <div>
      {" "}
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-green-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-green-600 mb-4">
            Welcome, Atif!
          </h1>
          <p className="text-lg">
            This is your dashboard. Let's get productive today 🚀
          </p>
        </div>
      </div>
    </div>
  );
}
