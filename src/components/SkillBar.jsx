function SkillBar(props) {
  return (
    <div className="skill">
      <div className="skill-1">
        <div>
          <img src={props.icon} />
          <h2> {props.skill}</h2>
        </div>
        <div className="skill-shell">
          <div className="skill-fill" style={{ width: props.width }}></div>
        </div>
      </div>
      <div className="skill-2"></div>
    </div>
  );
}

export default SkillBar;
