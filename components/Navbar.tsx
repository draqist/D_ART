import { Box, Flex, HStack, Image, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const navRef = useRef(null)
  const [scrollPosition, setScrollPosition] = useState(0);
  const [text, setText] = useState('black')
  const [toggle, setToggle] = useState(false)
const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
    if (scrollPosition >= 50) {
      setText('#f34c68')
      setToggle(true)
    } else if (scrollPosition < 170) {
      setText('black')
      setToggle(false)
    } else {
      return
    }
};
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    console.log(scrollPosition)
  }, [handleScroll])
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      fontWeight="900"
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
      ref={navRef}
      zIndex="3"
      color={text}
      backdropFilter= {toggle ? 'blur(1px)' : ''}
bgColor = 'transparent'
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
        <Text as="span"> 313.ART</Text>
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
