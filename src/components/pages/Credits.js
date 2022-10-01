import { Box, Text, Link } from "@chakra-ui/react";
import React from "react";

export default function Home() {
  const centerStyle = {
    color: "black",
    fontFamily: "Gentium Plus",
    fontSize: "2rem",
    marginTop: "3rem",
    textAlign: "center",
  };

  return (
    <div>
      <Box
        w="100%"
        h="100%"
        className="creditsBackground"
        paddingTop="1rem"
        paddingBottom="4rem"
      >
        <Text fontSize="3rem" marginTop="3rem" ml="1rem" textAlign="center">
          {" "}
          Background Video Credits
        </Text>
        <Text sx={centerStyle}>
          {" "}
          Jellyfish Video belongs to{" "}
          <Link
            isExternal
            href="https://pixabay.com/users/christianbodhi-9869182/?tab=videos"
          >
            ChristianBodhi
          </Link>
        </Text>
        <Text sx={centerStyle}>
          {" "}
          Sunflower Field Video belongs to{" "}
          <Link
            isExternal
            href="https://pixabay.com/users/trueckauer-16495679/?tab=videos"
          >
            trueckauer
          </Link>
        </Text>
        <Text sx={centerStyle}>
          {" "}
          Plant Watering Video belongs to{" "}
          <Link
            isExternal
            href="https://pixabay.com/users/coverr-free-footage-1281706/?tab=videos"
          >
            coverr
          </Link>
        </Text>
        <Text fontSize="3rem" marginTop="4rem" ml="1rem" textAlign="center">
          {" "}
          Interests Images Credits
        </Text>
        <Text sx={centerStyle}>
          {" "}
          Berserk authored by{" "}
          <Link isExternal href="https://en.wikipedia.org/wiki/Kentaro_Miura">
            Kentaro Muira
          </Link>
        </Text>
        <Text sx={centerStyle}>
          {" "}
          Vagabond authored by{" "}
          <Link isExternal href="https://en.wikipedia.org/wiki/Takehiko_Inoue">
            Takehiko Inoue
          </Link>
        </Text>
        <Text sx={centerStyle}>
          {" "}
          Jojo's Bizarre Adventure authored by{" "}
          <Link isExternal href="https://en.wikipedia.org/wiki/Hirohiko_Araki">
            Hirohiko Araki
          </Link>
        </Text>
        <Text sx={centerStyle}>
          {" "}
          Metallica Poster belongs to{" "}
          <Link isExternal href="https://www.metallica.com">
            Metallica
          </Link>
        </Text>
        <Text sx={centerStyle}>
          {" "}
          Blade Runner Poster belongs to{" "}
          <Link
            isExternal
            href="https://www.warnerbros.com/movies/blade-runner-2049"
          >
            Warner Bros.
          </Link>
        </Text>
        <Text sx={centerStyle}>
          {" "}
          Elden Ring Movie Poster belongs to{" "}
          <Link isExternal href="https://www.instagram.com/iam.hyam/">
            Hyam Cacerez
          </Link>
        </Text>
      </Box>
    </div>
  );
}
