import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Box, Button, FormControl, FormLabel, Input, VStack, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { motion } from 'framer-motion';


import { MeshBasicMaterial } from 'three';


const MotionBox = motion(Box);
const MotionButton = motion(Button);


function Model() {
    const ref = useRef();
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
    }, [])
  
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
  
const buttonVariants = {
  hover: { scale: 1.1 },
  tap: { scale: 0.9 },
};


function LoginPage() {
    const bgGradient = useColorModeValue("linear(to-br, #4b5178, #3a4062)", "linear(to-br, #4b5178, #3a4062)");
  
    return (
      <Box minHeight="100vh" display="flex" flexDirection="column" backgroundColor="#000000">
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
          <Canvas style={{ position: "absolute", zIndex: 1, background: "#000000" }}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            {[...Array(200)].map((_, i) => <Model key={i} />)}
          </Canvas>
  
          <Box 
            zIndex={2} 
            bg="#1a202c" 
            p={5} 
            rounded="xl" 
            shadow="2xl"
            backdropFilter="blur(10px)"
            borderWidth={2}
            borderColor={useColorModeValue("#4b5178", "white")}
          >
            <VStack spacing={4}>
              <Heading 
                fontSize="4xl" 
                fontWeight="bold" 
                color={useColorModeValue("white", "white")}
              >
                Log in
              </Heading>
  
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
  
              <FormControl id="password" isRequired mt={4}>
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
  
              <MotionButton
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
                colorScheme="purple"
                size="lg"
                color="white"
                mt={4}
                width="100%"
                type="submit"
              >
                Log in
              </MotionButton>
            </VStack>
          </Box>
        </MotionBox>
      </Box>
    );
  }
  
  export default LoginPage;
  