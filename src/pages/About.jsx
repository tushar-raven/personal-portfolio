import Skill from "../components/Skill";
import { skillsData } from "../data/skillsData";

const About = () => {
  const allSkills = skillsData;

  let skillArray = [];
  for (let i = 0; i < allSkills.length; i++) {
    skillArray.push(<Skill skillData={allSkills[i]} key={i} />);
  }

  return (
    <div className="about">
      <div className="about-heading">About Me</div>
      <div className="story-heading">Here&apos;s My Story</div>
      <div className="about-description">
        Greetings, friends! I&apos;m Tushar Tayal, and I&apos;m absolutely
        stoked to connect with all of you. Life&apos;s journey has taken me
        through the captivating landscapes of marketing and the invigorating
        realms of web development. For the past two years, I&apos;ve been
        crafting narratives and strategies in the world of marketing, weaving
        stories that resonate with hearts and minds.
        <br />
        <br />
        But as life often unfolds in surprising ways, I found myself drawn to a
        new passion starting this January. Yes, you guessed it - web
        development! The world of code, design, and creating seamless digital
        experiences has become my latest fascination. Fast forward to now, and
        I&apos;m on an exciting pursuit to secure a role as a frontend
        developer, with a focus on the fantastic React framework. The idea of
        turning concepts into captivating user interfaces using the power of
        React truly ignites my creative fire. When I&apos;m not lost in lines of
        code, I&apos;m feeding my soul with a healthy diet of philosophy,
        writing, and psychology. The intricacies of the human mind, the magic of
        words, and the depth of philosophical thought are all subjects that I
        hold dear to my heart.
        <br />
        <br />
        So, as I navigate this path as a React developer, I&apos;m not just
        seeking a job; I&apos;m seeking an opportunity to merge my technical
        skills with my artistic flair to build remarkable digital experiences.
        If you share my passion for technology, creativity, and the exploration
        of ideas, I&apos;d be absolutely delighted to connect with you.
        Here&apos;s to embracing the ever-unfolding chapters of our journey!
      </div>
      <div className="divider"></div>
      <div className="skill-heading">
        Skills <span className="tools">& Tools</span>
      </div>
      <div className="skill-container">{skillArray}</div>
    </div>
  );
};

export default About;
