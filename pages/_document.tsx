// pages/_document.js

import NextDocument, { Head, Html, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head/>
        <body>
          {/* 👇 Here's the script */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
