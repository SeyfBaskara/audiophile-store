import contentfulClient from '../utils/contentfulClient'
import Layout from '../components/Layout/index'
import { useShoppingContext } from '../context/ShoppingCartContext'

import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

const SuccessModal = dynamic(() => import('../components/Checkout/CheckoutModal/SuccessModal'), { ssr: false })

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
   const metaDataFetch = contentfulClient.getEntries({
      content_type: 'metaData',
   })

   const [header, footer, menuWidgetProduct, metaData] = await Promise.all([
      headerFetch,
      footerFetch,
      menuWidgetFetch,
      metaDataFetch,
   ])

   return {
      props: {
         header: header.items[0].fields,
         footer: footer.items[0].fields,
         menuWidgetProduct: menuWidgetProduct.items,
         metaData: metaData.items,
      },
   }
}

const SuccessPage = ({ header, footer, menuWidgetProduct, metaData }) => {
   const { fields } = metaData.find((data) => data.fields.slug === 'checkout')

   const { purchasedCartItems } = useShoppingContext()
   const router = useRouter()

   useEffect(() => {
      if (purchasedCartItems.length === 0) {
         router.replace('/home')
      }
   }, [router, purchasedCartItems])

   return (
      <Layout header={header} footer={footer} detailsPage={true} hamburgerMenu={menuWidgetProduct} metaData={fields}>
         <>
            <SuccessModal />
         </>
      </Layout>
   )
}

export default SuccessPage
