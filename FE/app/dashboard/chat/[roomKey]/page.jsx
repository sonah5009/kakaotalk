// app/chat/[roomId]/page.jsx
"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import Messages from "@/components/chat/Messages";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  // const params = useParams();
  const { roomId } = router.query;
  const router = useRouter();

  useEffect(() => {
    // Fetch messages and other chat room details using roomId
    // ...
  }, [roomId]);

  return (
    // Render chat room content
    <div>
      <Messages />
    </div>
  );
};

export default ChatPage;
