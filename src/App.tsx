import React, { useState } from 'react'
import './App.css'
import Home from './Home';
import { ChakraProvider } from '@chakra-ui/react';

function App({ Component }: any) {
  return (
    <ChakraProvider>
      <Component />
    </ChakraProvider>
  )
}

export default App
