import Nav from "./components/nav/nav";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
// import FontSizeSlider from "./components/FontSizeSlider/FontSizeSlider";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <Nav clock="Clock" />
      <Header />
      <Body />
      {/* <FontSizeSlider /> */}
    </>
  );
}

export default App;
