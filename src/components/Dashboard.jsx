import React, { useEffect } from "react";
import ProjectList from "./ProjectList";
import axios from "axios";

const Dashboard = () => {
  useEffect(() => {
    console.log("Dashboard useEffect");
    axios
      .post(`http://localhost:5000/get_profile`, {
        company_id: localStorage.getItem("company_id"),
        token: localStorage.getItem("bc_access_token")
      })
      .then(res => {
        console.log(res.data);
        localStorage.setItem("profile_id", res.data.id);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div>
      <h2>Dashboard</h2>
      {localStorage.getItem("bc_access_token") ? (
        <p>Token Exists</p>
      ) : (
        <p>No Token Found</p>
      )}
      <ProjectList />
    </div>
  );
};
export default Dashboard;
