import { useState } from "react";
import { Container, VStack, Input, Button, Text, Box, FormControl, FormLabel, Heading, Image, IconButton } from "@chakra-ui/react";
import { FaUser, FaLock, FaSignInAlt } from "react-icons/fa";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // For simplicity, we assume any non-empty username and password is valid
    if (username && password) {
      setIsLoggedIn(true);
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      {!isLoggedIn ? (
        <VStack spacing={4} width="100%">
          <Heading as="h1" size="xl">
            Matrimonial Website
          </Heading>
          <FormControl id="username">
            <FormLabel>Username</FormLabel>
            <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your username" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
          </FormControl>
          <Button leftIcon={<FaSignInAlt />} colorScheme="teal" onClick={handleLogin}>
            Login
          </Button>
        </VStack>
      ) : (
        <VStack spacing={4} width="100%">
          <Heading as="h1" size="xl">
            Welcome to the Matrimonial Website
          </Heading>
          <Text fontSize="lg">Find your perfect match</Text>
          <Image src="https://images.unsplash.com/photo-1457367756802-2c6127b8ad11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNvdXBsZXxlbnwwfHx8fDE3MTcxNTc5Mjl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Happy Couple" borderRadius="md" />
          <Box>
            <Text fontSize="md">Username: {username}</Text>
          </Box>
          <Button colorScheme="teal" onClick={() => setIsLoggedIn(false)}>
            Logout
          </Button>
        </VStack>
      )}
    </Container>
  );
};

export default Index;
