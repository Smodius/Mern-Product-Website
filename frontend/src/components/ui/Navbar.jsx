import React from 'react'
import { Box, Button, Container, Flex,Text,Link, HStack } from '@chakra-ui/react'
import { CiSquarePlus } from "react-icons/ci"

const Navbar = () => {
// const { colorMode, toggleColorMode } = useColorMode()
  return ( 
    <Container maxW={"1140px"} px="2">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"} flexDirection={{base:"column", sm:"row"}}>
            <Text
					fontSize={{ base: "22", sm: "28" }}
					fontWeight={"bold"}
					textTransform={"uppercase"}
					textAlign={"center"}
					bgGradient="linear(to-r, teal.400, teal.600)"
					bgClip={"text"}
				>
					<Link to={"/"}>Product Store 🛒</Link>
				</Text>

                <HStack spacing ={2} alignItems={"center"}>
                    <Link to={"/create"}>
                        <Button colorScheme={"teal"} variant={"solid"}>
                            <CiSquarePlus fontSize={20} /> Create Product   
                        </Button> 
                        {/* <Button onClick={toggleColorMode} colorScheme={"teal"} variant={"solid"}>
                            <CiSquarePlus fontSize={20} /> 
                            {colorMode === "light" ? "Dark" : "Light"} Mode 
                        </Button>  */}
                    </Link>
                </HStack>
        </Flex>
    </Container>
  )
}

export default Navbar