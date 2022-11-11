import React from 'react'
import contentfulClient from '../utils/contentfulClient'
import Layout from '../components/Layout/index'
import Forms from '../components/Checkout/Forms/index'
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

const Checkout = ({ header, footer, menuWidgetProduct }) => {
   const { pathName } = useThemeContext()

   return (
      <Layout header={header} footer={footer} detailsPage={true} hamburgerMenu={menuWidgetProduct}>
         <Forms pathName={pathName} />
      </Layout>
   )
}

export default Checkout
