import { Box, Collapse, Flex, Heading, HStack, Image, Link, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import NextLink from 'next/link'

const Content = (props: any) => {
  const {id, art_name, art_name_cut, art_info, artiste, image,} = props.art
  const [show, setShow] = useState(false)
  const handleToggle = () => setShow(!show)
  return (
    <Box w="100%">
      <Flex justifyContent="space-between" alignItems="center">
        <HStack spacing="37px" alignItems="center">
          <Heading
            fontWeight="400"
            fontSize={["", "", "", "", "80px", "180px"]}
            lineHeight='70px'
            // textTransform='lowercase'
            display='inline'
          >
            {" "}
            {art_name + ' ' + art_name_cut} 
            <Text as='span'> - {artiste} </Text>
          </Heading>
          <HStack>
            <Box lineHeight="24px">
              {/* <Text>
                We are an award-winning digital production studio based in
                Sweden specialising in CGI, Animation, Design and Retouching or
                dynamic levels 3D.
              </Text> */}
              {/* <Text fontSize='18px' fontWeight='400' mt='16px'>{artiste} </Text> */}
            </Box>
          </HStack>
        </HStack>
        <HStack spacing="30px">
          <Image src="/Iconweb.png" alt="graphics" />
          <Box>
            <Image src="/serialInfo.png" alt="serial identity" mb="24px" />
            <Image src="/qrcode.png" alt="QR code" />
          </Box>
        </HStack>
      </Flex>
      <Collapse startingHeight='270px' in={show}>
        <Box
          h={["", "", "", "", "560px", "610px"]}
          w="100%"
          pb="46px"
          overflow="hidden"
          // _hover={{bgColor: '#000000ab'}}
          mt="37px"
          zIndex='2'
          >
          <Image
          zIndex='1'
            as={motion.img}
            initial={{ scale: 1 }}
            whileInView={{
              scale: [1, 4, 1],
              transition: { duration: 30, repeat: Infinity, repeatDelay: 7 },
            }}
            src={image}
            alt="image"
            w="100%"
            h="100%"
            objectFit="cover"
            objectPosition="center"
            onClick={handleToggle}
            mb='60px'
          />
        </Box>
      </Collapse>
      <Flex justifyContent='space-between' pt={['','','','','10px','60px']}  borderBottom='1px solid ' pb='10px' mb='40px'>
        <Text></Text>
        <NextLink href='/' passHref>
          <Link href=''>
            <Text>View Detail </Text>
          </Link>
        </NextLink>
      </Flex>
    </Box>
  );
};

export default Content;
