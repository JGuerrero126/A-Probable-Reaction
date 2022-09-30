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
} from "@chakra-ui/react";

export default function Work() {
  const headingStyle = {
    fontFamily: "Bellefair",
    fontSize: "3.5rem",
    marginBottom: "3rem",
    marginTop: "2rem",
    color: "black",
  };

  const imageStyle = {
    boxSize: ["10rem", "20rem"],
    objectFit: "cover",
  };

  const boxStyle = {
    bg: "#322413",
    border: "0.5rem groove gray",
  };

  const textStyle = {
    fontFamily: "Bellefair",
    fontSize: "2rem",
    marginBottom: "1rem",
    color: "black",
  };

  const linkStyle = {
    fontFamily: "Bellefair",
    color: "black",
    textDecoration: "none",
    fontSize: "140%",
    transition: "0.5s",
  };

  return (
    <div>
      <Box
        w="100%"
        h="100%"
        className="workBackground"
        paddingTop="1rem"
        paddingBottom="2rem"
      >
        <Center sx={headingStyle}>Web Applications</Center>
        <VStack justify="center" mb="4rem">
          <Box w="75%" sx={boxStyle}>
            <Image
              // boxSize="100%"
              w="100%"
              h="100%"
              // onMouseEnter={(e) =>
              //   (e.target.src = require("../../Images/CC.gif"))
              // }
              // onMouseLeave={(e) =>
              //   (e.target.src = require("../../Images/BigScreenshotCC.png"))
              // }
              src={require("../../Images/BigScreenshotCC.png")}
            />
          </Box>
          <Box textAlign="center">
            <Text sx={textStyle}>Collection Conquest</Text>
            <Text sx={textStyle}>MERN Stack</Text>
            <Link
              className="links"
              isExternal
              sx={linkStyle}
              href="https://github.com/zionremnant/collection-conquest"
            >
              GitHub Repository
            </Link>
            <Spacer />
            <Link
              className="links"
              isExternal
              sx={linkStyle}
              href="https://dry-island-54181.herokuapp.com/"
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
                className="links"
                isExternal
                sx={linkStyle}
                href="https://github.com/JGuerrero126/Sorrow_Work"
              >
                GitHub Repository
              </Link>
              <Spacer />
              <Link
                className="links"
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
                className="links"
                isExternal
                sx={linkStyle}
                href="https://github.com/JGuerrero126/Berserk-Site"
              >
                GitHub Repository
              </Link>
              <Spacer />
              <Link
                className="links"
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
                className="links"
                isExternal
                sx={linkStyle}
                href="https://github.com/JGuerrero126/All-Your-Music-Needs"
              >
                GitHub Repository
              </Link>
              <Spacer />
              <Link
                className="links"
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
                src={require("../../Images/ScreenshotTRB.png")}
              />
            </Box>
            <Box textAlign="center">
              <Text sx={textStyle}>The Recipe Box</Text>
              <Text sx={textStyle}> Full Stack</Text>
              <Link
                className="links"
                isExternal
                sx={linkStyle}
                href="https://github.com/EthanP94/The-Recipe-Box"
              >
                GitHub Repository
              </Link>
              <Spacer />
              <Link
                className="links"
                isExternal
                sx={linkStyle}
                href="https://immense-cliffs-14605.herokuapp.com/"
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
                className="links"
                isExternal
                sx={linkStyle}
                href="https://github.com/JGuerrero126/Weather-Dashboard"
              >
                GitHub Repository
              </Link>
              <Spacer />
              <Link
                className="links"
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
                className="links"
                isExternal
                sx={linkStyle}
                href="https://github.com/JGuerrero126/The_CYBER_Zone"
              >
                GitHub Repository
              </Link>
              <Spacer />
              <Link
                className="links"
                isExternal
                sx={linkStyle}
                href="https://boiling-mountain-75140.herokuapp.com/"
              >
                Live Website
              </Link>
            </Box>
          </VStack>
        </Wrap>
        <Center sx={headingStyle}>Node Packages</Center>
        <Box
          border=".25rem solid red"
          borderRadius="2rem"
          // padding="0.5rem"
          fontSize="1.25rem"
          color="whitesmoke"
          background="#E32227"
          // boxShadow="0rem 0rem 2rem inset black, 0rem 0rem 2rem black"
          boxShadow="0rem 0rem 2rem black, 0rem 0rem 2rem inset red"
          mr="5rem"
          ml="5rem"
        >
          <Heading
            fontFamily="Bellefair"
            fontSize="2rem"
            color="black"
            textAlign="center"
            // textShadow="0.25rem 0.25rem .25rem black"
          >
            WARRIORS OF WRATH
          </Heading>
          <Text
            fontSize="1.25rem"
            fontFamily="Bellefair"
            color="black"
            textAlign="center"
            mb="1rem"
          >
            Warriors Of Wrath is a text-based fighting game that you can access
            anywhere using NPM which is the Node Package Manager. If you have
            Node installed then you can just type
            <Code
              padding="0.25rem"
              fontSize="1.25rem"
              color="whitesmoke"
              // background="black"
            >
              npx warriors-of-wrath
            </Code>
            into your command line terminal and enjoy the game! I am still
            updating it relatively frequently so who knows what new features
            might appear!
          </Text>
          <Center>
            <Link
              className="links"
              isExternal
              sx={linkStyle}
              href="https://boiling-mountain-75140.herokuapp.com/"
            >
              Link to Package on npmjs
            </Link>
          </Center>
        </Box>
        <Center sx={headingStyle}>Short Films / Music Videos</Center>
        <Wrap justify="center" spacing="2rem">
          <Box boxShadow="0rem 0rem 2rem black">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/fY5Pjd_FeX0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Box>
          <Box boxShadow="0rem 0rem 2rem black">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/57QIyB-ldVY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Box>
          <Box boxShadow="0rem 0rem 2rem black">
            <iframe
              width="560"
              height="315"
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
