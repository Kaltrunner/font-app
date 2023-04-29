import Mouse from "./components/mouse/Mouse";
import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <div className="app">
        <Mouse />
        <Nav />
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  );
}

export default App;
