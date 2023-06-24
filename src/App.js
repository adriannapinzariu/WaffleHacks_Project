import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Box, VStack, Heading, Text, Link, Button, useColorModeValue, Flex, Spacer, Avatar, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import { Html } from '@react-three/drei';



const MotionBox = motion(Box);
const MotionButton = motion(Button);

function Cube() {
  const mesh = useRef();
  const colors = ['#ADD8E6', '#9DB2E1', '#8D8CDC', '#7D66D7', '#6D40D2', '#5C1ACD', '#4B00C9', ];
  const color = colors[Math.floor(Math.random() * colors.length)];

  useFrame(() => {
    mesh.current.position.y -= 0.1;
    if (mesh.current.position.y < -50) mesh.current.position.y = 100;

    // Animation Logic independent of mouse position
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh position={[Math.random() * 100 - 50, Math.random() * 100, Math.random() * 100 - 50]} ref={mesh}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}


const buttonVariants = {
  hover: { scale: 1.1 },
  tap: { scale: 0.9 },
};

// Navbar
function Navbar() {
  return (
    <Flex p="2" bg="whiteAlpha.900" boxShadow="md" position="sticky" top={0} zIndex={3}>
      <Heading size="md" ml="2">ASL Journey</Heading>
      <Spacer />
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          <Avatar size="sm" />
        </MenuButton>
        <MenuList>
          <MenuItem>Profile</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}

// Footer
function Footer() {
  return (
    <Flex p="2" bg="whiteAlpha.900" boxShadow="md" position="sticky" bottom={0} zIndex={3}>
      <Text fontSize="sm">© 2023 ASL Journey</Text>
      <Spacer />
      <Link href="#">Privacy Policy</Link>
      <Link ml="5" href="#">Terms of Service</Link>
    </Flex>
  );
}


function App() {
  const bgGradient = useColorModeValue("linear(to-br, #ADD8E6, #E6E6FA)", "linear(to-br, #4b5178, #3a4062)");

  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Navbar />

      <MotionBox
        flex="1"
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
          borderWidth={2}
          borderColor={useColorModeValue("#4b5178", "white")}
        >
          <VStack spacing={2} textAlign="center" maxW={'lg'}>
            <Heading 
              fontSize="6xl" 
              fontWeight="bold" 
              lineHeight="tight" 
              letterSpacing={"-.1rem"} 
              color={useColorModeValue("#4b5178", "white")}
            >
              Start Your ASL Journey
            </Heading>
            <Text 
              fontSize="2xl" 
              color={useColorModeValue("#4b5178", "white")}
            >
              Dive into the exciting world of sign language. Ready to get started?
            </Text>
            <Link to="/login">
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
        </Box>
      </MotionBox>

      <Footer />
    </Box>
  );
}


export default App;
