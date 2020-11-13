import React from "react";
import LeftSideBar from "./LeftSideBar";
import MainContainer from "./MainContainer";

export default function Dashboard() {
  return (
    <div className="container-xl pt-3 d-flex">
      <div style={{ width: "18%" }} className="pr-3">
        <LeftSideBar />
      </div>
      <div style={{ width: "60%" }}>
        <MainContainer />
      </div>
    </div>
  );
}
