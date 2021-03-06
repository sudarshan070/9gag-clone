import React from "react";
import { FaComment, FaHeart, FaQuestion, FaShoppingCart } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Login from "./Login";
import SignUp from "./SignupModal";

function Header() {
  return (
    <header className="bg-dark text-white position-fixed header">
      <div className="container-xl py-2 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <div className="mr-2 logo">
            <h1>9GAG</h1>
          </div>

          <ul 
            className="d-flex mobile-view"
            style={{ fontSize: "14px", fontWeight: "200" }}
          >
            <li className="mx-2"> Shuffle</li>
            <li className="mx-2">Get App</li>
            <li className="mx-2">
              <FaShoppingCart /> Shop
            </li>
            <li className="mx-2">US Election</li>
            <li className="mx-2">Among us</li>
            <li className="mx-2">My workplace</li>
            <li className="mx-2">Cosplay</li>
            <li className="mx-2">
              <FaHeart style={{ color: "red", fontSize: "1rem" }} />
            </li>
            <li className="mx-2">
              <FaQuestion
                style={{ color: "red", fontWeight: "100", fontSize: "1rem" }}
              />
            </li>
          </ul>
        </div>
        <div>
          <FaMoon style={{ margin: "0 1rem" }} />
          <FaSearch style={{ margin: "0 1rem" }} />
          <FaComment style={{ margin: "0 1rem" }} />
          <Login />
          <SignUp />
        </div>
      </div>
    </header>
  );
}

export default Header;
