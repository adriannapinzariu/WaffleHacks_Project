import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
  Link,
  Heading,
  Center,
  Image,
  Stack,
  Text,
  Container,
  Grid,
  GridItem,
  Flex
} from "@chakra-ui/react";

function DrawerExample({ children, ...rest }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} colorScheme="white" onClick={onOpen}>
      </Button>
      <Drawer
        variant="alwaysOpen"
        {...rest}
        isOpen={true}
        placement="left"
        onClose={onClose}
        trapFocus={false}
        closeOnOverlayClick={false}
        blockScrollOnMount={false}
      >
        {/* <DrawerOverlay /> */}
    <DrawerContent>
    <Stack spacing={10}>
    <DrawerHeader>
            <Center>
                <Heading color='purple'>ASLingo</Heading>
            </Center>
          </DrawerHeader>
          <DrawerBody>
            <Stack spacing={1}>
                <Grid 
                templateColumns='repeat(2, 75px)' 
                gap={4}>
                    <GridItem w='100px' h='1'>
                        <Image 
                            src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/house-icon.png"
                            boxSize="50px"
                        ></Image>
                    </GridItem>
                    <GridItem w='100%' h='100px'>
                        <Text
                        fontSize="xl"
                        >
                            Home
                        </Text>
                        
                    </GridItem>
                </Grid>
                <Grid 
                templateColumns='repeat(2, 75px)' 
                gap={4}>
                    <GridItem w='100px' h='1'>
                        <Image 
                            src="https://www.iconpacks.net/icons/2/free-store-icon-2017-thumb.png"
                            boxSize="50px"
                        ></Image>
                    </GridItem>
                    <GridItem w='100%' h='100px'>
                        <Text
                        fontSize="xl"
                        >
                            Shop
                        </Text>
                    </GridItem>
                </Grid>
                <Grid 
                templateColumns='repeat(2, 75px)' 
                gap={4}>
                    <GridItem w='100px' h='1'>
                        <Image 
                            src="https://cdn.onlinewebfonts.com/svg/img_569204.png"
                            boxSize="50px"
                        ></Image>
                    </GridItem>
                    <GridItem w='100%' h='100px'>
                        <Text
                        fontSize="xl"
                        >
                            Profile
                        </Text>
                    </GridItem>
                </Grid>

            </Stack>   
          </DrawerBody>
    </Stack>
          
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerExample;
