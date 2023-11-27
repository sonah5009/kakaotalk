"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [userKey, setUserKey] = useState(null);

  const router = useRouter();
  const { room_key } = router.query; // Access room_key from the router query
  useEffect(() => {
    const fetchMessages = async () => {
      const roomKey = room_key;
      /* Retrieve the current room key, e.g., from URL or state */
      const userKey = localStorage.getItem("user_key"); // Assuming user_key is stored in localStorage
      const response = await axios.get("http://localhost:8000/messages", {
        params: { room_key: roomKey, user_key: userKey },
      });

      setUserKey(response.data.user_key);
      setMessages(response.data.messages);
    };

    fetchMessages();
  });

  return (
    <div>
      <div>Current User Key: {userKey}</div>
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
