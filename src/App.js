import React, { useState } from "react";

import LandingPage from "./components/LandingPage/LandingPage/LandingPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ForgetPass from "./components/userAuth/ForgetPass";
import SignUp from "./components/userAuth/SignUp";
import Login from "./components/userAuth/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import NullPage from "./components/LandingPage/Nullpage/NullPage";
const App = () => {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/register" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/forgetPassword" component={ForgetPass} />
        <Route exact path="/Dashboard" component={Dashboard} />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="" component={NullPage} />
      </Switch>
    </Router>
  );
};

export default App;
