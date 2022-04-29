import React from "react";

export default function Work() {
  return (
    <div className="work">
      <h1>Some Of My Work!</h1>
      <div className="custom-container">
        <a
          className="repolink"
          href="https://github.com/JGuerrero126/All-Your-Music-Needs"
        >
          GitHub Repository
        </a>
        <a href="https://jguerrero126.github.io/All-Your-Music-Needs/">
          <img id="AYMN" src={require("../../Images/ScreenshotAYMN.jpeg")} />
          <div className="caption">
            All Your Music Needs
            <br />
            HTML/CSS/JS
          </div>
        </a>
      </div>
      <div className="custom-container">
        <a
          className="repolink"
          href="https://github.com/JGuerrero126/Code-Quiz"
        >
          GitHub Repository
        </a>
        <a href="https://jguerrero126.github.io/Code-Quiz/">
          <img id="CQ" src={require("../../Images/ScreenshotCQ.png")} />
          <div className="caption">
            Coding Quiz
            <br />
            HTML/CSS/JS
          </div>
        </a>
      </div>
      <div className="custom-container">
        <a
          className="repolink"
          href="https://github.com/EthanP94/The-Recipe-Box"
        >
          GitHub Repository
        </a>
        <a href="https://immense-cliffs-14605.herokuapp.com/">
          <img id="PG" src={require("../../Images/ScreenshotTRB.png")} />
          <div className="caption">
            The Recipe Box
            <br />
            FULL STACK
          </div>
        </a>
      </div>
      <div className="custom-container">
        <a
          className="repolink"
          href="https://github.com/JGuerrero126/Weather-Dashboard"
        >
          GitHub Repository
        </a>
        <a href="https://github.com/JGuerrero126/Weather-Dashboard">
          <img id="WD" src={require("../../Images/ScreenshotWD.png")} />
          <div className="caption">
            Weather Dashboard
            <br />
            HTML/CSS/JS
          </div>
        </a>
      </div>
    </div>
  );
}
