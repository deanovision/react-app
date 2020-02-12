import React, { useEffect, useState } from "react";
import axios from "axios";
export default function MyTodos({ url }) {
  // This component displays the logged in users
  // assigned todos
  const [assignedTodos, setAssignedTodos] = useState([]);
  const token = localStorage.getItem("bc_access_token");
  useEffect(() => {
    console.log("My Todos useEffect");
    axios
      .post(`${process.env.REACT_APP_API_URL}/my_todos`, {
        url: url,
        token: token
      })
      .then(res => {
        console.log(res.data);
        setAssignedTodos(res.data);
      })
      .catch(err => console.log(err.message));
  }, [url]);
  return (
    <div>
      <h2>My Todos</h2>
    </div>
  );
}
