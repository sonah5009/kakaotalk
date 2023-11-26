import React from "react";

const MessageInput = () => {
  return (
    <div className="border border-gray-200 rounded-lg">
      <div
        className="overflow-auto bg-blue-300 border border-blue-300 rounded-t-lg w-118 h-141"
        id="background-left"></div>
      <form className="w-118 h-47.5 bg-white rounded-b-lg flex flex-col items-end p-4">
        <textarea
          className="w-full border-none outline-none resize-none"
          name="text"
          id="message"
          cols="50"
          rows="10"></textarea>
        <button
          type="submit"
          className="mr-2.5 bg-yellow-400 rounded-md border-none text-lg font-noto-sans font-normal text-center p-1.5"
          id="btn_send">
          Send
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
