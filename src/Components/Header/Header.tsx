import React, { useContext, useEffect, useState } from "react";
import { StyledHeader, StyledInputDiv, StyledNavMenu, StyledNavbar } from "./header.styled";
import { ThemeContext } from "../../themeContext";
import { BsHandIndexThumb } from "react-icons/bs";

interface HeaderProps {
  logo: string;
  firstMenuWord: string;
  secondMenuWord: string;
  thirdMenuWord: string;
  fourthMenuWord: string;
  fifthMenuWord: string;
}

const Header: React.FC<HeaderProps> = ({
  logo,
  firstMenuWord,
  secondMenuWord,
  thirdMenuWord,
  fourthMenuWord,
  fifthMenuWord,
}) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [hand, setHand] = useState<boolean>(true);
  useEffect(() => {
    setHand(true);
    setTimeout(() => {
      setHand(false);
    }, 10000);
  }, []);
  return (
    <StyledHeader theme={theme}>
      <StyledNavbar>
        <img src={logo} alt="" />
        <StyledNavMenu theme={theme}>
          <ul>
            <div className="darkmodeDiv" onMouseOver={() => setHand(false)}>
              <img
                src={theme === "dark" ? "/images/light.svg" : "/images/dark.svg"}
                alt=""
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              />
              {hand ? <BsHandIndexThumb /> : <></>}
            </div>
            <li>
              <a href="/">{firstMenuWord}</a>
            </li>
            <li>
              <a href="/">{secondMenuWord}</a>
            </li>
            <li>
              <a href="/">{thirdMenuWord}</a>
            </li>
            <li>
              <a href="/">{fourthMenuWord}</a>
            </li>
            <li>
              <a href="/contact">{fifthMenuWord}</a>
            </li>
          </ul>
        </StyledNavMenu>
        <StyledInputDiv>
          <img src="/images/search.svg" alt="" />
          <input type="text" />
        </StyledInputDiv>
      </StyledNavbar>
    </StyledHeader>
  );
};

export default Header;
