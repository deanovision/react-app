import React, { useEffect, useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import "../css/loader.css";

const ProjectList = ({ history }) => {
  //This component renders an searchable input and dropdown list
  // of all available projects
  const [projects, setProjects] = useState([]);
  const token = localStorage.getItem("bc_access_token");
  const company_id = localStorage.getItem("company_id");
  const profile_id = localStorage.getItem("profile_id");
  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/get_projects`, {
        token: token,
        company_id: company_id
      })
      .then(res => {
        console.log(res.data);
        setProjects(res.data);
      })
      .catch(err => console.log(err));
  }, [token, company_id, profile_id]);

  const inputChangeHandler = (event, values) => {
    function setProject(path, proj) {
      localStorage.setItem("current_project", proj.id);
      return history.push({ pathname: path, state: proj });
    }
    let url;
    console.log(event, values);
    const project = projects.find(project => {
      url = `/project/${project.id}`;
      return project.name === values;
    });
    return project ? setProject(url, project) : null;
  };

  return (
    <div>
      <div className="center-container">
        <Autocomplete
          id="combo-box-demo"
          options={projects}
          getOptionLabel={option => option.name}
          onInputChange={inputChangeHandler}
          style={{
            width: 300,
            margin: "0 auto",
            background: "white",
            borderRadius: "12px"
          }}
          renderInput={params => (
            <TextField
              {...params}
              label="Select Project"
              variant="outlined"
              fullWidth
            />
          )}
        />
      </div>
    </div>
  );
};
export default ProjectList;
