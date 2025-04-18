import {
    Box,
    Heading,
    HStack,
    IconButton,
    Image,
    Text,
    useColorModeValue,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button,
    Input,
    VStack,
    useDisclosure,
    useToast
  } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { useProductStore } from "../../store/product";
import { useState } from "react";




const ProductCards = ({product}) => {
    const [updatedProduct, setUpdatedProduct] = useState(product);
    const {deleteProduct, updateProducts} = useProductStore()
    const textcolor = useColorModeValue("white", "white")
    const toast = useToast()
    const bg = useColorModeValue("gray.500", "gray.900")
    const { isOpen, onOpen, onClose } = useDisclosure()


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
    const handleEditProducts = async (id, updatedProduct) => {
        const { success, message } = await updateProducts(id, updatedProduct);        
        onClose();
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
      _hover={{ transform: "translateY(-5px)", shadow: "2xl" }}
      bg={bg}>

       <Image src={product.image} alt={product.name} width="100%" h={48} w="full" objectFit="cover" />
        <Box p={4}>    

            <Heading as="h3" size="lg" mb={2}>
                {product.name}
            </Heading>

            <Text fontWeight='bold' fontSize="xl" mb={4} color={textcolor}>
                ${product.price}
            </Text>
            <HStack spacing={2}>
                <IconButton icon={<EditIcon color="teal" />} colorScheme="gray" aria-label="Edit Product" onClick={onOpen}/>
                <IconButton icon={<DeleteIcon color="red"/>} colorScheme="gray" aria-label="Delete Product" onClick={()=>handleDeleteProducts(product._id,updateProducts)} />
            </HStack>
        </Box>

        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Edit Product</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <VStack spacing={4}>
                        <Input placeholder="Product Name" name="name" value={updatedProduct.name} onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })} />
                        <Input placeholder="Product Price" name="price" value={updatedProduct.price} onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })} />
                        <Input placeholder="Product Image URL" name="image" value={updatedProduct.image} onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })} />
                    </VStack>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme="teal" mr={3} onClick={() => handleEditProducts(product._id, updatedProduct)}>
                        Save
                    </Button>
                    <Button variant="ghost" onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>

    </Box>
  )
}

export default ProductCards