import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Content from "../../components/Content";
import Navbar from "../../components/Navbar";
import { artInfo } from "../../data";

export default function Arts() {
  return (
    <Box>
      <Box pos='fixed' w='100%'>
        <Navbar />
      </Box>
      <Box
        pt={["", "", "", "", "100px", "168px"]}
        mb={["", "", "", "", "38px", "46px"]}
      >
        {
          artInfo.map((art, i) => <Content art={art}  key={i} />)
        }
      </Box>
      <Flex
        textTransform="uppercase"
        justifyContent="space-between"
        alignItems="center"
        pos="absolute"
        bottom="20px"
        w="calc(100% - 140px )"
      >
        <Image
          w={["", "", "", "", "24px", "45px"]}
          src="/L.png"
          alt="left_navigation"
        />
        <Text fontWeight="700" color="#0000007a">
          {" "}
          313.NET | ALL RIGHTS RESERVED©{" "}
        </Text>
        <Image
          w={["", "", "", "", "24px", "45px"]}
          src="/R.png"
          alt="right_nav"
        />
      </Flex>
    </Box>
  );
}
