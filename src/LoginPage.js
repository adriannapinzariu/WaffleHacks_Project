import React from 'react';
import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

function LoginPage() {
  return (
    <Box padding="6" maxW="400px" margin="auto">
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
