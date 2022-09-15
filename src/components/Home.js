import React from "react";
import "./Home.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home_content">
          <h1>Hi, I am Rohit Gaikwad - A Computer Engineer</h1>
          <p>
            I have a Bachelors Degree in Computer Engineering From Mumbai
            University.
          </p>
          <p>I enjoy making Web Pages and learning new skills.</p>
          <p>I mostly work with ReactJs.</p>
          <p>
            I believe a good developer is always developing new skills,
            accepting challenges and seek feedback in order to grow
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
      <div className="about_section">
        <div>
          <h2>Qualification Details : </h2>
          <p>BE in Computer Engineering 2020</p>
          <p>Diploma in Computer Technology 2017</p>
        </div>
        <div>
          <h2>Internship And Certificates : </h2>
          <p>
            Completetd Full Stack Web Development Course From Newton School.
          </p>
          <p>
            Participated in Various Coding Competition Weekly Organised by
            Newton School
          </p>
        </div>
        <div>
          <h2>Tech Skills : </h2>
          <p>HTML, CSS, JAVASCRIPT, REACTJS.</p>
        </div>
      </div>
      <div className="footer_section">
        <div>
          <h3>
            Made with <FavoriteIcon className="favIcon" /> By Rohit Gaikwad
          </h3>
          <div className="footer_socialIcons">
            <a
              href="https://www.linkedin.com/in/rohit-gaikwad1396/"
              target="_blank"
            >
              <LinkedInIcon />
            </a>
            <a href="https://www.github.com/rohit1396" target="_blank">
              <GitHubIcon />
            </a>
            <a href="mailto:rohitgaikwad726@gmail.com" target="_blank">
              <MailIcon />
            </a>
            {/* <a>
              <FacebookIcon />
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
