import PropTypes from "prop-types";

const Skill = ({ skillData }) => {
  return (
    <div className="skill-box">
      <img src={skillData.image} alt={skillData.caption} />
      <div>{skillData.caption}</div>
    </div>
  );
};

Skill.propTypes = {
  skillData: PropTypes.object.isRequired,
};

export default Skill;
