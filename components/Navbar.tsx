import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      fontWeight="700"
      fontSize="18px"
      textTransform="uppercase"
      w="calc(100% - 140px )"
      pos="fixed"
      zIndex="2"
    >
      <Box>
        <Text> About </Text>
      </Box>
      <HStack alignItems="center">
        <Image src="/Group 4.svg" alt="company logo" />{" "}
        <Text as="span"> 313 NET</Text>
      </HStack>
      <Box>
        <Text> Arts </Text>
      </Box>
    </Flex>
  );
};

export default Navbar;
