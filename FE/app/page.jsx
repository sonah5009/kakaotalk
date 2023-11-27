"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Check if the user is logged in
    const userKey = localStorage.getItem("user_key");

    if (userKey) {
      // If userKey exists, user is logged in, redirect to dashboard/friendlist
      router.push("/dashboard/friendlist");
    } else {
      // If userKey does not exist, user is not logged in, redirect to login
      router.push("/login");
    }
  }, [router]); // Dependency array to ensure effect runs once

  return <div className="w-full h-full bg-primary-yellow">Loading...</div>;
}
