import { Box, Flex, HStack, Image, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

const Navbar = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      fontWeight="700"
      fontSize="18px"
      textTransform="uppercase"
      w={[
        "calc(100% - 40px)",
        "",
        "calc(100% - 80px)",
        "",
        "calc(100% - 140px)",
        "calc(100% - 270px)",
      ]}
      // pos="fixed"
      zIndex="3"
    >
      <Box>
        <NextLink href="/" passHref>
          <Link href="">
            <Text> home </Text>
          </Link>
        </NextLink>
      </Box>
      <HStack alignItems="center">
        <Image src="/Group 4.svg" alt="company logo" />{" "}
        <Text as="span"> 313 NET</Text>
      </HStack>
      <Box>
        <NextLink href="/arts" passHref>
          <Link href="">
            <Text> arts </Text>
          </Link>
        </NextLink>
      </Box>
    </Flex>
  );
};

export default Navbar;
