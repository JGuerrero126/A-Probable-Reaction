import { Box, Text, Center, Image, Wrap, VStack, Link } from "@chakra-ui/react";
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
    bg: "black",
    display: "block",
    mr: "auto",
    ml: "auto",
    w: "min-content",
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
        <Center fontSize="4rem" mb="4rem" fontFamily="Bellefair">
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
                <Image
                  h="100%"
                  src={require("../../Images/BerserkCover.png")}
                />
              </Link>
            </Box>
            <Text sx={textStyle}>
              Both beautiful and horrific, heartwarming and heartbreaking.
              Berserk is one of the most emotionally resonant pieces of fiction
              I have ever experienced. In fact, it affected me so much I created
              a website dedicated to it. You can find it{" "}
              <Link
                color="lightblue"
                href="https://take-heed-struggler.vercel.app"
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
                  h="100%"
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
                  h="100%"
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
                  h="100%"
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
                  h="100%"
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
                  h="100%"
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
          <VStack>
            <Center textAlign="center" className="firePunch" fontSize="3rem">
              FIRE PUNCH
            </Center>
            <Box sx={boxStyle}>
              <Link isExternal href="https://www.viz.com/fire-punch">
                <Image
                  w="29.5rem"
                  h="100%"
                  src={require("../../Images/FirePunchCover.png")}
                />
              </Link>
            </Box>
            <Text sx={textStyle}>
              Utterly heartbreaking yet full of hope and love, Fire Punch talks
              much about the ideas of suffering and life. Do we only exist to
              suffer? What could be worth a lifetime of torment? Fire Punch
              answers that with a single word, "Live".
            </Text>
          </VStack>
          <VStack>
            <Center textAlign="center" className="hotline" fontSize="3rem">
              HOTLINE
            </Center>
            <Center textAlign="center" className="miami" fontSize="3rem">
              MIAMI
            </Center>
            <Box sx={boxStyle}>
              <Link isExternal href="https://www.hotlinemiami.com">
                <Image
                  w="29.5rem"
                  h="100%"
                  src={require("../../Images/HotlineMiamiCover.png")}
                />
              </Link>
            </Box>
            <Text sx={textStyle}>
              Hypnotic, Pulse Pounding, Thought-Provoking. Hotline Miami is all
              of those things and more. Somehow, a video game about mercilessly
              murdering gangsters while listening to club music became so much
              more than that.
            </Text>
          </VStack>
          <VStack>
            <Center
              textAlign="center"
              className="metalGearSolid"
              fontSize="3rem"
            >
              METAL GEAR SOLID
            </Center>
            <Box sx={boxStyle}>
              <Link isExternal href="https://en.wikipedia.org/wiki/Metal_Gear">
                <Image
                  w="29.5rem"
                  h="100%"
                  src={require("../../Images/MetalGearSolid4Cover.jpg")}
                />
              </Link>
            </Box>
            <Text sx={textStyle}>
              The King of Tacital Espionage Action. The brainchild of a madman.
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
