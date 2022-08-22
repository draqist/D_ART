import {
  Box,
  Collapse,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  // Intersection Observer API to change the text color to white
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  return (
    <Box>
      <Box w="100%" pos="fixed">
        <Navbar />
      </Box>
      <Box
        pt={["80px", "", "140px", "", "140px", "168px"]}
        mb={["", "", "", "", "38px", "46px"]}
      >
        <Box
          w="100%"
          pb={["0", "", "", "", "50px", "60px"]}
          mb={["100px", "", "80px", "120px", "40px", "40px"]}
        >
          <Flex
            direction={["column", "column", "row"]}
            justifyContent="space-between"
            alignItems="center"
          >
            <Heading
              fontWeight="400"
              fontSize={["45px", "", "60px", "80px", "150px", "180px"]}
            >
              {" "}
              Draq Midnight
            </Heading>
            <Box
              w={["", "", "280px", "360px", "360px", "415px"]}
              lineHeight="24px"
            >
              <Text>
                We are an award-winning digital production studio based in
                Sweden specialising in CGI, Animation, Design and Retouching or
                dynamic levels 3D.
              </Text>
            </Box>
          </Flex>
          <Box overflow="hidden" borderBottom="1px solid " pb="30px">
            <Box
              h={["", "", "600px", "700px", "560px", "610px"]}
              w="100%"
              pb="46px"
              overflow="hidden"
              mt="37px"
              zIndex="2"
            >
              <Image
                zIndex="1"
                as={motion.img}
                initial={{ scale: 1 }}
                whileInView={{
                  scale: [1, 4, 1],
                  transition: {
                    duration: 30,
                    repeat: Infinity,
                    repeatDelay: 7,
                  },
                }}
                src="/europeana.jpg"
                alt="image"
                w="100%"
                h="100%"
                objectFit="cover"
                objectPosition="center"
                onClick={handleToggle}
                mb={["0", "", "", "60px"]}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Flex
        textTransform="uppercase"
        justifyContent="space-between"
        alignItems="center"
        pos="absolute"
        bottom={["10px", "", "40px"]}
        w={[
          "calc(100% - 40px)",
          "",
          "calc(100% - 80px)",
          "",
          "calc(100% - 140px)",
          "calc(100% - 270px)",
        ]}
      >
        <Text> Contact</Text>
        <Text
          fontWeight="700"
          color="#0000007a"
          display={["none", "none", "block"]}
        >
          {" "}
          313.NET | ALL RIGHTS RESERVED©{" "}
        </Text>
        <Text letterSpacing="-1px"> 01 ——— 11 </Text>
      </Flex>
    </Box>
  );
}
