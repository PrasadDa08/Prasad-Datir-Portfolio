import { useState } from "react";
import ProjectCart from "./ProjectCart";
import OverlapCard from "./OverlapCard";

function Projects() {
  const [display, SetDisplay] = useState(false);

  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="card-box">
        <ProjectCart
          display={display}
          setDisplay={SetDisplay}
          url="src/assets/images/natours-1.png"
        />
        <ProjectCart
          display={display}
          setDisplay={SetDisplay}
          url="src/assets/images/natours-2.png"
        />
        <ProjectCart />
        <ProjectCart />
        <ProjectCart />
        <ProjectCart />
      </div>
      <OverlapCard
        display={display}
        setDisplay={SetDisplay}
        url="src/assets/images/natours-1.png"
      />
    </div>
  );
}

export default Projects;
