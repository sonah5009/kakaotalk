"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const ChatList = () => {
  const [chatRooms, setChatRooms] = useState([]);

  useEffect(() => {
    const fetchChatRooms = async () => {
      const userKey = localStorage.getItem("user_key");
      const response = await axios.get("http://localhost:8000/chat-rooms", {
        params: { user_key: userKey },
      });
      setChatRooms(response.data.chat_rooms);
    };

    fetchChatRooms();
  }, []);

  return (
    <div>
      <div>
        Chat Rooms:
        <ul>
          {chatRooms.map((room) => (
            <li key={room.id}>{room.room_name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChatList;
