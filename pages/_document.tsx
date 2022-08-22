// pages/_document.js

import NextDocument, { Head, Html, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="313™ — ART" />
            <meta
              name="description"
              content="We are an award-winning digital production studio based in
              Sweden specialising in CGI, Animation, Design and Retouching or
              dynamic levels 3D."
            />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="313™ — ART" />
            <meta property="og:url" content="https://313art.vercel.app" />
            <meta
              property="og:description"
              content="We are an award-winning digital production studio based in Sweden specialising in CGI, Animation, Design and Retouching or dynamic levels 3D."
            />
            <meta name="og:image" content="https://i.ibb.co/ZJvp6N0/Screenshot-from-2022-08-22-16-14-13.png" />
            {/* Twitter SEO */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:domain" content="313art.vercel.app" />
            <meta property="twitter:title" content='"313™ — ART' />
            <meta property="twitter:url" content="https://313art.vercel.app" />
            <meta
              property="twitter:description"
              content="We are an award-winning digital production studio based in Sweden specialising in CGI, Animation, Design and Retouching or dynamic levels 3D."
            />
            <meta name="og:image" content="https://i.ibb.co/ZJvp6N0/Screenshot-from-2022-08-22-16-14-13.png" />
        </Head>
        <body>
          {/* 👇 Here's the script */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
