import { Container, Heading, VStack, Box, Input, useColorModeValue, Button} from "@chakra-ui/react";
import { useState } from "react";


const ProductCreatepage = () => {
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: "",
    });

    const handleCreateProduct = async () => {
        console.log(newProduct);
    }

  return (
    <Container>
        <VStack spacing={8}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
                Create New Product
            </Heading>

            <Box 
                w={"full"} 
                bg={useColorModeValue("white", "gray.900")} 
                package={4} 
                rounded={"lg"} 
                p={6} 
                shadow={"md"}>

                <VStack spacing={4}>
                    <Input
                        placeholder="Product Name"
                        value={newProduct.name}
                        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                    />
                    {/* <Input
                        placeholder="Product Description"
                        value={newProduct.description}
                        onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                    /> */}
                    <Input
                        placeholder="Product Price"
                        type="number"
                        value={newProduct.price}
                        onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                    />
                    <Input
                        placeholder="Product Image URL"
                        value={newProduct.image}
                        onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                    />

                    <Button width={"full"} colorScheme={"teal"} variant={"solid"} onClick={handleCreateProduct}>
                        Create Product
                    </Button>
                </VStack>
            
            </Box>
        </VStack>
    </Container>
  )
}

export default ProductCreatepage