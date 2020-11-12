import React from "react";
import {
  FaChartLine,
  FaCommentAlt,
  FaFire,
  FaMobileAlt,
  FaRegClock,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function LeftSideBar() {
  return (
    <div>
      <nav className="pb-1">
        <Link
          className="d-block p-2 leftsidebar-hover"
          style={{
            textDecoration: "none",
            color: "#000",
            fontWeight: "300",
            fontSize: "14px",
          }}
        >
          <FaFire /> Hot
        </Link>
        <Link
          className="d-block p-2 leftsidebar-hover"
          style={{
            textDecoration: "none",
            color: "#000",
            fontWeight: "300",
            fontSize: "14px",
          }}
        >
          <FaChartLine /> Trending
        </Link>
        <Link
          className="d-block p-2 leftsidebar-hover"
          style={{
            textDecoration: "none",
            color: "#000",
            fontWeight: "300",
            fontSize: "14px",
          }}
        >
          <FaRegClock /> Fresh
        </Link>
        <Link
          className="d-block p-2 leftsidebar-hover"
          style={{
            textDecoration: "none",
            color: "#000",
            fontWeight: "300",
            fontSize: "14px",
          }}
        >
          <FaCommentAlt /> Boards
        </Link>
        <Link
          className="d-block p-2 leftsidebar-hover"
          style={{
            textDecoration: "none",
            color: "#000",
            fontWeight: "300",
            fontSize: "14px",
          }}
        >
          <FaMobileAlt /> Get 9GAG App
        </Link>
      </nav>
      <span
        style={{
          fontSize: ".7rem",
          color: "#ccc",
          textTransform: "uppercase",
          fontWeight: "600",
        }}
      >
        Popular
      </span>
      <ul className="pt-1">
        <li className="d-block p-2 leftsidebar-hover">India</li>
        <li className="d-block p-2 leftsidebar-hover">Funny</li>
        <li className="d-block p-2 leftsidebar-hover"> NSFW</li>
        <li className="d-block p-2 leftsidebar-hover">Girl</li>
        <li className="d-block p-2 leftsidebar-hover">WTF</li>
        <li className="d-block p-2 leftsidebar-hover">Anime & Manga</li>
        <li className="d-block p-2 leftsidebar-hover">Random</li>
        <li className="d-block p-2 leftsidebar-hover">Animals</li>
        <li className="d-block p-2 leftsidebar-hover">Awesome</li>
        <li className="d-block p-2 leftsidebar-hover">Car</li>
        <li className="d-block p-2 leftsidebar-hover">Comic & Webtoon</li>
      </ul>
    </div>
  );
}
