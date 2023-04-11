import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <link rel='icon' type='image/svg+xml' href='/logo.svg' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <title>Migas Accounting</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
