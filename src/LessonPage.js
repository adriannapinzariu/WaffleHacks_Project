import React from 'react';
import {Heading, SimpleGrid, Box, Button, Input, useBreakpointValue,Spacer,Flex, Center } from "@chakra-ui/react";
import { useState } from 'react'


import DrawerExample from "./sidebar";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const components = {
  Drawer: {
    variants: {
      alwaysOpen: {
        parts: ["dialog, dialogContainer"],
        dialog: {
          pointerEvents: "auto"
        },
        dialogContainer: {
          pointerEvents: "none"
        }
      }
    }
  }
};

const theme = extendTheme({
  components
});



function LessonPage(){
 return(
  <>
  <ChakraProvider theme={theme}>
      <div>

        <DrawerExample />
      </div>
    </ChakraProvider>
    <Center>
    <Box 
    w= {[100,300,400]}
    color="white"
    rounded="20px"
    bg="purple"
    boxShadow='xs'
    p="10"
    >
      <text>
        Lesson 1:
      </text>
    </Box>
    </Center>
  
  <SimpleGrid
    spacing='8'
    p='100'
    
    
  >
    <Box 
    padding="6" 
    w= {[100, 300, 500]}
    margin="auto" 
    color="white"
    borderWidth="6px"
    rounded="20px"
    bg="purple"
    boxShadow='dark-lg'
    p="10"
    >
      <text>
        Lesson 1:
      </text>
    </Box>
    <Box 
    padding="6" 
    w= {[100, 300, 500]}
    margin="auto" 
    color="white"
    borderWidth="6px"
    rounded="20px"
    bg="purple"
    boxShadow='dark-lg'
    p="10"
    >
      <text>
        Lesson 1:
      </text>
    </Box>
  </SimpleGrid>
  </>
 );
}

export default LessonPage;