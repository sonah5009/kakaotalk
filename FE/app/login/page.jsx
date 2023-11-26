"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/login", {
        username: username,
        password: password,
      });
      console.log(response.data);
      console.log("로그인 성공");

      // Store the token in localStorage on successful login
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user_key", response.data.user_key);
      }
      alert(response.data.message);
      router.push("/dashboard/friendlist");
      // 성공 처리 로직
    } catch (error) {
      console.log("실패했대");
      setPassword("");
      // 실패 처리 로직
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form className="p-6 bg-white rounded shadow-md" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mt-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
            Login
          </button>
          <Link href="/signup">
            <button
              type="submit"
              className="w-full px-4 py-2 mt-6 text-white bg-blue-600 rounded-md hover:bg-blue-700">
              {"Let's go Sign Up"}
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
