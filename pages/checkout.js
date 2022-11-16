import React, { useState } from 'react'
import contentfulClient from '../utils/contentfulClient'
import Layout from '../components/Layout/index'
import CheckoutContent from '../components/Checkout/index'
import { useThemeContext } from '../context/ThemeContext'
import CheckoutModal from '../components/Checkout/CheckoutModal/CheckoutModal'

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
   const [isModalOpen, setIsModalOpen] = useState(false)
   const { pathName } = useThemeContext()

   return (
      <Layout header={header} footer={footer} detailsPage={true} hamburgerMenu={menuWidgetProduct} isCheckout={true}>
         <>
            <CheckoutContent pathName={pathName} setIsModalOpen={setIsModalOpen} />
            {isModalOpen && <CheckoutModal setIsModalOpen={setIsModalOpen} />}
         </>
      </Layout>
   )
}

export default Checkout
