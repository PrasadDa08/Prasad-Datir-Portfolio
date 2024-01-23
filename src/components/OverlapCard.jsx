import { useState } from "react";

function OverlapCard(props) {
  return (
    <div>
      {console.log(props.display)}
      <div
        className="project-card"
        style={{ display: props.display ? "block" : "none" }}
      >
        <img src="src/assets/images/natours-1.png" />
        <div className="buttons">
          <button>Github</button>
          <button>Live Demo</button>
        </div>
      </div>
    </div>
  );
}

export default OverlapCard;
