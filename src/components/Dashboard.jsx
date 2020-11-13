import React from "react";
import Advertise from "./Advertise";
import LeftSideBar from "./LeftSideBar";
import MainContainer from "./MainContainer";

export default function Dashboard() {
  return (
    <div className="container-xl main-container d-flex ">
      <div style={{ width: "18%" }} className="pr-3 position-sticky">
        <LeftSideBar />
      </div>
      <div style={{ width: "60%" }}>
        <MainContainer />
      </div>
      <div style={{ width: "20%" }} >
        <Advertise />
      </div>
    </div>
  );
}
