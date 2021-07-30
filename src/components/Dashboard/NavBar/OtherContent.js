import React from "react";
import Meets from "../Meet/Meets";
import Courses from "../Courses/Courses";

import "./NavBar.css";
import Modal from "../Modal/Modal";
import Schedule from "../Schedule/Schedule";
import { Route, Switch } from "react-router";

const OtherContent = (navRes, setNavRes, handleNavRes, handleCloseNav) => {
  return (
    <div className="other_page" onClick={handleCloseNav}>
      <Switch>
        <Route path="/schedule">
          <Schedule />
        </Route>
        <Route path="/meet">
          <Meets />
        </Route>

        <Route path="/courses" exact>
          <Courses />
        </Route>
      </Switch>
    </div>
  );
};

export default OtherContent;
