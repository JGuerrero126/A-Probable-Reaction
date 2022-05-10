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
      <div className="custom-container">
        <a
          className="repolink"
          href="https://github.com/JGuerrero126/The_CYBER_Zone"
        >
          GitHub Repository
        </a>
        <a href="https://boiling-mountain-75140.herokuapp.com/">
          <img id="TCZ" src={require("../../Images/ScreenshotTCZ.png")} />
          <div className="caption">
            THE CYBER ZONE
            <br />
            FULL STACK
          </div>
        </a>
      </div>
      <div className="custom-container">
        <a
          className="repolink"
          href="https://github.com/JGuerrero126/Day-Planner"
        >
          GitHub Repository
        </a>
        <a href="https://jguerrero126.github.io/Day-Planner/">
          <img id="DP" src={require("../../Images/ScreenshotDP.png")} />
          <div className="caption">
            Day Planner
            <br />
            HTML/JS
          </div>
        </a>
      </div>
      <div className="custom-container">
        <a
          className="repolink"
          href="https://github.com/JGuerrero126/Day-Planner"
        >
          GitHub Repository
        </a>
        <a href="https://jguerrero126.github.io/Day-Planner/">
          <img id="DP" src={require("../../Images/ScreenshotDP.png")} />
          <div className="caption">
            Day Planner
            <br />
            HTML/JS
          </div>
        </a>
      </div>
    </div>
  );
}
