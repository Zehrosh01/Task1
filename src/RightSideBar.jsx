// import React from "react";
// import Statue from "./Statue";
// import { HiBackward, HiForward } from "react-icons/hi2";

// const RightSideBar = ({ toggleSidebar, isSidebarOpen }) => {
//   return (
//     <section className=" relative bg-[url('/bbg.jpg')] bg-cover w-screen h-screen">

//       {/* Button to toggle Sidebar */}
//       <button
//         onClick={toggleSidebar}
//         className={`absolute top-16 h-8 w-8 ${
//           isSidebarOpen ? "-left-4" : "left-2"
//         } p-2 bg-gray-300 rounded-full`}
//       >
//         {isSidebarOpen ? <HiBackward className="text-teal-900" /> : <HiForward className="text-amber-900" />}
//       </button>
//       <Statue />
//     </section>
//   );
// };

// export default RightSideBar;


import React from "react";
import Statue from "./Statue";
import { HiBackward, HiForward } from "react-icons/hi2";
import './App.css'; // Import the new CSS file

const RightSideBar = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <section className="right-sidebar">
      {/* Button to toggle Sidebar */}
      <button
        onClick={toggleSidebar}
        className={`toggle-button ${isSidebarOpen ? "btn-open" : "btn-closed"}`}
      >
        {isSidebarOpen ? <HiBackward className="icon-open" /> : <HiForward className="icon-closed" />}
      </button>
      <Statue />
    </section>
  );
};

export default RightSideBar;
