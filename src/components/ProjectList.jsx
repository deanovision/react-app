import React, { useEffect, useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import "../css/loader.css";

const ProjectList = ({ history }) => {
  const [projects, setProjects] = useState([]);
  const token = localStorage.getItem("bc_access_token");
  const company_id = localStorage.getItem("company_id");
  const profile_id = localStorage.getItem("profile_id");
  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/get_projects`, {
        token: token,
        company_id: company_id,
        profile_id: profile_id
      })
      .then(res => {
        console.log(res.data);
        setProjects(res.data);
      })
      .catch(err => console.log(err));
  }, [token, company_id, profile_id]);

  const inputChangeHandler = (event, values) => {
    let url;
    console.log(event, values);
    const projectId = projects.find(project => {
      url = `/project/${project.id}`;
      return project.name === values;
    });
    return projectId ? history.push({ pathname: url, state: projectId }) : null;
  };

  return (
    <div>
      <div className="center-container">
        <Autocomplete
          id="combo-box-demo"
          options={projects}
          getOptionLabel={option => option.name}
          onInputChange={inputChangeHandler}
          style={{ width: 300, margin: "0 auto" }}
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
