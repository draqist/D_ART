import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import NextLink from "next/link";
import Navbar from "../../components/Navbar";
import { artInfo } from "../../data";

const SubArts = ({ data }: any) => {
  const { art_name, art_name_cut, artiste, art_info, image, id } = data;

  function next() {
    // console.log(String("0" + (Number(id) + 1)))
    return String("0" + (Number(id) + 1));
  }
  function prev() {
    if (id === "01") {
      return String("0" + Number(id));
    } else {
      return String("0" + (Number(id) - 1));
    }
  }
  return (
    <Box>
      <Box w="100%" pos="fixed">
        <Navbar />
      </Box>
      <Box
        pt={["80px", "", "50px", "60px", "100px", "168px"]}
        mb={["", "", "", "", "38px", "46px"]}
        h={["", "", "", "", "620px", "100%"]}
        w="100%"
        pb="46px"
        overflow="hidden"
      >
        <Heading
          fontWeight="400"
          fontSize={["30px", "", "32px", "40px", "80px", "120px"]}
          lineHeight={["22px", "", "28px", "34px", "70px", "96px"]}
          // textTransform='lowercase'
          display="inline"
        >
          {" "}
          {art_name + " " + art_name_cut}
          <Text as="span"> - {artiste} </Text>
        </Heading>
        <Box mt="20px" overflow="hidden" h="100%">
          <Image
            zIndex="1"
            as={motion.img}
            src={image}
            alt="image"
            w="100%"
            objectFit="cover"
            objectPosition="top"
            mb={["", "", "", "0", "60px"]}
            initial={{ scale: 1 }}
            whileInView={{
              scale: [1, 3, 1],
              transition: { ease: "easeInOut", duration: 15, repeat: 0 },
            }}
            whileHover={{
              y: [0, -100, -200, -300, -400, -474, -400, -300, -200, -100, 0],
              transition: { ease: "easeInOut", duration: 20 },
            }}
          />
        </Box>
      </Box>
      <Flex
        flexDirection={["column", "column", "column", "row"]}
        alignItems="flex-start"
        justifyContent="space-between"
        gap="40px"
        mb={["70px", "", "50px"]}
      >
        <Box textAlign="justify">
          <Text
            fontSize={["14px", "14px", "14px", "14px", "14px", "24px"]}
            fontWeight="400"
            lineHeight="26px"
          >
            {art_info}
          </Text>
        </Box>
        <HStack
          flexDirection={["column", "column", "row", "row"]}
          spacing={["", "", "30px"]}
          alignItems="center"
          marginInlineStart="0"
        >
          <Box
            w={["", "", "100%", "", "280px", "390px"]}
            h={["", "", "", "", "120px", "155px"]}
          >
            <Image
              src={image}
              alt={data + "image"}
              w="100%"
              h="100%"
              objectFit="cover"
              objectPosition="right"
            />
          </Box>
          <Box
            w={["", "", "100%", "", "280px", "390px"]}
            h={["", "", "", "", "120px", "155px"]}
            pt={["20px", "", "0"]}
            display={["none", "none", "block"]}
          >
            <Image
              src={image}
              alt={data + "image"}
              w="100%"
              h="100%"
              objectFit="cover"
              objectPosition="bottom"
            />
          </Box>
        </HStack>
      </Flex>
      <Flex
        textTransform="uppercase"
        justifyContent="space-between"
        alignItems="center"
        pos="absolute"
        bottom="20px"
        w={[
          "calc(100% - 40px)",
          "",
          "calc(100% - 80px)",
          "",
          "calc(100% - 140px)",
          "calc(100% - 270px)",
        ]}
      >
        <NextLink href={prev()} passHref>
          <Link href="">
            <Image
              w={["30px", "", "", "", "24px", "45px"]}
              src="/L.png"
              alt="left_navigation"
            />
          </Link>
        </NextLink>
        <Text
          fontWeight="700"
          color="#0000007a"
          display={["none", "none", "block"]}
        >
          {" "}
          313.NET | ALL RIGHTS RESERVED©{" "}
        </Text>
        <NextLink href={next()} passHref>
          <Link href="">
            <Image
              onClick={() => console.log(next())}
              w={["30px", "", "", "", "24px", "45px"]}
              src="/R.png"
              alt="right_navigation"
            />
          </Link>
        </NextLink>
      </Flex>
    </Box>
  );
};

export default SubArts;

export async function getStaticPaths() {
  const paths = artInfo.map((data) => {
    return {
      params: { id: data.id },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const id = context.params.id;
  const data = artInfo.find((art) => art.id === id);
  return {
    // Passed to the page component as props
    props: { data },
  };
}
