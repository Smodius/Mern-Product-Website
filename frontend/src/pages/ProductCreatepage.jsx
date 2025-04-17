import { Container, Heading, VStack, Box, Input, useColorModeValue, Button, useToast} from "@chakra-ui/react";
import { useState } from "react";
import { useProductStore } from "../store/product";

const ProductCreatepage = () => {
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: "",
    });

    const {createProduct} = useProductStore()
    const toast = useToast()


    const handleCreateProduct = async () => {

        const { success, message } = await createProduct(newProduct);
        // try {
        //     // setNewProduct({ name: "", price: "", image: "" });
            

        // } catch (error) {
        //     console.error("Failed to create product:", error);
        // }

        if (!success) {
            toast({
                title: "Error",
                description: message,
                status: "error",
                duration: 2500,
                isClosable: true,
            });
        }
        else {
            toast({
                title: "Success",
                description: message,
                status: "success",
                duration: 2500,
                isClosable: true,
            });
        }

    }

  return (
    <Container justifyItems={"center"} alignItems={"center"}>
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