import React, { createContext, useState } from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { TeamProvider } from "./state/TeamProvider";

const App = ({ Component }) => {
  return (
    <ChakraProvider>
      <TeamProvider>
        <Component />
      </TeamProvider>
    </ChakraProvider>
  );
};

export default App;
