import React, { useState } from "react";
import "./fontsizeslider.css";

function FontSizeSlider() {
  const [fontSize, setFontSize] = useState(16);
  const [text, setText] = useState("abcdefghijklmnopqrstuvwxyz");

  const handleSliderChange = (event) => {
    setFontSize(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value || "abcdefghijklmnopqrstuvwxyz");
  };

  return (
    <div>
      <div className="container text-center">
        <div className="row">
          <div className="col col-left" id="body-col"></div>
          <div className="col" id="body-col"></div>
        </div>
      </div>

      <input
        type="text"
        value={text === "abcdefghijklmnopqrstuvwxyz" ? "" : text}
        onChange={handleTextChange}
        placeholder="Enter your text here"
      />
      <input
        id="font-range"
        type="range"
        min="16"
        max="72"
        value={fontSize}
        onChange={handleSliderChange}
      />
      <p>regulare compressed 400</p>
      <p style={{ fontSize: `${fontSize}px` }}>{text}</p>
      <p style={{ fontSize: `${fontSize}px` }}>{text}</p>
      <p style={{ fontSize: `${fontSize}px` }}>{text}</p>
      <p style={{ fontSize: `${fontSize}px` }}>{text}</p>
    </div>
  );
}

export default FontSizeSlider;
