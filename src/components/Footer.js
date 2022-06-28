import React from "react";
import { Text } from "@chakra-ui/react";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Footer() {
  return (
    <div className="footer">
      <Text mr="0.5rem">
        This Site Made By Jerry Guerrero using React with Chakra UI
      </Text>
    </div>
  );
}

export default Footer;
