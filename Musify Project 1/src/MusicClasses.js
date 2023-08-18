import React from "react";
import CourseList from "./CourseList";
import CourseDetail from "./CourseDetail";

const MusicClasses = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <CourseList />
      <CourseDetail />
    </div>
  );
};

export default MusicClasses;
