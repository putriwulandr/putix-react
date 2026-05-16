import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="h-full">
      <Head>
        <title>Putix UI</title>
        <meta name="description" content="by Putri Wulandari" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="min-h-full flex flex-col">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
