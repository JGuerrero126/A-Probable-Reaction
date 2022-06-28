import { Image, Center, Box, Text, Link } from "@chakra-ui/react";
import React from "react";

export default function About() {
  return (
    <div>
      <Box zIndex="2" className="about-me" position="absolute" mt="1rem">
        <Center
          fontFamily="Gentium Plus"
          fontSize="3rem"
          transition="0.5s"
          marginTop="0.5rem"
          marginBottom="3rem"
          color="white"
        >
          About Me
        </Center>
        <Image
          w="25rem"
          h="25rem"
          mb="1rem"
          src={require("../../Images/avatar.png")}
        />
        <Box
          bg="#322413"
          border="0.5rem groove #7B8235"
          w="90%"
          ml="auto"
          mr="auto"
        >
          <Center m="1rem 4rem 1rem" color="white">
            <Text
              fontFamily="Gentium Plus"
              transition="0.5s"
              fontSize="150%"
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
          src={require("../../Images/Sunflowers.mp4")}
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
