import React from "react";

export default function Contact() {
  return (
    <div className="contact-me">
      <h1>Contact Me Here!</h1>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/jerryguerrero126/"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a href="mailto:JerryGDev126@gmail.com" target="_blank">
            Email
          </a>
        </li>
        <li>
          <a href="https://github.com/JGuerrero126" target="_blank">
            Github
          </a>
        </li>
        <li>
          <a href="https://twitter.com/Metallica" target="_blank">
            Twitter
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
            Spotify
          </a>
        </li>
        <li>
          <a
            href={require("../../Images/JerryResume5102022.pdf")}
            download="Resume"
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}
