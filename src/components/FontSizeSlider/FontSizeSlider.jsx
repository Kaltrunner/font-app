import React, { useState } from "react";
import "./fontsizeslider.css";

function FontSizeSlider() {
  const [fontSize, setFontSize] = useState(56);
  const [text, setText] = useState("Aa Bb Cc");

  const handleSliderChange = (event) => {
    setFontSize(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value || "Aa Bb Cc");
  };

  return (
    <div className="fontslider-body-div">
      <div className="fontslider-input-div">
        <input
          id="fontsize"
          type="text"
          value={text === "Aa Bb Cc" ? "" : text}
          onChange={handleTextChange}
          placeholder="Enter text or phrase here"
          maxLength="18"
        />
        <div className="font-size-value">{fontSize}px</div>
        <input
          id="font-range"
          type="range"
          min="24"
          max="88"
          value={fontSize}
          onChange={handleSliderChange}
        />
      </div>

      <div className="fontslider-p-div">
        <p id="normal" style={{ fontSize: `${fontSize}px` }}>
          {text} - Normal
        </p>
        <p className="italic-font" style={{ fontSize: `${fontSize}px` }}>
          {text} - italic
        </p>
        <p id="extra-thin" style={{ fontSize: `${fontSize}px` }}>
          {text} - Ex.Thin
        </p>
        <p id="extra-bold" style={{ fontSize: `${fontSize}px` }}>
          {text} - Ex.Bold
        </p>
      </div>
    </div>
  );
}

export default FontSizeSlider;
