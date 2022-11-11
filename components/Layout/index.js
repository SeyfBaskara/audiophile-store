import Head from 'next/head'
import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import LightBox from './LightBox'

const Layout = ({ children, header, footer, headerName, detailsPage, hamburgerMenu, isCheckout }) => {
   return (
      <>
         <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="page description will take a place" />
            <meta name="keybords" content="keybord tag will take a place" />
            <title>page title</title>
         </Head>

         <Header header={header} headerName={headerName} detailsPage={detailsPage} hamburgerMenu={hamburgerMenu} />
         <main className={`px-6 lg:px-24 ${isCheckout && 'bg-checkoutBg pb-10'} `}>{children}</main>
         <LightBox />
         <Footer footer={footer} />
      </>
   )
}

export default Layout
