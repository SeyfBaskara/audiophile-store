import React from 'react'
import contentfulClient from '../utils/contentfulClient'
import Layout from '../components/Layout/index'
import Forms from '../components/Checkout/Forms/index'
import Summary from '../components/Checkout/Summary/Summary'
import { useThemeContext } from '../context/ThemeContext'
import { useShoppingContext } from '../context/ShoppingCartContext'

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

const Checkout = ({ header, footer, menuWidgetProduct }) => {
   const { pathName } = useThemeContext()
   const { cartItems } = useShoppingContext()

   return (
      <Layout header={header} footer={footer} detailsPage={true} hamburgerMenu={menuWidgetProduct}>
         <Forms pathName={pathName} />
         <Summary cartItems={cartItems} />
      </Layout>
   )
}

export default Checkout
