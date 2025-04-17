import { Box, Heading, HStack, IconButton, Image, Text, useColorModeValue } from "@chakra-ui/react"
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { useToast } from "@chakra-ui/react";
import { useProductStore } from "../../store/product";
import { Button, CloseButton, Dialog, Portal } from "@chakra-ui/react"




const ProductCards = ({product}) => {
    const {deleteProduct, updateProducts} = useProductStore()
    const textcolor = useColorModeValue("white", "white")
    const toast = useToast()
    const bg=useColorModeValue("gray.500", "gray.900")
    
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

    const handleEditProducts = async() => {
        const {success, message} = await updateProducts(product._id, product);
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
      _hover={{ transform: "translaterY(5px)", shadow: "2xl" }}
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
                <IconButton icon={<EditIcon color="teal" />} colorScheme="gray" aria-label="Edit Product" />
                <IconButton icon={<DeleteIcon color="red"/>} colorScheme="gray" aria-label="Delete Product" onClick={handleDeleteProducts} />
            </HStack>
        </Box>

        <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="outline" size="sm">
          Open Dialog
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Dialog Title</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
                <VStack spacing={4}>
                    <Input
                        placeholder="Product Name"
                        name ="name"
                    />
                    <Input
                        placeholder="Product Price"
                        name="price"
                        type="number"
                    />
                    <Input
                        placeholder="Product Image URL"
                        name="image"
                    />
                </VStack>
                                    
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </Dialog.ActionTrigger>
              <Button>Save</Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>

    </Box>
  )
}

export default ProductCards