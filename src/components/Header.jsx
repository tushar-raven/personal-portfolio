import { HeaderButton, DarkModeButton } from "./Buttons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link className="nav-home" to="/">
        Tushar
      </Link>
      <div className="nav-bar">
        <HeaderButton to="/" name="Home" />
        <HeaderButton to="/about" name="About" />
        <HeaderButton to="/projects" name="Projects" />
        <HeaderButton to="/resume" name="Resume" />
        <DarkModeButton />
      </div>
    </div>
  );
};

export default Header;
