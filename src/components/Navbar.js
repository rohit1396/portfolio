import React from "react";
import "./Navbar.css";
// import WebOutlinedIcon from "@mui/icons-material/WebOutlined";
import WebIcon from "@mui/icons-material/Web";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <DashboardIcon className="navbar_logo" />
      </Link>
      <div className="navbar_links">
        <div>
          <Link to="/project">Projects</Link>
        </div>
        <div>
          <a href="https://www.github.com/rohit1396" target="_blank">
            Open Sources
          </a>
        </div>
        <div>
          <a href="mailto:rohitgaikwad726@gmail.com">Contact Me </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
