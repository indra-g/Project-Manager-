import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Cards from "../UI/Cards/Cards";
import TaskBar from "../UI/TaskBar/TaskBar";
const projectDetails = [
  {
    projectName: "Project Name",
    projectDescription:
      "Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua.",
    deadline: "12/12/2023",
  },
  {
    projectName: "Project Name",
    projectDescription:
      "Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua.",
    deadline: "12/12/2023",
  },
];
const Projects = () => {
  const navigate = useNavigate();
  const startAProject = () => {
    navigate("/startAProject");
  };
  const logOut = () => {
    navigate("/");
  };
  return (
    <>
      <Navbar
        button1="Start a New Project"
        button2="Log Out"
        onClick1={startAProject}
        onClick2={logOut}
      />
      <TaskBar text="Your Projects" />;
      <div className="mt-8 ml-40">
        {projectDetails.map(
          (project: {
            projectName: string;
            projectDescription: string;
            deadline: string;
          }) => (
            <Cards
              projectName={project.projectName}
              projectDescription={project.projectDescription}
              deadline={project.deadline}
            />
          )
        )}
      </div>
    </>
  );
};
export default Projects;
