import { Box, Flex, Text } from "@chakra-ui/react";
import Content from "../components/Content";
import Navbar from "../components/Navbar";

export default function Home() {
  // Intersection Observer API to change the text color to white
  return (
    <Box>
      <Navbar />
      <Box
        pt={["", "", "", "", "140px", "168px"]}
        mb={["", "", "", "", "38px", "46px"]}
      >
        {/* <Content /> */}
      </Box>
      <Flex
        textTransform="uppercase"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text> Contact</Text>
        <Text fontWeight="700" color="#0000007a">
          {" "}
          313.NET | ALL RIGHTS RESERVED©{" "}
        </Text>
        <Text letterSpacing="-1px"> 01 ——— 19 </Text>
      </Flex>
    </Box>
  );
}
