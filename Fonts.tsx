import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'Bon Foyage';
        font-style: normal;
        font-display: swap;
        src: url('./fonts/Bon Foyage Demo.otf') format('otf');
      }
      `}
  />
);

export default Fonts;
