import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "100%"
    }
  },
  spacing: {
    marginTop: 40
  }
}));

export default function SampleForm({ handleClose, project_id, todo, url }) {
  const [input, setInput] = useState({});
  const classes = useStyles();
  console.log(url);
  const onChangeHandler = e => {
    console.log(input);
    setInput({
      ...input,
      [e.target
        .name]: `<strong>${e.target.name}</strong><br><br> ${e.target.value}`
    });
  };
  const onSubmitHandler = e => {
    const token = localStorage.getItem("bc_access_token");
    const company_id = localStorage.getItem("company_id");

    e.preventDefault();
    console.log(input);
    let arr = [];
    for (const property in input) {
      console.log(`${input[property]}`);
      arr.push(`<br>${input[property]}`);
    }
    let formSubmission = arr.join("<br>");
    console.log(formSubmission);
    axios
      .post(`${process.env.REACT_APP_API_URL}/add_comment`, {
        token: token,
        company_id: company_id,
        project_id: project_id,
        todo_id: todo.id,
        url: `${url}/comments`,
        data: formSubmission
      })
      .then(res => console.log(res.data))
      .catch(err => console.log(err.message));
    handleClose();
  };

  return (
    <Container maxWidth="md">
      <div className={classes.spacing}>
        <form
          onSubmit={onSubmitHandler}
          className={classes.root}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="Instruction"
              variant="outlined"
              name="Instructions"
              onChange={onChangeHandler}
            />
            <TextField
              id="outlined-required"
              label="Required"
              defaultValue="Page URL"
              variant="outlined"
              name="Page URL"
              onChange={onChangeHandler}
            />
            <TextField
              id="outlined-required"
              label="Required"
              defaultValue="Old Content"
              variant="outlined"
              name="Old Content"
              onChange={onChangeHandler}
            />
            <TextField
              id="outlined-required"
              label="Required"
              defaultValue="New Content"
              variant="outlined"
              name="New Content"
              onChange={onChangeHandler}
            />
            <br />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </Container>
  );
}
