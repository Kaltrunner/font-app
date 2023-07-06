import React, { useState, useEffect } from "react";
import Clock from "../clock/Clock";
import "./nav.css";

function Nav() {
  const [isDark, setIsDark] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [arrowText, setArrowText] = useState("view");

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionFontElement = document.getElementById("section-font");
    const sectionFontPosition = sectionFontElement.offsetTop;

    const threshold = 5;

    if (Math.abs(scrollPosition - sectionFontPosition) < threshold) {
      setArrowText("view");
    } else if (scrollPosition > sectionFontPosition) {
      setArrowText("view ↑");
    } else if (scrollPosition < sectionFontPosition) {
      setArrowText("view ↓");
    }
  }, [scrollPosition]);

  return (
    <div className="nav-body-div">
      <div className="nav-info-div">
        <div className="nav-text">
          <Clock />
        </div>
        <a
          className="nav-link active"
          aria-current="page"
          id="nav-links"
          href="#section-font"
        >
          <div className="nav-text">{arrowText}</div>
        </a>
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
