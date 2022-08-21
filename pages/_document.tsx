// pages/_document.js

import NextDocument, { Head, Html, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Web SEO */}
          <meta name="description" content="DRÅQ™ — FOLIO" />
          <meta
            name="description"
            content="Front End Developer based in Lagos, Nigeria focused on creating expressive and interactive  experiences on the web"
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="DRÅQ™ — FOLIO" />
          <meta property="og:url" content="https://draq-io.vercel.app" />
          <meta
            property="og:description"
            content="Front End Developer based in Lagos, Nigeria focused on creating expressive and interactive  experiences on the web"
          />
          <meta name="og:image" content="https://i.ibb.co/2MCh1YY/SEO.png" />
          {/* Twitter SEO */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="draq-io.vercel.app" />
          <meta property="twitter:title" content='"DRÅQ™ — FOLIO' />
          <meta property="twitter:url" content="https://draq-io.vercel.app" />
          <meta
            property="twitter:description"
            content="Front End Developer based in Lagos, Nigeria focused on creating expressive and interactive  experiences on the web"
          />
          <meta name="og:image" content="https://i.ibb.co/2MCh1YY/SEO.png" />
          <link rel="icon" href="/icons8-tiger-doodle-96.png" />
          <link
            href="https://fonts.cdnfonts.com/s/19595/MonumentExtended-Regular.woff"
            rel="preload"
            as="font"
            type="font/woff"
          />
          <link
            href="https://fonts.cdnfonts.com/s/19595/MonumentExtended-Ultrabold.woff"
            rel="preload"
            as="font"
            type="font/woff"
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta name="theme-color" content="#fff" />
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
