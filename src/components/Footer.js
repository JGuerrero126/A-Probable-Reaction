import React, { useState } from "react";
import { Icon, Text } from "@chakra-ui/react";
import { AiFillSound } from "react-icons/ai";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Footer() {
  // var bg = document.getElementById("bgAudio");
  // const [audio, setAudio] = useState("Paused");
  // function changeAudio() {
  //   if (audio === "Playing") {
  //     console.log(bg);
  //     console.log(audio);
  //     bg.pause();
  //     setAudio("Paused");
  //   } else {
  //     console.log(bg);
  //     bg.play();
  //     console.log(audio);
  //     setAudio("Playing");
  //   }
  // }
  return (
    <div className="footer">
      {/* <Icon as={AiFillSound} onClick={() => changeAudio()} /> */}
      <Text mr="0.5rem">
        This Site Made By Jerry Guerrero using React with Chakra UI
      </Text>
    </div>
  );
}

export default Footer;
