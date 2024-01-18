import SkillBar from "./SkillBar";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

function About() {
  return (
    <div className="container">
      <h1>Skills</h1>
      <SkillBar skill="HTML" width="50%" icon={faHtml5} />
      <SkillBar skill="CSS" width="50%" icon={faCss3} />
      <SkillBar skill="JavaScript" width="50%" icon={faJsSquare} />
      <SkillBar skill="Python" width="50%" icon={faPython} />
    </div>
  );
}

export default About;
