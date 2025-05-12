"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLogin = () => {
    if (email === "atif@gmail.com" && password === "12345678") {
      toast.success("Login successfully");
      localStorage.setItem("Token", email);
      router.push("/");
    } else {
      toast.error("Invalid crendentials");
    }
  };
  return (
    <div className="flex items-center">
      {/* left */}
      <div className="md:w-6/12 h-[100vh] bg-blue-700"></div>
      {/* right */}
      <div className="md:w-6/12 h-[100vh] flex items-center justify-center">
        <div className="md:w-[40vw] mx-2 md:mx-0 h-[60vh] flex items-center justify-center flex-col gap-4">
          <h1 className="font-[600] text-[34px]">Login</h1>
          <div className="flex flex-col w-96">
            <label htmlFor="email" className="text-gray-500">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              className="outline-none w-full rounded-md border-gray-300 border-1 px-4 py-4"
            />
          </div>
          <div className="flex flex-col w-96">
            <label htmlFor="passwpord" className="text-gray-500">
              password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="outline-none w-full rounded-md border-gray-300 border-1 px-4 py-4"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            onClick={handleLogin}
            className="flex flex-col w-96 rounded-md border-gray-300 border-1 px-4 py-4 bg-blue-600 font-[600] text-white hover:bg-blue-400"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
