import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./GoHome.css";
import homeIconWhite from "./../assets/home_white.png";
import homeIconBlack from "./../assets/home_black.png";

const GoHome = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const whiteBtn = location.pathname === "/";

  return (
    <button
      className={`go-home-btn ${whiteBtn ? "white-bg" : "gradient-bg"}`}
      onClick={() => navigate("/")}
    >
      <img
        className="home-icon"
        src={whiteBtn ? homeIconBlack : homeIconWhite}
        alt="home-icon"
      ></img>
    </button>
  );
};

export default GoHome;
