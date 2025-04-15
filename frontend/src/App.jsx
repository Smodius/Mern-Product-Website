import { Box, Button, Text } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import ProductCreatepage from "./pages/ProductCreatepage";
import Homepage from "./pages/Homepage";
import Navbar from "./components/ui/Navbar";


function App() {
  return (
    // <Box p={4} bg="gray.100">
    //   <Text fontSize="2xl" color="teal.500">
    //     Chakra is finally working!
    //   </Text>
    //   <Button mt={4} colorScheme="teal">
    //     Click Me
    //   </Button>
    // </Box>

    <Box minH={"100vh"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<ProductCreatepage />} />
      </Routes>
    </Box>
  );
}

export default App;