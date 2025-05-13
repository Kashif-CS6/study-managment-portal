"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("Token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("Token");
    toast.success("Logout successfully!");
    router.push("/auth/login");
  };

  return (
    <nav className="bg-blue-50 sticky top-0 shadow-sm z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-500">
          {"</sTuDy-PorTal>"}
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm sm:text-base font-medium text-gray-700">
          <Link href="/" className="hover:text-blue-500 transition">
            Home
          </Link>
          <Link href="/attendence" className="hover:text-blue-500 transition">
            Attendance
          </Link>
          <Link
            href="/study-material"
            className="hover:text-blue-500 transition"
          >
            Study Material
          </Link>

          {isLoggedIn && (
            <button
              onClick={handleLogout}
              className="border border-gray-400 rounded-md py-1 px-4 hover:border-blue-500 hover:text-blue-500 transition-all duration-300"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
