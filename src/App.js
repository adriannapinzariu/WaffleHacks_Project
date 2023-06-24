import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, VStack, Heading, Text, Link, Button, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

function Cube() {
  const mesh = useRef();
  const colors = ['#ADD8E6', '#9DB2E1', '#8D8CDC', '#7D66D7', '#6D40D2', '#5C1ACD', '#4B00C9', ];

  const color = colors[Math.floor(Math.random() * colors.length)];

  useFrame(() => {
    mesh.current.position.y -= 0.1;
    if (mesh.current.position.y < -50) mesh.current.position.y = 100;
  });

  return (
    <mesh position={[Math.random() * 100 - 50, Math.random() * 100, Math.random() * 100 - 50]} ref={mesh}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

function App() {
  const bgGradient = useColorModeValue("linear(to-br, #ADD8E6, #E6E6FA)", "linear(to-br, #4b5178, #3a4062)");

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
      <Canvas style={{ position: "absolute", zIndex: 1 }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {[...Array(200)].map((_, i) => <Cube key={i} />)}
      </Canvas>

      <Box 
        zIndex={2} 
        bg="whiteAlpha.800" 
        p={5} 
        rounded="xl" 
        shadow="2xl"
        backdropFilter="blur(10px)"
        borderWidth={1}
        borderColor={useColorModeValue("#4b5178", "white")}
      >
        <VStack spacing={8} textAlign="center" maxW={'lg'}>
          <Heading fontSize="6xl" color={useColorModeValue("#4b5178", "white")}>Start Your ASL Journey</Heading>
          <Text fontSize="2xl" color={useColorModeValue("#4b5178", "white")}>Dive into the exciting world of sign language. Ready to get started?</Text>
          <Link href="/get-started" isExternal>
            <Button colorScheme="purple" size="lg" color="white">Let's Go!</Button>
          </Link>
        </VStack>
      </Box>
    </MotionBox>
  );
}

export default App;
