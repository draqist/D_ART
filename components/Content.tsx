import { Box, Collapse, Flex, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";

const Content = () => {
  const [show, setShow] = useState(false)
  const handleToggle = () => setShow(!show)
  return (
    <Box w="100%" pb={['','','','','50px','60px']} mb='40px' borderBottom='1px solid '>
      <Flex justifyContent="space-between" alignItems="center">
        <HStack spacing="37px" alignItems="center">
          <Heading
            fontWeight="400"
            fontSize={["", "", "", "", "150px", "180px"]}
          >
            {" "}
            midnight
          </Heading>
          <HStack>
            <Box w={["", "", "", "", "360px", "415px"]} lineHeight="24px">
              {/* <Heading> 01</Heading> */}
              <Text>
                We are an award-winning digital production studio based in
                Sweden specialising in CGI, Animation, Design and Retouching or
                dynamic levels 3D.
              </Text>
              {/* <Text fontSize='18px' fontWeight='400' mt='16px'> © by Jean Raoux, France </Text> */}
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
          _hover={{bgColor: '#000000ab'}}
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
            src="/europeana.jpg"
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
    </Box>
  );
};

export default Content;
