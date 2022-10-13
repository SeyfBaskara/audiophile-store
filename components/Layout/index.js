import Head from 'next/head'
import React from 'react'

const Layout = ({ children }) => {
   return (
      <>
         <Head>
            <meta name="viewport" content="width=device-width, initial-scale-1" />
            <meta name="description" content="page description will take a place" />
            <meta name="keybords" content="keybord tag will take a place" />
            <tilte>page title</tilte>
         </Head>
         <main>{children}</main>
      </>
   )
}

export default Layout
