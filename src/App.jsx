

// import React, { useState } from "react";
// import "./App.css";
// import LeftSideBar from "./LeftSideBar";
// import RightSideBar from "./RightSideBar";
// import { HiBackward } from "react-icons/hi2";
// import { HiForward } from "react-icons/hi2";

// function App() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="flex">
//       {/* Left Sidebar */}
//       <div
//         className={`transition-all duration-900 ease-in-out ${
//           isSidebarOpen ? "w-1/3 translate-x-0" : "w-0 translate-x-[-100%]"
//         }`}
//       >
//         <LeftSideBar />
//       </div>

//       {/* Right Sidebar: When Left Sidebar is closed, Right Sidebar takes full width */}

//       <RightSideBar
//         className={`transition-all duration-300 ease-in-out ${
//           isSidebarOpen ? "translate-x-0" : "translate-x-[-100%]"
//         }`}
//         toggleSidebar={toggleSidebar}
//         isSidebarOpen={isSidebarOpen}
//       />

      

//       {/* Displaying the state of the Sidebar (true or false) */}
//       {/* <p>{isSidebarOpen.toString()}</p> */}
//     </div>
//   );
// }

// export default App;


import React, { useState } from "react";
import "./App.css";
import "./App.css"; // Import the new CSS file
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app-container">
      {/* Left Sidebar */}
      <div className={`sidebar-container ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
        <LeftSideBar />
      </div>

      {/* Right Sidebar: When Left Sidebar is closed, Right Sidebar takes full width */}
      <RightSideBar
        className={`right-sidebar ${isSidebarOpen ? "right-sidebar-open" : "right-sidebar-closed"}`}
        toggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
      />
    </div>
  );
}

export default App;
