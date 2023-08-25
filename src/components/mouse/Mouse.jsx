import AnimatedCursor from "react-animated-cursor";
// import "./mouse.css";

function Mouse() {
  return (
    <>
      <AnimatedCursor
        id="mouse"
        innerSize={0}
        outerSize={60}
        color="0, 0, 0"
        outerAlpha={0.5}
        innerScale={0}
        outerScale={1.5}
        trailingSpeed={16}
        filter={true}
        mixBlendMode={true}
        outerStyle={{
          border: "2px solid #fff",
          mixBlendMode: "difference",
          filter: "opacity(1)",
        }}
      />
    </>
  );
}

export default Mouse;
