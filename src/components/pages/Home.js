import { Box, Text } from "@chakra-ui/react";
import React from "react";

export default function Home() {
  const centerStyle = {
    position: "absolute",
    zIndex: "2",
    color: "white",
    fontFamily: "Gentium Plus",
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
        <Box filter="auto" blur="3px" position="relative">
          <video
            loop
            autoPlay
            src={require("../../Images/jelly.mp4")}
            type="video/mp4"
            style={{
              height: "100vh",
              width: "100%",
              objectFit: "cover",
              pointerEvents: "none",
            }}
          ></video>
        </Box>
      </div>
    </div>
  );
}
