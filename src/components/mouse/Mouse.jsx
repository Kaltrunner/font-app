import AnimatedCursor from "react-animated-cursor";
// import "./mouse.css";

function Mouse() {
  return (
    <>
      <AnimatedCursor
        id="mouse"
        innerSize={0}
        outerSize={30}
        color="208,83,255"
        outerAlpha={0.5}
        innerScale={0}
        outerScale={1}
        trailingSpeed={0}
        filter={true}
        outerStyle={{
          filter: "blur(2px)",
        }}
      />
    </>
  );
}

export default Mouse;
