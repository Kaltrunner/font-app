import React, { useState } from "react";
import Clock from "../clock/Clock";
import "./nav.css";

function Nav() {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className="nav-body-div">
      <div className="nav-info-div">
        <div className="nav-text">
          <Clock />
        </div>
        <div className="nav-text">stuff</div>
        {isDark ? (
          <button onClick={() => setIsDark(false)} className="nav-btn">
            Click
          </button>
         ) : ( 
          <button onClick={() => setIsDark(true)} className="nav-btn-dark">
            Click!
          </button>
         )}
      </div>
    </div>
  );
}

export default Nav;
