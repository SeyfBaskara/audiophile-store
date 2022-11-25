import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
   return (
      <Html>
         <Head>
            <link rel="favicon icon" href="/favicon-32x32.png"></link>
         </Head>
         <body>
            <Main />
            <NextScript />
         </body>
      </Html>
   )
}
