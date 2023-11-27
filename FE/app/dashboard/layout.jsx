"use client";
import React from "react";
import Link from "next/link";
import { IoChatbubbleSharp } from "react-icons/io5";
import { MdPerson, MdPersonAddAlt1 } from "react-icons/md";
import { useRouter } from "next/navigation";

const DashboardLayout = ({ children }) => {
  const router = useRouter();
  const handleLogout = () => {
    // Clear user_key from localStorage
    localStorage.removeItem("user_key");

    // Redirect to the home page
    router.push("/");
  };
  return (
    <div className="flex flex-row w-full h-full bg-background">
      <nav className="flex flex-col justify-center space-y-4">
        <Link href="/dashboard/friendlist">
          <MdPerson />
        </Link>
        <Link href="/dashboard/chatlist">
          <IoChatbubbleSharp />
        </Link>
        <Link href="/dashboard/addfriend">
          <MdPersonAddAlt1 />
        </Link>
        <button onClick={handleLogout}>logout</button>
      </nav>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
