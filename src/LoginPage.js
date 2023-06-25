import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Box, Button, FormControl, FormLabel, Input, VStack, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { motion } from 'framer-motion';


const MotionBox = motion(Box);
const MotionButton = motion(Button);

const buttonVariants = {
  hover: { scale: 1.1 },
  tap: { scale: 0.9 },
};

function randomPurpleColor() {
    const colors = [
        '#ADD8E6', '#9DB2E1', '#8D8CDC', '#7D66D7', '#6D40D2', '#5C1ACD', '#4B00C9',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

function Model({ modelPath, position, scale }) {
    const [model, setModel] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const ref = useRef();
    const color = useRef(randomPurpleColor());

    useEffect(() => {
        const loader = new GLTFLoader();

        loader.load(
            modelPath,
            (gltf) => {
                gltf.scene.traverse((child) => {
                    if (child.isMesh) {
                        child.material = new THREE.MeshBasicMaterial({ color: color.current, wireframe: true });
                    }
                });
                setModel(gltf.scene);
                setIsLoading(false);
            },
            undefined,
            (error) => {
                setError(error);
                setIsLoading(false);
            }
        );
    }, [modelPath]);

    useFrame((state, delta) => {
        if(ref.current) {
            ref.current.rotation.x += 0.005;
            ref.current.rotation.y += 0.005;
    
            // Check if the object has reached the bottom of the screen
            if (ref.current.position.y <= -50) {
                // Reset the position to the top of the screen
                ref.current.position.y = 100;
                // Also randomize the x and z position when resetting the y
                ref.current.position.x = (Math.random() - 0.5) * 100;
                ref.current.position.z = (Math.random() - 0.5) * 100;
            } else {
                // Reduce the y position to simulate falling
                ref.current.position.y -= 0.05;
            }
        }
    });
    



    if(isLoading) {
        return <Html><div>Loading...</div></Html>;
    }

    if(error) {
        return <Html><div>Error: {error.message}</div></Html>;
    }

    return model ? <primitive object={model} position={position} scale={scale} ref={ref} /> : null;
}



function LoginPage() {
    const bgGradient = useColorModeValue("linear(to-br, #4b5178, #3a4062)", "linear(to-br, #4b5178, #3a4062)");
  
    return (
        <Box minHeight="100vh" minWidth="100" display="flex" flexDirection="column" backgroundColor="#000000">

<MotionBox
    width="100vw"
    height="100vh"
    flex="1"
    display="flex"
    alignItems="center"
    justifyContent="center"
    bgGradient={bgGradient}
    padding={4}
    animate={{ scale: [0.95, 1], opacity: [0, 1] }}
    transition={{ duration: 0.5 }}
>

           <Canvas style={{ position: "absolute", width: "100%", height: "100%", zIndex: 1, background: "#000000" }}>

              <ambientLight />
              <pointLight position={[10, 10, 10]} />
              <OrbitControls />
              {Array.from({length: 100}).map((_, i) => (
                <Model 
                    key={i} 
                    modelPath={'/3D/puzzlePiece1.glb'} 
                    position={[(Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100]}
                    scale={0.75}
                />
              ))}
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