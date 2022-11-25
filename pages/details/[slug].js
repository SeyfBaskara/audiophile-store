import React from 'react'
import contentfulClient from '../../utils/contentfulClient'
import Layout from '../../components/Layout/index'
import MenuWidget from '../../components/Widgets/MenuWidget'
import PosterCardWidget from '../../components/Widgets/PosterCardWidget'
import DisplayProductDetails from '../../components/ProductDetails/index'
import { useRouter } from 'next/router'

export async function getStaticPaths() {
   const { items: productDetails } = await contentfulClient.getEntries({
      content_type: 'productDetails',
   })

   const paths = productDetails.map((product) => {
      return {
         params: {
            slug: product.fields.slug,
         },
      }
   })

   return {
      paths,
      fallback: false,
   }
}

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
   const sharedWidgetFetch = contentfulClient.getEntries({
      content_type: 'sharedWidget',
   })
   const productDetailsFetch = contentfulClient.getEntries({
      content_type: 'productDetails',
   })
   const metaDataFetch = contentfulClient.getEntries({
      content_type: 'metaData',
   })

   const [header, footer, menuWidgetProduct, posterCard, productDetails, metaData] = await Promise.all([
      headerFetch,
      footerFetch,
      menuWidgetFetch,
      sharedWidgetFetch,
      productDetailsFetch,
      metaDataFetch,
   ])

   return {
      props: {
         header: header.items[0].fields,
         footer: footer.items[0].fields,
         menuWidgetProduct: menuWidgetProduct.items,
         posterCard: posterCard.items[0].fields,
         productDetails: productDetails.items,
         metaData: metaData.items,
      },
   }
}

const ProductDetails = ({ header, footer, menuWidgetProduct, posterCard, productDetails, metaData }) => {
   const router = useRouter()
   const { slug } = router.query
   const { fields: productDetail } = productDetails.find((product) => product.fields.slug === slug)
   const { fields: metaDataContent } = metaData.find((data) => data.fields.slug === slug)

   return (
      <Layout
         header={header}
         footer={footer}
         detailsPage={true}
         hamburgerMenu={menuWidgetProduct}
         metaData={metaDataContent}
      >
         <DisplayProductDetails productDetails={productDetail} />
         <MenuWidget menuWidgetProduct={menuWidgetProduct} />
         <PosterCardWidget posterCard={posterCard} />
      </Layout>
   )
}

export default ProductDetails
