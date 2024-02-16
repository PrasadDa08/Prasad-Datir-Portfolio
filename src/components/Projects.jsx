import ProjectList from "./ProjectList";
function Projects() {
  return (
    <>
      {/* <div className="project-clipart"></div> */}
      <section className="projects" id="projects">
        <h1>My Projects</h1>
        <h6>
          Browse through a selection of major projects I've developed below. For
          an extensive collection of my work, you can explore my GitHub
          repository. These projects showcase my skills and expertise in various
          domains, providing a glimpse into my passion for coding and
          problem-solving. Feel free to explore and delve into the details of
          each project to get a comprehensive view of my work.
        </h6>
        <ProjectList />
      </section>
    </>
  );
}

export default Projects;
