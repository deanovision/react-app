import React, { useEffect, useState } from "react";
import ProjectList from "./ProjectList";
import MyTodos from "./MyTodos";
import axios from "axios";

const Dashboard = ({ history }) => {
  //This component will display the logged in users assigned todos
  // and other pertinent information
  const [profile, setProfile] = useState({});
  useEffect(() => {
    console.log("Dashboard useEffect");
    axios
      .post(`${process.env.REACT_APP_API_URL}/get_profile`, {
        company_id: localStorage.getItem("company_id"),
        token: localStorage.getItem("bc_access_token")
      })
      .then(res => {
        console.log(res.data);
        setProfile(res.data.profile);
        localStorage.setItem("profile_id", res.data.profile.id);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div>
      {profile.assigned_todos ? (
        <MyTodos url={profile.assigned_todos.url} />
      ) : (
        <MyTodos />
      )}
    </div>
  );
};
export default Dashboard;
