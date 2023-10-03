import { HeaderButton, DarkModeButton, HamBurgerButton } from "./Buttons";
import { Link } from "react-router-dom";
import resume from "/Tushar-Tayal-Resume.pdf";
import { useState } from "react";
import sun from "../assets/sun.png";
import moon from "../assets/moon.png";
import MobileNav from "./MobileNav";

const Header = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [image, setImage] = useState(sun);
  const [modeText, setModeText] = useState("Light");
  const [menu, setMenu] = useState("mobile-nav-close");

  const handleDarkMode = () => {
    setDarkTheme(!darkTheme);
    console.log(darkTheme);

    if (!darkTheme) {
      document.documentElement.setAttribute("data-theme", "light");
      setImage(moon);
      setModeText("Dark");
      console.log(modeText);
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      setImage(sun);
      setModeText("Light");
      console.log(modeText);
    }
  };

  const handleMenu = () => {
    if (menu === "mobile-nav") {
      setMenu("mobile-nav-close");
    } else {
      setMenu("mobile-nav");
    }
  };

  return (
    <div className="header">
      <Link className="nav-home" to="/">
        Tushar
      </Link>
      <div className="nav-bar">
        <HeaderButton to="/" name="Home" />
        <HeaderButton to="/about" name="About" />
        <HeaderButton to="/projects" name="Projects" />
        <div className="nav">
          <a
            className="nav-link"
            target="_blank"
            rel="noreferrer"
            href={resume}
          >
            Resume
          </a>
          <div className="nav-link-underline"></div>
        </div>
        <DarkModeButton
          icon={image}
          handleDarkMode={handleDarkMode}
          modeText={modeText}
        />
      </div>
      <HamBurgerButton handleMenu={handleMenu} />
      <MobileNav
        image={image}
        handleDarkMode={handleDarkMode}
        modeText={modeText}
        handleMenu={handleMenu}
        menu={menu}
      />
    </div>
  );
};

export default Header;
