import React, { useState } from "react";
import "./fontsizeslider.css";

function FontSizeSlider() {
  const [fontSize, setFontSize] = useState(24);
  const [text, setText] = useState("Aa Bb Cc"); 
  // const sliderRef = useRef(null);
  // const rangeRef = useRef(null);
  // const valueRef = useRef(null);

  const handleSliderChange = (event) => {
    setFontSize(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value || "Aa Bb Cc");
  };

  // useEffect(() => {
  //   const range = rangeRef.current;
  //   const value = valueRef.current;

  //   value.innerHTML = range.value;

  //   range.addEventListener("input", function () {
  //     value.innerHTML = this.value;
  //   });
  // }, []);

  return (
    <div className="fontslider-body-div">
      <div className="fontslider-input-div">
        <input
          id="fontsize"
          type="text"
          value={text === "Aa Bb Cc" ? "" : text}
          onChange={handleTextChange}
          placeholder="Enter text or phrase here"
          maxlength="18"
        />
        <input
          id="font-range"
          type="range"
          min="24"
          max="88"
          value={fontSize}
          onChange={handleSliderChange}
        />
        {/* <div className="range-slider" ref={sliderRef}> */}
        {/* <input
          id="font-range"
          className="range-slider__range"
          type="range"
          ref={rangeRef}
          min="24"
          max="80"
          onChange={handleSliderChange}
          value={fontSize}
        /> */}

        {/* <div
          id="font-range"
          className="range-slider__value"
          ref={valueRef}
          value={fontSize}
        ></div> */}

        {/* </div> */}
      </div>
      <div className="fontslider-p-div">
        <p id="normal" style={{ fontSize: `${fontSize}px` }}>{text} - Normal</p>
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
