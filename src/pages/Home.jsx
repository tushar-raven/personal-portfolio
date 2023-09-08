import { Link } from "react-router-dom";
import pfp from "../assets/pfp.jpeg";

const Home = () => {
  return (
    <div className="home">
      <img className="home-pfp" src={pfp} alt="Tushar" />
      <div className="home-hey">Hey, I&apos;m</div>
      <div className="home-name">Tushar Tayal</div>
      <div className="home-intro">
        I am a Front-End Developer with a solid foundation in HTML, CSS and
        Javascript. Focused on creating intuitive and user-friendly interfaces
        using React.
      </div>
      <Link className="home-link" to="/about">
        More About Me
      </Link>
    </div>
  );
};

export default Home;
