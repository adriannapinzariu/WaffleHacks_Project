import React from 'react';
import { Button, Box, Flex, Heading, Text, Center, Spacer, Grid, Circle } from '@chakra-ui/react';
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import DrawerExample from "./sidebar";

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

function LessonPage() {
  return (
    <ChakraProvider theme={theme}>
      <DrawerExample />

      <Flex
        direction="column"
        align="center"
        maxW={{ xl: "1200px" }}
        m="0 auto"
      >
        <Box p={5} bg="purple" color="white" boxShadow="md" w={{ base: "90%", md: "50%" }} rounded="lg" m={5}>
          <Heading as="h2" mb={2}>Unit 1</Heading>
          <Text>Order food, describe people</Text>
        </Box>

        <Heading as="h2" mt={10}>
          Lessons
        </Heading>

        <Grid
          templateRows={{ sm: "repeat(7, 1fr)" }}
          templateColumns={{ sm: "repeat(3, 1fr)" }}
          gap={6}
          p={10}
        >
          <Circle as={Button} size="100px" bgGradient="linear(to-br, #4b5178, #3a4062)" color="white" boxShadow="2xl" p={2} gridRow="1" gridColumn="2">Lesson 1</Circle>
          <Circle as={Button} size="100px" bgGradient="linear(to-br, #4b5178, #3a4062)" color="white" boxShadow="2xl" p={2} gridRow="2" gridColumn="1">Lesson 2</Circle>
          <Circle as={Button} size="100px" bgGradient="linear(to-br, #4b5178, #3a4062)" color="white" boxShadow="2xl" p={2} gridRow="3" gridColumn="1">Lesson 3</Circle>
          <Circle as={Button} size="100px" bgGradient="linear(to-br, #4b5178, #3a4062)" color="white" boxShadow="2xl" p={2} gridRow="4" gridColumn="2">Lesson 4</Circle>
          
          {/* Add more lessons as you wish */}
        </Grid>
      </Flex>
    </ChakraProvider>
  );
}

export default LessonPage;
