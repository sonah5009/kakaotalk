"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation"; // or the appropriate import based on your routing setup

const ChatList = () => {
  const [chatRooms, setChatRooms] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchChatRooms = async () => {
      const userKey = localStorage.getItem("user_key");
      const response = await axios.get("http://localhost:8000/chat-rooms", {
        params: { user_key: userKey },
      });
      // room_key, room_name 받음
      setChatRooms(response.data);
    };

    fetchChatRooms();
  }, []);
  console.log("chatRooms", chatRooms);
  const handleChatRoomClick = (roomKey) => {
    // Navigate to the specific chat room page
    router.push(`/dashboard/chat/${roomKey}`);
  };

  return (
    <div>
      <div>
        Chat Rooms:
        <ul>
          {chatRooms.map((room, index) => (
            <li key={index} onClick={() => handleChatRoomClick(room.room_key)}>
              {room.room_name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChatList;
