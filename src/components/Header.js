import {
  Link,
  ListItem,
  UnorderedList,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect } from "react";

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

  return (
    <UnorderedList
      minW="100vw"
      padding="2rem"
      margin="0"
      borderBottom={navbarBB}
      bg={navbarBg}
      boxShadow={navbarBS}
    >
      <ListItem sx={liStyle}>
        <Link
          href="#home"
          sx={linkStyle}
          onClick={() => handlePageChange("Home")}
          color={currentPage === "Home" ? navbarActive : "snow"}
        >
          Home
        </Link>
      </ListItem>
      <ListItem sx={liStyle}>
        <Link
          href="#about"
          sx={linkStyle}
          onClick={() => handlePageChange("About")}
          color={currentPage === "About" ? navbarActive : "snow"}
        >
          About
        </Link>
      </ListItem>
      <ListItem sx={liStyle}>
        <Link
          href="#interests"
          sx={linkStyle}
          onClick={() => handlePageChange("Interests")}
          color={currentPage === "Interests" ? navbarActive : "snow"}
        >
          Interests
        </Link>
      </ListItem>
      <ListItem sx={liStyle}>
        <Link
          href="#work"
          sx={linkStyle}
          onClick={() => handlePageChange("Work")}
          color={currentPage === "Work" ? navbarActive : "snow"}
        >
          Work
        </Link>
      </ListItem>
      <ListItem sx={liStyle}>
        <Link
          href="#contact"
          sx={linkStyle}
          onClick={() => handlePageChange("Contact")}
          color={currentPage === "Contact" ? navbarActive : "snow"}
        >
          Contact
        </Link>
      </ListItem>
      <ListItem sx={liStyle}>
        <Link
          href="#credits"
          sx={linkStyle}
          onClick={() => handlePageChange("Credits")}
          color={currentPage === "Credits" ? navbarActive : "snow"}
        >
          Credits
        </Link>
      </ListItem>
      <ListItem sx={liStyle}>
        <Link
          onClick={toggleColorMode}
          sx={linkStyle}
          color={colorMode === "light" ? "snow" : "crimson"}
          _hover={{ textDecoration: "none" }}
        >
          ?
        </Link>
      </ListItem>
      <audio autoPlay loop src={bgMusic}></audio>
    </UnorderedList>
  );
}

export default Header;
