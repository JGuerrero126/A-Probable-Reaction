import React from "react";
import {
  Text,
  Link,
  Box,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Contact() {
  const { colorMode, toggleColorMode } = useColorMode();
  const fontSrc = useColorModeValue("Bellefair", "Syne Mono");
  const videoSrc = useColorModeValue(
    require("../../Images/WateringPlant.mp4"),
    require("../../Images/flowerInRain.mp4")
  );
  const textColor = useColorModeValue("green", "crimson");
  const linkHover = useColorModeValue(
    {
      color: "greenyellow",
      textDecoration: "underline",
      fontSize: "115%",
    },
    {
      color: "red",
      textDecoration: "underline",
      fontSize: "115%",
    }
  );

  const boxStyle = {
    fontFamily: fontSrc,
    fontSize: "3rem",
    marginTop: "1rem",
    position: "absolute",
    zIndex: "2",
    textAlign: "left",
    width: "100%",
  };

  const linkStyle = {
    fontFamily: fontSrc,
    fontSize: "3rem",
    color: textColor,
    textDecoration: "none",
    transition: "0.5s",
    _hover: linkHover,
  };

  const textStyle = {
    marginTop: "2rem",
    textAlign: "left",
    marginLeft: "1rem",
  };

  return (
    <div className="contact">
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
            href="https://twitter.com/DevJerry126"
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
          muted
          src={videoSrc}
          type="video/mp4"
          style={
            colorMode === "light"
              ? {
                  minWidth: "100vw",
                  height: "100vh",
                  objectFit: "cover",
                  pointerEvents: "none",
                }
              : {
                  minWidth: "100vw",
                  height: "100vh",
                  objectFit: "cover",
                  pointerEvents: "none",
                  filter: "saturate(0)",
                }
          }
        ></video>
      </Box>
    </div>
  );
}
