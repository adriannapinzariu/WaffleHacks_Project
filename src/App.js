import React from 'react';
import { Box, Heading, Text, Link, Button, VStack, Image, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionButton = motion(Button);

function App() {
  const bgGradient = useColorModeValue("linear(to-br, #ADD8E6, #E6E6FA)", "linear(to-br, #4b5178, #3a4062)");

  const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.9 },
  };

  return (
    <MotionBox
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgGradient={bgGradient}
      padding={4}
      animate={{ scale: [0.95, 1], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
    >
      <VStack spacing={8} textAlign="center" maxW={'lg'}>
        <Image 
          borderRadius="full"
          boxSize="150px"
          src="/asl-learning-logo.png" // Update with your app logo path
          alt="ASL Learning Logo"
          mb={4}
        />
        <Heading fontSize="6xl" color={useColorModeValue("#4b5178", "white")}>Start Your ASL Journey</Heading>
        <Text fontSize="2xl" color={useColorModeValue("#4b5178", "white")}>Dive into the exciting world of sign language. Ready to get started?</Text>
        <Link href="/get-started" isExternal>
          <MotionButton
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
            colorScheme="purple"
            size="lg"
            color="white"
          >
            Let's Go!
          </MotionButton>
        </Link>
      </VStack>
    </MotionBox>
  );
}

export default App;




