import React, { useState } from "react";
import Carousal from "./Carousal";

function ProjectList() {
  const projects = [
    {
      name: "naTours",
      img: "src/assets/images/natours-1.png",
      git: "https://github.com/PrasadDa08/naTours_web",
      demo: "https://natours-web-e50y.onrender.com/",
      description:
        "This is a Tour Booking website. Users can book different tours, Check the locations, submit reviews and meny more. Admin and Lead tour guides can create new tours and manage all tours.  ",
    },
    {
      name: "project2",
      img: "src/assets/images/natours-1.png",
      git: "",
      demo: "",
      description: "Project 2 description.",
    },
    {
      name: "project3",
      img: "src/assets/images/natours-1.png",
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
        <div className="overlay">
          <div className="overlay-content" onClick={closeOverlay}>
            <Carousal img={selectedProject.img} />
            <h2>{selectedProject.name}</h2>
            <p>{selectedProject.description}</p>
          </div>
          <div className="project-buttons">
            <button>Github</button>
            <button>Live Demo</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectList;
