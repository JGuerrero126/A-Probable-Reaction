import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./Style/reset.css";
import "./Style/style.css";
import theme from "./components/Theme.js";
import { ColorModeScript } from "@chakra-ui/react";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <>
    {/* 👇 Here's the script */}
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </>
);
