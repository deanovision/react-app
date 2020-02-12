import React from "react";
import SampleForm from "./SampleForm";
import SampleAppBar from "./SampleAppBar";
import Dashboard from "./Dashboard";
import Project from "./Project";
import TodoPage from "./TodoPage";
import { Route } from "react-router-dom";
import Auth from "./Auth.jsx";
import "../css/App.css";
import SignIn from "./SignIn";

function App() {
  return (
    <div className="App">
      <Route
        path="/"
        render={props => {
          return <SampleAppBar {...props} />;
        }}
      />
      <Route path="/" exact component={SignIn} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/sample-ticket" exact component={SampleForm} />
      <Route path="/redirect" exact component={Auth} />
      <Route path="/project/:id" exact component={Project} />
      <Route
        path="/todos/:id"
        exact
        render={props => {
          return <TodoPage {...props} />;
        }}
      />
    </div>
  );
}

export default App;
