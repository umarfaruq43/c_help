import React, { useState } from "react";
import Navbar from "./NavBar/NavBar";
import OtherContent from "./NavBar/OtherContent";
import TopNar from "./NavBar/TopNar";
import "./NavBar/NavBar.css";
import { HashRouter } from "react-router-dom";

const Dashboard = () => {
  const [navRes, setNavRes] = useState(false);
  const handleNavRes = () => {
    setNavRes(!navRes);
  };
  const handleCloseNav = () => {
    setNavRes(false);
  };

  return (
    <HashRouter>
      <div className="dashboard">
        <TopNar navRes={navRes} setNavRes={setNavRes} />

        <div className="sideNar">
          <Navbar navRes={navRes} setNavRes={setNavRes} />
        </div>

        <OtherContent navRes={navRes} setNavRes={setNavRes} />
      </div>
    </HashRouter>
  );
};

export default Dashboard;
