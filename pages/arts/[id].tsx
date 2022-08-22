import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import { artInfo } from "../../data";

const SubArts = ({ data }: any) => {
  const {art_name, art_name_cut, artiste, art_info} = data
  return (
    <Box>
      <Box w='100%' pos='fixed'>
        <Navbar />
      </Box>
      <Box
        pt={["", "", "", "", "100px", "168px"]}
        mb={["", "", "", "", "38px", "46px"]}
          h={["", "", "", "", "620px", "610px"]}
          w="100%"
          pb="46px"
          overflow="hidden"
          >
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
          <Image
          mt='20px'
          zIndex='1'
            as={motion.img}
            src={data.image}
            alt="image"
            w="100%"
            h="100%"
            objectFit="cover"
            objectPosition="center"
            mb='60px'
          />
      </Box>
      <Text>
        {art_info}
      </Text>
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
