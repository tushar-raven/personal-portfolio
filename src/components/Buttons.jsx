import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import sun from "../assets/sun.png";

const HeaderButton = ({ to, name }) => {
  return (
    <div>
      <Link className="nav-link" to={to}>
        {name}
      </Link>
      <div></div>
    </div>
  );
};

const DarkModeButton = () => {
  return (
    <div className="dark-button-box">
      <img className="dark-icon" src={sun} alt="" />
    </div>
  );
};

HeaderButton.propTypes = {
  to: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export { HeaderButton, DarkModeButton };
