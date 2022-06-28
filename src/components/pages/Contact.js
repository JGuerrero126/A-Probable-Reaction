import React from "react";
import { Text, Link, Box } from "@chakra-ui/react";

export default function Contact() {
  const boxStyle = {
    fontFamily: "Gentium Plus",
    fontSize: "3rem",
    marginTop: "1rem",
    marginLeft: "1rem",
    position: "absolute",
    zIndex: "2",
    textAlign: "left",
    width: "100%",
  };

  const linkStyle = {
    fontFamily: "Gentium Plus",
    fontSize: "3rem",
    color: "green",
    textDecoration: "none",
    transition: "0.5s",
  };

  const textStyle = {
    marginTop: "2rem",
    textAlign: "left",
    marginLeft: "1rem",
  };

  return (
    <div className="contact-me">
      <Box sx={boxStyle}>
        <Text mb="5rem" color="white">
          Contact Me Here!
        </Text>

        <Text sx={textStyle}>
          <Link
            className="contactLinks"
            sx={linkStyle}
            isExternal
            href="https://www.linkedin.com/in/jerryguerrero126/"
          >
            LinkedIn
          </Link>
        </Text>
        <Text sx={textStyle}>
          <Link
            className="contactLinks"
            sx={linkStyle}
            isExternal
            href="mailto:JerryGDev126@gmail.com"
          >
            Email
          </Link>
        </Text>

        <Text sx={textStyle}>
          <Link
            className="contactLinks"
            sx={linkStyle}
            isExternal
            href="https://github.com/JGuerrero126"
          >
            Github
          </Link>
        </Text>
        <Text sx={textStyle}>
          <Link
            className="contactLinks"
            sx={linkStyle}
            isExternal
            href="https://twitter.com/Metallica"
          >
            Twitter
          </Link>
        </Text>
        <Text sx={textStyle}>
          <Link
            className="contactLinks"
            sx={linkStyle}
            isExternal
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          >
            Spotify
          </Link>
        </Text>
        <Text sx={textStyle}>
          <Link
            className="contactLinks"
            sx={linkStyle}
            isExternal
            href={require("../../Images/JerryResumeFinal.docx")}
            download="Resume"
          >
            Resume
          </Link>
        </Text>
      </Box>
      <Box filter="auto" blur="3px" position="relative">
        <video
          loop
          autoPlay
          src={require("../../Images/WateringPlant.mp4")}
          type="video/mp4"
          style={{
            height: "100vh",
            width: "100vw",
            objectFit: "cover",
            pointerEvents: "none",
          }}
        ></video>
      </Box>
    </div>
  );
}
