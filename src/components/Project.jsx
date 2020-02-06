import React, { useEffect, useState } from "react";
import axios from "axios";

const Project = ({ match }) => {
  const token = localStorage.getItem("bc_access_token");
  const company_id = localStorage.getItem("company_id");
  const profile_id = localStorage.getItem("profile_id");
  const [todolists, setTodolists] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:5000/get_project", {
        token: token,
        company_id: company_id,
        profile_id: profile_id,
        project_id: match.params.id
      })
      .then(res => {
        console.log(res.data);
        setTodolists(res.data);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div>
      <h2>Project {match.params.id}</h2>
      {todolists
        ? todolists.map(list => {
            return <div key={list.id}>{list.name}</div>;
          })
        : null}
    </div>
  );
};
export default Project;
