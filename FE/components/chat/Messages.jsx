"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Messages = ({ room_key: roomKey }) => {
  console.log("Messages component", roomKey);
  const [messages, setMessages] = useState([]);
  // const [userKey, setUserKey] = useState(null); // 채팅창에서의 users
  const user_key = localStorage.getItem("user_key"); // Assuming user_key is stored in localStorage

  useEffect(() => {
    const fetchMessages = async () => {
      /* Retrieve the current room key, e.g., from URL or state */
      const response = await axios.get("http://localhost:8000/messages", {
        params: { room_key: roomKey },
      });
      setMessages(response.data.messages);
    };

    fetchMessages();
  });

  return (
    <div>
      <div>Current User Key: {user_key}</div>
      <div>
        Messages:
        <ul>
          {messages.map((message, index) => (
            <li key={index}>
              {message.message} - {message.time_stamp}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Messages;
