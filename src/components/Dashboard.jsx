import React from "react";
import LeftSideBar from "./LeftSideBar";

export default function Dashboard() {
  return (
    <div className="container-xl pt-3">
      <div style={{ width: "20%" }}>
        <LeftSideBar />
      </div>
    </div>
  );
}
