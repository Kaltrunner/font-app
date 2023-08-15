import Mouse from "./components/mouse/Mouse";
import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useState, useEffect } from "react";
import "./App.css";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const [themeLoaded, setThemeLoaded] = useState(false);

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const savedTheme = JSON.parse(localStorage.getItem("pageTheme"));
    if (savedTheme) {
      setTheme(savedTheme);
    }
    setThemeLoaded(true);
  }, []);

  useEffect(() => {
    if (themeLoaded) {
      localStorage.setItem("pageTheme", JSON.stringify(theme));
    }
  }, [theme, themeLoaded]);

  if (!themeLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="app" id={theme}>
          <Mouse />
          <Nav toggleTheme={toggleTheme} />
          <Header />
          <Body />
          <Footer />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
