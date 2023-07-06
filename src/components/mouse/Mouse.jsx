import AnimatedCursor from "react-animated-cursor";

function Mouse() {
  return (
    <>
      <AnimatedCursor
        id="mouse"
        innerSize={0}
        outerSize={50}
        color="208,83,255"
        outerAlpha={0.5}
        innerScale={0}
        outerScale={2}
        trailingSpeed={16}
      />
    </>
  );
}

export default Mouse;
