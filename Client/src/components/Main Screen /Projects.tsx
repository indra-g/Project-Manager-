import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Cards from "../UI/Cards/Cards";
import TaskBar from "../UI/TaskBar/TaskBar";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";
import axios from "axios";
import { Box } from "@mui/system";
import { CircularProgress } from "@mui/material";
// const projectDetails = [
//   {
//     projectName: "Project Name",
//     projectDescription:
//       "Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua.",
//     deadline: "12/12/2023",
//   },
//   {
//     projectName: "Project Name",
//     projectDescription:
//       "Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua.",
//     deadline: "12/12/2023",
//   },
// ];
const Projects = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [projects, setprojects] = useState<any>([]);
  useEffect(() => {
    axios
      .get("/api/getProjects")
      .then((res) => {
        setprojects((obj: any) => [...obj, ...res.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const startAProject = () => {
    navigate("/startAProject");
  };
  const logOut = () => {
    navigate("/");
    dispatch(authActions.logout());
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
      {projects.length !== 0 ? (
        <div className="mt-8 ml-40">
          {projects.map(
            (project: {
              projectName: string;
              projectDescription: string;
              projectDeadline: string;
            }) => (
              <Cards
                projectName={project.projectName}
                projectDescription={project.projectDescription}
                projectDeadline={project.projectDeadline}
              />
            )
          )}
        </div>
      ) : (
        <div className="w-screen h-80 flex justify-center items-center">
          <CircularProgress />
        </div>
      )}
    </>
  );
};
export default Projects;
