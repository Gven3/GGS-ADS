import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { StyledBody } from "./app.styled";
import { useState } from "react";
import { Theme, ThemeContext } from "./themeContext";
import Contact from "./Pages/Contact/Contact";

function App() {
  const [theme, setTheme] = useState<Theme>("dark");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <StyledBody theme={theme}>
        <Header
          logo={theme === "dark" ? "/images/darklogo.svg" : "/images/logo.svg"}
          firstMenuWord="მთავარი"
          secondMenuWord="სერვისები"
          thirdMenuWord="პარტნიორები"
          fourthMenuWord="ჩვენს შესახებ"
          fifthMenuWord="კონტაქტი"
        />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </StyledBody>
    </ThemeContext.Provider>
  );
}

export default App;
