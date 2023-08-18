import React from "react";
import Sidebar from "./Sidebar";
import MusicClasses from "./MusicClasses";

function App() {
  return (
    <div
      style={{ display: "flex", backgroundColor: "#F5F5F5", height: "100vh" }}
    >
      <Sidebar />
      <MusicClasses />
    </div>
  );
}

export default App;
