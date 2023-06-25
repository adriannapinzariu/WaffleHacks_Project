import React, { useEffect, useState } from 'react';
import { Button, Box, Flex, Heading, Text, Grid, Circle, useColorModeValue } from '@chakra-ui/react';
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Canvas, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { MeshBasicMaterial } from 'three';
import { motion } from 'framer-motion';

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

const MotionBox = motion(Box);
const MotionCircle = motion(Circle);

function Model() {
  const ref = React.useRef();
  const colors = ['#ADD8E6', '#9DB2E1', '#8D8CDC', '#7D66D7', '#6D40D2', '#5C1ACD', '#4B00C9', ];
  const color = colors[Math.floor(Math.random() * colors.length)];
  const [model, setModel] = useState();

  useEffect(() => {
    new GLTFLoader().load('/3D/puzzlePiece1.glb', (gltf) => {
      gltf.scene.traverse((child) => {
        if (child.isMesh) {
          child.material = new MeshBasicMaterial({ wireframe: true, color });
        }
      });
      setModel(gltf);
    });
  }, [color])

  useFrame(() => {
    if (ref.current) {
      ref.current.position.y -= 0.1;
      if (ref.current.position.y < -50) ref.current.position.y = 100;
  
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
    }
  });

  return model ? <primitive object={model.scene} position={[Math.random() * 100 - 50, Math.random() * 100, Math.random() * 100 - 50]} ref={ref} /> : null;
}

function LessonPage() {
  const bgGradient = useColorModeValue("linear(to-br, #4b5178, #3a4062)", "linear(to-br, #4b5178, #3a4062)");
  
  return (
    <ChakraProvider theme={theme}>
      <DrawerExample />

      <MotionBox 
        minHeight="100vh" 
        display="flex" 
        flexDirection="column" 
        backgroundColor="#000000"
        animate={{ scale: [0.95, 1], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <Canvas style={{ position: "absolute", zIndex: 1, background: "#000000" }}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          {[...Array(200)].map((_, i) => <Model key={i} />)}
        </Canvas>

        <Flex
          direction="column"
          align="center"
          maxW={{ xl: "1200px" }}
          m="0 auto"
          zIndex={2}
        >
          <Box p={5} bg="#1a202c" color="white" boxShadow="md" w={{ base: "90%", md: "70%" }} rounded="lg" m={5} borderWidth={2}
            borderColor={useColorModeValue("#4b5178", "white")}>
            <Heading as="h2" mb={2}>Unit 1</Heading>
            <Text fontSize="xl">Order food, describe people</Text>
          </Box>

          <Heading as="h2" mt={10} color="white">
            Lessons
          </Heading>

          <Grid
            templateRows={{ sm: "repeat(7, 1fr)" }}
            templateColumns={{ sm: "repeat(3, 1fr)" }}
            gap={6}
            p={10}
          >
            <MotionCircle 
              as={Button} 
              size="120px" 
              bgGradient={bgGradient} 
              color="white" 
              boxShadow="2xl" 
              p={2} 
              gridRow="1" 
              gridColumn="2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Lesson 1
            </MotionCircle>
            <MotionCircle 
              as={Button} 
              size="120px" 
              bgGradient={bgGradient} 
              color="white" 
              boxShadow="2xl" 
              p={2} 
              gridRow="2" 
              gridColumn="1"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Lesson 2
            </MotionCircle>
            <MotionCircle 
              as={Button} 
              size="120px" 
              bgGradient={bgGradient} 
              color="white" 
              boxShadow="2xl" 
              p={2} 
              gridRow="3" 
              gridColumn="1"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Lesson 3
            </MotionCircle>
            <MotionCircle 
              as={Button} 
              size="120px" 
              bgGradient={bgGradient} 
              color="white" 
              boxShadow="2xl" 
              p={2} 
              gridRow="4" 
              gridColumn="2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Lesson 4
            </MotionCircle>
            
            {/* Add more lessons as you wish */}
          </Grid>
        </Flex>
      </MotionBox>
    </ChakraProvider>
  );
}

export default LessonPage;
