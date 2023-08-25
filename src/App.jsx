import Mouse from "./components/mouse/Mouse";
import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useState, useEffect } from "react";
import "./App.css";

export const ThemeContext = createContext(null);

const themeOptions = [
  "light",
  "gray",
  "dark",
  "blue",
  "green",
  "purple",
  "pink",
  "brown",
];

function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

function App() {
  const [themeIndex, setThemeIndex] = useState(getRandomIndex(themeOptions.length));
  const [themeLoaded, setThemeLoaded] = useState(false);

  const toggleTheme = () => {
    const newIndex = getRandomIndex(themeOptions.length);
    setThemeIndex(newIndex);
  };

  useEffect(() => {
    const savedThemeIndex = JSON.parse(localStorage.getItem("pageThemeIndex"));
    if (
      savedThemeIndex !== null &&
      savedThemeIndex >= 0 &&
      savedThemeIndex < themeOptions.length
    ) {
      setThemeIndex(savedThemeIndex);
    } else {
      setThemeIndex(getRandomIndex(themeOptions.length));
    }
    setThemeLoaded(true);
  }, []);

  useEffect(() => {
    if (themeLoaded) {
      localStorage.setItem("pageThemeIndex", JSON.stringify(themeIndex));
    }
  }, [themeIndex, themeLoaded]);

  if (!themeLoaded) {
    return <div>Loading...</div>;
  }

  const currentTheme = themeOptions[themeIndex];

  return (
    <>
      <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
        <div className="app" id={currentTheme}>
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
