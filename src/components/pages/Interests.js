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
} from "@chakra-ui/react";
import React from "react";
import berserkCover from "../../Images/BerserkCover.png";

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
          What Inspires Me?
        </Center>
        <Wrap justify="center" spacing="5rem">
          <VStack maxW="min-content">
            <Center
              textAlign="center"
              className="berserk"
              color="red"
              fontSize="3rem"
            >
              BERSERK
            </Center>
            <Link
              isExternal
              href="https://en.wikipedia.org/wiki/Berserk_(manga)"
            >
              <Image
                sx={boxStyle}
                src={berserkCover}
                filter={
                  colorMode === "light" ? "" : "saturate(0) contrast(115%)"
                }
              />
            </Link>
            <Text sx={textStyle}>
              Both beautiful and horrific, heartwarming and heartbreaking.
              Berserk is one of the most emotionally resonant pieces of fiction
              I have ever experienced. In fact, it affected me so much I created
              a website dedicated to it. You can find it{" "}
              <Link
                color={linkColor}
                href="https://take-heed-struggler.vercel.app"
              >
                Here
              </Link>{" "}
            </Text>
          </VStack>
          <VStack maxW="min-content">
            <Center textAlign="center" className="vagabond" fontSize="3rem">
              Vagabond
            </Center>
            <Link
              isExternal
              href="https://en.wikipedia.org/wiki/Vagabond_(manga)"
            >
              <Image
                sx={boxStyle}
                // w="29.5rem"
                h="100%"
                src={require("../../Images/VagabondCover.png")}
                filter={
                  colorMode === "light" ? "" : "saturate(0) contrast(115%)"
                }
              />
            </Link>
            <Text sx={textStyle}>
              Telling the life story of the legendary samurai Musashi Miyamoto;
              Vagabond has much to say about Strength, Masculinity, and finding
              your purpose in life.
            </Text>
          </VStack>
          <VStack maxW="min-content">
            <Center textAlign="center" className="jojo" fontSize="2.5rem">
              JoJo's BIZARRE ADVENTURE
            </Center>
            <Link
              isExternal
              href="https://www.viz.com/jojo-s-bizarre-adventure"
            >
              <Image
                sx={boxStyle}
                w="29.5rem"
                h="100%"
                src={require("../../Images/JojoCover.jpg")}
                filter={
                  colorMode === "light" ? "" : "saturate(0) contrast(115%)"
                }
              />
            </Link>
            <Text sx={textStyle}>
              Infinitely stylish. Infinitely cool. Jojo's Bizarre Adventure is
              both Bizarre and incredibly human with it's portrayal of
              generational trauma, the strength to keep fighting at all costs,
              and some of the most deserved beat-downs in all of fiction.
            </Text>
          </VStack>
          <VStack maxW="min-content">
            <Center textAlign="center" className="surfcurse" fontSize="3rem">
              Surf Curse
            </Center>
            <Link isExternal href="https://www.surfcurse.com">
              <Image
                sx={boxStyle}
                w="29.5rem"
                h="100%"
                src={require("../../Images/surfcurse.png")}
                filter={
                  colorMode === "light" ? "" : "saturate(0) contrast(115%)"
                }
              />
            </Link>
            <Text sx={textStyle}>
              Melodic and full of heart, Surf Curse is one of my favorite groups
              in all of music. Both aloof yet heartbreakingly serious, their
              songs are anthems that hardly ever leave my mind and always tear
              into my heart.
            </Text>
          </VStack>
          <VStack maxW="min-content">
            <Center textAlign="center" className="bladeRunner" fontSize="3rem">
              BLADE RUNNER 2049
            </Center>
            <Link
              isExternal
              href="https://www.warnerbros.com/movies/blade-runner-2049"
            >
              <Image
                sx={boxStyle}
                w="29.5rem"
                h="100%"
                src={require("../../Images/BladeRunnerCover.jpg")}
                filter={
                  colorMode === "light" ? "" : "saturate(0) contrast(115%)"
                }
              />
            </Link>
            <Text sx={textStyle}>
              Deeply Existential and full of Melancholy, Blade Runner 2049 is a
              masterpiece of the Cyberpunk Genre which has so much to say about
              being human and the nature of humanity itself.
            </Text>
          </VStack>
          <VStack maxW="min-content">
            <Center textAlign="center" className="eldenRing" fontSize="3rem">
              Elden Ring
            </Center>
            <Link
              isExternal
              href="https://en.bandainamcoent.eu/elden-ring/elden-ring"
            >
              <Image
                sx={boxStyle}
                w="29.5rem"
                h="100%"
                src={require("../../Images/EldenRingMovieCover.jpg")}
                filter={
                  colorMode === "light" ? "" : "saturate(0) contrast(115%)"
                }
              />
            </Link>
            <Text sx={textStyle}>
              Brutally challenging yet Infinitely Inspiring, Elden Ring is one
              of my favorite games of all time. Taking heavy inspiration from
              Berserk, Elden Ring challenges you to struggle forward despite all
              odds.
            </Text>
          </VStack>
          <VStack maxW="min-content">
            <Center textAlign="center" className="firePunch" fontSize="3rem">
              FIRE PUNCH
            </Center>
            <Link isExternal href="https://www.viz.com/fire-punch">
              <Image
                sx={boxStyle}
                w="29.5rem"
                h="100%"
                src={require("../../Images/FirePunchCover.png")}
                filter={
                  colorMode === "light" ? "" : "saturate(0) contrast(115%)"
                }
              />
            </Link>
            <Text sx={textStyle}>
              Utterly heartbreaking yet full of hope and love, Fire Punch talks
              much about the ideas of suffering and life. Do we only exist to
              suffer? What could be worth a lifetime of torment? Fire Punch
              answers that with a single word, "Live".
            </Text>
          </VStack>
          <VStack maxW="min-content">
            <Center textAlign="center" className="hotline" fontSize="3rem">
              HOTLINE
            </Center>
            <Center textAlign="center" className="miami" fontSize="3rem">
              MIAMI
            </Center>
            <Link isExternal href="https://www.hotlinemiami.com">
              <Image
                sx={boxStyle}
                w="29.5rem"
                h="100%"
                src={require("../../Images/HotlineMiamiCover.png")}
                filter={
                  colorMode === "light" ? "" : "saturate(0) contrast(115%)"
                }
              />
            </Link>
            <Text sx={textStyle}>
              Hypnotic, Pulse Pounding, Thought-Provoking. Hotline Miami is all
              of those things and more. Somehow, a video game about mercilessly
              murdering gangsters while listening to club music became so much
              more than that.
            </Text>
          </VStack>
          <VStack maxW="min-content">
            <Center
              textAlign="center"
              className="metalGearSolid"
              fontSize="3rem"
            >
              METAL GEAR SOLID
            </Center>
            <Link isExternal href="https://en.wikipedia.org/wiki/Metal_Gear">
              <Image
                sx={boxStyle}
                w="29.5rem"
                h="100%"
                src={require("../../Images/MetalGearSolid4Cover.jpg")}
                filter={
                  colorMode === "light" ? "" : "saturate(0) contrast(115%)"
                }
              />
            </Link>
            <Text sx={textStyle}>
              The King of Tactical Espionage Action. The brainchild of a madman.
              Metal Gear Solid is a series very close to my heart, full of
              thought-provoking ideas and intense stealth as well as charm and
              good ol' japanese quirkyness. It is certainly one of a kind.
            </Text>
          </VStack>
        </Wrap>
      </Box>
    </div>
  );
}
