import { useProductStore } from "../store/product";
import { Container, VStack, SimpleGrid, Box, Text} from '@chakra-ui/react'
import { use, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  const{fetchProducts, products} = useProductStore()
  useEffect(() => {
    fetchProducts();  
    }, [fetchProducts]);
    console.log("products", products);

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

        <SimpleGrid columns={{base:1, md:2, lg:3}} spacing={10} w={"full"}>
          {products.map((product) => (
            <Box key={product._id} p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Text fontSize="xl" fontWeight="bold">{product.name}</Text>
              <Text mt={2}>Price: ${product.price}</Text>
              <Text mt={2}>{product.description}</Text>
              <Link to={`/products/${product._id}`}>
                <Text color="teal.500" mt={2} textDecoration="underline">View Details</Text>
              </Link>
            </Box>
          ))}
        </SimpleGrid>

        <Text fontSize="2xl" textAlign={"center"} fontWeight="bold" color="gray.500">
          No Products yet!🤔{" "}          
        </Text>
        <Text color="teal.500" _hover={{ textDecoration:"underline"}} >
              <Link to="/create">
                Create one now!
              </Link>
            </Text>

      </VStack>
    </Container>
  )
}

export default Homepage