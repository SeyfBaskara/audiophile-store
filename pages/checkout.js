import React, { useState } from 'react'
import contentfulClient from '../utils/contentfulClient'
import Layout from '../components/Layout/index'
import Checkout from '../components/Checkout/Checkout'
import { useThemeContext } from '../context/ThemeContext'

export async function getStaticProps() {
   const headerFetch = contentfulClient.getEntries({
      content_type: 'header',
   })
   const footerFetch = contentfulClient.getEntries({
      content_type: 'footer',
   })
   const menuWidgetFetch = contentfulClient.getEntries({
      content_type: 'menuWidget',
   })

   const [header, footer, menuWidgetProduct] = await Promise.all([headerFetch, footerFetch, menuWidgetFetch])

   return {
      props: {
         header: header.items[0].fields,
         footer: footer.items[0].fields,
         menuWidgetProduct: menuWidgetProduct.items,
      },
   }
}

const CheckoutPage = ({ header, footer, menuWidgetProduct }) => {
   return (
      <Layout header={header} footer={footer} detailsPage={true} hamburgerMenu={menuWidgetProduct} isCheckout={true}>
         <>
            <Checkout />
         </>
      </Layout>
   )
}

export default CheckoutPage
