import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TodoComments from "./TodoComments";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: "20px auto",
      width: "90%",
      minHeight: "80vh",
      padding: 20
    }
  }
}));

export default function TodoPage(props) {
  const [todo, setTodo] = useState(props.history.location.state.todo);
  useEffect(() => {
    console.log(localStorage.getItem("current_project"));
    function getComments() {
      axios.post();
    }
  }, []);
  const classes = useStyles();
  console.log(props);

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <TodoComments
          todo={todo}
          project_id={localStorage.getItem("current_project")}
        />
      </Paper>
    </div>
  );
}
