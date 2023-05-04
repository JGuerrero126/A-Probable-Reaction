import React from "react";
import {
  Image,
  Center,
  Box,
  Text,
  Link,
  Wrap,
  VStack,
  Spacer,
  Img,
  Heading,
  Code,
  useColorModeValue,
  Divider,
  Container,
} from "@chakra-ui/react";

export default function Work() {
  const workBg = useColorModeValue(
    "linear-gradient( lightblue, lightcoral, crimson, darkred, black);",
    "linear-gradient(gray, black,black,black, #ba0000)"
  );
  const textColor = useColorModeValue("black", "white");
  const linkHover = useColorModeValue("lightskyblue", "crimson");
  const npmHover = useColorModeValue("lightskyblue", "black");
  const fontSrc = useColorModeValue("Bellefair", "Syne Mono");
  const boxBorder = useColorModeValue(
    "0.5rem groove gray",
    "0.5rem solid white"
  );
  const boxBottom = useColorModeValue("0.5rem groove gray", "3rem solid white");
  const imgFilter = useColorModeValue("", "saturate(0) contrast(105%)");
  const vgBG = useColorModeValue("#E32227", "snow");
  const vgLinkColor = useColorModeValue("", "#E32227");
  const vgBoxShadow = useColorModeValue(
    "0rem 0rem 2rem black, 0rem 0rem 2rem inset red",
    "0rem 0rem 2rem white"
  );
  const vgBorder = useColorModeValue(".25rem solid red", "");
  const codeColor = useColorModeValue("black", "#E32227");
  const bbtBG = useColorModeValue("#1c1c1c", "black");
  const bbtBorder = useColorModeValue(".5rem solid black", ".5rem solid white");
  const bbtBoxShadow = useColorModeValue(
    "0rem 0rem 2rem black, 0rem 0rem 2rem inset black",
    "0rem 0rem 2rem white, 0rem 0rem 2rem inset white"
  );
  const bbtTextColor = useColorModeValue("white", "white");

  const headingStyle = {
    fontFamily: fontSrc,
    fontSize: ["10vw", "3.5rem"],
    marginBottom: "3rem",
    marginTop: "2rem",
  };

  const imageStyle = {
    boxSize: ["10rem", "20rem"],
    objectFit: "cover",
    filter: imgFilter,
  };

  const boxStyle = {
    bg: "#322413",
    border: boxBorder,
    borderBottom: boxBottom,
    filter: imgFilter,
  };

  const textStyle = {
    fontFamily: fontSrc,
    fontSize: "2rem",
    marginBottom: "1rem",
    color: textColor,
  };

  const linkStyle = {
    fontFamily: fontSrc,
    textDecoration: "none",
    fontSize: "140%",
    transition: "0.5s",
    _hover: { color: linkHover, textDecoration: "underline" },
  };

  const npmStyle = {
    fontFamily: fontSrc,
    textDecoration: "none",
    fontSize: "140%",
    transition: "0.5s",
    _hover: { color: npmHover, textDecoration: "underline" },
    textColor: vgLinkColor,
  };

  return (
    <div>
      <Box
        w="100vw"
        h="100%"
        bg={workBg}
        paddingTop="1rem"
        paddingBottom="2rem"
      >
        <Center sx={headingStyle}>Web Applications</Center>
        <VStack justify="center" mb="4rem">
          <Box w="75%" sx={boxStyle}>
            <Image
              w="100%"
              h="100%"
              // onMouseEnter={(e) =>
              //   (e.target.src = require("../../Images/CC.gif"))
              // }
              // onMouseLeave={(e) =>
              //   (e.target.src = require("../../Images/BigScreenshotCC.png"))
              // }
              src={require("../../Images/ScreenshotTCRbig.png")}
            />
          </Box>
          <Box textAlign="center">
            <Text sx={textStyle}>The Cinema Room</Text>
            <Text sx={textStyle}>React / Python</Text>
            <Link
              isExternal
              sx={linkStyle}
              href="https://github.com/JGuerrero126/ACT_Group_63"
            >
              GitHub Repository
            </Link>
            <Spacer />
            <Link
              isExternal
              sx={linkStyle}
              href="https://the-cinema-room.herokuapp.com"
            >
              Live Website
            </Link>
          </Box>
        </VStack>
        <Wrap fontFamily="Gentium Plus" justify="center" spacing="2rem">
          <VStack direction={["column", "row"]}>
            <Box sx={boxStyle}>
              <Img
                sx={imageStyle}
                src={require("../../Images/ScreenshotTSW.png")}
              />
            </Box>
            <Box minWidth="20rem" textAlign="center">
              <Text sx={textStyle}>The Sorrow Work</Text>
              <Text sx={textStyle}>MERN Stack</Text>
              <Link
                isExternal
                sx={linkStyle}
                href="https://github.com/JGuerrero126/Sorrow_Work"
              >
                GitHub Repository
              </Link>
              <Spacer />
              <Link
                isExternal
                sx={linkStyle}
                href="https://cryptic-coast-35240.herokuapp.com"
              >
                Live Website
              </Link>
            </Box>
          </VStack>
          <VStack>
            <Box sx={boxStyle}>
              <Image
                sx={imageStyle}
                src={require("../../Images/ScreenshotTHS.png")}
              />
            </Box>
            <Box textAlign="center">
              <Text sx={textStyle}>Take Heed Struggler!</Text>
              <Text sx={textStyle}>React</Text>
              <Link
                isExternal
                sx={linkStyle}
                href="https://github.com/JGuerrero126/Berserk-Site"
              >
                GitHub Repository
              </Link>
              <Spacer />
              <Link
                isExternal
                sx={linkStyle}
                href="https://take-heed-struggler.vercel.app/"
              >
                Live Website
              </Link>
            </Box>
          </VStack>
          <VStack>
            <Box sx={boxStyle}>
              <Image
                sx={imageStyle}
                src={require("../../Images/ScreenshotAYMN.jpeg")}
              />
            </Box>
            <Box textAlign="center">
              <Text sx={textStyle}>All Your Music Needs</Text>
              <Text sx={textStyle}> HTML/CSS/JS</Text>
              <Link
                isExternal
                sx={linkStyle}
                href="https://github.com/JGuerrero126/All-Your-Music-Needs"
              >
                GitHub Repository
              </Link>
              <Spacer />
              <Link
                isExternal
                sx={linkStyle}
                href="https://jguerrero126.github.io/All-Your-Music-Needs/"
              >
                Live Website
              </Link>
            </Box>
          </VStack>
          <VStack>
            <Box sx={boxStyle}>
              <Image
                sx={imageStyle}
                src={require("../../Images/ScreenshotDPR.png")}
              />
            </Box>
            <Box textAlign="center">
              <Text sx={textStyle}>Day Planner Redux</Text>
              <Text sx={textStyle}>React</Text>
              <Link
                isExternal
                sx={linkStyle}
                href="https://github.com/JGuerrero126/Work_Day_Redux"
              >
                GitHub Repository
              </Link>
              <Spacer />
              <Link
                isExternal
                sx={linkStyle}
                href="https://dayplanner-redux.vercel.app"
              >
                Live Website
              </Link>
            </Box>
          </VStack>
          <VStack>
            <Box sx={boxStyle}>
              <Image
                sx={imageStyle}
                src={require("../../Images/ScreenshotWD.png")}
              />
            </Box>
            <Box textAlign="center">
              <Text sx={textStyle}>Weather Dashboard</Text>
              <Text sx={textStyle}>HTML/CSS/JS/API</Text>
              <Link
                isExternal
                sx={linkStyle}
                href="https://github.com/JGuerrero126/Weather-Dashboard"
              >
                GitHub Repository
              </Link>
              <Spacer />
              <Link
                isExternal
                sx={linkStyle}
                href="https://jguerrero126.github.io/Weather-Dashboard/"
              >
                Live Website
              </Link>
            </Box>
          </VStack>
          <VStack>
            <Box sx={boxStyle}>
              <Image
                sx={imageStyle}
                src={require("../../Images/ScreenshotTCZ.png")}
              />
            </Box>
            <Box textAlign="center">
              <Text sx={textStyle}>The Cyber Zone</Text>
              <Text sx={textStyle}>Full Stack Blog</Text>
              <Link
                isExternal
                sx={linkStyle}
                href="https://github.com/JGuerrero126/The_CYBER_Zone"
              >
                GitHub Repository
              </Link>
              <Spacer />
              <Link
                isExternal
                sx={linkStyle}
                href="https://boiling-mountain-75140.herokuapp.com/"
              >
                Live Website
              </Link>
            </Box>
          </VStack>
        </Wrap>
        <Center sx={headingStyle}>Video Games</Center>
        <Box
          border={vgBorder}
          borderRadius="2rem"
          fontSize={["3vw", "1.25rem"]}
          color="whitesmoke"
          background={vgBG}
          boxShadow={vgBoxShadow}
          mr="5rem"
          ml="5rem"
          padding="1rem"
        >
          <Heading
            fontFamily={fontSrc}
            fontSize={["5vw", "2rem"]}
            color="black"
            textAlign="center"
            mb="1rem"
          >
            WARRIORS OF WRATH
          </Heading>
          <Text
            fontSize={["3vw", "1.25rem"]}
            fontFamily={fontSrc}
            color="black"
            textAlign="center"
            mb="1rem"
          >
            Warriors Of Wrath is a text-based fighting game that you can access
            anywhere using NPM which is the Node Package Manager. If you have
            Node installed then you can just type
            <Code
              color={codeColor}
              padding="0.25rem"
              fontSize={["3vw", "1.25rem"]}
            >
              npx warriors-of-wrath
            </Code>
            into your command line terminal and enjoy the game! I am still
            updating it relatively frequently so who knows what new features
            might appear!
          </Text>
          <Center>
            <Link
              isExternal
              sx={npmStyle}
              href="https://www.npmjs.com/package/warriors-of-wrath"
              mb="1rem"
            >
              Link to Package on npmjs
            </Link>
          </Center>
          <Center>
            <Divider border="null" mb="1rem" w="90%" />
          </Center>

          <Heading
            fontFamily={fontSrc}
            fontSize={["5vw", "2rem"]}
            color="black"
            textAlign="center"
            mb="1rem"
          >
            Mad Birds
          </Heading>
          <Text
            fontSize={["3vw", "1.25rem"]}
            fontFamily={fontSrc}
            color="black"
            textAlign="center"
            mb="1rem"
          >
            Mad Birds is an Angry Birds parody game that was first built using a
            YouTube tutorial. I have since gone through and added various
            changes and improvements to make it all my own. Be sure to check it
            out and have some fun letting those oh so mad birds fly!
          </Text>
          <Center>
            <Link
              isExternal
              sx={npmStyle}
              href="https://play.unity.com/mg/other/madbirds1-0"
              mb="1rem"
            >
              Link to Game On Unity Play
            </Link>
          </Center>
        </Box>
        <Center sx={headingStyle}>Black Box Testing</Center>
        <Container
          border={bbtBorder}
          fontSize={["3vw", "1.25rem"]}
          color="whitesmoke"
          background={bbtBG}
          boxShadow={bbtBoxShadow}
          padding="1rem"
          // maxW="max-content"
          // minW="min-content"
        >
          <Box>
            <Center
              fontSize={["3vw", "1.25rem"]}
              fontFamily={fontSrc}
              color={bbtTextColor}
              textAlign="center"
              mb="1rem"
              // w="50%"
            >
              The following are playlists I made of informal Black Box Testing
              done by myself. Each playlist contains system and version
              information on the full playlist page and shortened bug reports in
              the description of each video.
            </Center>
          </Box>
          <Wrap justify="center" spacing="2rem" flexWrap="wrap">
            <Box width={["90vw", "560px"]} height={["13rem", "315px"]}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/videoseries?list=PLxLBzij5g12IVrsezT-UdkhrLe0yUosqM"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </Box>
            <Box width={["90vw", "560px"]} height={["13rem", "315px"]}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/videoseries?list=PLxLBzij5g12LqSb0gl2gf0t4DHpI1gjgU"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </Box>
          </Wrap>
        </Container>
        <Center sx={headingStyle} color="snow">
          Short Films
        </Center>
        <Wrap justify="center" spacing="2rem">
          <Box
            boxShadow="0rem 0rem 2rem black"
            width={["90vw", "560px"]}
            height={["13rem", "315px"]}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube-nocookie.com/embed/fY5Pjd_FeX0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Box>
          <Box
            boxShadow="0rem 0rem 2rem black"
            width={["90vw", "560px"]}
            height={["13rem", "315px"]}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/57QIyB-ldVY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Box>
          <Box
            boxShadow="0rem 0rem 2rem black"
            width={["90vw", "560px"]}
            height={["13rem", "315px"]}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube-nocookie.com/embed/6SVohy-mjnU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Box>
        </Wrap>
      </Box>
    </div>
  );
}
