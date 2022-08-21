import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#FFFBF5",
        color: "black",
        bgImage: 'url("/BG.png")',
        px: ["unset", "unset", "unset", "unset", "70px", "135px"],
        py: ["unset", "unset", "unset", "unset", "30px", "40px"],
        maxW: "100%",
      },
    },
  },
  fonts: {
    heading: `"Bon Foyage Demo", sans-serif`,
    body: `"DM Sans","TT Hoves", sans-serif`,
  },
});
