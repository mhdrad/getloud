import { Html, Head, Main, NextScript } from "next/document";

const MyDocument = () => {
  return (
    <Html lang="en">
      <Head>
        <link href="/favicon.ico" rel="shortcut icon" />

        {/* google fonts go here */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Noto+Sans+Mono&display=swap"
        />
      </Head>
      <body className="bg-black text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
