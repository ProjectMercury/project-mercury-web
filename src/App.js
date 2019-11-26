import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import { Signup } from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import CreateForm from "./pages/CreateForm";
import QuestionList from "./components/QuestionList";
import PrivateRoute from "./components/PrivateRoute";
import PreviewPage from "./pages/PreviewPage";
import Respondent from "./pages/Respondent";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/create" component={CreateForm} />
      <PrivateRoute path="/questions" component={QuestionList} />
      <PrivateRoute path="/preview" component={PreviewPage} />
      {/* <Route exact path="/:id" component={Respondent} /> */}
    </div>
  );
}

export default App;
