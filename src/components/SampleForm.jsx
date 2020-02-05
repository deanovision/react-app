import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 600
    }
  },
  spacing: {
    marginTop: 40
  }
}));

function submitHandler(e) {
  e.preventDefault();
  console.log("submitted");
}

export default function SampleForm() {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <div className={classes.spacing}>
        <form
          onSubmit={submitHandler}
          className={classes.root}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="Hello World"
              variant="outlined"
            />
            <TextField
              disabled
              id="outlined-disabled"
              label="Disabled"
              defaultValue="Hello World"
              variant="outlined"
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
            />
            <TextField
              id="outlined-read-only-input"
              label="Read Only"
              defaultValue="Hello World"
              InputProps={{
                readOnly: true
              }}
              variant="outlined"
            />
            <TextField
              id="outlined-number"
              label="Number"
              type="number"
              InputLabelProps={{
                shrink: true
              }}
              variant="outlined"
            />
            <TextField
              id="outlined-search"
              label="Search field"
              type="search"
              variant="outlined"
            />
            <TextField
              id="outlined-helperText"
              label="Helper text"
              defaultValue="Default Value"
              variant="outlined"
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
