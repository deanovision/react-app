import React from "react";
import SampleForm from "./SampleForm";
import SampleAppBar from "./SampleAppBar";
import Dashboard from "./Dashboard";
import Project from "./Project";
import { Route } from "react-router-dom";
import Auth from "./Auth.jsx";
import "../css/App.css";

function App() {
  return (
    <div className="App">
      <Route path="/" component={SampleAppBar} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/sample-ticket" exact component={SampleForm} />
      <Route path="/redirect" exact component={Auth} />
      <Route path="/project/:id" exact component={Project} />
    </div>
  );
}

export default App;
