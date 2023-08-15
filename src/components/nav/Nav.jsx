import React, { useState, useEffect } from "react";
import Clock from "../clock/Clock";
import "./nav.css";

function Nav({ toggleTheme }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [arrowText, setArrowText] = useState("view");
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);
      if (currentPosition > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionFontElement = document.getElementById("section-font");
    const sectionFontPosition = sectionFontElement.offsetTop;

    const threshold = 5;

    if (Math.abs(scrollPosition - sectionFontPosition) < threshold) {
      setArrowText("More –");
    } else if (scrollPosition > sectionFontPosition) {
      setArrowText("More ↑");
    } else if (scrollPosition < sectionFontPosition) {
      setArrowText("More ↓");
    }
  }, [scrollPosition]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="nav-body-div">
      <div className="nav-info-div">
        <div className="nav-text">
          <Clock />
        </div>
        <button className="click-btn" onClick={toggleTheme}>
          Click
        </button>
        {/* <a
          className="nav-link active"
          aria-current="page"
          id="nav-links"
          href="#section-font"
        >
          <div className="nav-text">{arrowText}</div>
        </a> */}
        <button
          className={`nav-btn ${hasScrolled ? "top-btn" : ""}`}
          onClick={scrollToTop}
        >
          <span className="button-text">{hasScrolled ? "Top ↑" : "  "}</span>
        </button>
      </div>
    </div>
  );
}

export default Nav;
