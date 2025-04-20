import React from 'react';
import { Box, Button, Container, Flex,Text, HStack } from '@chakra-ui/react';
import { CiSquarePlus } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";
import { useColorMode } from '@chakra-ui/react';
import { MdOutlineWbSunny } from "react-icons/md";
import { useColorModeValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useProductStore } from "../../store/product";




const Navbar = () => {
const { colorMode, toggleColorMode } = useColorMode()
const {products} = useProductStore()
  return ( 
    <Container maxW={"auto"} px="2">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"} flexDirection={{base:"column", sm:"row"}}>
            <Text
					fontSize={{ base: "22", sm: "28" }}
					fontWeight={"bold"}
					textTransform={"uppercase"}
					textAlign={"center"}
					bgGradient="linear(to-r, teal.400, teal.600)"
					bgClip={"text"}
				>
					<Link to={"/"}>🛒 Product Store </Link>
				</Text>

                <HStack spacing={2} alignItems={"center"}>
                    <Link to={"/create"}>
                        <Button colorScheme={"teal"} variant={"solid"} to={"/create"}>
                            <CiSquarePlus fontSize={20} /> 
                        </Button> 
                    </Link>
                        <Button onClick={toggleColorMode} colorScheme={"teal"} variant={"solid"}>
                            {colorMode === "light" ? <IoMoonOutline fontSize={20} /> : <MdOutlineWbSunny fontSize={20}/>}   
                        </Button> 
                </HStack>
        </Flex>
    </Container>
  )
}

export default Navbar