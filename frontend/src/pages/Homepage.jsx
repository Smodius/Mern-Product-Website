
import ProductCards from "../components/ui/ProductCard";
import { useProductStore } from "../store/product";
import { Container, VStack, SimpleGrid, Box, Text} from '@chakra-ui/react'
import { useEffect } from 'react'
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
                <ProductCards key = {product._id} product={product} /> // pass the product as a prop to the ProductCards component
              ))}
            </SimpleGrid>
              
            {products.length === 0 && (
              <Container maxW="container.xl" py={24}>
              <Text fontSize="2xl" textAlign={"center"} fontWeight="bold" color="gray.500">
                No Products yet!🤔{" "}          
              </Text>
              <Text textAlign={"center"} color="teal.500" _hover={{ textDecoration:"underline"}} >
                    <Link to="/create">
                      Create one now!
                    </Link>
                  </Text>
            </Container>
            )}
    
          </VStack>
        </Container>
      )
     
  }
  

export default Homepage