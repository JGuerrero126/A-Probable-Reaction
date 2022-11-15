import { Box, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import React from "react";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  const fontSrc = useColorModeValue("Bellefair", "Syne Mono");
  const videoSrc = useColorModeValue(
    require("../../Images/jelly.mp4"),
    require("../../Images/ocean.mp4")
  );
  const centerStyle = {
    position: "absolute",
    zIndex: "2",
    color: "white",
    fontFamily: fontSrc,
  };

  return (
    <div>
      <div>
        <Text sx={centerStyle} fontSize="4rem" ml="1rem" marginTop="21rem">
          Jerry Guerrero
        </Text>
        <Text sx={centerStyle} fontSize="3rem" ml="1rem" marginTop="25rem">
          Developer, Creator, Author
        </Text>
        <Box filter="auto" blur="2px" position="relative">
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
                    filter: "saturate(0) contrast(115%)",
                  }
            }
          ></video>
        </Box>
      </div>
    </div>
  );
}
