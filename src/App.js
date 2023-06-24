import React from 'react';
import { Box, Heading, Text, Link, Button, VStack } from '@chakra-ui/react';

function App() {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to-br, lightblue, #E6E6FA)"
    >
      <VStack spacing={8} textAlign="center">
        <Heading fontSize="6xl" color="#4b5178">Welcome to ASL Learning</Heading>
        <Text fontSize="2xl" color="#4b5178">Start learning sign language in a fun and easy way!</Text>
        <Link href="/get-started" isExternal>
          <Button colorScheme="purple" size="lg" color="white">
            Get Started
          </Button>
        </Link>
      </VStack>
    </Box>
  );
}

export default App;


