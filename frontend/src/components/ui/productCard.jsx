import { Box, Heading, HStack, IconButton, Image, Text, useColorModeValue } from "@chakra-ui/react"
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { useToast } from "@chakra-ui/react";



const ProductCards = ({product}) => {
    const textcolor = useColorModeValue("gray.800", "white")
    const toast = useToast()
    // const handleEditProducts = () => {
    //     // Logic to handle edit product
    // }
    const handleDeleteProducts = async() => {
        const {success, message} = await deleteProduct(product._id);
        if (!success) {
            toast({
                title: "Error",
                description: message,
                status: "error",
                duration: 2500,
                isClosable: true,
            });
        } else {
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
    <Box
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "translaterY(-5px)", shadow: "xl" }}>
       
        <Box p={4}>
            <Image src={product.image} alt={product.name} width="100%" height="200px" objectFit="cover" />

            <Heading as="h3" size="lg" mb={2}>
                {product.name}
            </Heading>

            <Text fontWeight='bold' fontSize="xl" color="white" mb={4}>
                ${product.price}
            </Text>
            <HStack spacing={2}>
                <IconButton icon={<EditIcon color="white" />} colorScheme="teal" aria-label="Edit Product" />
                <IconButton icon={<DeleteIcon />} colorScheme="teal" aria-label="Delete Product" onClick={handleDeleteProducts} />
            </HStack>
        </Box>

    </Box>
  )
}

export default ProductCards