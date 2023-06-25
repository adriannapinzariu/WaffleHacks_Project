import React from 'react';
import { Button, Box, Flex, Heading, Text, Center, Spacer, Grid } from '@chakra-ui/react';
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
          templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
          gap={6}
          p={10}
        >
          <Box as={Button} size="md" h="100px" bg="purple" color="white" boxShadow="md">
            Lesson 1
          </Box>

          <Box as={Button} size="md" h="100px" bg="purple" color="white" boxShadow="md">
            Lesson 2
          </Box>

          <Box as={Button} size="md" h="100px" bg="purple" color="white" boxShadow="md">
            Lesson 3
          </Box>

          {/* Add more lessons as you wish */}

        </Grid>
      </Flex>
    </ChakraProvider>
  );
}

export default LessonPage;
