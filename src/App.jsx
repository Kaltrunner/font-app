import Nav from "./components/nav/nav";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Footer from "./components/Footer/Footer";
// import FontSizeSlider from "./components/FontSizeSlider/FontSizeSlider";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <Nav clock="Clock" />
      <Header />
      <Body />
      <Footer />
      {/* <FontSizeSlider /> */}
    </>
  );
}

export default App;
