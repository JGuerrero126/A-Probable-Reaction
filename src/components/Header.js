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
  const bgMusic = useColorModeValue(
    require("../Music/lightModeBGMusic.mp3"),
    require("../Music/darkModeBGMusic.mp3")
  );

  const liStyle = {
    listStyle: "none",
    display: "inline",
    marginRight: "3rem",
    fontSize: "2rem",
  };

  const linkStyle = {
    fontFamily: fontSrc,
    textDecoration: "none",
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
      justify="left"
      borderBottom={navbarBB}
      bg={navbarBg}
      boxShadow={navbarBS}
    >
      <Link
        href="#home"
        sx={linkStyle}
        onClick={() => handlePageChange("Home")}
        color={currentPage === "Home" ? navbarActive : "snow"}
      >
        <WrapItem sx={liStyle}>Home </WrapItem>
      </Link>
      <Link
        href="#about"
        sx={linkStyle}
        onClick={() => handlePageChange("About")}
        color={currentPage === "About" ? navbarActive : "snow"}
      >
        <WrapItem sx={liStyle}>About</WrapItem>
      </Link>

      <Link
        href="#interests"
        sx={linkStyle}
        onClick={() => handlePageChange("Interests")}
        color={currentPage === "Interests" ? navbarActive : "snow"}
      >
        <WrapItem sx={liStyle}>Interests</WrapItem>
      </Link>
      <Link
        href="#work"
        sx={linkStyle}
        onClick={() => handlePageChange("Work")}
        color={currentPage === "Work" ? navbarActive : "snow"}
      >
        <WrapItem sx={liStyle}>Work</WrapItem>
      </Link>
      <Link
        href="#contact"
        sx={linkStyle}
        onClick={() => handlePageChange("Contact")}
        color={currentPage === "Contact" ? navbarActive : "snow"}
      >
        <WrapItem sx={liStyle}>Contact</WrapItem>
      </Link>

      <Link
        href="#credits"
        sx={linkStyle}
        onClick={() => handlePageChange("Credits")}
        color={currentPage === "Credits" ? navbarActive : "snow"}
      >
        <WrapItem sx={liStyle}>Credits</WrapItem>
      </Link>

      <Link
        onClick={toggleColorMode}
        sx={linkStyle}
        color={colorMode === "light" ? "snow" : "crimson"}
        _hover={{ textDecoration: "none" }}
      >
        <WrapItem sx={liStyle}>?</WrapItem>
      </Link>
      <audio id="bgAudio" loop src={bgMusic}></audio>
      <Icon
        // onClick={toggleColorMode}
        sx={linkStyle}
        color={currentPage === "Contact" ? navbarActive : "snow"}
        _hover={{ textDecoration: "none" }}
        as={AiFillSound}
        onClick={() => changeAudio()}
      />
    </Wrap>
  );
}

export default Header;
