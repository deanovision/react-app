import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import ProjectCard from "./ProjectCard";
import axios from "axios";
import "../css/loader.css";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const token = localStorage.getItem("bc_access_token");
  const company_id = localStorage.getItem("company_id");
  const profile_id = localStorage.getItem("profile_id");
  useEffect(() => {
    axios
      .post("http://localhost:5000/get_projects", {
        token: token,
        company_id: company_id,
        profile_id: profile_id
      })
      .then(res => {
        console.log(res.data);
        setProjects(res.data);
      })
      .catch(err => console.log(err));
  }, []);
  const searchFilter = () => {
    let filteredArr = [];
    projects.map(project => {
      return project.name.toLowerCase().includes(searchTerm.toLowerCase())
        ? filteredArr.push(project)
        : null;
    });
    setFilteredProjects(filteredArr);
  };
  const onChangeHandler = e => {
    setSearchTerm(e.target.value);
    searchFilter();
    console.log(searchTerm);
  };
  const getProject = project_id => {
    axios
      .post("http://localhost:5000/get_project", {
        token: token,
        company_id: company_id,
        profile_id: profile_id,
        project_id: project_id
      })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };
  return (
    <div>
      <input name="search" onChange={onChangeHandler} type="text" />
      {/* {filteredProjects.length > 0 ? (
        filteredProjects.map(project => { */}
      {projects.length > 0 ? (
        projects.map(project => {
          return (
            <p
              onClick={() =>
                (window.location.href = `http://${window.location.host}/project/${project.id}`)
              }
              key={project.id}
            >
              {project.name}
            </p>
          );
        })
      ) : (
        <>
          <h2>Loading Projects</h2>
          <div className="center-container">
            <Loader
              className="vertical-center"
              type="Puff"
              color="#3f51b5"
              height={150}
              width={150}
              //timeout={6000} //6 secs
            />
          </div>
        </>
      )}
    </div>
  );
};
export default ProjectList;
