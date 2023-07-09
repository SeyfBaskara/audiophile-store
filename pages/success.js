import contentfulClient from '../utils/contentfulClient'
import Layout from '../components/Layout/index'
import SuccessModal from '../components/Checkout/CheckoutModal/SuccessModal'
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
   const { pathName, isModalOpen } = useThemeContext()
   const { fields } = metaData.find((data) => data.fields.slug === 'checkout')

   return (
      <Layout
         header={header}
         footer={footer}
         detailsPage={true}
         hamburgerMenu={menuWidgetProduct}
         isCheckout={true}
         metaData={fields}
      >
         <>
            <SuccessModal />
         </>
      </Layout>
   )
}

export default SuccessPage
