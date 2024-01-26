import ProjectList from "./ProjectList";
function Projects() {
  return (
    <>
      <div className="project-clipart"></div>
      <div className="projects">
        <h1>My Projects</h1>
        <h6>
          Given below are the major projects which I have created, for seeing
          more projects visit my github.
        </h6>
        <ProjectList />
      </div>
    </>
  );
}

export default Projects;
