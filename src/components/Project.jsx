import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import axios from "axios";

const Project = ({ match, history }) => {
  const token = localStorage.getItem("bc_access_token");
  const company_id = localStorage.getItem("company_id");
  const profile_id = localStorage.getItem("profile_id");
  const [todolists, setTodolists] = useState([]);

  useEffect(() => {
    // console.log("state", history.location.state);
    console.log("Project useEffect");
    axios
      .post(`${process.env.REACT_APP_API_URL}/get_project`, {
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
  }, [company_id, profile_id, token, match.params.id]);
  return (
    <div>
      <p>
        <strong>{history.location.state.name}</strong>
      </p>
      {todolists
        ? todolists.map(list => {
            return (
              <TodoList
                key={list.id}
                id={list.id}
                name={list.name}
                match={match}
                todolist={list}
                history={history}
              />
            );
          })
        : null}
    </div>
  );
};
export default Project;
