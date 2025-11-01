import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="th">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-slate-50 text-slate-900 antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
