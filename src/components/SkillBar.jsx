import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SkillBar(props) {
  return (
    <>
      <div className="icon-container">
        <FontAwesomeIcon icon={props.icon} color="#000" />
        <h2> {props.skill}</h2>
      </div>
      <div className="skill-shell">
        <div className="skill-fill" style={{ width: props.width }}></div>
      </div>
    </>
  );
}

export default SkillBar;
