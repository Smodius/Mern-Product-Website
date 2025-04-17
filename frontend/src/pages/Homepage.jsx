import { Container, VStack, SimpleGrid, Box, Text} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <Container maxW="container.xl" py={24}>
      <VStack>
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgClip={"text"}
          color="teal.500"> 
            MarketPlace 
        </Text>
{/* 
        <SimpleGrid columns={3} gap="40px">
          <Box bg="blue.500" height="200px" />
          <Box bg="green.500" height="200px" />
          <Box bg="red.500" height="200px" />
        </SimpleGrid> */}

        <Text fontSize="2xl" textAlign={"center"} fontWeight="bold" color="gray.500">
          No Products yet!🤔{" "}
            <Text color="teal.500" _hover={{ textDecoration:"underline"}} >
              <Link to="/create">
                Create one now!
              </Link>
            </Text>
        </Text>

      </VStack>
    </Container>
  )
}

export default Homepage