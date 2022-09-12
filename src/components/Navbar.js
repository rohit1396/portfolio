import React, { useState } from "react";
import "./Navbar.css";
// import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="navbar">
      <Link className="navbar_logo" to="/">
        <h1>
          R<span>G</span>
        </h1>
        {/* <DashboardIcon className="navbar_logo" /> */}
      </Link>
      <div className="navbar_links" id={showMenu ? "hidden" : ""}>
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
      <div onClick={handleClick}>
        {showMenu ? (
          <MenuIcon className="menu" />
        ) : (
          <CloseIcon className="close" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
