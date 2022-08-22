import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'Bon Foyage Demo';
        font-style: normal;
        font-display: swap;
        src: url('./fonts/Bon Foyage Demo.otf') format('otf');
      }
      @font-face {
        font-family: 'Bon Foyage Demo';
        font-style: normal;
        font-display: swap;
        src: url('./fonts/Bon Foyage Demo.ttf') format('truetype');
      }
      @font-face {
        font-family: 'Bon Foyage Demo';
        font-style: normal;
        font-display: swap;
        src: url('./fonts/Bon-Foyage-Demo.woff') format('woff');
      }
      `}
  />
);

export default Fonts;
