// app/chat/[roomKey]/page.jsx
"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  useParams,
  useRouter,
  usePathname,
  useSearchParams,
} from "next/navigation";
import Messages from "@/components/chat/Messages";
import MessageInput from "@/components/chat/MessageInput";

const ChatPage = () => {
  function extractNumericPart(url) {
    const match = url.match(/\d+/); // Regular expression to find continuous digits
    return match ? match[0] : null; // Return the numeric part if found, otherwise null
  }
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    console.log(url);
    // You can now use the current URL
    // ...
  }, [pathname, searchParams]);

  const url = `${pathname}?${searchParams}`;
  const roomKey = extractNumericPart(url);
  console.log("Room Key:", roomKey);
  return (
    // Render chat room content
    <div>
      <Messages room_key={roomKey} />
      <MessageInput room_key={roomKey} />
    </div>
  );
};

export default ChatPage;
