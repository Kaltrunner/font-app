import Nav from "./components/nav/nav";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Mouse from "./components/mouse/Mouse";
import "./App.css";

function App() {
  return (
    <>
      <Mouse />
      <Nav />
      <Header />
      <Body />
      <Footer />
    </>
  );
}

export default App;
