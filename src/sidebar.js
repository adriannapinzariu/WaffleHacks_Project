import React from "react";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  Button,
  Image,
  VStack,
  Text,
  Grid,
  GridItem,
  Center,
  Heading,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronRightIcon } from '@chakra-ui/icons';

function DrawerExample({ children, ...rest }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const navigationItems = [
    { name: 'Home', src: 'https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/house-icon.png' },
    { name: 'Shop', src: 'https://www.iconpacks.net/icons/2/free-store-icon-2017-thumb.png' },
    { name: 'Profile', src: 'https://cdn.onlinewebfonts.com/svg/img_569204.png' },
    { name: 'Settings', src: 'https://www.iconfinder.com/data/icons/feather-2/24/settings-512.png' },
    { name: 'Support', src: 'https://www.iconfinder.com/data/icons/feather-2/24/life-buoy-512.png' },
  ];

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
        <DrawerContent bg="#1a202c" color="white">
          <DrawerHeader borderBottomWidth="1px" borderColor="#4b5178">
            <Center>
              <Heading color='white'>ASLingo</Heading>
            </Center>
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={6} align="stretch">
              {navigationItems.map((item, index) => (
                <Box key={index} rounded={'md'}>
                  <Grid templateColumns='repeat(3, 1fr)' gap={4}
                        align="center" p={2} _hover={{ bg: '#4A5568' }}>
                    <GridItem>
                      <Image 
                        src={item.src}
                        boxSize="40px"
                      />
                    </GridItem>
                    <GridItem colSpan={2}>
                      <Box p={2} display={{ md: 'flex' }}>
                        <Text fontSize="xl" color="white" fontWeight="bold" ml={2}>
                          {item.name}
                        </Text>
                        <Box flexGrow={1} />
                        <ChevronRightIcon color="white" />
                      </Box>
                    </GridItem>
                  </Grid>
                </Box>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerExample;
