import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const HeaderButton = ({ to, name }) => {
  return (
    <div className="nav">
      <Link className="nav-link" to={to}>
        {name}
      </Link>
      <div className="nav-link-underline"></div>
    </div>
  );
};

const DarkModeButton = ({ handleDarkMode, icon, modeText }) => {
  return (
    <div onClick={handleDarkMode} className="dark-button-box">
      <img className="dark-icon" src={icon} alt="" />
      <div className="dark-icon-text">Switch to {modeText} Mode</div>
    </div>
  );
};

const HamBurgerButton = ({ handleMenu }) => {
  return (
    <div className="ham-box" onClick={handleMenu}>
      <div className="ham-line"></div>
      <div className="ham-line"></div>
      <div className="ham-line"></div>
    </div>
  );
};

HeaderButton.propTypes = {
  to: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

DarkModeButton.propTypes = {
  handleDarkMode: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  modeText: PropTypes.string.isRequired,
};

HamBurgerButton.propTypes = {
  handleMenu: PropTypes.func.isRequired,
};

export { HeaderButton, DarkModeButton, HamBurgerButton };
