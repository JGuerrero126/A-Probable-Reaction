import {
  Icon,
  Link,
  UnorderedList,
  useColorMode,
  useColorModeValue,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiFillSound } from "react-icons/ai";
import lightBG from "../Music/lightModeBGMusic.mp3";
import darkBG from "../Music/darkModeBGMusic.mp3";

function Header({ currentPage, handlePageChange }) {
  const { colorMode, toggleColorMode } = useColorMode();

  const navbarBg = useColorModeValue("midnightblue", "black");
  const navbarActive = useColorModeValue("lightblue", "gray");
  const navbarBB = useColorModeValue("lightblue inset 4px", "gray inset 4px");
  const navbarBS = useColorModeValue(
    "1px 1px 6px inset lightblue",
    "1px 1px 6px inset gray"
  );
  const fontSrc = useColorModeValue("Bellefair", "Syne Mono");
  const bgMusic = useColorModeValue(lightBG, darkBG);

  const liStyle = {
    // listStyle: "none",
    // display: "inline",
    // marginRight: "3rem",
    fontSize: "2rem",
    // minW: ["100%"],
  };

  const linkStyle = {
    fontFamily: fontSrc,
    textDecoration: "none",
    listStyle: "none",
    display: "inline",
    marginRight: "2rem",
  };

  var bg = document.getElementById("bgAudio");
  const [audio, setAudio] = useState("Paused");
  function changeAudio() {
    if (audio === "Playing") {
      console.log(bg);
      console.log(audio);
      bg.pause();
      setAudio("Paused");
    } else {
      console.log(bg);
      bg.play();
      console.log(audio);
      setAudio("Playing");
    }
  }

  return (
    <Wrap
      minW="100vw"
      padding="2rem"
      justify={["flex-start", "left"]}
      borderBottom={navbarBB}
      bg={navbarBg}
      boxShadow={navbarBS}
    >
      <WrapItem sx={liStyle}>
        <Link
          href="#home"
          sx={linkStyle}
          onClick={() => handlePageChange("Home")}
          color={currentPage === "Home" ? navbarActive : "snow"}
        >
          Home
        </Link>
      </WrapItem>
      <WrapItem sx={liStyle}>
        <Link
          href="#about"
          sx={linkStyle}
          onClick={() => handlePageChange("About")}
          color={currentPage === "About" ? navbarActive : "snow"}
        >
          About
        </Link>
      </WrapItem>
      <WrapItem sx={liStyle}>
        <Link
          href="#interests"
          sx={linkStyle}
          onClick={() => handlePageChange("Interests")}
          color={currentPage === "Interests" ? navbarActive : "snow"}
        >
          Interests
        </Link>
      </WrapItem>
      <WrapItem sx={liStyle}>
        <Link
          href="#work"
          sx={linkStyle}
          onClick={() => handlePageChange("Work")}
          color={currentPage === "Work" ? navbarActive : "snow"}
        >
          Work
        </Link>
      </WrapItem>
      <WrapItem sx={liStyle}>
        <Link
          href="#art"
          sx={linkStyle}
          onClick={() => handlePageChange("Art")}
          color={currentPage === "Art" ? navbarActive : "snow"}
        >
          Art
        </Link>
      </WrapItem>
      <WrapItem sx={liStyle}>
        <Link
          href="#contact"
          sx={linkStyle}
          onClick={() => handlePageChange("Contact")}
          color={currentPage === "Contact" ? navbarActive : "snow"}
        >
          Contact
        </Link>
      </WrapItem>
      <WrapItem sx={liStyle}>
        <Link
          href="#credits"
          sx={linkStyle}
          onClick={() => handlePageChange("Credits")}
          color={currentPage === "Credits" ? navbarActive : "snow"}
        >
          Credits
        </Link>
      </WrapItem>
      <WrapItem sx={liStyle}>
        <Link
          onClick={toggleColorMode}
          sx={linkStyle}
          color={colorMode === "light" ? "snow" : "crimson"}
          _hover={{ textDecoration: "none" }}
        >
          ?
        </Link>
      </WrapItem>
      <WrapItem sx={liStyle}>
        <Link sx={linkStyle}>
          <Icon
            color={colorMode === "light" ? "snow" : ""}
            as={AiFillSound}
            onClick={() => changeAudio()}
          />
        </Link>
      </WrapItem>
      <audio id="bgAudio" loop src={bgMusic}></audio>
    </Wrap>
  );
}

export default Header;
