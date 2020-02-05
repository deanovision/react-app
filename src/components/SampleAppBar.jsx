import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const { REACT_APP_BC_CLIENT_ID, REACT_APP_REDIRECT_URI } = process.env;
const authURL = `https://launchpad.37signals.com/authorization/new?type=web_server&client_id=${REACT_APP_BC_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URI}`;
function startAuth() {
  window.location.href = authURL;
}

export default function SampleAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Sample Ticket
          </Typography>
          <Button color="inherit" onClick={startAuth}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
