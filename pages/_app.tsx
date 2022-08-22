import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";
import "../styles/globals.css";
import { theme } from "../theme";
import "@fontsource/dm-sans";
import Fonts from "../Fonts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence exitBeforeEnter>
      <ChakraProvider theme={theme}>
        {/* <Fonts /> */}
        <Component {...pageProps} />
      </ChakraProvider>
    </AnimatePresence>
  );
}

export default MyApp;
