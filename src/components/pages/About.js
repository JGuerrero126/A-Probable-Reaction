import {
  Image,
  Center,
  Box,
  Text,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";

export default function About() {
  const { colorMode, toggleColorMode } = useColorMode();
  const textColor = useColorModeValue("white", "bone");
  const videoSrc = useColorModeValue(
    require("../../Images/Sunflowers.mp4"),
    require("../../Images/forest.mp4")
  );
  const imgSrc = useColorModeValue(
    require("../../Images/avatar.png"),
    require("../../Images/darkModePortrait.jpg")
  );
  const boxBg = useColorModeValue("#322413", "");
  const boxBorder = useColorModeValue("0.5rem groove #7B8235", "");
  const imgBorder = useColorModeValue(
    "1rem groove #fba914",
    "1rem solid lightgray"
  );
  const fontSrc = useColorModeValue("Bellefair", "Syne Mono");
  const imgHover = useColorModeValue("0.1rem 0.1rem 4rem #e8de2a", "");
  const imgStyle = useColorModeValue(
    {
      width: "25rem",
      height: "25rem",
      marginBottom: "1rem",
      maxHeight: "70vw",
      maxWidth: "70vw",
    },
    {
      width: "25rem",
      height: "25rem",
      marginBottom: "1rem",
      maxHeight: "70vw",
      maxWidth: "70vw",
    }
  );

  return (
    <div>
      <Box zIndex="2" className="about-me" position="absolute" mt="1rem">
        <Center
          fontFamily={fontSrc}
          fontSize="3rem"
          transition="0.5s"
          marginTop="0.5rem"
          marginBottom="3rem"
          color={textColor}
        >
          About Me
        </Center>
        <Image
          border={imgBorder}
          sx={imgStyle}
          src={imgSrc}
          _hover={{ boxShadow: imgHover }}
        />
        <Box bg={boxBg} border={boxBorder} w="90%" ml="auto" mr="auto">
          <Center m="1rem 2rem 1rem" color={textColor}>
            <Text
              fontFamily={fontSrc}
              transition="0.5s"
              fontSize="3vw"
              textAlign="center"
            >
              I am a Full Stack Web Developer with experience in both team-based
              and solo projects which include applications that use in-demand
              technologies such as React, the MERN Stack, Unity, MySQL, Mongoose
              and API's. But my prospects are far and wide, I am also a
              multimedia artist with experience in photography, videography,
              creative writing, pixel art, video editing, designing,
              music-making/production, and also generally being a creative.
            </Text>
          </Center>
        </Box>
      </Box>
      <Box filter="auto" blur="3px" position="relative">
        {" "}
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
                  minHeight: "100vh",
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
