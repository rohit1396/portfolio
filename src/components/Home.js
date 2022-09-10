import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home_content">
        <h1>Hi, I am Rohit Gaikwad - A Computer Engineer</h1>
        <p>
          I have a Bachelors Degree in Computer Engineering From Mumbai
          University.
        </p>
        <p>I enjoy making Web Pages and learning new skills.</p>
        <p>
          I believe a good developer is always developing new skills, accept
          challenges and seek feedback in order to grow
        </p>
        <p>
          My aim is to get placed in a good IT firm with some decent package.
        </p>
      </div>
      <img
        className="home_logo"
        src="..\images\developer_med.gif"
        alt="home_logo"
      />
    </div>
  );
};

export default Home;
