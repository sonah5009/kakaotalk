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
  ///////////////
  const router = useRouter();
  const [messages, setMessages] = useState(null);
  const userKey = localStorage.getItem("user_key"); // Current user's key

  const fetchMessages = async () => {
    try {
      const response = await axios.get("http://localhost:8000/messages", {
        params: { room_key: roomKey },
      });
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  useEffect(() => {
    fetchMessages();
  });

  const [inputMessage, setInputMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    if (!inputMessage.trim()) return; // Prevent empty messages

    try {
      // Replace with the actual URL and adjust parameters as needed
      await axios.post("http://localhost:8000/insert-message", {
        message: inputMessage,
        user_key: userKey,
        room_key: roomKey,
      });
      setInputMessage(""); // Clear the textarea after sending
      fetchMessages();
    } catch (error) {
      console.error("Error sending message:", error);
      // Handle error appropriately
    }
    router.refresh();
  };

  return (
    // Render chat room content
    <div>
      <div>
        <div>Current User Key: {userKey}</div>
        <div>
          Messages:
          {messages && messages.length > 0 ? (
            <ul>
              {messages.map((message, index) => (
                <li key={index}>
                  {message.user_key !== userKey ? (
                    <>
                      {message.username}: {message.message} -{" "}
                      {message.time_stamp}
                    </>
                  ) : (
                    <>
                      {message.message} - {message.time_stamp}
                    </>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <div>No messages found.</div>
          )}
        </div>
        <div className="border border-gray-200 rounded-lg">
          {/* Other components */}
          <form
            className="w-118 h-47.5 bg-white rounded-b-lg flex flex-col items-end p-4"
            onSubmit={handleSubmit}>
            <textarea
              className="w-full border-none outline-none resize-none"
              name="text"
              id="message"
              cols="50"
              rows="10"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}></textarea>
            <button
              type="submit"
              className="mr-2.5 bg-yellow-400 rounded-md border-none text-lg font-noto-sans font-normal text-center p-1.5"
              id="btn_send">
              Send
            </button>
          </form>
        </div>
      </div>
      {/* <Messages room_key={roomKey} /> */}
      {/* <MessageInput room_key={roomKey} /> */}
    </div>
  );
};

export default ChatPage;
