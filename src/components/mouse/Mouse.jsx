import AnimatedCursor from "react-animated-cursor";

function Mouse() {
  return (
    <>
      <AnimatedCursor
        id="mouse"
        innerSize={16}
        outerSize={16}
        color="148,0,211" 
        outerAlpha={0.1}
        innerScale={1}
        outerScale={4}
        hasBlendMode={true}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'input[type=""]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
    </>
  );
}

export default Mouse;
