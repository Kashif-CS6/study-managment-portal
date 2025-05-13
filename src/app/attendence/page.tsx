"use client";
import Navbar from "@/components/common/Navbar";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Attendence = () => {
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

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
      <Navbar />
      <div className="flex justify-center">
        Wait for page Update-- Thank you
      </div>
    </div>
  );
};

export default Attendence;
