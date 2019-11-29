import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { getDetails } from "./redux/actions/userActions";
import store from "./redux/store";

import "./App.css";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import { Signup } from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import CreateForm from "./pages/CreateForm";
import QuestionList from "./components/QuestionList";
import PrivateRoute from "./components/PrivateRoute";
import PreviewPage from "./pages/PreviewPage";
import Respondent from "./pages/Respondent";
import MyForms from "./pages/MyForms";
import FormDetails from "./pages/FormDetails";
import Loader from "./components/Loader";

const token = localStorage.getItem("token");
if (token) {
  store.dispatch(getDetails());
}

function App({ getDetails, loading }) {
  return loading ? (
    <Loader />
  ) : (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/forms" component={MyForms} />
      <PrivateRoute path="/forms/:id" component={FormDetails} />
      <PrivateRoute path="/create" component={CreateForm} />
      <PrivateRoute path="/questions" component={QuestionList} />
      <PrivateRoute path="/preview" component={PreviewPage} />
      <Route exact path="/respondent/:id" component={Respondent} />
    </div>
  );
}

export default connect(state => state.user, { getDetails })(App);
