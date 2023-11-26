import MessageInput from "@/components/chat/MessageInput";
import MessageList from "@/components/chat/MessageList";
import React from "react";

const ChatPage = () => {
  return (
    <div>
      <MessageList />
      <MessageInput />
    </div>
  );
};

export default ChatPage;
