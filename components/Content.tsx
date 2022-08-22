import {
  Box,
  Collapse,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import NextLink from "next/link";
import { useState } from "react";

const Content = (props: any) => {
  const { id, art_name, art_name_cut, art_info, artiste, image } = props.art;
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  return (
    <Box w="100%">
      <Flex justifyContent="space-between" alignItems="center">
        <HStack spacing="37px" alignItems="center">
          <NextLink href={"/arts/" + id} passHref>
            <Link href="">
              <Heading
                fontWeight={["500",'', '500']}
                fontSize={["34px", "", "32px", "40px", "80px", "120px"]}
                lineHeight={["22px", "", "28px", "34px", "70px", "96px"]}
                // textTransform='lowercase'
                display="inline"

              >
                {" "}
                {art_name + " " + art_name_cut}
                <Text as="span"> - {artiste} </Text>
              </Heading>
            </Link>
          </NextLink>
        </HStack>
      </Flex>
      <Box overflow="hidden" display={["none", "none", "block"]}>
        <Collapse startingHeight={"400px"} in={show}>
          <Box
            h={["", "", "", "", "500px", "610px"]}
            w="100%"
            pb={["0", "", "46px"]}
            overflow="hidden"
            mt="37px"
          >
            <Image
              as={motion.img}
              initial={{ scale: 1, opacity: 0.75 }}
              whileInView={{
                scale: [1, 4, 1],
                opacity: 1,
                transition: {
                  ease: "easeInOut",
                  duration: 30,
                  repeat: Infinity,
                  // delay: id,
                  repeatDelay: id + 7,
                },
              }}
              src={image}
              alt="image"
              w="100%"
              h="100%"
              objectFit="cover"
              objectPosition="center"
              onClick={handleToggle}
              mb={["20px", "", "60px"]}
            />
          </Box>
        </Collapse>
      </Box>
      <Box
        h={["", "", "", "", "500px", "610px"]}
        w="100%"
        pb={["0", "", "46px"]}
        overflow="hidden"
        mt="37px"
        display={["block, block", "none"]}
      >
        <Image
          as={motion.img}
          initial={{ scale: 1, opacity: 0.75 }}
          whileInView={{
            scale: [1, 4, 1],
            opacity: 1,
            transition: {
              ease: "easeInOut",
              duration: 30,
              repeat: Infinity,
              // delay: id,
              repeatDelay: id + 7,
            },
          }}
          src={image}
          alt="image"
          w="100%"
          h="100%"
          objectFit="cover"
          objectPosition="center"
          onClick={handleToggle}
          mb={["20px", "", "60px"]}
        />
      </Box>
      <Flex
        justifyContent="space-between"
        pt={["20px", "", "20px", "", "10px", "60px"]}
        borderBottom="1px solid "
        pb="10px"
        mb={["30px", "", "20px", "40px", "38px", "46px"]}
      >
        <Text></Text>
        <NextLink href={`/arts/${id}`} passHref>
          <Link href="">View Detail</Link>
        </NextLink>
      </Flex>
    </Box>
  );
};

export default Content;
