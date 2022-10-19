import Head from 'next/head'
import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'

const Layout = ({ children, header, footer }) => {
   return (
      <>
         <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="page description will take a place" />
            <meta name="keybords" content="keybord tag will take a place" />
            <title>page title</title>
         </Head>

         <Header header={header} />
         <main className="px-6">{children}</main>
         <Footer footer={footer} />
      </>
   )
}

export default Layout
