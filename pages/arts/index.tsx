import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Content from "../../components/Content";
import Navbar from "../../components/Navbar";
import { artInfo } from "../../data";

export default function Arts() {
  return (
    <Box>
      <Box pos="fixed" w="100%">
        <Navbar />
      </Box>
      <Box
        pt={["80px", "", "80px", "100px", "100px", "168px"]}
        mb={["", "", "", "", "38px", "46px"]}
      >
        {artInfo.map((art, i) => (
          <Content art={art} key={i} />
        ))}
      </Box>
    </Box>
  );
}
