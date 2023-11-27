import MessageInput from "@/components/chat/MessageInput";
import MessageList from "@/components/chat/MessageList";
import Messages from "@/components/chat/Messages";
import React from "react";

const ChatPage = () => {
  return (
    <div>
      <Messages />
      <MessageList />
      <MessageInput />
    </div>
  );
};

export default ChatPage;
