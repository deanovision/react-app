import React, { useEffect } from "react";
import ProjectList from "./ProjectList";
import axios from "axios";

const Dashboard = ({ history }) => {
  useEffect(() => {
    console.log("Dashboard useEffect");
    axios
      .post(`${process.env.REACT_APP_API_URL}/get_profile`, {
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
      {/* <h2>Dashboard</h2>
      {localStorage.getItem("bc_access_token") ? (
        <p>Token Exists</p>
      ) : (
        <p>No Token Found</p>
      )} */}
      <ProjectList history={history} />
    </div>
  );
};
export default Dashboard;
