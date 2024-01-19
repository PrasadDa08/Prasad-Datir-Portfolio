import SkillBar from "./SkillBar";
import {
  faCss3,
  faHtml5,
  faJsSquare,
  faPython,
  faBootstrap,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function About() {
  return (
    <div className="skill-container">
      <h1>My-Skills</h1>
      <div className="skill">
        <div className="skill-1">
          <SkillBar skill="HTML" width="50%" icon={faHtml5} />
          <SkillBar skill="CSS" width="50%" icon={faCss3} />
          <SkillBar skill="JavaScript" width="50%" icon={faJsSquare} />
          <SkillBar skill="Python" width="50%" icon={faPython} />
        </div>
        <div className="skill-2">
          <div className="mern-skill">
            <img src="src/assets/images/icons/mongodb-icon.svg" />
          </div>
          <div className="mern-skill">
            <img src="src/assets/images/icons/express.svg" />
          </div>
          <div className="mern-skill">
            <img src="src/assets/images/icons/react-original-wordmark.svg" />
          </div>
          <div className="mern-skill">
            <img src="src/assets/images/icons/node-js.svg" />
          </div>
        </div>
      </div>
      <div className="tools">
        <FontAwesomeIcon icon={faBootstrap} color="#000" />
        <FontAwesomeIcon icon={faGitAlt} color="#000" />
        <img
          src="src/assets/images/icons/vs-icon.png"
          style={{ width: "3vw" }}
        />
        <img
          src="src/assets/images/icons/netlify-dark.png"
          style={{ width: "3vw" }}
        />
      </div>
    </div>
  );
}

export default About;
