import React, { useEffect, useState } from "react";
import TodoListPanel from "./TodoListPanel";
import axios from "axios";

const TodoList = ({ match, id, name, todolist, history }) => {
  const token = localStorage.getItem("bc_access_token");
  const company_id = localStorage.getItem("company_id");
  const [todolists, setTodolists] = useState([]);

  useEffect(() => {
    console.log("Todo useEffect");
    axios
      .post(`${process.env.REACT_APP_API_URL}/get_todolist`, {
        token: token,
        company_id: company_id,
        project_id: match.params.id,
        todolist_id: id
      })
      .then(res => {
        console.log(res.data);
        setTodolists(res.data);
      })
      .catch(err => console.log(err));
  }, [company_id, token, match.params.id, id]);
  return (
    <div>
      <TodoListPanel todolist={todolists} history={history} />
      {/* <h2>Todo {name}</h2> */}
      {/* {todolists
        ? todolists.map(list => {
            return <div key={list.id}>{list.name}</div>;
          })
        : null} */}
    </div>
  );
};
export default TodoList;
