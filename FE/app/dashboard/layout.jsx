"use client";
import React from "react";
import Link from "next/link";
import { IconName } from "react-icons/io5";
import { IoChatbubbleSharp } from "react-icons/io5";
import { MdPerson, MdPersonAddAlt1 } from "react-icons/md";

const DashboardLayout = ({ children }) => {
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
      </nav>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
