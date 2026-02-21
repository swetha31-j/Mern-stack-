import { useState } from "react";
import "../styles/Projects.css";

function Projects() {

  const [show, setShow] = useState(false);

  const projects = [
    {
      name: "Notes App",
      description: "React notes management app"
    },
    {
      name: "Portfolio Website",
      description: "Personal website using React"
    },
    {
      name: "Todo App",
      description: "Task manager using JavaScript"
    }
  ];

  return (
    <section className="projects">

      <h2>Projects</h2>

      {projects.map((project, index) => (

        <div className="card" key={index}>

          <h3>{project.name}</h3>

          {show && <p>{project.description}</p>}

          <button onClick={() => setShow(!show)}>
            {show ? "Show Less" : "Show More"}
          </button>

        </div>

      ))}

    </section>
  );
}

export default Projects;