"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

const FriendList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const userKey = parseInt(localStorage.getItem("user_key")); // Get user_key stored in local storage
    const fetchFriends = async () => {
      const response = await axios.get("http://localhost:8000/friends", {
        params: { user_key: userKey },
      });
      const friendKeys = response.data.friend_key;

      // Fetch friend names for each key
      const friendNames = await Promise.all(
        friendKeys.map(async (key) => {
          const res = await axios.get("http://localhost:8000/friend-name", {
            params: { friend_key: key },
          });
          return { key, name: res.data.friend_name };
        })
      );

      setFriends(friendNames);
    };
    fetchFriends();
  }, []);

  const router = useRouter();
  const HandleFriendClick = async (friendKey) => {
    const userKey = parseInt(localStorage.getItem("user_key")); // Get user_key stored in local storage

    console.log("Clicked friend with key:", friendKey);
    console.log("userKey:", typeof userKey);
    try {
      const response = await axios.post(
        "http://localhost:8000/create-or-get-personal-chat-room",
        {
          user_key: userKey,
          friend_key: friendKey,
        }
      );
      console.log("냥", userKey, friendKey);
      const { room_id, room_key, room_name } = response.data;
      // Navigate to the chat room
      // window.location.href = `/chat/${room_id}`; // Adjust based on your routing logic
      router.push(`/chat/${room_id}`);
    } catch (error) {
      console.log("힝");
      console.error("Error creating/getting chat room", error.response.data);
      // Handle error
    }
  };

  return (
    <div>
      {/* <div>나: {friends}</div> */}
      <div>
        칭긔들:
        <ul>
          {friends.map((friend, index) => (
            <li key={index} onClick={() => HandleFriendClick(friend.key)}>
              {friend.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FriendList;
