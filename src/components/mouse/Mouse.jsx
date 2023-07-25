import AnimatedCursor from "react-animated-cursor";
// import "./mouse.css";

function Mouse() {
  return (
    <>
      <AnimatedCursor
        id="mouse"
        innerSize={0}
        outerSize={300}
        color="208,83,255"
        outerAlpha={0.5}
        innerScale={0}
        outerScale={0.5}
        trailingSpeed={20}
        filter={true}
        outerStyle={{
          filter: "blur(30px)",
        }}
      />
    </>
  );
}

export default Mouse;
