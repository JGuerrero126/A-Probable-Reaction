import {
  Box,
  Text,
  Center,
  Image,
  Wrap,
  VStack,
  Link,
  useColorModeValue,
  useColorMode,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import tlou2img from "./../../Images/Art/tlou2img.jfif";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  const interestsBg = useColorModeValue(
    "linear-gradient(lightblue, midnightblue, purple, #aa0000)",
    "linear-gradient(gray, black,black, #3d3d3d, black,black, #ba0000)"
  );
  const interestsBorder = useColorModeValue(
    "1rem groove gray",
    "1rem solid white"
  );
  const fontSrc = useColorModeValue("Gentium Plus", "Syne Mono");
  const linkColor = useColorModeValue("lightblue", "crimson");

  const textStyle = {
    color: "white",
    fontFamily: fontSrc,
    fontSize: "1.5rem",
    textAlign: "center",
    maxWidth: "fit-content",
  };

  const boxStyle = {
    bg: "black",
    display: "block",
    border: interestsBorder,
    maxWidth: "29.5rem",
  };

  return (
    <div>
      <Box
        w="100vw"
        h="100%"
        backgroundImage={interestsBg}
        paddingTop="1rem"
        paddingBottom="4rem"
      >
        <Center fontSize={["10vw", "4rem"]} mb="4rem" fontFamily={fontSrc}>
          In-Game Photography
        </Center>
        <Stack padding="1rem">
          <Box boxSize="sm">
            <Image
              src={tlou2img}
              alt="Black and white staircase with a burst of color coming from a window upstairs"
            />
          </Box>
        </Stack>
      </Box>
    </div>
  );
}
