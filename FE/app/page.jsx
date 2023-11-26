"use client";
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-full bg-primary-yellow">
      <Link href="/login">click</Link>
    </div>
  );
}
