import { HeaderButton, DarkModeButton } from "./Buttons";
import resume from "/Tushar-Tayal-Resume.pdf";
import PropTypes from "prop-types";

const MobileNav = ({ image, handleDarkMode, modeText, handleMenu, menu }) => {
  return (
    <div className={menu}>
      <div className="mobile-nav-close-button" onClick={handleMenu}>
        x
      </div>
      <HeaderButton to="/" name="Home" />
      <HeaderButton to="/about" name="About" />
      <HeaderButton to="/projects" name="Projects" />
      <div className="nav">
        <a className="nav-link" target="_blank" rel="noreferrer" href={resume}>
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
  );
};

export default MobileNav;

MobileNav.propTypes = {
  image: PropTypes.string.isRequired,
  handleDarkMode: PropTypes.func.isRequired,
  handleMenu: PropTypes.func.isRequired,
  modeText: PropTypes.string.isRequired,
  menu: PropTypes.string.isRequired,
};
