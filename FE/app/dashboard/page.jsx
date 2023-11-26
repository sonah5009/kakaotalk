"use client";
import React from "react";
import FriendList from "@/components/dashboard/FriendList";

const ChatPage = () => {
  return <FriendList />;
};

export default ChatPage;

// "use client";
// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { useNavigation } from "next/navigation";

// const DashBoardPage = () => {
//   const navigation = useRouter();
//   const [activeTab, setActiveTab] = useState("friends");

//   // Function to handle tab change
//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//     navigation.push(`/dashboard/${tab}`, { replace: true, scroll: false });
//   };

//   return (
//     <div>
//       <div className="tab-buttons">
//         <button
//           onClick={() => handleTabChange("friends")}
//           className={activeTab === "friends" ? "active" : ""}>
//           Friends
//         </button>
//         <button
//           onClick={() => handleTabChange("chat")}
//           className={activeTab === "chat" ? "active" : ""}>
//           Chat
//         </button>
//         <button
//           onClick={() => handleTabChange("addfriend")}
//           className={activeTab === "addfriend" ? "active" : ""}>
//           Add Friend
//         </button>
//       </div>
//       <div className="tab-content">
//         {/* Render the content based on the activeTab */}
//         {activeTab === "friends" && <p>Friends List Content</p>}
//         {activeTab === "chat" && <p>Chat List Content</p>}
//         {activeTab === "addfriend" && <p>Add Friend Content</p>}
//       </div>
//     </div>
//   );
// };

// export default DashBoardPage;
