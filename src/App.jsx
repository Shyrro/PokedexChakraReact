import React, { createContext, useState } from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import { TeamProvider } from "./state/TeamProvider";

const App = ({ Component }) => {
  return (
    <ChakraProvider>
      <TeamProvider>
        <Router>
          <Component />
        </Router>
      </TeamProvider>
    </ChakraProvider>
  );
};

export default App;
