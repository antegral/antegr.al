import React from "react";
import "./css/App.css";
import ArrowIcon from "./icons/next-single-arrow.svg";

function App() {
  return (
    <div className="section">
      <h1 className="pg1-title">Hunting the Interest things</h1>
      <div className="pg1-area-underline">
        <div className="pg1-box-blank"></div>
        <div className="pg1-box-underline"></div>
      </div>
      <div className="pg1-area-scrolldown">
        <img
          className="pg1-icon-scrolldown"
          src={ArrowIcon}
          alt="Arrow Icon"
        ></img>
        <p className="pg1-text-scrolldown">아래로 넘기세요</p>
      </div>
    </div>
  );
}

function GetSection() {}

export default App;
