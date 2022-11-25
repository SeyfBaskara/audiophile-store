import Head from 'next/head'
import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import LightBox from './LightBox'

const Layout = ({ children, header, footer, headerName, detailsPage, hamburgerMenu, isCheckout, metaData }) => {
   const { title, description, keywords } = metaData
   return (
      <>
         <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content={description} />
            <meta name="keybords" content={keywords} />
            <title>{title}</title>
         </Head>

         <Header header={header} headerName={headerName} detailsPage={detailsPage} hamburgerMenu={hamburgerMenu} />
         <main className={`px-6 lg:px-24 ${isCheckout && 'bg-checkoutBg pb-10'} `}>{children}</main>
         <LightBox />
         <Footer footer={footer} />
      </>
   )
}

export default Layout
