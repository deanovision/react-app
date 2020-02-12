import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TodoCard from "./TodoComments";

const useStyles = makeStyles(theme => ({
  root: {
    width: "80%",
    margin: "20px auto",
    flexDirection: "vertical"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    // flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
}));

export default function TodoListPanel({ todolist, history }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className={classes.root}>
      <ExpansionPanel
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>{todolist.name}</Typography>
          {/* <Typography className={classes.secondaryHeading}>
            I am an expansion panel
          </Typography> */}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{ display: "block", textAlign: "left" }}>
          {todolist.todos ? (
            todolist.todos.remaining.map(todo => {
              return (
                // <TodoCard
                //   key={todo.id}
                //   todo={todo}
                //   project_id={history.location.state.id}
                // onClick={() =>
                //   history.push({
                //     pathname: `/todos/${todo.id}`,
                //     state: { todo, history }
                //   })
                // }
                // />
                <div
                  style={{ display: "flex", alignItems: "center" }}
                  key={todo.id}
                >
                  <input type="checkbox" />
                  <p
                    onClick={() =>
                      history.push({
                        pathname: `/todos/${todo.id}`,
                        state: { todo }
                      })
                    }
                  >
                    {todo.content}
                  </p>
                </div>
              );
            })
          ) : (
            <Typography>No Todos</Typography>
          )}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
