import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function Model({ modelPath }) {
    const [model, setModel] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const ref = useRef();

    useEffect(() => {
        const loader = new GLTFLoader();
        
        loader.load(
            modelPath,
            (gltf) => {
                gltf.scene.traverse((child) => {
                    if (child.isMesh) {
                        child.material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true }); // Change to red color and set wireframe
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

    useFrame(() => {
        if(ref.current) {
            ref.current.rotation.x += 0.01;
            ref.current.rotation.y += 0.01;
        }
    });
  
    if(isLoading) {
        return <Html><div>Loading...</div></Html>;
    }
  
    if(error) {
        return <Html><div>Error: {error.message}</div></Html>;
    }
  
    return model ? <primitive object={model} ref={ref} /> : null;
}

function LoginPage() {
    return (
      <Box padding="6" maxW="400px" margin="auto">
        <Canvas style={{ width: "100%", height: "400px" }}>
          <Model modelPath={'/3D/puzzlePiece1.glb'} />
        </Canvas>

        <form>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>

          <FormControl id="password" isRequired mt={4}>
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>

          <Button mt={4} width="100%" type="submit">
            Log in
          </Button>
        </form>
      </Box>
    );
}

export default LoginPage;
