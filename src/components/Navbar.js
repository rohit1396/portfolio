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
  // console.log(showMenu);
  return (
    <div className="navbar">
      <Link className="navbar_logo" to="/">
        <h1>
          R<span>G</span>
        </h1>
        {/* <DashboardIcon className="navbar_logo" /> */}
      </Link>
      <div className={showMenu ? "navbar_links active" : "navbar_links"}>
        <div onClick={handleClick}>
          <Link to="/">Home</Link>
        </div>
        <div onClick={handleClick}>
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
      <div className="hamburger_menu" onClick={handleClick}>
        {showMenu ? (
          <CloseIcon className="close" />
        ) : (
          <MenuIcon className="menu" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
