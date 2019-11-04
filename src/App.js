import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import Dashboard from './pages/Dashboard';
import CreateForm from './pages/CreateForm';
import QuestionList from './components/QuestionList'

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/create" component={CreateForm} />
      <Route path="/questions" component={QuestionList} />
    </div>
  );
}

export default App;
