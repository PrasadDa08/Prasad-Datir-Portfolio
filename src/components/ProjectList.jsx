import React, { useState } from "react";
import Carousal from "./Carousal";

function ProjectList() {
  const projects = [
    {
      name: "natours",
      img: "src/assets/images/natours-1.png",
      git: "",
      demo: "",
      description: "Natours project description.",
    },
    {
      name: "project2",
      img: "src/assets/images/project2.png",
      git: "",
      demo: "",
      description: "Project 2 description.",
    },
    {
      name: "project3",
      img: "src/assets/images/project3.png",
      git: "",
      demo: "",
      description: "Project 3 description.",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const openOverlay = (project) => {
    setSelectedProject(project);
  };

  const closeOverlay = () => {
    setSelectedProject(null);
  };

  return (
    <div>
      <div className="project-list">
        {projects.map((project, index) => (
          <div
            key={index}
            className="main-card"
            onClick={() => openOverlay(project)}
          >
            <div className="card-overview">
              <img src={project.img} alt={project.name} />
              <h2>{project.name}</h2>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="overlay" onClick={closeOverlay}>
          <div className="overlay-content">
            <Carousal img={selectedProject.img} />
            <h2>{selectedProject.name}</h2>
            <p>Desp</p>
            <div className="project-buttons">
              <button>Github</button>
              <button>Live Demo</button>
            </div>
            {/* <button onClick={closeOverlay}>Close</button> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectList;
