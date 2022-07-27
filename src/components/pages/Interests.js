import {
  Box,
  Text,
  Center,
  Image,
  Wrap,
  WrapItem,
  VStack,
  Link,
} from "@chakra-ui/react";
import React from "react";

export default function Home() {
  const textStyle = {
    color: "white",
    fontFamily: "Gentium Plus",
    fontSize: "1.5rem",
    textAlign: "center",
    maxWidth: "fit-content",
  };

  const boxStyle = {
    bg: "gray",
    display: "block",
    mr: "auto",
    ml: "auto",
    w: "fit-content",
    border: "1rem groove gray",
  };

  return (
    <div>
      <Box
        w="100%"
        h="100%"
        className="interestsBackground"
        paddingTop="1rem"
        paddingBottom="4rem"
      >
        <Center fontSize="4rem" mb="4rem">
          What Inspires Me?
        </Center>
        <Wrap justify="center" spacing="5rem">
          <VStack>
            <Center
              textAlign="center"
              className="berserk"
              color="red"
              fontSize="3rem"
            >
              BERSERK
            </Center>
            <Box sx={boxStyle}>
              <Link
                isExternal
                href="https://en.wikipedia.org/wiki/Berserk_(manga)"
              >
                <Image src={require("../../Images/BerserkCover.png")} />
              </Link>
            </Box>
            <Text sx={textStyle}>
              Both beautiful and horrific, heartwarming and heartbreaking.
              Berserk is one of the most emotionally resonant pieces of fiction
              I have ever experienced. In fact, it affected me so much I created
              a website dedicated to it. You can find it{" "}
              <Link
                color="lightblue"
                href="https://polar-savannah-94210.herokuapp.com"
              >
                Here
              </Link>{" "}
            </Text>
          </VStack>
          <VStack>
            <Center textAlign="center" className="vagabond" fontSize="3rem">
              Vagabond
            </Center>
            <Box sx={boxStyle}>
              <Link
                isExternal
                href="https://en.wikipedia.org/wiki/Vagabond_(manga)"
              >
                <Image
                  w="29.5rem"
                  src={require("../../Images/VagabondCover.png")}
                />
              </Link>
            </Box>
            <Text sx={textStyle}>
              Telling the life story of the legendary samurai Musashi Miyamoto;
              Vagabond has much to say about Strength, Masculinity, and finding
              your purpose in life.
            </Text>
          </VStack>
          <VStack>
            <Center textAlign="center" className="jojo" fontSize="2.5rem">
              JoJo's BIZARRE ADVENTURE
            </Center>
            <Box sx={boxStyle}>
              <Link
                isExternal
                href="https://www.viz.com/jojo-s-bizarre-adventure"
              >
                <Image
                  w="29.5rem"
                  src={require("../../Images/JojoCover.jpg")}
                />
              </Link>
            </Box>
            <Text sx={textStyle}>
              Infinitely stylish. Infinitely cool. Jojo's Bizarre Adventure is
              both Bizarre and incredibly human with it's portrayal of
              generational trauma, the strength to keep fighting at all costs,
              and some of the most deserved beat-downs in all of fiction.
            </Text>
          </VStack>
          <VStack>
            <Center textAlign="center" className="metallica" fontSize="3rem">
              METALLICA
            </Center>
            <Box sx={boxStyle}>
              <Link isExternal href="https://www.metallica.com">
                <Image
                  w="29.5rem"
                  src={require("../../Images/MetallicaCover.jpg")}
                />
              </Link>
            </Box>
            <Text sx={textStyle}>
              The Lords Of Metal, the biggest band in the world. Metallica has
              come to my aid in more ways than one when I needed to express
              anger and deal with the way the world is at times.
            </Text>
          </VStack>
          <VStack>
            <Center textAlign="center" className="bladeRunner" fontSize="3rem">
              BLADE RUNNER 2049
            </Center>
            <Box sx={boxStyle}>
              <Link
                isExternal
                href="https://www.warnerbros.com/movies/blade-runner-2049"
              >
                <Image
                  w="29.5rem"
                  src={require("../../Images/BladeRunnerCover.jpg")}
                />
              </Link>
            </Box>
            <Text sx={textStyle}>
              Deeply Existential and full of Melancholy, Blade Runner 2049 is a
              masterpiece of the Cyberpunk Genre which has so much to say about
              being human and the nature of humanity itself.
            </Text>
          </VStack>
          <VStack>
            <Center textAlign="center" className="eldenRing" fontSize="3rem">
              Elden Ring
            </Center>
            <Box sx={boxStyle}>
              <Link
                isExternal
                href="https://en.bandainamcoent.eu/elden-ring/elden-ring"
              >
                <Image
                  w="29.5rem"
                  src={require("../../Images/EldenRingMovieCover.jpg")}
                />
              </Link>
            </Box>
            <Text sx={textStyle}>
              Brutally challenging yet Infinitely Inspiring, Elden Ring is one
              of my favorite games of all time. Taking heavy inspiration from
              Berserk, Elden Ring challenges you to struggle forward despite all
              odds.
            </Text>
          </VStack>
        </Wrap>
      </Box>
    </div>
  );
}
