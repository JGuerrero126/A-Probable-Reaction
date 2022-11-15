import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import theme from "./components/Theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <PortfolioContainer />
    </ChakraProvider>
  );
}

export default App;
