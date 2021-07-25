import React, { useState } from "react";
import Navbar from "./NavBar/NavBar";
import OtherContent from "./NavBar/OtherContent";
import TopNar from "./NavBar/TopNar";
import "./NavBar/NavBar.css";

const Dashboard = () => {
  const [navRes, setNavRes] = useState(false);
  const handleNavRes = () => {
    setNavRes(!navRes);
  };
  const handleCloseNav = () => {
    setNavRes(false);
  };

  return (
    <div className="dashboard">
      <TopNar navRes={navRes} setNavRes={setNavRes} />

      
      <div className="sideNar">
        <Navbar navRes={navRes} setNavRes={setNavRes} />
      </div>

      <OtherContent navRes={navRes} setNavRes={setNavRes} />
    </div>
  );
};

export default Dashboard;
